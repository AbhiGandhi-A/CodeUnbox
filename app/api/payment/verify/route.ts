// /api/payment/verify
import { connectToDatabase } from "@/lib/mongodb" // Use your consistent MongoDB connection utility
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import crypto from "crypto"
import { ObjectId } from "mongodb"

// Assuming connectToDatabase returns { db: Db } and ObjectId is available

export async function POST(request: NextRequest) {
  try {
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

    if (!RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { success: false, error: "Payment server misconfigured" },
        { status: 500 }
      )
    }

    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    // Capture the names sent from the client
    const { 
        razorpay_order_id: orderId, 
        razorpay_payment_id: paymentId, 
        razorpay_signature: signature,
        plan, 
        userId 
    } = await request.json()

    if (!orderId || !paymentId || !signature || !plan || !userId) {
         return NextResponse.json(
            { success: false, error: "Missing required verification data (orderId, paymentId, signature, plan, or userId)." },
            { status: 400 }
        )
    }
    
    // --- 1. Signature Verification ---
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET as string) 
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { success: false, error: "Payment verification failed: Invalid signature." },
        { status: 400 }
      )
    }
    
    // --- 2. Database Updates ---
    const { db } = await connectToDatabase()

    // 2a. Update Order status
    // Fetch the order first to get details and verify ownership if necessary
    const order = await db.collection("orders").findOne({ orderId, userId: session.user.id })
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found or ownership mismatch." }, { status: 404 })
    }

    await db.collection("orders").updateOne(
      { orderId },
      {
        $set: {
          status: "verified",
          paymentId,
          verifiedAt: new Date(),
        },
      }
    )

    // Calculate subscription expiry
    const expiry = new Date()
    if (order.plan === "monthly") expiry.setMonth(expiry.getMonth() + 1)
    else expiry.setFullYear(expiry.getFullYear() + 1)

    // 2b. Update user's subscription in the database (using session.user.id which is an ObjectId)
    const updateResult = await db.collection("users").findOneAndUpdate(
      { _id: new ObjectId(session.user.id) },
      {
        $set: {
          subscriptionPlan: plan, 
          subscriptionExpiry: expiry,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' } 
    )
    
    if (!updateResult.value) {
        return NextResponse.json(
            { success: false, error: "Payment verified, but failed to update user record." },
            { status: 404 }
        )
    }

    // Return the necessary data to the client to update the NextAuth session
    const updatedUser = updateResult.value
    const clientUser = {
        id: updatedUser._id.toHexString(), 
        name: updatedUser.name, 
        email: updatedUser.email, 
        plan: updatedUser.subscriptionPlan, 
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      user: clientUser, // Key payload for client update
    })
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ success: false, error: "Verification failed due to a server error" }, { status: 500 })
  }
}