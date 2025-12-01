import { AuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "@/lib/mongodb" 
import bcrypt from "bcryptjs"
import { ObjectId } from "mongodb" 

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null
        }
        // 🌟 FIX: Normalize incoming login email to lowercase
        const email = String(credentials.email).toLowerCase()
        const { password } = credentials

        try {
          const { db } = await connectToDatabase()
          // Search using the normalized lowercase email
          const user = await db.collection("users").findOne({ email })

          if (!user) {
            console.error("LOGIN FAIL: User not found for email:", email)
            throw new Error("Invalid credentials") 
          }

          const isValid = await bcrypt.compare(password, user.password)
          
          if (!isValid) {
            console.error("LOGIN FAIL: Invalid password for email:", email)
            throw new Error("Invalid credentials")
          }
          
          return {
            id: user._id.toString(),
            name: user.name as string,
            email: user.email as string, 
            subscriptionPlan: user.subscriptionPlan || "free", 
          } as User
        } catch (e) {
          console.error("Error during authorization:", e)
          throw new Error("Invalid credentials") 
        }
      },
    }),
  ],
  
  pages: {
    signIn: "/register",
    error: "/register", // Changed from /login to /register for consistency with flow
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.subscriptionPlan = (user as User).subscriptionPlan
      }
      if (trigger === "update" && session && (session as { subscriptionPlan?: string }).subscriptionPlan) {
        token.subscriptionPlan = (session as { subscriptionPlan: string }).subscriptionPlan
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = token.id
        // @ts-ignore
        session.user.subscriptionPlan = token.subscriptionPlan
      }
      return session
    },
  },
}