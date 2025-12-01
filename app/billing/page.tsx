"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
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
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  
  const [isProcessing, setIsProcessing] = useState(false)

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login")
  }, [status, router])

  // --- 1. Fetch current subscription from API on load ---
  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id) return

    if (session.user.subscriptionPlan && session.user.subscriptionPlan !== "anonymous") {
      setCurrentPlan(session.user.subscriptionPlan)
      setIsDataLoading(false)
    }
    
    const fetchUserPlan = async () => {
      try {
        const response = await fetch("/api/user/stats")
        const data = await response.json()
        if (data.success) {
          const dbPlan = data.stats.subscriptionPlan || "free"
          setCurrentPlan(dbPlan)
        } else {
          toast.error("Failed to load user plan.")
        }
      } catch (err) {
        console.error("Failed to fetch plan:", err)
        toast.error("Failed to communicate with the server.")
      } finally {
        setIsDataLoading(false)
      }
    }

    fetchUserPlan()
  }, [session, status])

  // --- 2. Load Razorpay script once ---
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true

    script.onload = () => {
      setIsScriptLoaded(true)
    } 
    
    script.onerror = () => {
      console.error("Failed to load Razorpay script. Check network connection or script source.")
      toast.error("Payment system failed to load. Please check your connection.")
      setIsScriptLoaded(true) // Mark as handled even on error
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  
  // Final combined loading check
  const finalLoading = status === "loading" || isDataLoading || !isScriptLoaded;


  const renderPlanName = (plan: string) => {
    switch (plan) {
      case "monthly": return "Monthly"
      case "yearly": return "Yearly"
      case "free":
      default: return "Free"
    }
  }

  const handleUpgrade = async (planId: "monthly" | "yearly") => {
    if (!session?.user?.email) {
      toast.error("Please sign in first")
      return
    }

    if (!isScriptLoaded || !window.Razorpay) {
      toast.error("Payment system is still loading or failed to initialize.")
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
      // 1. Create Razorpay Order
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        console.error("API Error creating order:", orderData.error)
        toast.error(orderData.error || "Failed to create order")
        setIsProcessing(false) // Reset on API failure
        return
      }

      console.log("Order Created:", orderData.orderId)

      // 2. Razorpay Checkout Options
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "CodeUnbox Subscription",
        description: `${renderPlanName(planId)} Plan`,
        image: "/logo.png", // Recommended: Add your logo here

        // --- Core Payment Success Handler ---
        handler: async (response: any) => {
          try {
            // 3. Verify Payment
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
              toast.success(`Subscription upgraded to ${renderPlanName(planId)}! You can now access all premium features.`)
              
              // 4. Update state and session
              await update({ subscriptionPlan: planId }) 
              setCurrentPlan(planId)
              
              // 💡 IMPORTANT: Successfully verified and state updated.
              // The `finally` block in the parent `handleUpgrade` will handle the processing reset.
              
            } else {
              toast.error(verifyData.error || "Verification failed")
            }
          } catch (error) {
            console.error("Verification error:", error)
            toast.error("Payment verification failed")
          } finally {
             // Reset processing state *only* if the verification failed, 
             // otherwise let the modal's ondismiss or final outer finally handle it.
             // Given Razorpay might handle closing *before* the API call completes,
             // let's rely on the outer finally block for a clean reset, and ensure 
             // the handler runs fully.
          }
        },
        // --- Pre-filled User Details ---
        prefill: {
          name: session.user.name,
          email: session.user.email,
        },
        // --- Modal Dismissal Handler (Fires when user closes the modal without payment) ---
        modal: {
            ondismiss: () => {
                // This ensures the button is re-enabled if the user closes the modal manually
                setIsProcessing(false);
                toast("Payment window closed. Try again if you wish to upgrade.");
            }
        }
      }

      const rzp = new window.Razorpay(options)
      
      // --- Payment Failure Hook ---
      rzp.on('payment.failed', (response: any) => {
          console.error("Payment failed:", response.error);
          toast.error(`Payment failed: ${response.error.description || 'Check details and try again.'}`);
          setIsProcessing(false); // Reset processing on payment failure
      });

      rzp.open()
      
    } catch (err) {
      console.error("Unexpected error in upgrade process:", err)
      toast.error("Upgrade process failed due to an unexpected error.")
    } finally {
      // 💡 FIX: Forcing an update after a short delay to handle cases where 
      // the Razorpay modal may have closed successfully but failed to trigger a cleanup
      // that relies on the `ondismiss` hook.
      // If payment was successful and verified, the button should show "Current Plan" 
      // and not be stuck on "Processing...".
       
       // Note: If the handler runs successfully, it calls `update()` which triggers 
       // a re-render and re-fetch of user data, setting the correct plan.
       // The `isProcessing` state is usually handled by `modal.ondismiss` or `payment.failed` 
       // hooks, but sometimes the modal closure is inconsistent in deployed environments.
       
       // A quick check after a short wait helps.
       setTimeout(() => {
           if (currentPlan !== planId && status === "authenticated") {
              // This is a last-resort check to unstick the button 
              // if payment failed silently or cleanup was skipped.
               setIsProcessing(false);
           }
       }, 5000);
    }
  }

  // ... (rest of the component structure remains the same)
  if (finalLoading) {
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
        <h1 className={styles.title}>Billing & Plans</h1>

        {/* Current Plan Display */}
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