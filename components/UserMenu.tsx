"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import styles from "./UserMenu.module.css"

export function UserMenu() {
  const { data: session, status } = useSession()
  const [showMenu, setShowMenu] = useState(false)

  // Determine userTier based on session data
  let userTier: "anonymous" | "free" | "monthly" | "yearly" = "anonymous";

  if (status === "authenticated" && session?.user) {
    // Use the actual subscriptionPlan from the session, defaulting to 'free' if not set
    const plan = session.user.subscriptionPlan || "free";
    // Ensure the tier is one of the expected values
    if (["free", "monthly", "yearly"].includes(plan)) {
      userTier = plan as "free" | "monthly" | "yearly";
    } else {
      userTier = "free"; // Fallback to 'free' for unknown or invalid plans
    }
  }

  // Display nothing while loading the session
  if (status === "loading") {
    return null
  }

  // Display Sign In link if not authenticated
  if (!session) {
    return (
      <Link href="/register" className={styles.loginBtn}>
        Sign In
      </Link>
    )
  }

  // Display User Menu if authenticated
  return (
    <div className={styles.userMenu}>
      <button className={styles.userBtn} onClick={() => setShowMenu(!showMenu)}>
        👤 {session.user?.name || "User"}
      </button>

      {showMenu && (
        <div className={styles.dropdown}>
          <Link href="/dashboard" className={styles.menuItem}>
            Dashboard
          </Link>
          <Link href="/billing" className={styles.menuItem}>
            Billing ({userTier})
          </Link>
          <button className={styles.menuItem} onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}