import crypto from "crypto"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"     // ✅ Only this import
import { authOptions } from "@/lib/auth-config"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const { orderId, paymentId, signature } = await req.json()

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { error: "Signature mismatch" },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()

    const order = await db.collection("orders").findOne({ orderId })
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // EXPIRY
    const expiry = new Date()
    if (order.plan === "monthly") expiry.setMonth(expiry.getMonth() + 1)
    else expiry.setFullYear(expiry.getFullYear() + 1)

    // UPDATE USER
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

    // UPDATE ORDER
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

    return NextResponse.json({
      success: true,
      plan: order.plan,
    })
  } catch (err) {
    console.error("Verify error:", err)
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    )
  }
}
