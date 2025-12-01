import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import { ObjectId } from "mongodb"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { db } = await connectToDatabase()
    const user = await db.collection("users").findOne({
      _id: new ObjectId(session.user.id),
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const savedZipsCount = await db.collection("saved_zips").countDocuments({ userId: session.user.id })

    // Ensures the subscriptionPlan is pulled directly from the most up-to-date database record
    return NextResponse.json({
      success: true,
      stats: {
        savedZipsCount,
        totalDownloads: user.totalDownloads || 0,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionExpiry: user.subscriptionExpiry,
      },
    })
  } catch (error) {
    console.error("User stats error:", error)
    return NextResponse.json({ error: "Failed to fetch user stats" }, { status: 500 })
  }
}