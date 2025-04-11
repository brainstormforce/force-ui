"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),r=require("react"),z=require("nanoid"),s=require("../../utilities/functions.cjs.js"),y=require("lucide-react"),D=require("../toaster/utils.cjs.js"),ee=require("../label/label.cjs.js"),K=({id:j,type:o="text",defaultValue:O="",value:c,size:t="sm",className:w="",disabled:n=!1,onChange:m=()=>{},error:N=!1,onError:I=()=>{},prefix:i=null,suffix:u=null,label:p="",...b},q)=>{const d=r.useRef(null),f=r.useMemo(()=>j||`input-${o}-${z.nanoid()}`,[j]),g=r.useMemo(()=>typeof c<"u",[c]),[R,T]=r.useState(O),[S,h]=r.useState(null),X=r.useCallback(()=>g?c:R,[g,c,R]),k=a=>{if(n)return;let l;o==="file"?(l=a.target.files,l&&l.length>0?h(l[0].name):h(null)):l=a.target.value,!g&&o!=="file"&&T(l),typeof m=="function"&&m(l)},F=()=>{h(null),d.current&&(d.current.value=""),m(null)},M="bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200",V={xs:"px-2 py-1 rounded",sm:"p-3 py-2 rounded",md:"p-3.5 py-2.5 rounded-md",lg:"p-4 py-3 rounded-lg"},A={xs:"text-xs font-medium",sm:"text-sm font-medium",md:"text-sm font-medium",lg:"text-base font-medium"},x={xs:"text-xs",sm:"text-xs",md:"text-sm",lg:"text-base"},B={sm:i?"pl-8":"",md:i?"pl-9":"",lg:i?"pl-10":""},E={sm:u?"pr-8":"",md:u?"pr-9":"",lg:u?"pr-10":""},_=n?"hover:outline-border-disabled":"hover:outline-border-strong",P="focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",G=N?"focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border":"",H=N?"focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border":"",J=n?"outline-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled":"",Q=n?"outline-border-disabled cursor-not-allowed text-text-disabled file:text-text-tertiary":"",U="font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4",v=n?"font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center":"font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center",C={xs:"[&>svg]:size-4",sm:"[&>svg]:size-4",md:"[&>svg]:size-5",lg:"[&>svg]:size-6"},Y=()=>i?e.jsx("div",{className:s.cn(U,"left-0 pl-3",x[t]),children:i}):null,Z=()=>o==="file"?S?e.jsx("div",{className:s.cn(v,"right-0 pr-3 cursor-pointer z-20 pointer-events-auto",C[t]),onClick:F,role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&F()},children:e.jsx(y.X,{})}):e.jsx("div",{className:s.cn(v,"right-0 pr-3",C[t]),children:e.jsx(y.Upload,{})}):u?e.jsx("div",{className:s.cn(U,"right-0 pr-3",x[t]),children:u}):null,W=r.useMemo(()=>p?e.jsx(ee.default,{className:s.cn(A[t]),htmlFor:f,...b?.required&&{required:!0},children:p}):null,[p,t,f]),$=S?"file:border-0 file:bg-transparent pr-10":"text-text-tertiary file:border-0 file:bg-transparent pr-10";return o==="file"?e.jsxs("div",{className:"flex flex-col items-start gap-1.5 [&_*]:box-border box-border",children:[W,e.jsxs("div",{className:s.cn("w-full relative flex focus-within:z-10",w),children:[e.jsx("input",{ref:D.mergeRefs(d,q),id:f,type:"file",className:s.cn(M,Q,V[t],x[t],P,_,H,$),disabled:n,onChange:k,onInvalid:I,...b}),e.jsx("div",{className:s.cn(v,"right-0 pr-3",C[t]),children:e.jsx(y.Upload,{})})]})]}):e.jsxs("div",{className:"flex flex-col items-start gap-1.5 [&_*]:box-border box-border",children:[W,e.jsxs("div",{className:s.cn("w-full relative flex focus-within:z-10",w),children:[Y(),e.jsx("input",{ref:D.mergeRefs(d,q),id:f,type:o,className:s.cn(M,J,V[t],x[t],B[t],E[t],P,_,G),disabled:n,onChange:k,onInvalid:I,value:X(),...b}),Z()]})]})},L=r.forwardRef(K);L.displayName="Input";exports.InputComponent=K;exports.default=L;
//# sourceMappingURL=input.cjs.js.map
