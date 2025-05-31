const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_fa_index_mjs_275a2265._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_lib_6322dabf._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_155f650e._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__e5c18d21._.js");
runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
