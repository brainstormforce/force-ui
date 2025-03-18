"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),s=require("react"),F=require("nanoid"),r=require("../../utilities/functions.cjs.js"),f=require("lucide-react"),g=require("../label/label.cjs.js"),k=({id:l,label:e,defaultChecked:v=!1,checked:i,onChange:u,indeterminate:y,disabled:t,size:n="md",className:j,...N},w)=>{const a=s.useMemo(()=>l||`checkbox-${F.nanoid()}`,[l]),d=s.useMemo(()=>typeof i<"u",[i]),[h,q]=s.useState(v||!1),x="primary",c={sm:{checkbox:"size-4 rounded gap-1",icon:"size-3",text:"text-sm",description:"text-sm",gap:"gap-0.5"},md:{checkbox:"size-5 rounded gap-1",icon:"size-4",text:"text-base",description:"text-sm",gap:"gap-1"}},p={primary:{checkbox:"border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-2 focus:ring-focus",icon:"text-white"}},m={checkbox:"cursor-not-allowed disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",icon:"cursor-not-allowed peer-disabled:text-border-disabled"},M=s.useCallback(()=>d?i:h,[d,i,h]),R=V=>{if(t)return;const b=V.target.checked;d||q(b),typeof u=="function"&&u(b)},S=s.useCallback(()=>s.isValidElement(e)?e:!e?.heading&&!e?.description?null:o.jsxs("div",{className:c[n].gap,children:[e?.heading&&o.jsx(g.default,{className:r.cn("text-text-primary font-medium leading-4 m-0",c[n].text,c[n].gap,t&&"text-text-disabled"),htmlFor:a,children:e?.heading}),e?.description&&o.jsx(g.default,{tag:"p",className:r.cn("font-normal leading-5 m-0",c[n].description,t&&"text-text-disabled"),variant:"help",children:e?.description})]}),[e,n,t]);return o.jsxs("div",{className:r.cn("inline-flex items-center justify-center gap-2",!!e&&"items-start",t&&"cursor-not-allowed"),children:[o.jsxs("label",{className:r.cn("relative flex items-center justify-center rounded-full p-0.5",!t&&"cursor-pointer"),htmlFor:a,children:[o.jsx("input",{ref:w,id:a,type:"checkbox",className:r.cn("peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",p[x].checkbox,c[n].checkbox,t&&m.checkbox,j),checked:M(),onChange:R,disabled:t,...N}),o.jsx("span",{className:r.cn("pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",p[x].icon,t&&m.icon),children:y?o.jsx(f.Minus,{className:r.cn(c[n]?.icon)}):o.jsx(f.Check,{className:r.cn(c[n]?.icon)})})]}),!!e&&S()]})},C=s.forwardRef(k);C.displayName="Checkbox";exports.CheckboxComponent=k;exports.default=C;
//# sourceMappingURL=checkbox.cjs.js.map
