"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react/jsx-runtime"),w=require("react"),r=require("../../utilities/functions.cjs.js"),c=w.forwardRef(({active:i,payload:n,className:h,indicator:e="dot",hideLabel:f=!1,hideIndicator:m=!1,label:o,labelFormatter:d,labelClassName:x,formatter:a,color:g,nameKey:j="name",labelKey:p},v)=>{const b=()=>{if(f||!n?.length)return null;const[s]=n,t=d?d(o||""):s[p]||o;return t?l.jsx("div",{className:r.cn("font-medium",x),children:t}):null};if(!i||!n?.length)return null;const N=n.length===1&&e!=="dot";return l.jsxs("div",{ref:v,className:r.cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl",h),children:[N?null:b(),l.jsx("div",{className:"grid gap-1.5",children:n.map((s,t)=>{const u=g||s.color||"#000";return l.jsxs("div",{className:r.cn("flex w-full items-stretch gap-2",e==="dot"&&"items-center"),children:[!m&&l.jsx("div",{className:r.cn({"size-2.5":e==="dot","w-1 h-full":e==="line","w-0 border-[0.5px] border-dashed":e==="dashed"}),style:{backgroundColor:e==="dot"||e==="line"?u:"",borderColor:e==="dashed"?u:""}}),l.jsxs("div",{className:"flex-1 flex justify-between items-center",children:[l.jsx("span",{children:s[j]||s.dataKey}),l.jsx("span",{className:"font-mono font-medium",children:a?a(s.value??""):s.value??""})]})]},s.dataKey||t)})})]})});c.displayName="ChartTooltipContent";exports.default=c;
//# sourceMappingURL=chart-tooltip-content.cjs.js.map
