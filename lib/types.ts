// types/index.ts

import type { Session } from "next-auth"

export type SubscriptionPlan = "free" | "monthly" | "yearly"

export interface ExtendedSession extends Session {
  user: {
    id: string
    email?: string | null
    name?: string | null
    image?: string | null
    subscriptionPlan: SubscriptionPlan
  }
}

export interface UserDoc {
  _id: string
  email: string
  name: string
  password: string
  subscriptionPlan: SubscriptionPlan
  subscriptionExpiry?: Date
  savedZipsCount: number
  totalDownloads: number
  createdAt: Date
  updatedAt: Date
}

export interface SharedPin {
  _id: string
  pin: string
  userId: string
  files: Array<{
    path: string
    content: string
    name: string
  }>
  expiresAt: Date
  createdAt: Date
}

export interface SavedZip {
  _id: string
  userId: string
  name: string
  blobUrl: string
  fileCount: number
  createdAt: Date
  updatedAt: Date
}

export type UserTier = "anonymous" | "free" | "monthly" | "yearly"