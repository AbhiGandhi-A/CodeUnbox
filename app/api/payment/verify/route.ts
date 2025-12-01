// /api/payment/verify
import { connectToDatabase } from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import crypto from "crypto"
import { ObjectId } from "mongodb"

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

    // Use the names sent from the client component (fixed in BillingPage.tsx)
    const { 
        razorpay_order_id: orderId, 
        razorpay_payment_id: paymentId, 
        razorpay_signature: signature,
        plan, // The expected plan from client
        userId // The user ID from client
    } = await request.json()

    if (!orderId || !paymentId || !signature || !plan || !userId) {
         return NextResponse.json(
            { success: false, error: "Missing required verification data." },
            { status: 400 }
        )
    }
    
    // --- Step 1: Signature Verification ---
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
    
    // --- Step 2: Database Updates ---
    const { db } = await connectToDatabase()

    // 1. Update Order status
    await db.collection("orders").updateOne(
      { orderId, userId }, // Find order for this user
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
    if (plan === "monthly") expiry.setMonth(expiry.getMonth() + 1)
    else expiry.setFullYear(expiry.getFullYear() + 1)

    // 2. Update user's subscription in the database
    const updateResult = await db.collection("users").findOneAndUpdate(
      { _id: new ObjectId(userId) },
      {
        $set: {
          subscriptionPlan: plan, // The field used in your database
          subscriptionExpiry: expiry,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' } // Get the updated document
    )
    
    // Ensure user update was successful
    if (!updateResult.value) {
        return NextResponse.json(
            { success: false, error: "Payment verified, but failed to update user record." },
            { status: 404 }
        )
    }

    // Return the updated plan to the client for session update
    const updatedUser = updateResult.value
    const clientUser = {
        id: updatedUser._id.toHexString(), 
        name: updatedUser.name, // Assuming name and email are on the user object
        email: updatedUser.email, 
        plan: updatedUser.subscriptionPlan, // The updated plan
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      user: clientUser,
    })
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ success: false, error: "Verification failed due to a server error" }, { status: 500 })
  }
}