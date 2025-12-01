import { connectToDatabase } from "@/lib/mongodb" // Assumes this path is correct
import bcrypt from "bcryptjs"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()
    const existingUser = await db.collection("users").findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Ensure password meets basic security standards before hashing
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      name,
      subscriptionPlan: "free", // Default plan
      savedZipsCount: 0,
      totalDownloads: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      userId: result.insertedId,
    })
  } catch (error) {
    console.error("Registration POST error:", error)
    return NextResponse.json({ error: "Registration failed due to server error" }, { status: 500 })
  }
}