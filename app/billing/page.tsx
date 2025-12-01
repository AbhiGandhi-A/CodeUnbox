"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { toast } from "sonner"
import styles from "./billing.module.css" // Assuming styles are external

declare global {
  interface Window {
    Razorpay: any // Ensure Razorpay is globally available
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
    // Price should match the API in smallest unit (e.g., ₹1.00 for testing)
    price: 1, 
    period: "month",
    id: "monthly",
    features: ["Save up to 5 ZIP folders", "Extract unlimited files", "Unlimited downloads", "Share files with PIN"],
  },
  {
    name: "Yearly",
    // Price should match the API (e.g., ₹499.00)
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
  // Use the update function for session refresh after payment
  const { data: session, status, update } = useSession()
  const router = useRouter()

  const [currentPlan, setCurrentPlan] = useState<string>("free")
  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login")
  }, [status, router])

  // Fetch current subscription from API on load
  useEffect(() => {
    if (!session?.user) return

    const fetchUserPlan = async () => {
      try {
        // This API call fetches the subscriptionPlan directly from the database
        // Assumes /api/user/stats returns { success: true, stats: { subscriptionPlan: '...' } }
        const response = await fetch("/api/user/stats")
        const data = await response.json()
        if (data.success) {
          // 💡 This line ensures the component state reflects the database value
          setCurrentPlan(data.stats.subscriptionPlan || "free")
        } else {
          toast.error("Failed to load user plan.")
        }
      } catch (err) {
        console.error("Failed to fetch plan:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserPlan()
  }, [session]) // Runs on component mount and whenever session changes

  // Load Razorpay script once
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  // Helper function to render plan name
  const renderPlanName = (plan: string) => {
    switch (plan) {
      case "monthly":
        return "Monthly"
      case "yearly":
        return "Yearly"
      case "free":
      default:
        return "Free"
    }
  }

  const handleUpgrade = async (planId: "monthly" | "yearly") => {
    if (!session?.user?.email) {
      toast.error("Please sign in first")
      return
    }

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    if (!razorpayKey) {
      console.error("❌ Missing NEXT_PUBLIC_RAZORPAY_KEY_ID")
      toast.error("Payment system configuration error")
      return
    }

    setIsProcessing(true)

    try {
      // 1. Create Razorpay Order via API
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        console.error("API Error creating order:", orderData.error)
        toast.error(orderData.error || "Failed to create order")
        return
      }

      console.log("Order Created:", orderData.orderId)

      // 2. Razorpay Checkout Options
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,

        // 3. Handle successful payment
        handler: async (response: any) => {
          try {
            // Call verification API on the server
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
              toast.success(`Subscription upgraded to ${planId.charAt(0).toUpperCase() + planId.slice(1)}!`)
              
              // 1. Update local state immediately
              setCurrentPlan(planId)

              // 2. Refresh the NextAuth session to update the JWT/Session
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
        
        // Handle payment failure (optional but recommended)
        modal: {
            ondismiss: () => {
                toast.info("Payment window closed.")
            }
        },

        prefill: {
          name: session.user.name,
          email: session.user.email,
        },
      }

      // 4. Open Razorpay Checkout
      if (window.Razorpay) {
        const rzp = new window.Razorpay(options)
        rzp.open()
      } else {
        toast.error("Razorpay failed to load. Please try again.")
      }
    } catch (err) {
      console.error("Unexpected error:", err)
      toast.error("Upgrade process failed")
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

      {/* Main Content */}
      <main className={styles.content}>
        <h1 className={styles.title}>Billing & Plans 💳</h1>

        <div className={styles.currentPlan}>
          <p className={styles.label}>Current Plan</p>
          <h2 className={styles.planName}>
            {renderPlanName(currentPlan)}
          </h2>
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
            <p>
              Yes, cancel anytime — you retain access until the end of your billing period.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>What payment methods do you accept?</h4>
            <p>All debit cards, credit cards, UPI, wallets through Razorpay.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Can I switch plans?</h4>
            <p>Yes, upgrades and downgrades are supported anytime.</p>
          </div>
        </section>
      </main>
    </div>
  )
}