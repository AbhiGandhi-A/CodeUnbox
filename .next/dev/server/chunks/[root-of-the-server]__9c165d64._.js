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
            // Explicitly define the return type as ExtendedUser | null
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
                        // Use throw new Error for NextAuth to handle error messaging on the sign-in page
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
                        // Correctly assign the custom 'tier' property
                        tier: user.subscriptionPlan || "free"
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
        // Add custom properties (id, tier) to the JWT
        async jwt ({ token, user }) {
            if (user) {
                // user is of type ExtendedUser here
                token.id = user.id;
                // @ts-ignore: Access the custom property 'tier' added in authorize
                token.tier = user.tier;
            }
            return token;
        },
        // Add custom properties (id, tier) to the session object exposed on the client
        async session ({ session, token }) {
            if (session.user) {
                // @ts-ignore: Add custom properties to session.user
                session.user.id = token.id;
                // @ts-ignore: Add custom properties to session.user
                session.user.tier = token.tier;
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
"[project]/app/api/files/download/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
// Assuming you have a file at this path with the TIER_LIMITS object
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tier$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tier-limits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
;
;
;
;
;
async function POST(request) {
    try {
        // Note: getServerSession returns null if not authenticated
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        // Deconstruct body, including the userTier passed from the client
        const body = await request.json();
        const { sessionId, files, downloadType, userTier: clientUserTier } = body;
        // Determine the user's tier based on client hint or default logic
        const effectiveTier = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tier$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_LIMITS"].hasOwnProperty(clientUserTier) ? clientUserTier : session ? "free" : "anonymous";
        // Assuming TIER_LIMITS is structured correctly
        const limits = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tier$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_LIMITS"][effectiveTier];
        // --- 1. Basic Data Validation ---
        if (!sessionId || !files || !Array.isArray(files) || files.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing session ID or files."
            }, {
                status: 400
            });
        }
        // CRITICAL: Filter out any potential undefined/null values from the files array
        const validFiles = files.filter((f)=>typeof f === 'string' && f.trim() !== '');
        if (validFiles.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No valid files selected for download."
            }, {
                status: 400
            });
        }
        // --- 2. Tier and Limit Checks ---
        if (downloadType === "zip" && limits && !limits.canDownloadZip) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Your plan does not allow downloading multiple files as ZIP. Please upgrade."
            }, {
                status: 403
            });
        }
        // For free tier, check individual file limit
        if (effectiveTier === "free" && validFiles.length > 10) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Free plan limited to 10 files per download. You selected ${validFiles.length}. Upgrade to download more.`
            }, {
                status: 403
            });
        }
        // --- 3. Database Fetch and Update ---
        const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        // NOTE: sessionId is the unique ID for the session/zip contents
        const sessionData = await db.collection("sessions").findOne({
            sessionId
        });
        if (!sessionData || !sessionData.files) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Session expired or files data missing."
            }, {
                status: 404
            });
        }
        // Update download count for logged-in users
        if (session?.user?.id) {
            // Assuming session.user.id is the MongoDB _id (stringified)
            try {
                await db.collection("users").updateOne({
                    _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](session.user.id)
                }, {
                    $inc: {
                        totalDownloads: 1
                    }
                });
            } catch (updateError) {
                console.error("Failed to update download count:", updateError);
            // Continue execution even if update fails
            }
        }
        // --- 4. File Preparation ---
        let buffer;
        let fileName;
        let contentType;
        if (downloadType === "zip" || validFiles.length > 1) {
            // Create ZIP file
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
            for (const filePath of validFiles){
                const content = sessionData.files[filePath];
                if (content) {
                    // The file is added to the ZIP with its full path as the name (e.g., folder/file.txt)
                    zip.file(filePath, content);
                } else {
                    console.warn(`File path ${filePath} not found in session data.`);
                }
            }
            // Generate the ZIP blob and convert it to a Buffer
            const blob = await zip.generateAsync({
                type: "nodebuffer"
            });
            buffer = blob;
            fileName = "files.zip";
            contentType = "application/zip";
        } else {
            // Single file download (validFiles.length === 1)
            const filePath = validFiles[0];
            const content = sessionData.files[filePath];
            if (!content) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `File not found in session: ${filePath}`
                }, {
                    status: 404
                });
            }
            // Convert content (string or base64 data) to Buffer
            buffer = Buffer.from(content);
            fileName = filePath.split("/").pop() || "file";
            // Attempt to infer content type based on extension, otherwise default to octet-stream
            const extension = fileName.split('.').pop()?.toLowerCase();
            contentType = extension === 'json' ? 'application/json' : 'application/octet-stream';
        }
        // --- 5. Final Response ---
        // FIX: Convert the Node.js Buffer to a standard ArrayBuffer slice, 
        // and explicitly cast to ArrayBuffer to satisfy NextResponse's type requirements.
        const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length);
        // Return the ArrayBuffer wrapped in a NextResponse
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](arrayBuffer, {
            headers: {
                "Content-Disposition": `attachment; filename="${fileName}"`,
                "Content-Type": contentType,
                "Content-Length": buffer.length.toString()
            }
        });
    } catch (error) {
        console.error("Download error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Download failed due to server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c165d64._.js.map