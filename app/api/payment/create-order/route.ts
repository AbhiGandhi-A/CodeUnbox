import { connectToDatabase } from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import Razorpay from "razorpay"

export async function POST(request: NextRequest) {
  try {
    // Rely on private keys for server-side operations
    const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay keys")
      return NextResponse.json(
        { error: "Payment system misconfigured" },
        { status: 500 }
      )
    }

    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { plan } = await request.json()

    // Amounts should be in the smallest currency unit (paise for INR)
    const plans: any = {
      monthly: { amount: 200, period: "month" }, // Assuming ₹2 is 200 paise
      yearly: { amount: 49900, period: "year" }, // Assuming ₹499 is 49900 paise
    }

    if (!plans[plan]) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 })
    }

    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    })

    // Fixed: Razorpay max 40 chars
    const receiptId = `ord_${session.user.id.slice(-6)}_${Date.now().toString().slice(-6)}`

    const order = await razorpay.orders.create({
      amount: plans[plan].amount,
      currency: "INR",
      receipt: receiptId,
    })

    const { db } = await connectToDatabase()

    await db.collection("orders").insertOne({
      orderId: order.id,
      receiptId,
      userId: session.user.id,
      email: session.user.email,
      plan,
      amount: plans[plan].amount,
      status: "created",
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error: any) {
    console.error("❌ Order creation failed:", error)

    return NextResponse.json(
      { error: error?.error?.description || "Failed to create order" },
      { status: 500 }
    )
  }
}