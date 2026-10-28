(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/presentation/providers/SidebarProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarProvider",
    ()=>SidebarProvider,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// src/presentation/providers/SidebarProvider.tsx
'use client';
;
;
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SidebarProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "de29285d4b3a57c2a2786168d8a43be354985f0ae26e9bd30be94b3404e7343c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de29285d4b3a57c2a2786168d8a43be354985f0ae26e9bd30be94b3404e7343c";
    }
    const { children } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SidebarProvider[useEffect()]": ()=>{
                const handleResize = {
                    "SidebarProvider[useEffect() > handleResize]": ()=>{
                        setIsOpen(window.innerWidth >= 768);
                    }
                }["SidebarProvider[useEffect() > handleResize]"];
                handleResize();
                window.addEventListener("resize", handleResize);
                return ()=>window.removeEventListener("resize", handleResize);
            }
        })["SidebarProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "SidebarProvider[toggleSidebar]": ()=>setIsOpen(_SidebarProviderToggleSidebarSetIsOpen)
        })["SidebarProvider[toggleSidebar]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const toggleSidebar = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "SidebarProvider[closeSidebar]": ()=>setIsOpen(false)
        })["SidebarProvider[closeSidebar]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const closeSidebar = t4;
    let t5;
    if ($[5] !== isOpen) {
        t5 = {
            isOpen,
            toggleSidebar,
            closeSidebar
        };
        $[5] = isOpen;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== children || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
            value: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/presentation/providers/SidebarProvider.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s(SidebarProvider, "BpxTQlX32up+AFkc47ndmLcifPk=");
_c = SidebarProvider;
function _SidebarProviderToggleSidebarSetIsOpen(prev) {
    return !prev;
}
function useSidebar() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "de29285d4b3a57c2a2786168d8a43be354985f0ae26e9bd30be94b3404e7343c") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de29285d4b3a57c2a2786168d8a43be354985f0ae26e9bd30be94b3404e7343c";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (!context) {
        throw new Error("useSidebar debe usarse dentro de SidebarProvider");
    }
    return context;
}
_s1(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SidebarProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ui/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.mjs [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.mjs [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$providers$2f$SidebarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/providers/SidebarProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/presentation/components/ui/Sidebar.tsx
'use client';
;
;
;
;
;
;
;
function Sidebar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "480ac41d554a57662ddaad4d8b1dd54f2840af9ad43460e21b0122419788151b") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "480ac41d554a57662ddaad4d8b1dd54f2840af9ad43460e21b0122419788151b";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$providers$2f$SidebarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [expandedYears, setExpandedYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [expandedAsignaturas, setExpandedAsignaturas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Sidebar[toggleYear]": (yearId)=>{
                setExpandedYears({
                    "Sidebar[toggleYear > setExpandedYears()]": (prev)=>prev.includes(yearId) ? prev.filter({
                            "Sidebar[toggleYear > setExpandedYears() > prev.filter()]": (id)=>id !== yearId
                        }["Sidebar[toggleYear > setExpandedYears() > prev.filter()]"]) : [
                            ...prev,
                            yearId
                        ]
                }["Sidebar[toggleYear > setExpandedYears()]"]);
            }
        })["Sidebar[toggleYear]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const toggleYear = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Sidebar[toggleAsignatura]": (asignaturaId)=>{
                setExpandedAsignaturas({
                    "Sidebar[toggleAsignatura > setExpandedAsignaturas()]": (prev_0)=>({
                            ...prev_0,
                            [asignaturaId]: !prev_0[asignaturaId]
                        })
                }["Sidebar[toggleAsignatura > setExpandedAsignaturas()]"]);
            }
        })["Sidebar[toggleAsignatura]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const toggleAsignatura = t3;
    let t4;
    if ($[5] !== pathname) {
        t4 = ({
            "Sidebar[isActive]": (href)=>pathname?.startsWith(href)
        })["Sidebar[isActive]"];
        $[5] = pathname;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const isActive = t4;
    const isDashboard = pathname === "/";
    const getOpciones = _SidebarGetOpciones;
    if (!isOpen) {
        let t5;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-800 p-3 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-5 h-5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                    lineNumber: 88,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        const t6 = `p-3 rounded-lg transition-colors ${isDashboard ? "bg-blue-600/20 text-blue-300" : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"}`;
        let t7;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 96,
                columnNumber: 12
            }, this);
            $[8] = t7;
        } else {
            t7 = $[8];
        }
        let t8;
        if ($[9] !== t6) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: t6,
                title: "Dashboard",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 103,
                columnNumber: 12
            }, this);
            $[9] = t6;
            $[10] = t8;
        } else {
            t8 = $[10];
        }
        let t9;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["planDeEstudios"].map({
                "Sidebar[planDeEstudios.map()]": (anio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Sidebar[planDeEstudios.map() > <button>.onClick]": ()=>toggleYear(anio.id)
                        }["Sidebar[planDeEstudios.map() > <button>.onClick]"],
                        className: "p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white relative group",
                        title: anio.nombre,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 196
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-full ml-2 px-2 py-1 bg-gray-800 text-sm text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50",
                                children: anio.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 233
                            }, this)
                        ]
                    }, anio.id, true, {
                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 50
                    }, this)
            }["Sidebar[planDeEstudios.map()]"]);
            $[11] = t9;
        } else {
            t9 = $[11];
        }
        let t10;
        if ($[12] !== t8) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "fixed top-0 left-0 z-50 h-screen w-82 bg-gray-900 border-r border-gray-800 overflow-hidden flex flex-col",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto py-2 flex flex-col items-center gap-1",
                        children: [
                            t8,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this);
            $[12] = t8;
            $[13] = t10;
        } else {
            t10 = $[13];
        }
        return t10;
    }
    let t5;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-gray-300 uppercase tracking-wider",
                children: "Años de Estudio"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 132,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const t6 = `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isDashboard ? "bg-blue-600/20 text-blue-300" : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"}`;
    let t7;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: "Dashboard"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
    } else {
        t7 = $[15];
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border-b border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: t6,
                children: [
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                lineNumber: 151,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== expandedAsignaturas || $[20] !== expandedYears || $[21] !== isActive) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["planDeEstudios"].map({
            "Sidebar[planDeEstudios.map()]": (anio_0)=>{
                const isYearExpanded = expandedYears.includes(anio_0.id);
                const hasAsignaturas = anio_0.asignaturas.length > 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Sidebar[planDeEstudios.map() > <button>.onClick]": ()=>toggleYear(anio_0.id)
                            }["Sidebar[planDeEstudios.map() > <button>.onClick]"],
                            className: `
                  w-full flex items-center justify-between
                  px-3 py-3 rounded-lg
                  text-base font-medium text-gray-200
                  hover:bg-gray-800/50 transition-colors
                  ${isYearExpanded ? "bg-gray-800/30" : ""}
                `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "w-5 h-5 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 62
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold",
                                            children: anio_0.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 20
                                }, this),
                                hasAsignaturas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: isYearExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                        lineNumber: 171,
                                        columnNumber: 253
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                        lineNumber: 171,
                                        columnNumber: 291
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 203
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                            lineNumber: 163,
                            columnNumber: 54
                        }, this),
                        isYearExpanded && hasAsignaturas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 ml-4 space-y-0.5 border-l-2 border-gray-800 pl-3",
                            children: anio_0.asignaturas.map({
                                "Sidebar[planDeEstudios.map() > anio_0.asignaturas.map()]": (asignatura)=>{
                                    const isAsignaturaExpanded = expandedAsignaturas[asignatura.id] || false;
                                    const opciones = getOpciones(anio_0.id, asignatura.id);
                                    const isAsignaturaActive = opciones.some({
                                        "Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > opciones.some()]": (opt)=>isActive(opt.href)
                                    }["Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > opciones.some()]"]);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > <button>.onClick]": ()=>toggleAsignatura(asignatura.id)
                                                }["Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > <button>.onClick]"],
                                                className: `
                            w-full flex items-center justify-between
                            px-3 py-2 rounded-lg
                            text-sm transition-colors
                            ${isAsignaturaActive ? "bg-blue-600/20 text-blue-300" : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"}
                          `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate text-left",
                                                        children: asignatura.nombre
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 30
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: `w-3 h-3 transition-transform flex-shrink-0 ${isAsignaturaExpanded ? "rotate-90" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 93
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                lineNumber: 178,
                                                columnNumber: 68
                                            }, this),
                                            isAsignaturaExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-2 mt-0.5 space-y-0.5",
                                                children: opciones.map({
                                                    "Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > opciones.map()]": (opcion)=>{
                                                        const Icon = opcion.icono;
                                                        const isOptionActive = isActive(opcion.href);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: opcion.href,
                                                            className: `
                                    flex items-center gap-2 px-3 py-1.5 rounded-lg
                                    text-xs transition-colors
                                    ${isOptionActive ? `${opcion.bg} ${opcion.color}` : "text-gray-400 hover:bg-gray-800/30 hover:text-gray-200"}
                                  `,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: opcion.titulo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 70
                                                                }, this)
                                                            ]
                                                        }, opcion.id, true, {
                                                            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 32
                                                        }, this);
                                                    }
                                                }["Sidebar[planDeEstudios.map() > anio_0.asignaturas.map() > opciones.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                                lineNumber: 185,
                                                columnNumber: 243
                                            }, this)
                                        ]
                                    }, asignatura.id, true, {
                                        fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 24
                                    }, this);
                                }
                            }["Sidebar[planDeEstudios.map() > anio_0.asignaturas.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                            lineNumber: 171,
                            columnNumber: 382
                        }, this)
                    ]
                }, anio_0.id, true, {
                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                    lineNumber: 163,
                    columnNumber: 16
                }, this);
            }
        }["Sidebar[planDeEstudios.map()]"]);
        $[19] = expandedAsignaturas;
        $[20] = expandedYears;
        $[21] = isActive;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-3 space-y-1",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-800 p-3 text-[10px] text-gray-500 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "ENIGMA v1.0"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                    lineNumber: 217,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-0.5",
                    children: "Contabilidad & Finanzas"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
                    lineNumber: 217,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t11 || $[27] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 border-r border-gray-800 overflow-hidden flex flex-col",
            children: [
                t5,
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Sidebar.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t9;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    return t13;
}
_s(Sidebar, "4L2IX4jsffFVeOqIJLRR1eykeZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$providers$2f$SidebarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Sidebar;
function _SidebarGetOpciones(anioId, asignaturaId_0) {
    return [
        {
            id: "aprender",
            titulo: "Aprender",
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
            color: "text-blue-400",
            bg: "bg-blue-900/20 hover:bg-blue-900/40",
            href: `/aprender/${anioId}/${asignaturaId_0}/contenidos`
        },
        {
            id: "formulas",
            titulo: "F\xF3rmulas",
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
            color: "text-orange-400",
            bg: "bg-orange-900/20 hover:bg-orange-900/40",
            href: `/formulas/${anioId}/${asignaturaId_0}`
        },
        {
            id: "ejercicios",
            titulo: "Ejercicios",
            icono: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
            color: "text-green-400",
            bg: "bg-green-900/20 hover:bg-green-900/40",
            href: `/ejercicios/${anioId}/${asignaturaId_0}`
        }
    ];
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ui/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// src/presentation/components/ui/Logo.tsx
'use client';
;
;
;
function Logo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9eab8abb0dfcf59813fe84bc9b4ac51cf62f2bce111aab9f329f6b744d474e05") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9eab8abb0dfcf59813fe84bc9b4ac51cf62f2bce111aab9f329f6b744d474e05";
    }
    const { size: t1 } = t0;
    const size = t1 === undefined ? "md" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            sm: {
                box: "h-9 px-3 text-sm",
                text: "text-xl"
            },
            md: {
                box: "h-12 px-4 text-lg",
                text: "text-2xl"
            },
            lg: {
                box: "h-16 px-5 text-xl",
                text: "text-3xl"
            }
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const sizes = t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = `
            relative ${sizes[size].box}
            bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600
            rounded-xl flex items-center justify-center
            shadow-lg shadow-yellow-500/30
            border border-yellow-300/40
            transition-all duration-300
            group-hover:scale-105 group-hover:shadow-yellow-500/50
            font-mono font-bold
            overflow-hidden
          `;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center gap-1 text-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-serif italic",
                    children: "e"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "N"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 133
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-serif",
                    children: "i"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 169
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "G"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 206
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "M"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 242
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold",
                    children: "A"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 69,
                    columnNumber: 278
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t4,
                    children: [
                        t5,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/ui/Logo.tsx",
                    lineNumber: 76,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    const t8 = `
            font-bold ${sizes[size].text} tracking-tight
            bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
            bg-clip-text text-transparent
            animate-gold-shimmer
            group-hover:from-yellow-300 group-hover:via-amber-200 group-hover:to-yellow-400
            transition-all duration-300
          `;
    let t9;
    if ($[7] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t8,
            children: "ENIGMA"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[7] = t8;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[0.55rem] uppercase tracking-[0.2em] text-yellow-500/80 font-medium",
            children: "Contabilidad & Finanzas"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    let t11;
    if ($[10] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col leading-tight",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[10] = t9;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== t11 || $[13] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3 group cursor-pointer",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/Logo.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t7;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    return t12;
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Providers
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$providers$2f$SidebarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/providers/SidebarProvider.tsx [app-client] (ecmascript)");
// Componentes UI
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ui/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ui/Logo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/app/layout.tsx
'use client';
;
;
;
;
;
;
function RootLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "29a7019623ff93c92f4ccd8cda3ed4882ce07da05424f1a9e82731c16f69efee") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29a7019623ff93c92f4ccd8cda3ed4882ce07da05424f1a9e82731c16f69efee";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_RootLayoutUseEffect, t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_RootLayoutUseEffect2, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 py-3 flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                size: "md"
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 50,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "es",
            suppressHydrationWarning: true,
            className: "dark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "antialiased bg-gray-900 text-gray-100 transition-colors duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$providers$2f$SidebarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-screen",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 md:ml-72 min-w-0",
                                children: [
                                    t4,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        className: "p-4 md:p-6",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 57,
                                        columnNumber: 263
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 57,
                                columnNumber: 218
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 57,
                        columnNumber: 179
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 57,
                    columnNumber: 162
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 57,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_s(RootLayout, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = RootLayout;
function _RootLayoutUseEffect2() {
    if ("serviceWorker" in navigator && ("TURBOPACK compile-time value", "development") === "production") //TURBOPACK unreachable
    ;
}
function _RootLayoutUseEffectAnonymous2(error) {
    console.error("\u274C Error al registrar el Service Worker:", error);
}
function _RootLayoutUseEffectAnonymous(registration) {
    console.log("\u2705 Service Worker registrado:", registration);
}
function _RootLayoutUseEffect() {
    document.documentElement.classList.add("dark");
    console.log("\uD83C\uDF19 Modo oscuro activado por defecto");
}
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_16bclcz._.js.map