module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeDatabase",
    ()=>closeDatabase,
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri || mongoUri.includes("your_mongodb_connection_string")) {
        console.warn("[MongoDB] MongoDB URI not configured. Using mock mode for development.");
        // Return a mock object for development when no valid URI is provided
        return {
            client: null,
            db: {
                collection: ()=>({
                        findOne: async ()=>null,
                        insertOne: async ()=>({
                                insertedId: "mock-id"
                            }),
                        updateOne: async ()=>({}),
                        deleteOne: async ()=>({}),
                        find: ()=>({
                                toArray: async ()=>[]
                            })
                    })
            }
        };
    }
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    try {
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](mongoUri);
        await client.connect();
        const db = client.db("code-explorer");
        cachedClient = client;
        cachedDb = db;
        return {
            client,
            db
        };
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}
async function closeDatabase() {
    if (cachedClient) {
        await cachedClient.close();
        cachedClient = null;
        cachedDb = null;
    }
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/register/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
;
;
;
const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials) {
                    return null;
                }
                // 🌟 FIX: Normalize incoming login email to lowercase
                const email = String(credentials.email).toLowerCase();
                const { password } = credentials;
                try {
                    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
                    // Search using the normalized lowercase email
                    const user = await db.collection("users").findOne({
                        email
                    });
                    if (!user) {
                        console.error("LOGIN FAIL: User not found for email:", email);
                        throw new Error("Invalid credentials");
                    }
                    const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                    if (!isValid) {
                        console.error("LOGIN FAIL: Invalid password for email:", email);
                        throw new Error("Invalid credentials");
                    }
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        subscriptionPlan: user.subscriptionPlan || "free"
                    };
                } catch (e) {
                    console.error("Error during authorization:", e);
                    throw new Error("Invalid credentials");
                }
            }
        })
    ],
    pages: {
        signIn: "/register",
        error: "/register"
    },
    callbacks: {
        async jwt ({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                token.subscriptionPlan = user.subscriptionPlan;
            }
            if (trigger === "update" && session && session.subscriptionPlan) {
                token.subscriptionPlan = session.subscriptionPlan;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                // @ts-ignore
                session.user.id = token.id;
                // @ts-ignore
                session.user.subscriptionPlan = token.subscriptionPlan;
            }
            return session;
        }
    }
};
}),
"[project]/app/register/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/register/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29aa20eb._.js.map