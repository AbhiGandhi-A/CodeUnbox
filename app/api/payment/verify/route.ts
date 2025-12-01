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
        { error: "Payment server misconfigured" },
        { status: 500 }
      )
    }

    // Authentication check (ensure user is logged in)
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { orderId, paymentId, signature } = await request.json()

    // 1. Signature verification (Hashed with HMAC-SHA256)
    const expected = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    if (expected !== signature) {
      return NextResponse.json(
        { error: "Payment verification failed: Invalid Signature" },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()

    // 2. Fetch order details from your database
    const order = await db.collection("orders").findOne({ orderId })
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }
    
    // Prevent double-processing
    if (order.status === "verified") {
      return NextResponse.json({ success: true, message: "Order already verified" }, { status: 200 })
    }

    // 3. Update order status in your database
    await db.collection("orders").updateOne(
      { orderId },
      {
        $set: {
          status: "verified",
          paymentId,
          signature,
          verifiedAt: new Date(),
        },
      }
    )

    // 4. Calculate subscription expiry
    const expiry = new Date()
    if (order.plan === "monthly") expiry.setMonth(expiry.getMonth() + 1)
    else if (order.plan === "yearly") expiry.setFullYear(expiry.getFullYear() + 1)
    // No else needed since we validated the plan in create-order

    // 5. Update user's subscription in the database
    await db.collection("users").updateOne(
      { _id: new ObjectId(session.user.id) },
      {
        $set: {
          subscriptionPlan: order.plan,
          subscriptionExpiry: expiry,
          updatedAt: new Date(),
        },
      }
    )

    return NextResponse.json({
      success: true,
      message: "Payment verified and subscription activated",
      plan: order.plan,
    })
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}