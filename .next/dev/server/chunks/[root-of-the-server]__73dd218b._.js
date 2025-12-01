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
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/share/download/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { pin, files } = body;
        if (!pin || !files || !Array.isArray(files) || files.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing PIN or files to download."
            }, {
                status: 400
            });
        }
        const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        // 1. Find the sharing record using the PIN in the shared_pins collection
        const shareRecord = await db.collection("shared_pins").findOne({
            pin
        });
        if (!shareRecord) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid or expired share PIN."
            }, {
                status: 404
            });
        }
        // Check expiration
        if (shareRecord.expiresAt && new Date() > shareRecord.expiresAt) {
            // Optional: delete expired record
            await db.collection("shared_pins").deleteOne({
                pin
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Share PIN has expired."
            }, {
                status: 410
            });
        }
        // 2. The file contents are assumed to be stored directly in `shareRecord.files`
        // Defensive mapping to ensure we only proceed with valid data and handle `shareRecord.files` possibly being null/undefined.
        const filesArray = Array.isArray(shareRecord.files) ? shareRecord.files : [];
        // Explicitly define the map type and ensure content is cast to string to satisfy JSZip's overloads
        const fileContentsMap = new Map(filesArray.filter((f)=>f && typeof f.path === 'string' && typeof f.content === 'string').map((f)=>[
                f.path,
                f.content
            ]));
        // Filter for only valid string paths
        const validPaths = files.filter((f)=>typeof f === 'string' && f.trim() !== '');
        if (validPaths.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No valid file paths received for download."
            }, {
                status: 400
            });
        }
        // --- 3. File Preparation (ZIP) ---
        const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
        for (const filePath of validPaths){
            // content is guaranteed to be string or undefined based on fileContentsMap type
            const content = fileContentsMap.get(filePath);
            if (content) {
                // Add the file to the zip. Use the path as the file name in the zip.
                // Explicit cast to string added here to resolve potential TypeScript overload confusion
                zip.file(filePath, content);
            } else {
                console.warn(`Content for path ${filePath} was requested but not found in shareRecord.files`);
            }
        }
        // Generate the ZIP buffer
        // Note: Using 'nodebuffer' is required for Node.js environments (like Next.js API routes)
        const buffer = await zip.generateAsync({
            type: "nodebuffer"
        });
        const fileName = "shared_files.zip";
        const contentType = "application/zip";
        // --- 4. Final Response (Applying TypeScript ArrayBuffer Fix) ---
        // Convert the Node.js Buffer to a standard ArrayBuffer slice for compatibility with NextResponse.
        const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](arrayBuffer, {
            headers: {
                "Content-Disposition": `attachment; filename="${fileName}"`,
                "Content-Type": contentType,
                "Content-Length": buffer.length.toString()
            }
        });
    } catch (error) {
        console.error("Shared download error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Download failed due to server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73dd218b._.js.map