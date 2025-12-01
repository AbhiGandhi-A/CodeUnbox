import { connectToDatabase } from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import Razorpay from "razorpay"

export async function POST(request: NextRequest) {
  try {
    // Get keys from environment variables
    const RAZORPAY_KEY_ID =
      process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay keys")
      return NextResponse.json(
        { error: "Payment system misconfigured" },
        { status: 500 }
      )
    }

    // Authentication check
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { plan } = await request.json()

    // Define plans and amounts (in the smallest currency unit, e.g., paise for INR)
    const plans: any = {
      monthly: { amount: 100, period: "month" }, // ₹1.00 for testing
      yearly: { amount: 49900, period: "year" }, // ₹499.00
    }

    if (!plans[plan]) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 })
    }

    // Initialize Razorpay client
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    })

    // 🔥 FIXED: Razorpay max 40 chars for receipt
    // Creating a unique receipt ID
    const receiptId = `ord_${session.user.id.slice(-6)}_${Date.now().toString().slice(-6)}`

    // Create a Razorpay Order
    const order = await razorpay.orders.create({
      amount: plans[plan].amount,
      currency: "INR",
      receipt: receiptId,
      // Optional: metadata can be useful for linking the order later
      notes: {
        userId: session.user.id,
        plan: plan,
      },
    })

    // Save order details to your database
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

    // Send order details back to the client
    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error: any) {
    console.error("❌ Order creation failed:", error)

    // Check for specific Razorpay errors
    const errorDesc = error?.error?.description || "Failed to create order"
    return NextResponse.json(
      { error: errorDesc },
      { status: 500 }
    )
  }
}