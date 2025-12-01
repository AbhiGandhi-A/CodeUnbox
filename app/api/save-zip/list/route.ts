import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const { db } = await connectToDatabase()
    const savedZips = await db
      .collection("saved_zips")
      .find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({
      success: true,
      savedZips,
    })
  } catch (error) {
    console.error("List saved ZIPs error:", error)
    return NextResponse.json({ error: "Failed to fetch saved ZIPs" }, { status: 500 })
  }
}
