// next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

// Extend the Session object
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      subscriptionPlan: "free" | "monthly" | "yearly" | "anonymous"
    } & DefaultSession["user"]
  }

  // Extend the User object (used in the database and adapter)
  interface User extends DefaultUser {
    id: string
    subscriptionPlan: "free" | "monthly" | "yearly" | "anonymous"
  }
}