"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./dashboard.module.css"

interface UserStats {
  savedZipsCount: number
  totalDownloads: number
  subscriptionPlan: "free" | "monthly" | "yearly"
  subscriptionExpiry?: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/user/stats")
        const data = await response.json()
        if (data.success) {
          setStats(data.stats)
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (session?.user) {
      fetchStats()
    }
  }, [session])

  if (status === "loading" || isLoading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (!session?.user) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>{session.user.name?.charAt(0).toUpperCase()}</div>
          <div className={styles.userDetails}>
            <h2 className={styles.userName}>{session.user.name}</h2>
            <p className={styles.userEmail}>{session.user.email}</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navItem + " " + styles.active}>
            Dashboard
          </Link>
          <Link href="/billing" className={styles.navItem}>
            Billing
          </Link>
          <Link href="/" className={styles.navItem}>
            Back to Explorer
          </Link>
        </nav>

        <button className={styles.logoutBtn} onClick={() => signOut()}>
          Sign Out
        </button>
      </div>

      <main className={styles.content}>
        <h1 className={styles.title}>Dashboard</h1>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Plan</h3>
            <p className={styles.statValue}>
              {stats?.subscriptionPlan === "free"
                ? "Free"
                : stats?.subscriptionPlan === "monthly"
                  ? "Monthly"
                  : "Yearly"}
            </p>
            {stats?.subscriptionPlan !== "free" && stats?.subscriptionExpiry && (
              <p className={styles.statMeta}>Expires: {new Date(stats.subscriptionExpiry).toLocaleDateString()}</p>
            )}
          </div>

          <div className={styles.statCard}>
            <h3>Saved ZIPs</h3>
            <p className={styles.statValue}>{stats?.savedZipsCount || 0}</p>
            <p className={styles.statMeta}>
              {stats?.subscriptionPlan === "monthly"
                ? "Max: 5"
                : stats?.subscriptionPlan === "yearly"
                  ? "Max: 15"
                  : "Upgrade to save"}
            </p>
          </div>

          <div className={styles.statCard}>
            <h3>Total Downloads</h3>
            <p className={styles.statValue}>{stats?.totalDownloads || 0}</p>
            <p className={styles.statMeta}>Lifetime</p>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Features by Plan</h2>
          <div className={styles.featureTable}>
            {/* NEW HEADER ROW */}
            <div className={styles.featureHeaderRow}>
              <span className={styles.featureName}>Feature</span>
              <span className={styles.headerCell}>Anonymous</span>
              <span className={styles.headerCell}>Free</span>
              <span className={styles.headerCell}>Monthly</span>
              <span className={styles.headerCell}>Yearly</span>
            </div>
            {/* END NEW HEADER ROW */}

            <div className={styles.featureRow}>
              <span className={styles.featureName}>Max Files per ZIP</span>
              <span>100</span>
              <span>200</span>
              <span>Unlimited</span>
              <span>Unlimited</span>
            </div>
            <div className={styles.featureRow}>
              <span className={styles.featureName}>Individual Downloads</span>
              <span>✗</span>
              <span>Yes (10/session)</span>
              <span>Unlimited</span>
              <span>Unlimited</span>
            </div>
            <div className={styles.featureRow}>
              <span className={styles.featureName}>Save ZIP Folders</span>
              <span>✗</span>
              <span>✗</span>
              <span>5</span>
              <span>15</span>
            </div>
            <div className={styles.featureRow}>
              <span className={styles.featureName}>Share with PIN</span>
              <span>✗</span>
              <span>Yes</span>
              <span>Yes</span>
              <span>Yes</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}