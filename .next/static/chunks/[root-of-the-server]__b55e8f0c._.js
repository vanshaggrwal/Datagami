(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/abouttechlearn.11fd193b.webp");}}),
"[project]/pages/programs/images/abouttechlearn.webp.mjs { IMAGE => \"[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/programs/images/job_assured.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/job_assured.8056b6fd.webp");}}),
"[project]/pages/programs/images/job_assured.webp.mjs { IMAGE => \"[project]/pages/programs/images/job_assured.webp (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/job_assured.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1920,
    height: 2880,
    blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN4AAAAvBMABAM1VICICHgiADQIAAACPA3JA+AEAwHE4AAAAACIAAAAAAACAAAAOAAAACII7AfdDlePDGi0AAAAPBMCEAQAA4PxX294mcj8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZH6iyeSAANRAAAADnf/eWAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwZqqrFsmBG3Hwc5MCiAmp5X47A/5AeO/6RKd+M59SAzewoqrR5OpjLo2anDIeymwXqpsSXXoKJHWjb8O/zpLWOO9Yzu/HGFvf+gA=",
    blurWidth: 5,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/programs/images/training_method.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/training_method.2c0c1102.webp");}}),
"[project]/pages/programs/images/training_method.webp.mjs { IMAGE => \"[project]/pages/programs/images/training_method.webp (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/pages/programs/images/training_method.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1920,
    height: 2880,
    blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TOAAAAAvBMABAM1VICICHgiACQMAAADVPIkoLgA4oANcBAAAcAAOAAAAAAAAAAAAAAAAIIBD4ADnaE4lfwAAAOCBAJxAAAAAnP+2t5L4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIg1bV5IAAnEAAAAOevtb6UGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEB5P+O2PvK4QQnJEF5HJU7Z/DG3+1RlxSRna8WhlcDmVJJtiXtd4jHhS1m+T191nq3LPmTsEbHOdIAhnDXuPaWu/71o8InwE3VxNL1cAQ==",
    blurWidth: 5,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/programs/techlearn.jsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/abouttechlearn.webp.mjs { IMAGE => "[project]/pages/programs/images/abouttechlearn.webp (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/job_assured.webp.mjs { IMAGE => "[project]/pages/programs/images/job_assured.webp (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/pages/programs/images/training_method.webp.mjs { IMAGE => "[project]/pages/programs/images/training_method.webp (static in ecmascript)" } [client] (structured image object, ecmascript)');
;
;
;
;
;
;
const Techlearn = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4d7c421addde6ad9" + " " + "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4d7c421addde6ad9" + " " + "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "textBlock",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4d7c421addde6ad9" + " " + "heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "blue",
                                        children: "About "
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 13,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "indigo",
                                        children: "TechLearn"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4d7c421addde6ad9" + " " + "lead",
                                children: "TechLearn is an industry-oriented training platform focused on Cloud Computing, Full-Stack Development, DevOps, and AI. Our programs bridge the gap between academic knowledge and real-world tech skills through career-focused, employer-aligned certifications."
                            }, void 0, false, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "imageBlock",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$abouttechlearn$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "About TechLearn",
                            width: 600,
                            height: 400,
                            className: "rounded",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/pages/programs/techlearn.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/programs/techlearn.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4d7c421addde6ad9" + " " + "section alt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "textBlock",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4d7c421addde6ad9" + " " + "heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "blue",
                                        children: "Why "
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "indigo",
                                        children: "Choose TechLearn"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-4d7c421addde6ad9" + " " + "whyList",
                                children: [
                                    'Hands-on Project Training',
                                    '100 % Placement Assistance',
                                    'Latest Tech-Stack Coverage',
                                    'Mentorship by Industry Experts',
                                    'IBM & NASSCOM Certifications',
                                    'Lifetime Learning Portal Access'
                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "whyItem",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-4d7c421addde6ad9" + " " + "plus",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/programs/techlearn.jsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "imageBlock",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$job_assured$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "Job-Assured Training Model",
                            width: 600,
                            height: 400,
                            className: "rounded"
                        }, void 0, false, {
                            fileName: "[project]/pages/programs/techlearn.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/programs/techlearn.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4d7c421addde6ad9" + " " + "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "textBlock",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4d7c421addde6ad9" + " " + "heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "indigo",
                                        children: "Our "
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d7c421addde6ad9" + " " + "blue",
                                        children: "Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4d7c421addde6ad9" + " " + "courses",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "jsx-4d7c421addde6ad9",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4d7c421addde6ad9",
                                                children: "Full-Stack Development Program"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/programs/techlearn.jsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4d7c421addde6ad9",
                                                children: "A career-assured pathway covering front-end, back-end, databases, and cloud deployment — perfect for aspiring full-stack engineers."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/programs/techlearn.jsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "jsx-4d7c421addde6ad9",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4d7c421addde6ad9",
                                                children: "Cloud & DevOps Certification Program"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/programs/techlearn.jsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4d7c421addde6ad9",
                                                children: "Master AWS, Azure, Docker, Kubernetes, and CI/CD pipelines to become an in-demand cloud or DevOps professional."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/programs/techlearn.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/programs/techlearn.jsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/programs/techlearn.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4d7c421addde6ad9" + " " + "imageBlock",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$pages$2f$programs$2f$images$2f$training_method$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "TechLearn Training Method",
                            width: 600,
                            height: 400,
                            className: "rounded"
                        }, void 0, false, {
                            fileName: "[project]/pages/programs/techlearn.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/programs/techlearn.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/programs/techlearn.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4d7c421addde6ad9",
                children: ".jsx-4d7c421addde6ad9:root{--blue:#3b82f6;--indigo:#1e1b4b;--bg-light:#f5f6fc;--bg-white:#fff;--text-gray:#374151;--shadow:0 4px 12px #0000000d}.page.jsx-4d7c421addde6ad9{background:var(--bg-light);color:var(--text-gray);font-family:Inter,system-ui,sans-serif;line-height:1.6}.section.jsx-4d7c421addde6ad9{grid-template-columns:1fr;align-items:center;gap:2.5rem;max-width:1150px;margin:0 auto;padding:4rem 1.5rem;display:grid}.section.alt.jsx-4d7c421addde6ad9{background:var(--bg-white)}@media (width>=768px){.section.jsx-4d7c421addde6ad9{grid-template-columns:repeat(2,1fr)}}.textBlock.jsx-4d7c421addde6ad9{order:1}.imageBlock.jsx-4d7c421addde6ad9{order:2}@media (width>=768px){.section.jsx-4d7c421addde6ad9:nth-of-type(2n) .textBlock.jsx-4d7c421addde6ad9{order:2}.section.jsx-4d7c421addde6ad9:nth-of-type(2n) .imageBlock.jsx-4d7c421addde6ad9{order:1}}.heading.jsx-4d7c421addde6ad9{margin:0 0 1.25rem;font-size:2.25rem;font-weight:700}@media (width>=1024px){.heading.jsx-4d7c421addde6ad9{font-size:2.75rem}}.blue.jsx-4d7c421addde6ad9{color:var(--blue)}.indigo.jsx-4d7c421addde6ad9{color:var(--indigo)}.lead.jsx-4d7c421addde6ad9{font-size:1.125rem}.rounded.jsx-4d7c421addde6ad9{box-shadow:var(--shadow);border-radius:1rem}.whyList.jsx-4d7c421addde6ad9{gap:1.25rem;margin:2rem 0 0;padding:0;list-style:none;display:grid}.whyItem.jsx-4d7c421addde6ad9{background:var(--bg-light);box-shadow:var(--shadow);border-radius:.75rem;align-items:center;padding:1rem 1.25rem;font-weight:500;transition:transform .2s,box-shadow .2s;display:flex}.whyItem.jsx-4d7c421addde6ad9:hover{transform:translateY(-2px);box-shadow:0 8px 24px #00000014}.plus.jsx-4d7c421addde6ad9{color:var(--blue);margin-right:.5rem;font-size:1.25rem;font-weight:700;line-height:1}.courses.jsx-4d7c421addde6ad9 article.jsx-4d7c421addde6ad9{margin-bottom:2rem}.courses.jsx-4d7c421addde6ad9 h3.jsx-4d7c421addde6ad9{color:var(--indigo);margin:0 0 .5rem;font-size:1.25rem;font-weight:600}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/programs/techlearn.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = Techlearn;
const __TURBOPACK__default__export__ = Techlearn;
var _c;
__turbopack_context__.k.register(_c, "Techlearn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/programs/techlearn.jsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/programs/techlearn";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/programs/techlearn.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/pages/programs/techlearn.jsx (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/programs/techlearn.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__b55e8f0c._.js.map