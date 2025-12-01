module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/auth-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
const authOptions = {
    // Use session strategy based on JWT (standard for stateless serverless functions)
    session: {
        strategy: "jwt"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
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
            // Explicitly define the return type as User | null (using the globally extended type)
            async authorize (credentials) {
                if (!credentials) {
                    return null;
                }
                const { email, password } = credentials;
                try {
                    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
                    const user = await db.collection("users").findOne({
                        email
                    });
                    if (!user) {
                        console.error("Login failed: User not found for email:", email);
                        throw new Error("Invalid credentials");
                    }
                    const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                    if (!isValid) {
                        console.error("Login failed: Invalid password for email:", email);
                        throw new Error("Invalid credentials");
                    }
                    // Return an object that matches the ExtendedUser interface structure.
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        // 💡 FIX 4: Use 'subscriptionPlan' instead of 'tier'
                        subscriptionPlan: user.subscriptionPlan || "free"
                    };
                } catch (e) {
                    console.error("Error during authorization:", e);
                    throw new Error("Invalid credentials");
                }
            }
        })
    ],
    // Custom pages configuration to handle redirects
    pages: {
        signIn: "/login",
        error: "/login"
    },
    callbacks: {
        // Add custom properties (id, subscriptionPlan) to the JWT
        async jwt ({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                // 💡 FIX 5: Use 'subscriptionPlan' instead of 'tier'
                token.subscriptionPlan = user.subscriptionPlan;
            }
            // 💡 FIX 6: Handle session refresh triggered by update() call from client
            if (trigger === "update" && session && session.subscriptionPlan) {
                // Update the token's subscriptionPlan with the new value from the update() payload
                token.subscriptionPlan = session.subscriptionPlan;
            }
            return token;
        },
        // Add custom properties (id, subscriptionPlan) to the session object exposed on the client
        async session ({ session, token }) {
            if (session.user) {
                // @ts-ignore: Add custom properties to session.user
                session.user.id = token.id;
                // 💡 FIX 7: Use 'subscriptionPlan' instead of 'tier'
                // @ts-ignore: Access token.subscriptionPlan
                session.user.subscriptionPlan = token.subscriptionPlan;
            }
            return session;
        }
    }
};
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/lib/tier-limits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TIER_LIMITS",
    ()=>TIER_LIMITS
]);
const TIER_LIMITS = {
    anonymous: {
        maxFilesPerZip: 100,
        canDownloadIndividual: false,
        canDownloadZip: false,
        canSave: false,
        maxSavedZips: 0,
        maxDownloadsPerSession: 0
    },
    free: {
        maxFilesPerZip: 200,
        canDownloadIndividual: true,
        canDownloadZip: true,
        canSave: false,
        maxSavedZips: 0,
        maxDownloadsPerSession: 10
    },
    monthly: {
        maxFilesPerZip: Number.POSITIVE_INFINITY,
        canDownloadIndividual: true,
        canDownloadZip: true,
        canSave: true,
        maxSavedZips: 5,
        maxDownloadsPerSession: Number.POSITIVE_INFINITY
    },
    yearly: {
        maxFilesPerZip: Number.POSITIVE_INFINITY,
        canDownloadIndividual: true,
        canDownloadZip: true,
        canSave: true,
        maxSavedZips: 15,
        maxDownloadsPerSession: Number.POSITIVE_INFINITY
    }
};
}),
"[project]/app/api/zip/extract/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/next/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tier$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tier-limits.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function POST(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        const userTier = session ? "free" : "anonymous";
        const limits = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tier$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_LIMITS"][userTier];
        const formData = await request.formData();
        const file = formData.get("file");
        if (!file || !file.name.endsWith(".zip")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Only .zip files are supported"
            }, {
                status: 400
            });
        }
        const buffer = await file.arrayBuffer();
        const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
        await zip.loadAsync(buffer);
        const fileEntries = [];
        let fileCount = 0;
        zip.forEach((relativePath, zipEntry)=>{
            if (!relativePath.startsWith(".") && !relativePath.includes("/.")) {
                fileEntries.push({
                    path: relativePath,
                    isDirectory: zipEntry.dir
                });
                if (!zipEntry.dir) fileCount++;
            }
        });
        // Check file limit
        if (fileCount > limits.maxFilesPerZip) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Exceeded file limit. Your plan allows ${limits.maxFilesPerZip} files. Please upgrade your plan.`
            }, {
                status: 403
            });
        }
        // Store session data
        const sessionId = Math.random().toString(36).substring(2, 11);
        const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const sessionData = {
            sessionId,
            userId: session?.user?.id || null,
            files: new Map(),
            fileEntries,
            fileCount,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24)
        };
        // Read file contents
        for (const entry of fileEntries){
            if (!entry.isDirectory) {
                try {
                    const zipEntry = zip.file(entry.path);
                    if (zipEntry) {
                        const content = await zipEntry.async("string");
                        sessionData.files.set(entry.path, content);
                    }
                } catch (err) {
                    console.error(`Failed to read ${entry.path}:`, err);
                }
            }
        }
        // Store in Redis-like session (in production, use Redis)
        await db.collection("sessions").insertOne({
            sessionId,
            files: Object.fromEntries(sessionData.files),
            fileEntries,
            fileCount,
            userId: session?.user?.id || null,
            expiresAt: sessionData.expiresAt,
            createdAt: new Date()
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            sessionId,
            fileCount,
            files: Object.fromEntries(sessionData.files)
        });
    } catch (error) {
        console.error("ZIP extraction error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to extract ZIP file"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9edcd5e3._.js.map