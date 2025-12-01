import { connectToDatabase } from "@/lib/mongodb" 
import bcrypt from "bcryptjs"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password, name } = body
    
    // 🌟 FIX: Normalize email to lowercase for consistent storage and searching
    const email = body.email ? String(body.email).toLowerCase() : body.email

    // DIAGNOSTIC LOGGING: Check what the server receives
    console.log("Received registration request body:", { name, email, password: password ? '[PRESENT]' : '[MISSING]' })

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()
    // Search using the normalized lowercase email
    const existingUser = await db.collection("users").findOne({ email }) 

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await db.collection("users").insertOne({
      email, // Storing the normalized lowercase email
      password: hashedPassword,
      name,
      subscriptionPlan: "free",
      savedZipsCount: 0,
      totalDownloads: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      userId: "Registration successful", // Can't send insertedId without importing it
    })
  } catch (error) {
    console.error("Registration POST error:", error)
    return NextResponse.json({ error: "Registration failed due to server error" }, { status: 500 })
  }
}