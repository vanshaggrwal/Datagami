module.exports = {

"[project]/components/Hero.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Hero() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        style: styles.hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    ...styles.title,
                    fontSize: isMobile ? '2rem' : '3rem'
                },
                children: "Welcome to Datagami"
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    ...styles.subtitle,
                    fontSize: isMobile ? '1rem' : '1.25rem'
                },
                children: "Unleashing data innovation for the future."
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
const styles = {
    hero: {
        width: '100%',
        height: '80vh',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #facc15, #fbbf24)',
        color: '#1f2937',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem'
    },
    title: {
        fontWeight: 'bold',
        maxWidth: '100%'
    },
    subtitle: {
        marginTop: '1rem',
        maxWidth: '600px',
        width: '100%'
    }
};
}}),
"[project]/components/Features.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Features() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleResize = ()=>setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        style: styles.section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                style: styles.heading,
                children: "What We Offer"
            }, void 0, false, {
                fileName: "[project]/components/Features.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.grid,
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Feature, {
                        title: "Data Analytics",
                        description: "Get deep insights from your data with powerful tools."
                    }, void 0, false, {
                        fileName: "[project]/components/Features.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Feature, {
                        title: "AI Solutions",
                        description: "Implement cutting-edge AI models in your business."
                    }, void 0, false, {
                        fileName: "[project]/components/Features.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Feature, {
                        title: "Custom Dashboards",
                        description: "Interactive and personalized dashboards built for you."
                    }, void 0, false, {
                        fileName: "[project]/components/Features.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Features.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Features.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function Feature({ title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                style: styles.cardTitle,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/Features.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: description
            }, void 0, false, {
                fileName: "[project]/components/Features.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Features.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
const styles = {
    section: {
        padding: '4rem 1rem',
        textAlign: 'center'
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '2rem'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
    },
    card: {
        width: '100%',
        maxWidth: '280px',
        padding: '1.5rem',
        borderRadius: '10px',
        backgroundColor: '#f9fafb',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        textAlign: 'left'
    },
    cardTitle: {
        fontSize: '1.25rem',
        marginBottom: '0.5rem'
    }
};
}}),
"[project]/components/CTA.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CTA)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function CTA() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        style: styles.cta,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    marginBottom: '1rem'
                },
                children: "Ready to transform your data journey?"
            }, void 0, false, {
                fileName: "[project]/components/CTA.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/auth",
                style: {
                    ...styles.button,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                },
                children: "Join Datagami"
            }, void 0, false, {
                fileName: "[project]/components/CTA.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CTA.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const styles = {
    cta: {
        backgroundColor: '#1e3a8a',
        color: '#fff',
        textAlign: 'center',
        padding: '3rem 2rem'
    },
    button: {
        marginTop: '1rem',
        backgroundColor: '#3b82f6',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        color: '#fff',
        display: 'inline-block'
    }
};
}}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}}),
"[externals]/swiper/react [external] (swiper/react, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("swiper/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/swiper/modules [external] (swiper/modules, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("swiper/modules");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/abouttechlearn.11fd193b.webp");}}),
"[project]/pages/programs/images/abouttechlearn.webp.mjs { IMAGE => \"[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 720,
    height: 480,
    blurDataURL: "data:image/webp;base64,UklGRusAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAAAIcASOBIM/4gQAAAAAAAAAAAAAAAAAAQAEAIAOgAqCA+DsuISGGgAAgAcCkMIAAABw/n2f2yeQASgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzUBR4NXeAwEwYQAAADj/bW1LriVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgCl2kRfrcj8mwhAQQTuH9cc9NibQad8UICZcW0Ef8BGk+byevv7zJEXiedLW2uhmFXcNtMb9VfWbGp5mAAeQX9+FnuTJtHQOXHUo4AA==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/pages/programs/images/about.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/about.378f7090.webp");}}),
"[project]/pages/programs/images/about.webp.mjs { IMAGE => \"[project]/pages/programs/images/about.webp (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/about.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 550,
    height: 330,
    blurDataURL: "data:image/webp;base64,UklGRusAAABXRUJQVlA4TN8AAAAvBwABAM1VICICHgiACQMAAAAD4TnCFQAIgAMAADgAAAAAAAAAAAAAAAAAIAEA4MB94TiSzr0dVgYAAOCBAJsAAAAAnL9ddRJRiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEddveeBAJgwAAAAnP86IbMV/JkDAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgAAgar+1yE36w2gPLFunTP7PmOBaZsiBs55P7/feOLT2lXetg1DvzyiUXPJJeK9Dqaq0Z8NCpu8M6/f4whk/EZeITpUVlAO8LXZmbBkFAA==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/pages/programs/images/about-clinomic.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/about-clinomic.a51e97ae.webp");}}),
"[project]/pages/programs/images/about-clinomic.webp.mjs { IMAGE => \"[project]/pages/programs/images/about-clinomic.webp (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/about-clinomic.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1200,
    height: 675,
    blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TOAAAAAvBwABAM1VICICHgiACQMAAAB4B1x2FAQDBwQADYADByAAAAEAAAAAAABwABEABBwoANABfoPOEQAAAOCBAJxAAAAAnL/NjYEnQQkAeAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAPVbuUBwKQwgAAAHD+ax+mEBQMAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMLUnR57S/Sf099397qkj4E9kgUpyF/EHqwcO6/xcgRM8M/9nPBVltQPWjAuM7Szr7N5tynZwyh8oXCj/JeXnKQQauVfZ2Q5FocfClXAA==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/pages/programs/images/ibm-about.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/ibm-about.f8f7f10b.webp");}}),
