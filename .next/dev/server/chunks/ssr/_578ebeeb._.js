module.exports = [
"[project]/components/ThemeToggle.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "toggle": "ThemeToggle-module__3b5zuq__toggle",
});
}),
"[project]/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.module.css [app-ssr] (css module)");
"use client";
;
;
;
function ThemeToggle() {
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);
    }, []);
    const toggleTheme = ()=>{
        if (!mounted) return;
        const html = document.documentElement;
        const newIsDark = !isDark;
        if (newIsDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setIsDark(newIsDark);
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggle,
        onClick: toggleTheme,
        title: isDark ? "Switch to light mode" : "Switch to dark mode",
        "aria-label": "Toggle theme",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "5.64",
                    x2: "19.78",
                    y2: "4.22"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 55,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeToggle.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/UploadArea.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "UploadArea-module__IZzUWW__button",
  "container": "UploadArea-module__IZzUWW__container",
  "loading": "UploadArea-module__IZzUWW__loading",
  "spin": "UploadArea-module__IZzUWW__spin",
  "spinner": "UploadArea-module__IZzUWW__spinner",
});
}),
"[project]/components/UploadArea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadArea",
    ()=>UploadArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/UploadArea.module.css [app-ssr] (css module)");
"use client";
;
;
;
function UploadArea({ onUpload, isLoading }) {
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileSelect = (files)=>{
        if (!files || files.length === 0) return;
        const file = files[0];
        if (!file.name.endsWith(".zip")) {
            alert("Please select a .zip file");
            return;
        }
        onUpload(file);
    };
    const handleClick = ()=>{
        fileInputRef.current?.click();
    };
    const handleInputChange = (e)=>{
        handleFileSelect(e.target.files);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        handleFileSelect(e.dataTransfer.files);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${isLoading ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading : ""}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                onClick: handleClick,
                disabled: isLoading,
                title: "Click to upload or drag and drop a .zip file",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        "Uploading..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/UploadArea.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "17 8 12 3 7 8"
                                }, void 0, false, {
                                    fileName: "[project]/components/UploadArea.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "3",
                                    x2: "12",
                                    y2: "15"
                                }, void 0, false, {
                                    fileName: "[project]/components/UploadArea.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Upload ZIP File"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/UploadArea.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".zip",
                onChange: handleInputChange,
                style: {
                    display: "none"
                },
                disabled: isLoading
            }, void 0, false, {
                fileName: "[project]/components/UploadArea.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UploadArea.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/UserMenu.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dropdown": "UserMenu-module__pCivJG__dropdown",
  "loginBtn": "UserMenu-module__pCivJG__loginBtn",
  "menuItem": "UserMenu-module__pCivJG__menuItem",
  "userBtn": "UserMenu-module__pCivJG__userBtn",
  "userMenu": "UserMenu-module__pCivJG__userMenu",
});
}),
"[project]/components/UserMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenu",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/UserMenu.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function UserMenu() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine userTier based on session data
    let userTier = "anonymous";
    if (status === "authenticated" && session?.user) {
        // Use the actual subscriptionPlan from the session, defaulting to 'free' if not set
        const plan = session.user.subscriptionPlan || "free";
        // Ensure the tier is one of the expected values
        if ([
            "free",
            "monthly",
            "yearly"
        ].includes(plan)) {
            userTier = plan;
        } else {
            userTier = "free"; // Fallback to 'free' for unknown or invalid plans
        }
    }
    // Display nothing while loading the session
    if (status === "loading") {
        return null;
    }
    // Display Sign In link if not authenticated
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/register",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginBtn,
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/components/UserMenu.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    // Display User Menu if authenticated
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userMenu,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userBtn,
                onClick: ()=>setShowMenu(!showMenu),
                children: [
                    "👤 ",
                    session.user?.name || "User"
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserMenu.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem,
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/billing",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem,
                        children: [
                            "Billing (",
                            userTier,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem,
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(),
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserMenu.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserMenu.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/DownloadMenu.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "downloadBtn": "DownloadMenu-module__obcEYa__downloadBtn",
  "downloadContainer": "DownloadMenu-module__obcEYa__downloadContainer",
  "limitNotice": "DownloadMenu-module__obcEYa__limitNotice",
  "saveBtn": "DownloadMenu-module__obcEYa__saveBtn",
});
}),
"[project]/components/DownloadMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadMenu",
    ()=>DownloadMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/DownloadMenu.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function DownloadMenu({ selectedFilePaths, sessionId, userTier }) {
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Validate plan type
    const effectiveTier = [
        "anonymous",
        "free",
        "monthly",
        "yearly"
    ].includes(userTier) ? userTier : "free";
    // Download permission rules
    const canDownload = {
        anonymous: false,
        free: selectedFilePaths.length <= 10,
        monthly: true,
        yearly: true
    }[effectiveTier];
    const handleDownload = async (downloadType)=>{
        if (!canDownload) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Your plan does not allow downloads. Please upgrade.");
            return;
        }
        if (!selectedFilePaths.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select files.");
            return;
        }
        setIsDownloading(true);
        try {
            const res = await fetch("/api/files/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sessionId,
                    files: selectedFilePaths,
                    downloadType,
                    userTier: effectiveTier
                })
            });
            if (!res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Download failed.");
                return;
            }
            const blob = await res.blob();
            let filename = "files.zip";
            if (downloadType === "individual" && selectedFilePaths.length === 1) {
                filename = selectedFilePaths[0].split("/").pop() || "file";
            }
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Download started!");
        } finally{
            setIsDownloading(false);
        }
    };
    // SAVE ZIP (monthly / yearly only)
    const handleSaveZip = async ()=>{
        if (effectiveTier !== "monthly" && effectiveTier !== "yearly") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Upgrade plan to save ZIP folders.");
            return;
        }
        if (!selectedFilePaths.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No files selected.");
            return;
        }
        setIsSaving(true);
        try {
            const files = selectedFilePaths.map((path)=>({
                    path,
                    content: sessionStorage.getItem(path) || ""
                }));
            const res = await fetch("/api/save-zip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    zipName: `saved-${Date.now()}`,
                    files
                })
            });
            const data = await res.json();
            if (!res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to save ZIP");
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("ZIP saved successfully!");
        } finally{
            setIsSaving(false);
        }
    };
    const multiple = selectedFilePaths.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadBtn,
                onClick: ()=>handleDownload(multiple ? "zip" : "individual"),
                disabled: !canDownload || isDownloading,
                children: isDownloading ? "⬇️ Downloading..." : multiple ? "⬇️ Download ZIP" : "⬇️ Download File"
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            (effectiveTier === "monthly" || effectiveTier === "yearly") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                onClick: handleSaveZip,
                disabled: isSaving,
                children: isSaving ? "💾 Saving..." : "💾 Save File"
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            effectiveTier === "free" && selectedFilePaths.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].limitNotice,
                children: "Free plan limited to 10 files. Upgrade for unlimited downloads."
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DownloadMenu.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SaveHistoryButton.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "SaveHistoryButton-module__7aqaaq__actions",
  "btn": "SaveHistoryButton-module__7aqaaq__btn",
  "deleteBtn": "SaveHistoryButton-module__7aqaaq__deleteBtn",
  "modal": "SaveHistoryButton-module__7aqaaq__modal",
  "modalBody": "SaveHistoryButton-module__7aqaaq__modalBody",
  "modalContent": "SaveHistoryButton-module__7aqaaq__modalContent",
  "modalHeader": "SaveHistoryButton-module__7aqaaq__modalHeader",
  "showModal": "SaveHistoryButton-module__7aqaaq__showModal",
  "useBtn": "SaveHistoryButton-module__7aqaaq__useBtn",
  "zipInfo": "SaveHistoryButton-module__7aqaaq__zipInfo",
  "zipItem": "SaveHistoryButton-module__7aqaaq__zipItem",
  "zipList": "SaveHistoryButton-module__7aqaaq__zipList",
  "zipMeta": "SaveHistoryButton-module__7aqaaq__zipMeta",
  "zipName": "SaveHistoryButton-module__7aqaaq__zipName",
});
}),
"[project]/components/SaveHistoryButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveHistoryButton",
    ()=>SaveHistoryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SaveHistoryButton.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function SaveHistoryButton({ sessionId, onLoadSavedZip }) {
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedZips, setSavedZips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // To track which item is being deleted
    ;
    const fetchSavedZips = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch("/api/save-zip/list");
            const data = await response.json();
            if (data.success) setSavedZips(data.savedZips);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch saved history");
        } finally{
            setIsLoading(false);
        }
    };
    const handleUse = async (zip)=>{
        try {
            const res = await fetch("/api/save-zip/load", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: zip.blobUrl
                })
            });
            const data = await res.json();
            if (!data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to open ZIP");
                return;
            }
            onLoadSavedZip(data.files);
            setShowModal(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Loaded '${zip.name}'`);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error loading ZIP");
        }
    };
    const handleDelete = async (zip)=>{
        // Use a custom modal in a real app, but using window.confirm here to quickly add functionality
        if (!window.confirm(`Are you sure you want to delete "${zip.name}"?`)) {
            return;
        }
        setIsDeleting(zip._id);
        try {
            const res = await fetch("/api/save-zip/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: zip._id,
                    url: zip.blobUrl
                })
            });
            const data = await res.json();
            if (data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Deleted '${zip.name}'`);
                // Remove from local state
                setSavedZips((prev)=>prev.filter((z)=>z._id !== zip._id));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete ZIP");
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error deleting ZIP");
        } finally{
            setIsDeleting(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn,
                onClick: ()=>{
                    setShowModal(true);
                    fetchSavedZips();
                },
                title: "View and Load Saved Folders",
                children: "💾 History"
            }, void 0, false, {
                fileName: "[project]/components/SaveHistoryButton.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Saved ZIP Folders"
                                }, void 0, false, {
                                    fileName: "[project]/components/SaveHistoryButton.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/SaveHistoryButton.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SaveHistoryButton.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this) : savedZips.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No saved ZIPs yet. Upload a folder (multiple files) to save its history."
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zipList,
                                children: savedZips.map((zip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zipItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zipInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: zip.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            zip.fileCount,
                                                            " files"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                                lineNumber: 119,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                        onClick: ()=>handleDelete(zip),
                                                        disabled: isDeleting === zip._id || isDeleting !== null,
                                                        title: `Delete ${zip.name}`,
                                                        children: isDeleting === zip._id ? "Deleting..." : "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].useBtn,
                                                        onClick: ()=>handleUse(zip),
                                                        disabled: isDeleting !== null,
                                                        title: `Load ${zip.name}`,
                                                        children: "Use"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                                lineNumber: 124,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, zip._id, true, {
                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                        lineNumber: 118,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SaveHistoryButton.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SaveHistoryButton.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SaveHistoryButton.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/TopBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accessBtn": "TopBar-module__dQ673a__accessBtn",
  "label": "TopBar-module__dQ673a__label",
  "left": "TopBar-module__dQ673a__left",
  "logo": "TopBar-module__dQ673a__logo",
  "middle": "TopBar-module__dQ673a__middle",
  "right": "TopBar-module__dQ673a__right",
  "saveBtn": "TopBar-module__dQ673a__saveBtn",
  "shareBtn": "TopBar-module__dQ673a__shareBtn",
  "stats": "TopBar-module__dQ673a__stats",
  "title": "TopBar-module__dQ673a__title",
  "topbar": "TopBar-module__dQ673a__topbar",
  "value": "TopBar-module__dQ673a__value",
});
}),
"[project]/components/TopBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadArea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DownloadMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SaveHistoryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/TopBar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)"); // Import toast for save functionality
"use client";
;
;
;
;
;
;
;
;
;
;
function TopBar({ fileCount, onUpload, isLoading, selectedFilePaths, sessionId, onShareClick, onAccessSharedClick, onLoadSavedZip, files }) {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [userTier, setUserTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("anonymous");
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "loading") return;
        if (!session?.user) {
            setUserTier("anonymous");
            return;
        }
        const plan = session.user.subscriptionPlan || "free";
        setUserTier(plan);
    }, [
        session,
        status
    ]);
    const handleSave = async ()=>{
        // files.length will now be the full count of the uploaded zip
        if (files.length < 2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please upload a folder (multiple files) to save.");
            return;
        }
        const zipName = prompt("Enter a name for the saved ZIP folder:");
        if (!zipName) return;
        setIsSaving(true);
        try {
            // This fetch uses the `files` prop, which now contains ALL file contents.
            const res = await fetch("/api/save-zip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    zipName,
                    files
                })
            });
            const data = await res.json();
            if (data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Folder '${zipName}' saved successfully!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to save ZIP");
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error saving ZIP");
        } finally{
            setIsSaving(false);
        }
    };
    // Use files.length instead of fileCount for the save check, 
    // though they should be the same after the fix in page.tsx
    const canSave = (userTier === "monthly" || userTier === "yearly") && files.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].left,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2l.5 1h6.5a1 1 0 0 1 1 1v3H4V4a1 1 0 0 1 1-1h6.5l.5-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "4",
                                    y: "5",
                                    width: "16",
                                    height: "14",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 9h8M8 13h8M8 17h4",
                                    strokeOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TopBar.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Code Explorer"
                        }, void 0, false, {
                            fileName: "[project]/components/TopBar.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TopBar.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].middle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadArea"], {
                    onUpload: onUpload,
                    isLoading: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/TopBar.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].right,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: "Files:"
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].value,
                                children: fileCount
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    selectedFilePaths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadMenu"], {
                                selectedFilePaths: selectedFilePaths,
                                sessionId: sessionId,
                                userTier: userTier
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareBtn,
                                onClick: onShareClick,
                                title: "Share files with PIN",
                                children: "📤 Share"
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    canSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                        onClick: handleSave,
                        disabled: isSaving,
                        title: "Save the currently loaded folder",
                        children: isSaving ? "Saving..." : "⭐ Save Folder"
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    (userTier === "monthly" || userTier === "yearly") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaveHistoryButton"], {
                        sessionId: sessionId,
                        onLoadSavedZip: onLoadSavedZip
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accessBtn,
                        onClick: onAccessSharedClick,
                        title: "Access shared files",
                        children: "🔓 Access Shared"
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserMenu"], {}, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TopBar.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FileTree.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "checkbox": "FileTree-module__b3B1pW__checkbox",
  "checkboxWrapper": "FileTree-module__b3B1pW__checkboxWrapper",
  "children": "FileTree-module__b3B1pW__children",
  "container": "FileTree-module__b3B1pW__container",
  "expanded": "FileTree-module__b3B1pW__expanded",
  "fileLabel": "FileTree-module__b3B1pW__fileLabel",
  "folderLabel": "FileTree-module__b3B1pW__folderLabel",
  "indentationLine": "FileTree-module__b3B1pW__indentationLine",
  "label": "FileTree-module__b3B1pW__label",
  "name": "FileTree-module__b3B1pW__name",
  "nodeContent": "FileTree-module__b3B1pW__nodeContent",
  "nodeWrapper": "FileTree-module__b3B1pW__nodeWrapper",
  "selected": "FileTree-module__b3B1pW__selected",
  "toggle": "FileTree-module__b3B1pW__toggle",
  "toggleIcon": "FileTree-module__b3B1pW__toggleIcon",
});
}),
"[project]/components/FileTree.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FileTree.tsx
__turbopack_context__.s([
    "FileTree",
    ()=>FileTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/FileTree.module.css [app-ssr] (css module)");
"use client";
;
;
;
function FileTree({ tree, onFileSelect, selectedFiles }) {
    // Start with root expanded
    const [expandedFolders, setExpandedFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "."
    ]));
    const toggleFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((folderPath)=>{
        setExpandedFolders((prev)=>{
            const next = new Set(prev);
            if (next.has(folderPath)) {
                next.delete(folderPath);
            } else {
                next.add(folderPath);
            }
            return next;
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeNode, {
            node: tree,
            expandedFolders: expandedFolders,
            toggleFolder: toggleFolder,
            onFileSelect: onFileSelect,
            selectedFiles: selectedFiles,
            depth: 0
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FileTree.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function FileTreeNode({ node, expandedFolders, toggleFolder, onFileSelect, selectedFiles, depth }) {
    const isExpanded = expandedFolders.has(node.path);
    const isFile = node.type === "file";
    const isRoot = depth === 0;
    // Check if file is selected (used for coloring the label)
    const isSelected = selectedFiles.has(node.path);
    // Root node doesn't need indentation
    const paddingLeft = isRoot ? 0 : `${depth * 16}px`;
    // Line offset for visual guide
    const lineOffset = isRoot ? 0 : `${(depth - 1) * 16 + 8}px`;
    const handleToggle = ()=>{
        if (!isFile) {
            toggleFolder(node.path);
        }
    };
    const handleCheckboxChange = (e)=>{
        e.stopPropagation();
        if (isFile) {
            onFileSelect(node.path);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nodeWrapper,
        children: [
            depth > 1 && !isRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].indentationLine,
                style: {
                    left: lineOffset
                }
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nodeContent,
                style: {
                    paddingLeft
                },
                children: [
                    !isFile && node.children && node.children.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggle,
                        onClick: handleToggle,
                        "aria-label": isExpanded ? "Collapse" : "Expand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleIcon} ${isExpanded ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expanded : ""}`,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 4l4 4-4 4"
                            }, void 0, false, {
                                fileName: "[project]/components/FileTree.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FileTree.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    !isFile && node.children && node.children.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '20px',
                            marginRight: '4px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 109,
                        columnNumber: 68
                    }, this),
                    isFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox,
                            onChange: handleCheckboxChange,
                            checked: isSelected,
                            id: `file-${node.path}`
                        }, void 0, false, {
                            fileName: "[project]/components/FileTree.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: isFile ? `file-${node.path}` : undefined,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label} ${isFile ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileLabel : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].folderLabel} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : ""}`,
                        onClick: isFile ? undefined : handleToggle,
                        children: [
                            getFileIcon(node.name, isFile, isExpanded),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                children: node.name
                            }, void 0, false, {
                                fileName: "[project]/components/FileTree.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            !isFile && isExpanded && node.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].children,
                children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeNode, {
                        node: child,
                        expandedFolders: expandedFolders,
                        toggleFolder: toggleFolder,
                        onFileSelect: onFileSelect,
                        selectedFiles: selectedFiles,
                        depth: depth + 1
                    }, child.path, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FileTree.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
// Updated function to return a React node (SVG) instead of an emoji string
function getFileIcon(filename, isFile, isExpanded) {
    if (!isFile) {
        // Folder Icon
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                color: 'var(--color-accent)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: isExpanded ? "M4 10.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-8.5L9 5H6a2 2 0 0 0-2 2v3.5z" : "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8.87 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this);
    }
    // File Icons (using simple icons for popular file types)
    const ext = filename.split(".").pop()?.toLowerCase();
    const iconMap = {
        // TS/JS/React Icons
        js: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#f0db4f",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/FileTree.tsx",
                    lineNumber: 171,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 7v5h5",
                    stroke: "#323330"
                }, void 0, false, {
                    fileName: "[project]/components/FileTree.tsx",
                    lineNumber: 171,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 171,
            columnNumber: 9
        }, this),
        ts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#007acc",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 172,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 172,
            columnNumber: 9
        }, this),
        tsx: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#61dafb",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 173,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this),
        jsx: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#61dafb",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/FileTree.tsx",
                    lineNumber: 174,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 12h6M12 9v6"
                }, void 0, false, {
                    fileName: "[project]/components/FileTree.tsx",
                    lineNumber: 174,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this),
        // Config/Markup/Style Icons
        json: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#ff7b34",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 18V6M9 9l3-3 3 3M9 15l3 3 3-3"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 176,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this),
        css: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#1572b6",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 3h20v18H2zM12 7l-2 9-2-9h8"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 177,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this),
        html: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#e34f26",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 3h20v18H2zM12 7l-2 9-2-9h8"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 178,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this),
        md: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 14l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 179,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 179,
            columnNumber: 9
        }, this),
        // Generic/Default
        py: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#306998",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l-8 4v8l8 4 8-4V6zM12 17v-5h5M12 12h-5"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 181,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 181,
            columnNumber: 9
        }, this),
        // Default Icon
        default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6"
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 183,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 183,
            columnNumber: 14
        }, this)
    };
    return iconMap[ext || ""] || iconMap.default;
}
}),
"[project]/components/CodeEditor.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "codeArea": "CodeEditor-module__IDUJ-W__codeArea",
  "codeBlock": "CodeEditor-module__IDUJ-W__codeBlock",
  "codeBlocks": "CodeEditor-module__IDUJ-W__codeBlocks",
  "container": "CodeEditor-module__IDUJ-W__container",
  "copyButton": "CodeEditor-module__IDUJ-W__copyButton",
  "editorContent": "CodeEditor-module__IDUJ-W__editorContent",
  "empty": "CodeEditor-module__IDUJ-W__empty",
  "fileHeader": "CodeEditor-module__IDUJ-W__fileHeader",
  "fileIndex": "CodeEditor-module__IDUJ-W__fileIndex",
  "filePath": "CodeEditor-module__IDUJ-W__filePath",
  "header": "CodeEditor-module__IDUJ-W__header",
  "headerLeft": "CodeEditor-module__IDUJ-W__headerLeft",
  "headerRight": "CodeEditor-module__IDUJ-W__headerRight",
  "loading": "CodeEditor-module__IDUJ-W__loading",
  "saveButton": "CodeEditor-module__IDUJ-W__saveButton",
  "spin": "CodeEditor-module__IDUJ-W__spin",
  "spinner": "CodeEditor-module__IDUJ-W__spinner",
  "title": "CodeEditor-module__IDUJ-W__title",
});
}),
"[project]/components/CodeEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CodeEditor.tsx
__turbopack_context__.s([
    "CodeEditor",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CodeEditor.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function CodeEditor({ files, isLoading, sessionId, userTier }) {
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [prismReady, setPrismReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State to hold editable content. Key is file.path, value is the content string.
    const [editableContent, setEditableContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Refs for cursor preservation
    const focusedPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null) // Tracks the path of the currently focused <pre>
    ;
    const cursorOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map()) // Stores caret offset for each path
    ;
    const scrollPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // Stores scroll position
    // --- Cursor Preservation Utility Functions ---
    /**
     * Reads the caret position as a character offset from the start of the <pre> element's raw text content.
     * This version accurately calculates the offset by traversing only text nodes up to the caret position.
     */ const getCaretOffset = (element)=>{
        let offset = 0;
        const selection = window.getSelection();
        // Check if we are inside the element and have a valid selection
        if (!element || !selection || selection.rangeCount === 0 || !element.contains(selection.anchorNode)) {
            return offset;
        }
        const range = selection.getRangeAt(0);
        let currentRange = document.createRange();
        // Clone the range from the start of the element to the end of the selection
        currentRange.setStart(element, 0);
        currentRange.setEnd(range.endContainer, range.endOffset);
        // Calculate the raw text length from the start of the element up to the caret.
        // This handles cases where Prism wraps text in <span> elements.
        const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        let currentNode;
        let foundNode = false;
        // Iterate through all text nodes
        while(currentNode = treeWalker.nextNode()){
            if (currentNode === range.endContainer) {
                // If this is the node containing the caret, add the offset within that node.
                offset += range.endOffset;
                foundNode = true;
                break;
            } else if (currentRange.intersectsNode(currentNode)) {
                // If this node is before the caret, add its full text length to the offset.
                offset += currentNode.textContent?.length || 0;
            } else if (foundNode) {
                break;
            }
        }
        return offset;
    };
    /**
     * Sets the caret position within the given element based on a character offset.
     */ const setCaretOffset = (element, offset)=>{
        if (!element || offset === null) return;
        let totalOffset = 0;
        let found = false;
        // Traverse all child nodes (including text nodes created by Prism)
        const traverse = (node)=>{
            if (found) return;
            if (node.nodeType === Node.TEXT_NODE) {
                const nodeLength = node.textContent?.length || 0;
                if (totalOffset + nodeLength >= offset) {
                    const finalOffset = offset - totalOffset;
                    const range = document.createRange();
                    const selection = window.getSelection();
                    try {
                        range.setStart(node, finalOffset);
                        range.collapse(true);
                        selection?.removeAllRanges();
                        selection?.addRange(range);
                        found = true;
                    } catch (e) {
                        console.error("Error setting caret range:", e);
                    }
                    return;
                }
                totalOffset += nodeLength;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Traverse children of element nodes
                for(let i = 0; i < node.childNodes.length; i++){
                    traverse(node.childNodes[i]);
                }
            }
        };
        traverse(element);
        // Fallback: If not found, place cursor at the end.
        if (!found) {
            element.focus();
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            range.collapse(false); // Collapse to the end
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    };
    // --- End Cursor Preservation Utility Functions ---
    // useEffect 1: Initialize editableContent state when 'files' prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newContent = {};
        files.forEach((file)=>{
            // Only initialize if content for this path is missing or if files list changes completely
            if (!editableContent[file.path] || files.length !== Object.keys(editableContent).length) {
                newContent[file.path] = file.content;
            } else {
                // Keep existing edited content if the file path is the same
                newContent[file.path] = editableContent[file.path];
            }
        });
        setEditableContent(newContent);
    // We intentionally exclude editableContent from the dependency array to prevent infinite loops
    // and manage updates via the handleInput method.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        files
    ]);
    // useEffect 2: Load Prism libraries (as before)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const cssLink = undefined;
        const script = undefined;
    }, []);
    // useEffect 3: Apply syntax highlighting and restore cursor & scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!prismReady || !editorRef.current || isLoading || files.length === 0) return;
        // We need to wait briefly for the DOM to update after state changes
        const timer = setTimeout(()=>{
            if (window.Prism && editorRef.current) {
                try {
                    const activePath = focusedPath.current;
                    const pres = editorRef.current.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].codeArea}`);
                    let activePreElement = null;
                    pres.forEach((pre)=>{
                        // Highlight the content of the PRE element, which replaces innerHTML
                        window.Prism.highlightElement(pre);
                        // Identify the element that needs cursor and scroll restoration
                        const prePath = pre.getAttribute('data-filepath');
                        if (activePath && prePath === activePath) {
                            activePreElement = pre;
                        }
                    });
                    // Restore Cursor and Scroll Position after highlighting
                    if (activePath && activePreElement) {
                        // Cast to HTMLPreElement to ensure access to scroll properties
                        const preElement = activePreElement;
                        const offset = cursorOffsets.current.get(activePath);
                        if (offset !== undefined && offset !== null) {
                            setCaretOffset(preElement, offset);
                        }
                        const scroll = scrollPositions.current.get(activePath);
                        if (scroll) {
                            preElement.scrollTop = scroll.top;
                            preElement.scrollLeft = scroll.left;
                        }
                    }
                } catch (e) {
                    console.warn("Prism highlighting error:", e);
                }
            }
        }, 100);
        return ()=>clearTimeout(timer);
    }, [
        files,
        isLoading,
        prismReady,
        editableContent
    ]);
    // Handler to capture user input
    const handleInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filePath, event)=>{
        // Explicitly cast to HTMLPreElement to guarantee scroll properties exist
        const currentPreElement = event.currentTarget;
        // 1. Save Scroll Position BEFORE state change
        scrollPositions.current.set(filePath, {
            top: currentPreElement.scrollTop,
            left: currentPreElement.scrollLeft
        });
        // 2. Save Cursor Position BEFORE state change (DOM is still valid)
        const offset = getCaretOffset(currentPreElement);
        cursorOffsets.current.set(filePath, offset);
        // 3. Update Content
        const newContent = currentPreElement.innerText || "";
        setEditableContent((prev)=>({
                ...prev,
                [filePath]: newContent
            }));
    }, []);
    // Handlers for focus/blur to track the active editor
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filePath)=>{
        focusedPath.current = filePath;
    }, []);
    // We don't need a custom handleBlur since the restoration logic is in useEffect
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
    // No operation needed.
    }, []);
    // Update copyToClipboard to use edited content
    const copyToClipboard = async ()=>{
        // Create a list of the *current* content for selected files
        const contentToCopy = files.map((f)=>({
                path: f.path,
                content: editableContent[f.path] || f.content
            }));
        const text = contentToCopy.map((f)=>`${f.path}\n\n${f.content}`).join("\n\n" + "=".repeat(80) + "\n\n");
        // Fallback for document.execCommand('copy') in environments where navigator.clipboard might fail
        try {
            await navigator.clipboard.writeText(text);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Copied to clipboard!");
        } catch  {
            // Fallback: create a temporary textarea for copying
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = text;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Copied to clipboard! (Fallback)");
        }
    };
    // --- handleSave function removed as requested ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerLeft,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: files.length > 0 ? `${files.length} file(s) selected` : "No files selected"
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerRight,
                        children: files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyButton,
                                onClick: copyToClipboard,
                                children: "Copy All Code"
                            }, void 0, false, {
                                fileName: "[project]/components/CodeEditor.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this)
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CodeEditor.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editorContent,
                ref: editorRef,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading file..."
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 344,
                    columnNumber: 11
                }, this) : files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select files from the explorer to view their content"
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].codeBlocks,
                    children: files.map((file, index)=>{
                        // Use the currently edited content from state
                        const content = editableContent[file.path] || file.content;
                        const prismContent = content;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].codeBlock,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filePath,
                                            children: file.path
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeEditor.tsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileIndex,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeEditor.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    // Apply both language class for Prism and custom style class
                                    className: `${getLanguageClass(file.path)} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].codeArea}`,
                                    contentEditable: true,
                                    spellCheck: "true",
                                    "data-filepath": file.path,
                                    onFocus: ()=>handleFocus(file.path),
                                    onInput: (e)=>handleInput(file.path, e),
                                    // Initialize content with raw text. This is replaced by Prism's HTML on effect run.
                                    dangerouslySetInnerHTML: {
                                        __html: prismContent
                                    },
                                    // Accessibility attributes
                                    role: "textbox",
                                    "aria-multiline": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, file.path, true, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 360,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CodeEditor.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CodeEditor.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
function getLanguageClass(filepath) {
    const ext = filepath.split(".").pop()?.toLowerCase();
    const languageMap = {
        js: "language-javascript",
        ts: "language-typescript",
        tsx: "language-typescript",
        jsx: "language-javascript",
        py: "language-python",
        json: "language-json",
        css: "language-css",
        html: "language-markup",
        md: "language-markdown"
    };
    // Prism requires a language- prefix to identify the code block type
    return languageMap[ext || ""] || "language-text";
}
}),
"[project]/components/PricingNotice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingNotice",
    ()=>PricingNotice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PricingNotice() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "16px",
            textAlign: "center",
            fontSize: "14px",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Anonymous users:"
            }, void 0, false, {
                fileName: "[project]/components/PricingNotice.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            " Max 100 files per ZIP, no individual file downloads.",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/register",
                style: {
                    marginLeft: "8px",
                    textDecoration: "underline"
                },
                children: "Sign in to unlock more features"
            }, void 0, false, {
                fileName: "[project]/components/PricingNotice.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PricingNotice.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ShareModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeBtn": "ShareModal-module__8VmaJa__closeBtn",
  "copyBtn": "ShareModal-module__8VmaJa__copyBtn",
  "fileItem": "ShareModal-module__8VmaJa__fileItem",
  "fileList": "ShareModal-module__8VmaJa__fileList",
  "generateBtn": "ShareModal-module__8VmaJa__generateBtn",
  "generateSection": "ShareModal-module__8VmaJa__generateSection",
  "info": "ShareModal-module__8VmaJa__info",
  "label": "ShareModal-module__8VmaJa__label",
  "modal": "ShareModal-module__8VmaJa__modal",
  "modalBody": "ShareModal-module__8VmaJa__modalBody",
  "modalContent": "ShareModal-module__8VmaJa__modalContent",
  "modalHeader": "ShareModal-module__8VmaJa__modalHeader",
  "newPinBtn": "ShareModal-module__8VmaJa__newPinBtn",
  "pin": "ShareModal-module__8VmaJa__pin",
  "pinBox": "ShareModal-module__8VmaJa__pinBox",
  "pinDisplay": "ShareModal-module__8VmaJa__pinDisplay",
});
}),
"[project]/components/ShareModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareModal",
    ()=>ShareModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ShareModal.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function ShareModal({ isOpen, onClose, selectedFilePaths, getFileContent }) {
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGeneratePin = async ()=>{
        if (selectedFilePaths.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select files to share");
            return;
        }
        setIsGenerating(true);
        // --- START: FIX FOR 400 BAD REQUEST ---
        // 1. Prepare the files array with full content objects
        const filesToSend = [];
        for (const path of selectedFilePaths){
            // *** ASSUMPTION & TEMPORARY FIX ***
            // Replace the mock function below with your actual logic to fetch file data 
            // from your file system state/context using the path.
            // This is a placeholder for demonstration:
            const fileData = {
                name: path.split('/').pop() || 'file',
                content: `// Placeholder content for ${path}`
            };
            // If you have a prop like getFileContent:
            // const fileData = getFileContent(path);
            if ("TURBOPACK compile-time truthy", 1) {
                filesToSend.push({
                    path: path,
                    name: fileData.name,
                    content: fileData.content
                });
            }
        }
        if (filesToSend.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Could not retrieve content for selected files.");
            setIsGenerating(false);
            return;
        }
        // --- END: FIX FOR 400 BAD REQUEST ---
        try {
            const response = await fetch("/api/share/generate-pin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Send the array of full file objects instead of just paths
                body: JSON.stringify({
                    files: filesToSend
                })
            });
            const data = await response.json();
            if (!response.ok) {
                // The server will now return a 400 if filesToSend is empty or invalid
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to generate PIN");
                return;
            }
            setPin(data.pin);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("PIN generated! Valid for 7 days.");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to generate PIN");
        } finally{
            setIsGenerating(false);
        }
    };
    const handleCopyPin = ()=>{
        if (pin) {
            // Use execCommand for broader compatibility in some environments
            try {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = pin;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
                setCopied(true);
                setTimeout(()=>setCopied(false), 2000);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to copy PIN to clipboard.");
            }
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Share Files"
                        }, void 0, false, {
                            fileName: "[project]/components/ShareModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/ShareModal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShareModal.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                    children: pin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pinDisplay,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: "Your Share PIN:"
                            }, void 0, false, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pinBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pin,
                                        children: pin
                                    }, void 0, false, {
                                        fileName: "[project]/components/ShareModal.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyBtn,
                                        onClick: handleCopyPin,
                                        children: copied ? "✓ Copied!" : "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ShareModal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].info,
                                children: "Share this PIN with others to let them access your files. Valid for 7 days."
                            }, void 0, false, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newPinBtn,
                                onClick: ()=>setPin(null),
                                children: "Generate New PIN"
                            }, void 0, false, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShareModal.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].generateSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    "Selected files: ",
                                    selectedFilePaths.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileList,
                                children: [
                                    selectedFilePaths.slice(0, 5).map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileItem,
                                            children: file.split("/").pop()
                                        }, file, false, {
                                            fileName: "[project]/components/ShareModal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)),
                                    selectedFilePaths.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileItem,
                                        children: [
                                            "+",
                                            selectedFilePaths.length - 5,
                                            " more"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ShareModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].generateBtn,
                                onClick: handleGeneratePin,
                                disabled: isGenerating || selectedFilePaths.length === 0,
                                children: isGenerating ? "Generating..." : "Generate Share PIN"
                            }, void 0, false, {
                                fileName: "[project]/components/ShareModal.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShareModal.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ShareModal.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ShareModal.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ShareModal.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AccessSharedFiles.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accessBtn": "AccessSharedFiles-module__bqgaga__accessBtn",
  "closeBtn": "AccessSharedFiles-module__bqgaga__closeBtn",
  "downloadBtn": "AccessSharedFiles-module__bqgaga__downloadBtn",
  "fileItem": "AccessSharedFiles-module__bqgaga__fileItem",
  "fileList": "AccessSharedFiles-module__bqgaga__fileList",
  "filesDisplay": "AccessSharedFiles-module__bqgaga__filesDisplay",
  "input": "AccessSharedFiles-module__bqgaga__input",
  "label": "AccessSharedFiles-module__bqgaga__label",
  "modal": "AccessSharedFiles-module__bqgaga__modal",
  "modalBody": "AccessSharedFiles-module__bqgaga__modalBody",
  "modalContent": "AccessSharedFiles-module__bqgaga__modalContent",
  "modalHeader": "AccessSharedFiles-module__bqgaga__modalHeader",
  "newAccessBtn": "AccessSharedFiles-module__bqgaga__newAccessBtn",
  "pinInput": "AccessSharedFiles-module__bqgaga__pinInput",
});
}),
"[project]/components/AccessSharedFiles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// C:\Users\abhig\Downloads\zip-explorer1\components\AccessSharedFiles.tsx
__turbopack_context__.s([
    "AccessSharedFiles",
    ()=>AccessSharedFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
// Assuming this is the correct path to your style module
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/AccessSharedFiles.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function AccessSharedFiles({ isOpen, onClose }) {
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accessed, setAccessed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAccessFiles = async ()=>{
        if (!pin || !/^\d{4}$/.test(pin)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Invalid PIN format (4 digits)");
            return;
        }
        setIsLoading(true);
        try {
            // 1. Fetch files associated with the PIN via the API route
            const response = await fetch("/api/share/access", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    pin
                })
            });
            const data = await response.json();
            if (!response.ok) {
                // Handle specific expiration status (410) if the backend returns it
                if (response.status === 410) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("The share PIN has expired.");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to access files");
                }
                setFiles([]); // Ensure files state is reset on failure
                return;
            }
            // FIX: Ensure file objects have a valid path before setting state.
            // The API route should provide { path: string, name: string }
            const validFiles = data.files.filter((f)=>f && f.path && f.name);
            setFiles(validFiles);
            setAccessed(true);
            if (validFiles.length === 0) {
                // Warning if the share exists but contains no valid files
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("Share accessed, but no files are available.");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Files accessed! Found ${validFiles.length} file(s).`);
            }
        } catch (error) {
            console.error("Access Shared Files Error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to access files due to an error.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleDownloadShared = async ()=>{
        if (!pin) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("PIN is required for download.");
            return;
        }
        const validFilePaths = files.map((f)=>f.path).filter((p)=>p && typeof p === 'string');
        if (validFilePaths.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No valid files to download.");
            return;
        }
        setIsDownloading(true);
        try {
            // 2. Call the dedicated API endpoint for PIN-based download
            const response = await fetch("/api/share/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Pass the PIN and the list of paths to be zipped
                body: JSON.stringify({
                    pin,
                    files: validFilePaths
                })
            });
            if (!response.ok) {
                // The error response needs to be parsed if available
                let errorData = {
                    error: "Download failed due to server error."
                };
                try {
                    errorData = await response.json();
                } catch (e) {
                // response was not JSON, use generic message
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorData.error || "Download failed");
                return;
            }
            // 3. Initiate client-side download from the blob response
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "shared_files.zip";
            a.click();
            window.URL.revokeObjectURL(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Download started!");
        } catch (error) {
            console.error("Download shared files failed:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Download failed due to client error.");
        } finally{
            setIsDownloading(false);
        }
    };
    if (!isOpen) return null;
    const fileCount = files.length;
    // Updated text to reflect "FILES AVAILABLE" structure
    const fileCountText = fileCount === 1 ? "FILE AVAILABLE" : "FILES AVAILABLE";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Access Shared Files"
                        }, void 0, false, {
                            fileName: "[project]/components/AccessSharedFiles.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/AccessSharedFiles.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AccessSharedFiles.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                    children: !accessed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pinInput,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: "Enter Share PIN:"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                maxLength: 4,
                                placeholder: "0000",
                                value: pin,
                                // Only allow digits and limit length to 4
                                onChange: (e)=>setPin(e.target.value.replace(/\D/g, "").slice(0, 4)),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accessBtn,
                                onClick: handleAccessFiles,
                                disabled: isLoading || pin.length !== 4,
                                children: isLoading ? "Accessing..." : "Access Files"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AccessSharedFiles.tsx",
                        lineNumber: 152,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filesDisplay,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    fileCount,
                                    " ",
                                    fileCountText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 169,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileList,
                                children: fileCount > 0 ? files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/AccessSharedFiles.tsx",
                                            lineNumber: 175,
                                            columnNumber: 45
                                        }, this)
                                    }, file.path || index, false, {
                                        fileName: "[project]/components/AccessSharedFiles.tsx",
                                        lineNumber: 174,
                                        columnNumber: 41
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noFiles,
                                    children: "No files available in this share."
                                }, void 0, false, {
                                    fileName: "[project]/components/AccessSharedFiles.tsx",
                                    lineNumber: 179,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadBtn,
                                onClick: handleDownloadShared,
                                disabled: isDownloading || fileCount === 0,
                                children: isDownloading ? "⬇️ Preparing Download..." : "⬇️ Download All Files"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newAccessBtn,
                                onClick: ()=>{
                                    setPin("");
                                    setFiles([]);
                                    setAccessed(false);
                                },
                                children: "Access Another PIN"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 190,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AccessSharedFiles.tsx",
                        lineNumber: 168,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AccessSharedFiles.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AccessSharedFiles.tsx",
            lineNumber: 142,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AccessSharedFiles.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "page-module__E0kJGG__container",
  "editor": "page-module__E0kJGG__editor",
  "empty": "page-module__E0kJGG__empty",
  "errorBanner": "page-module__E0kJGG__errorBanner",
  "errorClose": "page-module__E0kJGG__errorClose",
  "errorIcon": "page-module__E0kJGG__errorIcon",
  "errorMessage": "page-module__E0kJGG__errorMessage",
  "mainContent": "page-module__E0kJGG__mainContent",
  "sidebar": "page-module__E0kJGG__sidebar",
  "slideIn": "page-module__E0kJGG__slideIn",
});
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FileTree.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CodeEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PricingNotice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PricingNotice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ShareModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AccessSharedFiles.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/page.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [fileTree, setFileTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileCount, setFileCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]) // This state holds the file data needed for saving
    ;
    const [selectedFilePaths, setSelectedFilePaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingFile, setIsLoadingFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAccessShared, setShowAccessShared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine userTier here for the PricingNotice and other components that need it
    const userTier = session?.user?.subscriptionPlan || "anonymous";
    // Tier limits logic remains, used for upload checks (which are commented out but should exist)
    const tierLimits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            anonymous: {
                maxFilesPerZip: 100,
                canDownloadIndividual: false,
                canDownloadZip: false
            },
            free: {
                maxFilesPerZip: 200,
                canDownloadIndividual: true,
                canDownloadZip: true
            },
            monthly: {
                maxFilesPerZip: Number.POSITIVE_INFINITY,
                canDownloadIndividual: true,
                canDownloadZip: true
            },
            yearly: {
                maxFilesPerZip: Number.POSITIVE_INFINITY,
                canDownloadIndividual: true,
                canDownloadZip: true
            }
        }), []);
    /**
	 * Memoized function to retrieve file content and name based on path.
	 * This is required by ShareModal.tsx to send the full file object to the API.
	 */ const getFileContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((path)=>{
        const file = selectedFiles.find((f)=>f.path === path);
        if (file) {
            // We need to extract the name, as the selectedFiles array doesn't explicitly store it
            const name = path.split("/").pop() || "";
            if (name) {
                return {
                    name,
                    content: file.content
                };
            }
        }
        return null;
    }, [
        selectedFiles
    ]);
    // New: Handler for loading files from a saved ZIP history
    const handleLoadSavedZip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((loadedFiles)=>{
        // Clear current state
        setSelectedFiles([]);
        setSelectedFilePaths(new Set());
        const fileMap = {};
        loadedFiles.forEach((f)=>{
            fileMap[f.path] = f.content;
        });
        // Rebuild the file tree
        const tree = buildFileTree(fileMap);
        // Update state with loaded data
        setFileTree(tree);
        setFileCount(loadedFiles.length);
        // IMPORTANT: Set the loaded files as the new content.
        setSelectedFiles(loadedFiles);
        // Since we load the whole ZIP, we should clear the session ID to start fresh, 
        // or retrieve a new one if necessary for API calls. For simplicity, we clear it here.
        setSessionId("");
    }, []);
    const handleUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file)=>{
        setIsLoading(true);
        setError(null);
        setFileTree(null);
        setSelectedFiles([]);
        setSelectedFilePaths(new Set());
        try {
            const formData = new FormData();
            formData.append("file", file);
            const result = await fetch("/api/zip/extract", {
                method: "POST",
                body: formData
            });
            const data = await result.json();
            if (!result.ok) {
                setError(data.error || "Failed to extract zip file");
                return;
            }
            // ⭐ FIX: Store ALL extracted file contents for saving later
            const allFilesContent = Object.entries(data.files).map(([path, content])=>({
                    path,
                    content: content
                }));
            setSelectedFiles(allFilesContent);
            // End of FIX
            setFileTree(data.files ? buildFileTree(data.files) : null);
            setFileCount(data.fileCount);
            setSessionId(data.sessionId);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally{
            setIsLoading(false);
        }
    }, []);
    // NOTE: handleFileSelect is now only responsible for tracking which files are open in the editor.
    // It no longer needs to fetch content if all content is loaded on upload.
    // However, your original implementation fetches file content on select. I'll preserve the fetch logic 
    // but skip adding to `selectedFiles` if it's already present (since it's all loaded on upload now).
    // To avoid redundancy and fix the file count issue, I'll remove the content fetching logic from here
    // and assume `selectedFiles` contains all file content after `handleUpload`.
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filePath)=>{
        const isAlreadySelected = selectedFilePaths.has(filePath);
        if (isAlreadySelected) {
            setSelectedFilePaths((prev)=>{
                const next = new Set(prev);
                next.delete(filePath);
                return next;
            });
        } else {
            // We assume file content is already in `selectedFiles` from handleUpload.
            // We only update the list of paths for the CodeEditor to display.
            setSelectedFilePaths((prev)=>new Set([
                    ...prev,
                    filePath
                ]));
        }
    }, [
        selectedFilePaths
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TopBar"], {
                fileCount: fileCount,
                onUpload: handleUpload,
                isLoading: isLoading,
                selectedFilePaths: Array.from(selectedFilePaths),
                sessionId: sessionId,
                onShareClick: ()=>setShowShareModal(true),
                onAccessSharedClick: ()=>setShowAccessShared(true),
                onLoadSavedZip: handleLoadSavedZip,
                // ⭐ CORRECT: Pass the required 'files' prop from state (now containing ALL content)
                files: selectedFiles
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 179,
                columnNumber: 4
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorBanner,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorIcon,
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 195,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorClose,
                        onClick: ()=>setError(null),
                        "aria-label": "Close error",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 197,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 194,
                columnNumber: 5
            }, this),
            !session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PricingNotice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PricingNotice"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 204,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareModal"], {
                isOpen: showShareModal,
                onClose: ()=>setShowShareModal(false),
                selectedFilePaths: Array.from(selectedFilePaths),
                getFileContent: getFileContent
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 206,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessSharedFiles"], {
                isOpen: showAccessShared,
                onClose: ()=>setShowAccessShared(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 213,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                        children: fileTree ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileTree"], {
                            tree: fileTree,
                            onFileSelect: handleFileSelect,
                            selectedFiles: selectedFilePaths
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 218,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Upload a .zip file to explore its contents"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 220,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editor,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeEditor"], {
                            files: selectedFiles.filter((f)=>selectedFilePaths.has(f.path)),
                            isLoading: isLoadingFile,
                            sessionId: sessionId,
                            userTier: userTier
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 225,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 215,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 178,
        columnNumber: 3
    }, this);
}
function buildFileTree(files) {
    const root = {
        name: "root",
        path: ".",
        type: "folder",
        children: []
    };
    const nodeMap = new Map();
    nodeMap.set(".", root);
    const paths = Object.keys(files);
    for (const filePath of paths){
        const parts = filePath.split("/").filter((p)=>p);
        for(let i = 0; i < parts.length; i++){
            const fullPath = parts.slice(0, i + 1).join("/");
            if (!nodeMap.has(fullPath)) {
                const name = parts[i];
                const isLast = i === parts.length - 1;
                const isDirectory = !isLast;
                const node = {
                    name,
                    path: fullPath,
                    type: isDirectory ? "folder" : "file",
                    ...isDirectory && {
                        children: []
                    }
                };
                nodeMap.set(fullPath, node);
            }
        }
    }
    for (const [path, node] of nodeMap.entries()){
        if (path === ".") continue;
        const parentPath = path.substring(0, path.lastIndexOf("/")) || ".";
        const parent = nodeMap.get(parentPath);
        if (parent && parent.type === "folder" && parent.children) {
            parent.children.push(node);
        }
    }
    const sortNode = (node)=>{
        if (node.children) {
            node.children.sort((a, b)=>{
                if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
                return a.name.localeCompare(b.name);
            });
            node.children.forEach(sortNode);
        }
    };
    sortNode(root);
    return root;
}
}),
];

//# sourceMappingURL=_578ebeeb._.js.map