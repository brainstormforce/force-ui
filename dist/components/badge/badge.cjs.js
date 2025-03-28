"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),w=require("react"),d=require("../../utilities/functions.cjs.js"),C=require("lucide-react"),i=w.forwardRef(({label:r="",size:s="sm",className:c="",type:u="pill",variant:a="neutral",icon:l=null,disabled:t=!1,onClose:x=()=>{},closable:v=!1,onMouseDown:y=()=>{},disableHover:h=!1},p)=>{const m="font-medium border-badge-border-gray flex items-center justify-center border border-solid box-border max-w-full transition-colors duration-150 ease-in-out",f={xxs:"py-0.5 px-0.5 text-xs h-4",xs:"py-0.5 px-1 text-xs h-5",sm:"py-1 px-1.5 text-xs h-6",md:"py-1 px-1.5 text-sm h-7",lg:"py-1 px-1.5 text-base h-8"},k={pill:"rounded-full",rounded:"rounded"},j={neutral:"hover:bg-badge-hover-gray",red:"hover:bg-badge-hover-red",yellow:"hover:bg-badge-hover-yellow",green:"hover:bg-badge-hover-green",blue:"hover:bg-badge-hover-sky",inverse:"hover:bg-badge-hover-inverse",disabled:"hover:bg-badge-hover-disabled"},b={neutral:"bg-badge-background-gray text-badge-color-gray border-badge-border-gray",red:"bg-badge-background-red text-badge-color-red border-badge-border-red",yellow:"bg-badge-background-yellow text-badge-color-yellow border-badge-border-yellow",green:"bg-badge-background-green text-badge-color-green border-badge-border-green",blue:"bg-badge-background-sky text-badge-color-sky border-badge-border-sky",inverse:"bg-background-inverse text-text-inverse border-background-inverse",disabled:"bg-badge-background-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"};let o="",n="group relative justify-center flex items-center cursor-pointer";const g={xxs:"[&>svg]:size-3",xs:"[&>svg]:size-3",sm:"[&>svg]:size-3",md:"[&>svg]:size-4",lg:"[&>svg]:size-5"};return t?(o=b.disabled,n+=" cursor-not-allowed disabled"):o=b[a],r?e.jsxs("span",{className:d.cn(m,f[s],k[u],"gap-0.5",o,!h&&j[a],c),ref:p,children:[l?e.jsx("span",{className:d.cn("justify-center flex items-center",g[s]),children:l}):null,e.jsx("span",{className:"px-1 truncate inline-block",children:r}),v&&e.jsxs("span",{className:d.cn(n,g[s]),onMouseDown:y,role:"button",tabIndex:0,...!t&&{onClick:x},children:[e.jsx("span",{className:"sr-only",children:`Remove ${r}`}),e.jsx(C.X,{}),e.jsx("span",{className:"absolute -inset-1"})]})]}):null});i.displayName="Badge";exports.default=i;
//# sourceMappingURL=badge.cjs.js.map
