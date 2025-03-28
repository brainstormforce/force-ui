"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("tailwind-merge"),n=require("clsx"),s=(...r)=>l.twMerge(n.clsx(...r)),a=(...r)=>(...e)=>r.forEach(t=>t?.(...e)),c=r=>{const e={0:"gap-0",xxs:"gap-1",xs:"gap-2",sm:"gap-3",md:"gap-4",lg:"gap-5",xl:"gap-6","2xl":"gap-8"};return e[r]||e.md},i={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"},g=()=>{const r=window.navigator?.userAgentData?.platform||window.navigator.platform,e=["macOS","Macintosh","MacIntel","MacPPC","Mac68K"],t=["Win32","Win64","Windows","WinCE"];let o="null";return e.includes(r)?o="Mac OS":t.includes(r)&&(o="Windows"),o},d=r=>r<1024?`${r} bytes`:r<1024*1024?`${(r/1024).toFixed(2)} KB`:r<1024*1024*1024?`${(r/(1024*1024)).toFixed(2)} MB`:`${(r/(1024*1024*1024)).toFixed(2)} GB`,u={set:(r,e)=>{if(!(typeof window>"u"))try{localStorage.setItem(r,JSON.stringify(e))}catch(t){console.error(t)}},get:r=>{if(typeof window>"u")return null;try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error(e),null}},remove:r=>{if(!(typeof window>"u"))try{localStorage.removeItem(r)}catch(e){console.error(e)}}};exports.callAll=a;exports.cn=s;exports.columnClasses=i;exports.formatFileSize=d;exports.getGapClass=c;exports.getOperatingSystem=g;exports.safeLocalStorage=u;
//# sourceMappingURL=functions.cjs.js.map
