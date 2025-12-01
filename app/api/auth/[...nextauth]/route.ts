import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth-config" // Ensure this path is correct

// Initialize NextAuth with your configuration
const handler = NextAuth(authOptions)

// Export the handler for both GET and POST requests
// This catch-all route handles /api/auth/* requests (e.g., signin, callback)
export { handler as GET, handler as POST }