module.exports = [
"[project]/app/billing/billing.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "billing-module__Nlsdbq__active",
  "avatar": "billing-module__Nlsdbq__avatar",
  "container": "billing-module__Nlsdbq__container",
  "content": "billing-module__Nlsdbq__content",
  "currentPlan": "billing-module__Nlsdbq__currentPlan",
  "currentPlanCard": "billing-module__Nlsdbq__currentPlanCard",
  "faqItem": "billing-module__Nlsdbq__faqItem",
  "faqSection": "billing-module__Nlsdbq__faqSection",
  "featureItem": "billing-module__Nlsdbq__featureItem",
  "featureList": "billing-module__Nlsdbq__featureList",
  "label": "billing-module__Nlsdbq__label",
  "loading": "billing-module__Nlsdbq__loading",
  "nav": "billing-module__Nlsdbq__nav",
  "navItem": "billing-module__Nlsdbq__navItem",
  "period": "billing-module__Nlsdbq__period",
  "planCard": "billing-module__Nlsdbq__planCard",
  "planCardTitle": "billing-module__Nlsdbq__planCardTitle",
  "planName": "billing-module__Nlsdbq__planName",
  "plansGrid": "billing-module__Nlsdbq__plansGrid",
  "price": "billing-module__Nlsdbq__price",
  "priceSection": "billing-module__Nlsdbq__priceSection",
  "sidebar": "billing-module__Nlsdbq__sidebar",
  "title": "billing-module__Nlsdbq__title",
  "upgradeBtn": "billing-module__Nlsdbq__upgradeBtn",
  "userDetails": "billing-module__Nlsdbq__userDetails",
  "userEmail": "billing-module__Nlsdbq__userEmail",
  "userInfo": "billing-module__Nlsdbq__userInfo",
  "userName": "billing-module__Nlsdbq__userName",
});
}),
"[project]/app/billing/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BillingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/billing/billing.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
const PLANS = [
    {
        name: "Monthly",
        price: 2,
        period: "month",
        id: "monthly",
        features: [
            "Save up to 5 ZIP folders",
            "Extract unlimited files",
            "Unlimited downloads",
            "Share files with PIN"
        ]
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
            "Best value - Save 15%"
        ]
    }
];
function BillingPage() {
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentPlan, setCurrentPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("free");
    // Use separate loading states for initial data fetch and script load for better control
    const [isDataLoading, setIsDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScriptLoaded, setIsScriptLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Redirect if unauthenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "unauthenticated") router.push("/login");
    }, [
        status,
        router
    ]);
    // --- 1. Fetch current subscription from API on load ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status !== "authenticated" || !session?.user?.id) return;
        // Check NextAuth Session first for instant client-side update
        if (session.user.subscriptionPlan && session.user.subscriptionPlan !== "anonymous") {
            setCurrentPlan(session.user.subscriptionPlan);
            setIsDataLoading(false);
        }
        const fetchUserPlan = async ()=>{
            try {
                const response = await fetch("/api/user/stats");
                const data = await response.json();
                if (data.success) {
                    const dbPlan = data.stats.subscriptionPlan || "free";
                    setCurrentPlan(dbPlan);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load user plan.");
                }
            } catch (err) {
                console.error("Failed to fetch plan:", err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to communicate with the server.");
            } finally{
                setIsDataLoading(false);
            }
        };
        fetchUserPlan();
    }, [
        session,
        status
    ]);
    // --- 2. Load Razorpay script once (Fixes the console error) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        // When the script loads successfully
        script.onload = ()=>{
            setIsScriptLoaded(true);
        };
        // When the script fails to load (Addressing the Console Error)
        script.onerror = ()=>{
            console.error("Failed to load Razorpay script. Check network connection or script source.");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Payment system failed to load. Please check your connection.");
            setIsScriptLoaded(true); // Mark as handled even on error
        };
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        };
    }, []);
    // Final combined loading check
    const finalLoading = status === "loading" || isDataLoading || !isScriptLoaded;
    // Helper function to render plan name
    const renderPlanName = (plan)=>{
        switch(plan){
            case "monthly":
                return "Monthly";
            case "yearly":
                return "Yearly";
            case "free":
            default:
                return "Free";
        }
    };
    const handleUpgrade = async (planId)=>{
        if (!session?.user?.email) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please sign in first");
            return;
        }
        if (!isScriptLoaded || !window.Razorpay) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Payment system is still loading or failed to initialize.");
            return;
        }
        // 💡 FIX: Ensure we use the NEXT_PUBLIC_ key for client-side check
        const razorpayKey = ("TURBOPACK compile-time value", "rzp_live_RSbChCKHSLHY03");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsProcessing(true);
        try {
            // 1. Create Razorpay Order
            const orderResponse = await fetch("/api/payment/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    plan: planId
                })
            });
            const orderData = await orderResponse.json();
            if (!orderResponse.ok) {
                console.error("API Error creating order:", orderData.error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(orderData.error || "Failed to create order");
                return;
            }
            console.log("Order Created:", orderData.orderId);
            // 2. Razorpay Checkout Options
            const options = {
                key: razorpayKey,
                amount: orderData.amount,
                currency: orderData.currency,
                order_id: orderData.orderId,
                handler: async (response)=>{
                    try {
                        // 3. Verify Payment
                        const verifyResponse = await fetch("/api/payment/verify", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                orderId: orderData.orderId,
                                paymentId: response.razorpay_payment_id,
                                signature: response.razorpay_signature
                            })
                        });
                        const verifyData = await verifyResponse.json();
                        if (verifyResponse.ok) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Subscription upgraded to ${planId.charAt(0).toUpperCase() + planId.slice(1)}! You can now access all premium features.`);
                            // 4. Update state and session
                            await update({
                                subscriptionPlan: planId
                            });
                            setCurrentPlan(planId);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(verifyData.error || "Verification failed");
                        }
                    } catch (error) {
                        console.error("Verification error:", error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Payment verification failed");
                    } finally{
                        setIsProcessing(false);
                    }
                },
                prefill: {
                    name: session.user.name,
                    email: session.user.email
                },
                modal: {
                    ondismiss: ()=>{
                        setIsProcessing(false);
                    }
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', (response)=>{
                console.error("Payment failed:", response.error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Payment failed: ${response.error.description || 'Check details and try again.'}`);
                setIsProcessing(false);
            });
            rzp.open();
        } catch (err) {
            console.error("Unexpected error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Upgrade process failed");
        } finally{
        // Reset isProcessing if error occurred before Razorpay modal opened
        // If modal opened, it is handled in modal.ondismiss or handler finally
        // We rely on the internal resets now that we have them.
        }
    };
    if (finalLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/billing/page.tsx",
            lineNumber: 246,
            columnNumber: 12
        }, this);
    }
    if (!session?.user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                children: session.user.name?.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userDetails,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                        children: session.user.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userEmail,
                                        children: session.user.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem,
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/billing",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active}`,
                                children: "Billing"
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem,
                                children: "Back to Explorer"
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/billing/page.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Billing & Plans"
                    }, void 0, false, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentPlan,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: "Current Plan"
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planName,
                                children: renderPlanName(currentPlan)
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plansGrid,
                        children: PLANS.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planCard} ${currentPlan === plan.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentPlanCard : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planCardTitle,
                                        children: plan.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                                children: [
                                                    "₹",
                                                    plan.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/billing/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].period,
                                                children: [
                                                    "/",
                                                    plan.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/billing/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureList,
                                        children: plan.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featureItem,
                                                children: [
                                                    "✓ ",
                                                    f
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/billing/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].upgradeBtn,
                                        onClick: ()=>handleUpgrade(plan.id),
                                        disabled: isProcessing || currentPlan === plan.id,
                                        children: currentPlan === plan.id ? "Current Plan" : isProcessing ? "Processing..." : "Upgrade Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, plan.id, true, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Can I cancel anytime?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Yes, cancel anytime — you retain access until the end of your billing period."
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "What payment methods do you accept?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "All debit cards, credit cards, UPI, wallets through Razorpay."
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$billing$2f$billing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Can I switch plans?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Yes, upgrades and downgrades are supported anytime."
                                    }, void 0, false, {
                                        fileName: "[project]/app/billing/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/billing/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/billing/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/billing/page.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/billing/page.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_billing_10801fad._.js.map