import { AuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "@/lib/mongodb" 
import bcrypt from "bcryptjs"
import { ObjectId } from "mongodb" 

// Note: Relying on the global 'User' type extended in next-auth.d.ts

// Define the NextAuth options object
export const authOptions: AuthOptions = {
  // Use session strategy based on JWT (standard for stateless serverless functions)
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
      // Explicitly define the return type as User | null (using the globally extended type)
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null
        }
        const { email, password } = credentials

        try {
          const { db } = await connectToDatabase()
          const user = await db.collection("users").findOne({ email })

          if (!user) {
            console.error("Login failed: User not found for email:", email)
            throw new Error("Invalid credentials") 
          }

          const isValid = await bcrypt.compare(password, user.password)
          
          if (!isValid) {
            console.error("Login failed: Invalid password for email:", email)
            throw new Error("Invalid credentials")
          }
          
          // Return an object that matches the ExtendedUser interface structure.
          return {
            id: user._id.toString(), // Must be a string
            name: user.name as string, // Cast to string if needed
            email: user.email as string, // Cast to string if needed
            // 💡 FIX 4: Use 'subscriptionPlan' instead of 'tier'
            subscriptionPlan: user.subscriptionPlan || "free", 
          } as User
        } catch (e) {
          console.error("Error during authorization:", e)
          throw new Error("Invalid credentials") 
        }
      },
    }),
  ],
  
  // Custom pages configuration to handle redirects
  pages: {
    signIn: "/login",
    error: "/login", 
  },

  callbacks: {
    // Add custom properties (id, subscriptionPlan) to the JWT
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        // 💡 FIX 5: Use 'subscriptionPlan' instead of 'tier'
        token.subscriptionPlan = (user as User).subscriptionPlan
      }

      // 💡 FIX 6: Handle session refresh triggered by update() call from client
      if (trigger === "update" && session && (session as { subscriptionPlan?: string }).subscriptionPlan) {
        // Update the token's subscriptionPlan with the new value from the update() payload
        token.subscriptionPlan = (session as { subscriptionPlan: string }).subscriptionPlan
      }
      return token
    },
    // Add custom properties (id, subscriptionPlan) to the session object exposed on the client
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore: Add custom properties to session.user
        session.user.id = token.id
        // 💡 FIX 7: Use 'subscriptionPlan' instead of 'tier'
        // @ts-ignore: Access token.subscriptionPlan
        session.user.subscriptionPlan = token.subscriptionPlan
      }
      return session
    },
  },
}