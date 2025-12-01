(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ThemeToggle.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "toggle": "ThemeToggle-module__3b5zuq__toggle",
});
}),
"[project]/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const isDarkMode = document.documentElement.classList.contains("dark");
            setIsDark(isDarkMode);
        }
    }["ThemeToggle.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
        onClick: toggleTheme,
        title: isDark ? "Switch to light mode" : "Switch to dark mode",
        "aria-label": "Toggle theme",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }, void 0, false, {
                    fileName: "[project]/components/ThemeToggle.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(ThemeToggle, "4PPoEPuUE5ZM05wB23N+LA9kxlg=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UploadArea.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "UploadArea-module__IZzUWW__button",
  "container": "UploadArea-module__IZzUWW__container",
  "loading": "UploadArea-module__IZzUWW__loading",
  "spin": "UploadArea-module__IZzUWW__spin",
  "spinner": "UploadArea-module__IZzUWW__spinner",
});
}),
"[project]/components/UploadArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadArea",
    ()=>UploadArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/UploadArea.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function UploadArea({ onUpload, isLoading }) {
    _s();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} ${isLoading ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading : ""}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                onClick: handleClick,
                disabled: isLoading,
                title: "Click to upload or drag and drop a .zip file",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        "Uploading..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/UploadArea.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "17 8 12 3 7 8"
                                }, void 0, false, {
                                    fileName: "[project]/components/UploadArea.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
_s(UploadArea, "YQqvMxdmg33cmOXmQcOjJm+FLVI=");
_c = UploadArea;
var _c;
__turbopack_context__.k.register(_c, "UploadArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UserMenu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dropdown": "UserMenu-module__pCivJG__dropdown",
  "loginBtn": "UserMenu-module__pCivJG__loginBtn",
  "menuItem": "UserMenu-module__pCivJG__menuItem",
  "userBtn": "UserMenu-module__pCivJG__userBtn",
  "userMenu": "UserMenu-module__pCivJG__userMenu",
});
}),
"[project]/components/UserMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenu",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/UserMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserMenu() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine userTier locally based on the session status
    const userTier = status === "authenticated" ? "free" : "anonymous" // Simplified logic: if logged in, assume 'free' tier
    ;
    // Display nothing while loading the session
    if (status === "loading") {
        return null;
    }
    // Display Sign In link if not authenticated
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/login",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginBtn,
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/components/UserMenu.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    // Display User Menu if authenticated
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userMenu,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userBtn,
                onClick: ()=>setShowMenu(!showMenu),
                children: [
                    "👤 ",
                    session.user?.name || "User",
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserMenu.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/billing",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                        children: [
                            "Billing (",
                            userTier,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(),
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/components/UserMenu.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserMenu.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserMenu.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(UserMenu, "Di8xfvBelwXovPeZGt0iSMxiwXA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = UserMenu;
var _c;
__turbopack_context__.k.register(_c, "UserMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DownloadMenu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "downloadBtn": "DownloadMenu-module__obcEYa__downloadBtn",
  "downloadContainer": "DownloadMenu-module__obcEYa__downloadContainer",
});
}),
"[project]/components/DownloadMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadMenu",
    ()=>DownloadMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/DownloadMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DownloadMenu({ selectedFilePaths, sessionId, userTier }) {
    _s();
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use a type guard or fallback for the userTier mapping
    const effectiveTier = [
        "anonymous",
        "free",
        "monthly",
        "yearly"
    ].includes(userTier) ? userTier : "free";
    const canDownload = {
        anonymous: false,
        free: selectedFilePaths.length <= 10,
        monthly: true,
        yearly: true
    }[effectiveTier] // Cast for type safety
    ;
    const handleDownload = async (downloadType)=>{
        // --- Initial validation ---
        if (selectedFilePaths.length === 0 || selectedFilePaths.some((p)=>!p)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select valid files to download.");
            console.error("Download blocked: selectedFilePaths contains 0 or invalid paths:", selectedFilePaths);
            return;
        }
        if (!canDownload) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Your plan doesn't allow this download. Please upgrade.");
            return;
        }
        setIsDownloading(true);
        try {
            const response = await fetch("/api/files/download", {
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
            if (!response.ok) {
                const error = await response.json();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.error || "Download failed");
                return;
            }
            // --- Download initiation logic ---
            const blob = await response.blob();
            // Determine the filename based on type and number of files
            let filename = 'download';
            if (downloadType === "zip" || selectedFilePaths.length > 1) {
                filename = "files.zip";
            } else if (selectedFilePaths.length === 1) {
                // Extract filename from the path
                filename = selectedFilePaths[0].split("/").pop() || "file";
            }
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Download of ${filename} started!`);
        } catch (error) {
            console.error("Frontend Download failed:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Download failed due to client error.");
        } finally{
            setIsDownloading(false);
        }
    };
    // Determine if we should show the ZIP button
    const showZipButton = selectedFilePaths.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadContainer,
        children: [
            !showZipButton ? // Single file button
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadBtn,
                onClick: ()=>handleDownload("individual"),
                disabled: isDownloading || !canDownload || selectedFilePaths.length === 0,
                title: canDownload ? `Download: ${selectedFilePaths[0]?.split("/").pop() || 'file'}` : "Upgrade plan to download",
                children: isDownloading ? "⬇️ Downloading..." : "⬇️ Download File"
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : // Multiple files button
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadBtn,
                onClick: ()=>handleDownload("zip"),
                disabled: isDownloading || !canDownload || selectedFilePaths.length === 0,
                title: canDownload ? `Download ${selectedFilePaths.length} files as ZIP` : "Upgrade plan to download ZIP",
                children: isDownloading ? "⬇️ Downloading..." : "⬇️ Download ZIP"
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            effectiveTier === 'free' && selectedFilePaths.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].limitNotice,
                children: "Free plan limited to 10 files per ZIP. Please deselect files or upgrade."
            }, void 0, false, {
                fileName: "[project]/components/DownloadMenu.tsx",
                lineNumber: 117,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DownloadMenu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(DownloadMenu, "I+IY6bHIajfeJNOs4vl6hY3OWII=");
_c = DownloadMenu;
var _c;
__turbopack_context__.k.register(_c, "DownloadMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SaveHistoryButton.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "SaveHistoryButton-module__7aqaaq__btn",
  "modal": "SaveHistoryButton-module__7aqaaq__modal",
  "modalBody": "SaveHistoryButton-module__7aqaaq__modalBody",
  "modalContent": "SaveHistoryButton-module__7aqaaq__modalContent",
  "modalHeader": "SaveHistoryButton-module__7aqaaq__modalHeader",
  "useBtn": "SaveHistoryButton-module__7aqaaq__useBtn",
  "zipInfo": "SaveHistoryButton-module__7aqaaq__zipInfo",
  "zipItem": "SaveHistoryButton-module__7aqaaq__zipItem",
  "zipList": "SaveHistoryButton-module__7aqaaq__zipList",
  "zipMeta": "SaveHistoryButton-module__7aqaaq__zipMeta",
  "zipName": "SaveHistoryButton-module__7aqaaq__zipName",
});
}),
"[project]/components/SaveHistoryButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveHistoryButton",
    ()=>SaveHistoryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SaveHistoryButton.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SaveHistoryButton({ sessionId }) {
    _s();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedZips, setSavedZips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchSavedZips = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch("/api/save-zip/list");
            const data = await response.json();
            if (data.success) {
                setSavedZips(data.savedZips);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load saved ZIPs");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                onClick: ()=>{
                    setShowModal(true);
                    fetchSavedZips();
                },
                title: "View saved ZIP folders",
                children: "💾 History"
            }, void 0, false, {
                fileName: "[project]/components/SaveHistoryButton.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Saved ZIP Folders"
                                }, void 0, false, {
                                    fileName: "[project]/components/SaveHistoryButton.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/SaveHistoryButton.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SaveHistoryButton.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBody,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this) : savedZips.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No saved ZIPs yet"
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zipList,
                                children: savedZips.map((zip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zipItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zipInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zipName,
                                                        children: zip.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zipMeta,
                                                        children: [
                                                            zip.fileCount,
                                                            " files"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                                lineNumber: 67,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].useBtn,
                                                children: "Use"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                                lineNumber: 71,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, zip._id, true, {
                                        fileName: "[project]/components/SaveHistoryButton.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/SaveHistoryButton.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SaveHistoryButton.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SaveHistoryButton.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SaveHistoryButton.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(SaveHistoryButton, "dfQvzi0kFBvKWWc9D2huLXPys+A=");
_c = SaveHistoryButton;
var _c;
__turbopack_context__.k.register(_c, "SaveHistoryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TopBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accessBtn": "TopBar-module__dQ673a__accessBtn",
  "label": "TopBar-module__dQ673a__label",
  "left": "TopBar-module__dQ673a__left",
  "logo": "TopBar-module__dQ673a__logo",
  "middle": "TopBar-module__dQ673a__middle",
  "right": "TopBar-module__dQ673a__right",
  "shareBtn": "TopBar-module__dQ673a__shareBtn",
  "stats": "TopBar-module__dQ673a__stats",
  "title": "TopBar-module__dQ673a__title",
  "topbar": "TopBar-module__dQ673a__topbar",
  "value": "TopBar-module__dQ673a__value",
});
}),
"[project]/components/TopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DownloadMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SaveHistoryButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/TopBar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)"); // Keep useSession here
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TopBar({ fileCount, onUpload, isLoading, selectedFilePaths, sessionId, onShareClick, onAccessSharedClick }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])() // Using session here
    ;
    // Determine userTier locally for DownloadMenu and SaveHistoryButton
    const userTier = session ? "free" : "anonymous";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2l.5 1h6.5a1 1 0 0 1 1 1v3H4V4a1 1 0 0 1 1-1h6.5l.5-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "4",
                                    y: "5",
                                    width: "16",
                                    height: "14",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 9h8M8 13h8M8 17h4",
                                    strokeOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/TopBar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TopBar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Code Explorer"
                        }, void 0, false, {
                            fileName: "[project]/components/TopBar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TopBar.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadArea"], {
                    onUpload: onUpload,
                    isLoading: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/TopBar.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                children: "Files:"
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].value,
                                children: fileCount
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    selectedFilePaths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadMenu"], {
                                selectedFilePaths: selectedFilePaths,
                                sessionId: sessionId,
                                userTier: userTier
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtn,
                                onClick: onShareClick,
                                title: "Share files with PIN",
                                children: "📤 Share"
                            }, void 0, false, {
                                fileName: "[project]/components/TopBar.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    userTier !== "anonymous" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SaveHistoryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveHistoryButton"], {
                        sessionId: sessionId
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 65,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accessBtn,
                        onClick: onAccessSharedClick,
                        title: "Access shared files with PIN",
                        children: "🔓 Access Shared"
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMenu"], {}, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TopBar.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(TopBar, "xGqsfA9Yc4bug2CeORcyTsHwvXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FileTree.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "checkbox": "FileTree-module__b3B1pW__checkbox",
  "checkboxWrapper": "FileTree-module__b3B1pW__checkboxWrapper",
  "children": "FileTree-module__b3B1pW__children",
  "container": "FileTree-module__b3B1pW__container",
  "expanded": "FileTree-module__b3B1pW__expanded",
  "fileLabel": "FileTree-module__b3B1pW__fileLabel",
  "folderLabel": "FileTree-module__b3B1pW__folderLabel",
  "label": "FileTree-module__b3B1pW__label",
  "name": "FileTree-module__b3B1pW__name",
  "nodeContent": "FileTree-module__b3B1pW__nodeContent",
  "nodeWrapper": "FileTree-module__b3B1pW__nodeWrapper",
  "selected": "FileTree-module__b3B1pW__selected",
  "toggle": "FileTree-module__b3B1pW__toggle",
  "toggleIcon": "FileTree-module__b3B1pW__toggleIcon",
});
}),
"[project]/components/FileTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileTree",
    ()=>FileTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/FileTree.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FileTree({ tree, onFileSelect, selectedFiles }) {
    _s();
    const [expandedFolders, setExpandedFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "."
    ]));
    const toggleFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileTree.useCallback[toggleFolder]": (folderPath)=>{
            setExpandedFolders({
                "FileTree.useCallback[toggleFolder]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(folderPath)) {
                        next.delete(folderPath);
                    } else {
                        next.add(folderPath);
                    }
                    return next;
                }
            }["FileTree.useCallback[toggleFolder]"]);
        }
    }["FileTree.useCallback[toggleFolder]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeNode, {
            node: tree,
            expandedFolders: expandedFolders,
            toggleFolder: toggleFolder,
            onFileSelect: onFileSelect,
            selectedFiles: selectedFiles,
            depth: 0
        }, void 0, false, {
            fileName: "[project]/components/FileTree.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FileTree.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(FileTree, "k8ZEjdrd3v4Avn4nrjepP35FtsE=");
_c = FileTree;
function FileTreeNode({ node, expandedFolders, toggleFolder, onFileSelect, selectedFiles, depth }) {
    const isExpanded = expandedFolders.has(node.path);
    const isFile = node.type === "file";
    const isSelected = selectedFiles.has(node.path);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeWrapper,
        style: {
            paddingLeft: `${depth * 16}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeContent,
                children: [
                    !isFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
                        onClick: handleToggle,
                        "aria-label": isExpanded ? "Collapse" : "Expand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleIcon} ${isExpanded ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expanded : ""}`,
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "6 9 12 3 6 9"
                            }, void 0, false, {
                                fileName: "[project]/components/FileTree.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FileTree.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    isFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox,
                            onChange: handleCheckboxChange,
                            checked: isSelected,
                            id: `file-${node.path}`
                        }, void 0, false, {
                            fileName: "[project]/components/FileTree.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: isFile ? `file-${node.path}` : undefined,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} ${isFile ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileLabel : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderLabel} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""}`,
                        children: [
                            getFileIcon(node.name),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                children: node.name
                            }, void 0, false, {
                                fileName: "[project]/components/FileTree.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            !isFile && isExpanded && node.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileTree$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].children,
                children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeNode, {
                        node: child,
                        expandedFolders: expandedFolders,
                        toggleFolder: toggleFolder,
                        onFileSelect: onFileSelect,
                        selectedFiles: selectedFiles,
                        depth: depth + 1
                    }, child.path, false, {
                        fileName: "[project]/components/FileTree.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FileTree.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FileTree.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c1 = FileTreeNode;
function getFileIcon(filename) {
    const ext = filename.split(".").pop()?.toLowerCase();
    const iconMap = {
        js: "📄",
        ts: "📘",
        tsx: "⚛️",
        jsx: "⚛️",
        json: "🔷",
        css: "🎨",
        html: "🌐",
        md: "📝",
        py: "🐍"
    };
    return iconMap[ext || ""] || "📄";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FileTree");
__turbopack_context__.k.register(_c1, "FileTreeNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CodeEditor.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
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
"[project]/components/CodeEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeEditor",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CodeEditor.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CodeEditor({ files, isLoading, sessionId, userTier }) {
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [prismReady, setPrismReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.Prism) {
                setPrismReady(true);
                return;
            }
            const cssLink = document.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
            document.head.appendChild(cssLink);
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
            script.onload = ({
                "CodeEditor.useEffect": ()=>{
                    const commonLanguages = [
                        "javascript",
                        "typescript",
                        "python",
                        "bash",
                        "json",
                        "css",
                        "markup"
                    ];
                    let loaded = 0;
                    commonLanguages.forEach({
                        "CodeEditor.useEffect": (lang)=>{
                            const langScript = document.createElement("script");
                            langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
                            langScript.onload = ({
                                "CodeEditor.useEffect": ()=>{
                                    loaded++;
                                    if (loaded === commonLanguages.length) {
                                        setPrismReady(true);
                                    }
                                }
                            })["CodeEditor.useEffect"];
                            langScript.onerror = ({
                                "CodeEditor.useEffect": ()=>{
                                    loaded++;
                                    if (loaded === commonLanguages.length) {
                                        setPrismReady(true);
                                    }
                                }
                            })["CodeEditor.useEffect"];
                            document.head.appendChild(langScript);
                        }
                    }["CodeEditor.useEffect"]);
                }
            })["CodeEditor.useEffect"];
            script.onerror = ({
                "CodeEditor.useEffect": ()=>{
                    console.warn("Failed to load Prism");
                    setPrismReady(true);
                }
            })["CodeEditor.useEffect"];
            document.head.appendChild(script);
        }
    }["CodeEditor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (!prismReady || !editorRef.current || isLoading || files.length === 0) return;
            setTimeout({
                "CodeEditor.useEffect": ()=>{
                    if (window.Prism && editorRef.current) {
                        try {
                            ;
                            window.Prism.highlightAllUnder(editorRef.current);
                        } catch (e) {
                            console.warn("Prism highlighting error:", e);
                        }
                    }
                }
            }["CodeEditor.useEffect"], 100);
        }
    }["CodeEditor.useEffect"], [
        files,
        isLoading,
        prismReady
    ]);
    const copyToClipboard = async ()=>{
        const text = files.map((f)=>`${f.path}\n\n${f.content}`).join("\n\n" + "=".repeat(80) + "\n\n");
        try {
            await navigator.clipboard.writeText(text);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Copied to clipboard!");
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to copy to clipboard");
        }
    };
    const handleSave = async ()=>{
        if (userTier === "anonymous" || userTier === "free") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Upgrade to save ZIP folders");
            return;
        }
        const zipName = prompt("Enter a name for this ZIP:");
        if (!zipName) return;
        try {
            const response = await fetch("/api/save-zip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    zipName,
                    files
                })
            });
            const data = await response.json();
            if (response.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("ZIP saved successfully!");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to save ZIP");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save ZIP");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLeft,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: files.length > 0 ? `${files.length} file(s) selected` : "No files selected"
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerRight,
                        children: files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyButton,
                                    onClick: copyToClipboard,
                                    children: "Copy All Code"
                                }, void 0, false, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                userTier !== "anonymous" && userTier !== "free" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                    onClick: handleSave,
                                    children: "💾 Save"
                                }, void 0, false, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CodeEditor.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorContent,
                ref: editorRef,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading file..."
                        }, void 0, false, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this) : files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select files from the explorer to view their content"
                    }, void 0, false, {
                        fileName: "[project]/components/CodeEditor.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlocks,
                    children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlock,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filePath,
                                            children: file.path
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeEditor.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeEditor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIndex,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeEditor.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: getLanguageClass(file.path),
                                        children: file.content
                                    }, void 0, false, {
                                        fileName: "[project]/components/CodeEditor.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CodeEditor.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, file.path, true, {
                            fileName: "[project]/components/CodeEditor.tsx",
                            lineNumber: 153,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CodeEditor.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CodeEditor.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CodeEditor.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(CodeEditor, "7T6TebZvdpYcu+C1mOzGCmYzApc=");
_c = CodeEditor;
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
        md: "language-markup"
    };
    return languageMap[ext || ""] || "language-text";
}
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PricingNotice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingNotice",
    ()=>PricingNotice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PricingNotice() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "16px",
            textAlign: "center",
            fontSize: "14px",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Anonymous users:"
            }, void 0, false, {
                fileName: "[project]/components/PricingNotice.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            " Max 100 files per ZIP, no individual file downloads.",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/login",
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
_c = PricingNotice;
var _c;
__turbopack_context__.k.register(_c, "PricingNotice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AccessSharedFiles.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/AccessSharedFiles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// C:\Users\abhig\Downloads\zip-explorer1\components\AccessSharedFiles.tsx
__turbopack_context__.s([
    "AccessSharedFiles",
    ()=>AccessSharedFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
// Assuming this is the correct path to your style module
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/AccessSharedFiles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AccessSharedFiles({ isOpen, onClose }) {
    _s();
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accessed, setAccessed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAccessFiles = async ()=>{
        if (!pin || !/^\d{4}$/.test(pin)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid PIN format (4 digits)");
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("The share PIN has expired.");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to access files");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Share accessed, but no files are available.");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Files accessed! Found ${validFiles.length} file(s).`);
            }
        } catch (error) {
            console.error("Access Shared Files Error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to access files due to an error.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleDownloadShared = async ()=>{
        if (!pin) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("PIN is required for download.");
            return;
        }
        const validFilePaths = files.map((f)=>f.path).filter((p)=>p && typeof p === 'string');
        if (validFilePaths.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No valid files to download.");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorData.error || "Download failed");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Download started!");
        } catch (error) {
            console.error("Download shared files failed:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Download failed due to client error.");
        } finally{
            setIsDownloading(false);
        }
    };
    if (!isOpen) return null;
    const fileCount = files.length;
    // Updated text to reflect "FILES AVAILABLE" structure
    const fileCountText = fileCount === 1 ? "FILE AVAILABLE" : "FILES AVAILABLE";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Access Shared Files"
                        }, void 0, false, {
                            fileName: "[project]/components/AccessSharedFiles.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBody,
                    children: !accessed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinInput,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                children: "Enter Share PIN:"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                maxLength: 4,
                                placeholder: "0000",
                                value: pin,
                                // Only allow digits and limit length to 4
                                onChange: (e)=>setPin(e.target.value.replace(/\D/g, "").slice(0, 4)),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accessBtn,
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filesDisplay,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileList,
                                children: fileCount > 0 ? files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noFiles,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadBtn,
                                onClick: handleDownloadShared,
                                disabled: isDownloading || fileCount === 0,
                                children: isDownloading ? "⬇️ Preparing Download..." : "⬇️ Download All Files"
                            }, void 0, false, {
                                fileName: "[project]/components/AccessSharedFiles.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccessSharedFiles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newAccessBtn,
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
_s(AccessSharedFiles, "vc2XWoUkhdmk0svnLl5298D9QN0=");
_c = AccessSharedFiles;
var _c;
__turbopack_context__.k.register(_c, "AccessSharedFiles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.tsx'\n\nExpected '</', got ';'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_585945c6._.js.map