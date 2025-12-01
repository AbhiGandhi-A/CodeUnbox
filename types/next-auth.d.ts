import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

// Extend the User type to include the 'id' and 'subscriptionPlan' properties
declare module "next-auth" {
  /**
   * Returned by useSession, getSession and received as a prop on the SessionProvider
   */
  interface Session {
    user: {
      id: string // Add the 'id' property here
      subscriptionPlan: "free" | "monthly" | "yearly" | "anonymous" // Add custom property
    } & DefaultSession["user"]
  }

  // Extend the User object (used in the database and adapter)
  interface User extends DefaultUser {
    id: string
    subscriptionPlan: "free" | "monthly" | "yearly" | "anonymous"
  }
}