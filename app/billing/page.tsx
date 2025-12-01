"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { toast } from "sonner"
import styles from "./billing.module.css"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface Plan {
  name: string
  price: number
  period: string
  features: string[]
  id: "monthly" | "yearly"
}

const PLANS: Plan[] = [
  {
    name: "Monthly",
    price: 2,
    period: "month",
    id: "monthly",
    features: ["Save up to 5 ZIP folders", "Extract unlimited files", "Unlimited downloads", "Share files with PIN"],
  },
  {
    name: "Yearly",
    price: 499,
    period: "year",
    id: "yearly",
    features: [
      "Save up to 15 ZIP folders",
      "Extract unlimited files",
      "Unlimited downloads",
      "Share files with PIN",
      "Best value - Save 15%",
    ],
  },
]

export default function BillingPage() {
  const { data: session, status, update } = useSession()
  const router = useRouter()

  const [currentPlan, setCurrentPlan] = useState<string>("free")
  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login")
  }, [status, router])

  // Fetch subscription plan from DB
  useEffect(() => {
    if (!session?.user) return

    const fetchUserPlan = async () => {
      try {
        const response = await fetch("/api/user/stats")
        const data = await response.json()
        if (data.success) {
          setCurrentPlan(data.stats.subscriptionPlan || "free")
        }
      } catch (error) {
        console.error("Failed to fetch plan:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserPlan()
  }, [session])

  // Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const renderPlanName = (plan: string) => {
    return plan === "monthly" ? "Monthly" : plan === "yearly" ? "Yearly" : "Free"
  }

  const handleUpgrade = async (planId: "monthly" | "yearly") => {
    if (!session?.user?.email) {
      toast.error("Please sign in first")
      return
    }

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    if (!razorpayKey) {
      console.error("❌ Missing Razorpay key")
      toast.error("Payment system not configured")
      return
    }

    setIsProcessing(true)

    try {
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        toast.error(orderData.error || "Failed to create order")
        return
      }

      console.log("Order Created:", orderData.orderId)

      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,

        handler: async (response: any) => {
          try {
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: orderData.orderId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyResponse.ok) {
              toast.success(`Subscription upgraded to ${planId}`)

              // 🔥 Immediate UI update
              setCurrentPlan(planId)

              // 🔥 Refresh NextAuth session (CRITICAL FIX)
              await update({ subscriptionPlan: planId })

              setTimeout(() => router.push("/dashboard"), 1500)
            } else {
              toast.error(verifyData.error || "Verification failed")
            }
          } catch (error) {
            console.error("Verification error:", error)
            toast.error("Payment verification failed")
          }
        },

        prefill: {
          name: session.user.name,
          email: session.user.email,
        },
      }

      if (window.Razorpay) {
        new window.Razorpay(options).open()
      } else {
        toast.error("Razorpay failed to load")
      }
    } catch (error) {
      console.error("Unexpected error:", error)
      toast.error("Upgrade failed")
    } finally {
      setIsProcessing(false)
    }
  }

  if (status === "loading" || isLoading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (!session?.user) return null

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>{session.user.name?.charAt(0).toUpperCase()}</div>
          <div className={styles.userDetails}>
            <h2 className={styles.userName}>{session.user.name}</h2>
            <p className={styles.userEmail}>{session.user.email}</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navItem}>Dashboard</Link>
          <Link href="/billing" className={`${styles.navItem} ${styles.active}`}>Billing</Link>
          <Link href="/" className={styles.navItem}>Back to Explorer</Link>
        </nav>
      </div>

      {/* Main */}
      <main className={styles.content}>
        <h1 className={styles.title}>Billing & Plans</h1>

        <div className={styles.currentPlan}>
          <p className={styles.label}>Current Plan</p>
          <h2 className={styles.planName}>{renderPlanName(currentPlan)}</h2>
        </div>

        <div className={styles.plansGrid}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.planCard} ${currentPlan === plan.id ? styles.currentPlanCard : ""}`}
            >
              <h3 className={styles.planCardTitle}>{plan.name}</h3>

              <div className={styles.priceSection}>
                <span className={styles.price}>₹{plan.price}</span>
                <span className={styles.period}>/{plan.period}</span>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>✓ {f}</li>
                ))}
              </ul>

              <button
                className={styles.upgradeBtn}
                onClick={() => handleUpgrade(plan.id)}
                disabled={isProcessing || currentPlan === plan.id}
              >
                {currentPlan === plan.id ? "Current Plan" : isProcessing ? "Processing..." : "Upgrade Now"}
              </button>
            </div>
          ))}
        </div>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h4>Can I cancel anytime?</h4>
            <p>You retain access until the end of the billing period.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>What payment methods do you accept?</h4>
            <p>UPI, cards, wallets through Razorpay.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Can I switch plans?</h4>
            <p>Yes, anytime.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