"[project]/pages/programs/images/ibm-about.webp.mjs { IMAGE => \"[project]/pages/programs/images/ibm-about.webp (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/ibm-about.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 600,
    height: 400,
    blurDataURL: "data:image/webp;base64,UklGRvMAAABXRUJQVlA4TOcAAAAvBwABAM1VICICHgiACQMAAIBwCJwuEwSIG8CJBwABAAAAAAAAAAAAAAAIAMCDAAEAOM8J4fodBgQAAOCBAOQgAAAAnP/0iZ9+SA1AAGAAAAAAAAAAAAAAAAAAAAAAAAAAAjAYPhZAwDOMJueBANggAAAAnL/dEowXSw8DPHAHAAA/AAAAAAAAAAAAAAAAgAAAAAAAAECAsJvD5ZHhfFR7s8D53v8nLpF5tsOW4r/C2sGEgy1EAyfA7GayHFHuUJcYcean+rdjJQf3pXOCSz4NvJxN+frd4N9P+y7rRmZJxdbwMLn3dR0A",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/components/ProgramCarousel.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swiper/modules [external] (swiper/modules, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/abouttechlearn.webp.mjs { IMAGE => "[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/about.webp.mjs { IMAGE => "[project]/pages/programs/images/about.webp (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/about-clinomic.webp.mjs { IMAGE => "[project]/pages/programs/images/about-clinomic.webp (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/ibm-about.webp.mjs { IMAGE => "[project]/pages/programs/images/ibm-about.webp (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
'use client';
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
;
;
const ProgramCarousel = ()=>{
    const programs = [
        {
            title: 'TechLearn',
            desc: 'Career-oriented training in Full-Stack, DevOps & Cloud.',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            path: '/programs/techlearn'
        },
        {
            title: 'FinLearn',
            desc: 'Industry-ready programs in Banking, Finance & Accounting.',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$about$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            path: '/programs/finlearn'
        },
        {
            title: 'Clinomic',
            desc: 'Clinical Research training aligned with global standards.',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$about$2d$clinomic$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            path: '/programs/clinomic'
        },
        {
            title: 'IBM Ice',
            desc: 'International Certification in Software, Cloud & AI by IBM.',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$ibm$2d$about$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            path: '/programs/ibm-ice'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "jsx-ed0c0c80f6b6b0c9" + " " + "carouselContainer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "jsx-ed0c0c80f6b6b0c9" + " " + "carouselTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "jsx-ed0c0c80f6b6b0c9" + " " + "blue",
                        children: "Programs "
                    }, void 0, false, {
                        fileName: "[project]/components/ProgramCarousel.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "jsx-ed0c0c80f6b6b0c9" + " " + "indigo",
                        children: "Offered"
                    }, void 0, false, {
                        fileName: "[project]/components/ProgramCarousel.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProgramCarousel.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["Pagination"],
                    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["Autoplay"]
                ],
                spaceBetween: 30,
                slidesPerView: 1,
                pagination: {
                    clickable: true
                },
                autoplay: {
                    delay: 3000
                },
                loop: true,
                children: programs.map((program, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: program.path,
                            className: "slideLink",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-ed0c0c80f6b6b0c9" + " " + "slideCard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: program.image,
                                        alt: program.title,
                                        width: 600,
                                        height: 400,
                                        className: "slideImage"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProgramCarousel.jsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "jsx-ed0c0c80f6b6b0c9",
                                        children: program.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProgramCarousel.jsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-ed0c0c80f6b6b0c9",
                                        children: program.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProgramCarousel.jsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProgramCarousel.jsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProgramCarousel.jsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/ProgramCarousel.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProgramCarousel.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "ed0c0c80f6b6b0c9",
                children: ".carouselContainer.jsx-ed0c0c80f6b6b0c9{max-width:900px;margin:4rem auto;padding:1rem}.carouselTitle.jsx-ed0c0c80f6b6b0c9{text-align:center;margin-bottom:2rem;font-size:2rem;font-weight:700}.blue.jsx-ed0c0c80f6b6b0c9{color:#3b82f6}.indigo.jsx-ed0c0c80f6b6b0c9{color:#1e1b4b}.slideLink.jsx-ed0c0c80f6b6b0c9{color:inherit;text-decoration:none}.slideLink.jsx-ed0c0c80f6b6b0c9:hover .slideCard.jsx-ed0c0c80f6b6b0c9{transition:transform .2s;transform:scale(1.02)}.slideCard.jsx-ed0c0c80f6b6b0c9{text-align:center;background:#fff;border-radius:1rem;padding:1rem;transition:transform .2s;box-shadow:0 8px 24px #00000014}.slideImage.jsx-ed0c0c80f6b6b0c9{border-radius:1rem;margin-bottom:1rem}h3.jsx-ed0c0c80f6b6b0c9{color:#1e1b4b;margin:.5rem 0;font-size:1.5rem}p.jsx-ed0c0c80f6b6b0c9{color:#374151}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProgramCarousel.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProgramCarousel;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Features$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Features.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CTA$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CTA.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCarousel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProgramCarousel.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCarousel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCarousel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Features$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCarousel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CTA$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 16,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__70c363ae._.js.map