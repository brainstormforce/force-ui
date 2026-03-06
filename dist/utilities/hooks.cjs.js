"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react"),o=(t,u=500)=>{const e=r.useRef(null);return r.useCallback((...c)=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>t(...c),u)},[t,u])};exports.useDebouncedCallback=o;
//# sourceMappingURL=hooks.cjs.js.map
