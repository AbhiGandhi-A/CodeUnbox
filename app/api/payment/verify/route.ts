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

    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { orderId, paymentId, signature } = await request.json()

    // Signature verification
    const expected = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET as string) // Assert type for Hmac function
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    if (expected !== signature) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()

    // Fetch order details
    const order = await db.collection("orders").findOne({ orderId })
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // Update order status
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

    // Update user's subscription in the database
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
      message: "Payment verified",
      plan: order.plan,
    })
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}