"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),d=require("../../utilities/functions.cjs.js"),c=require("react"),T=require("../checkbox/checkbox.cjs.js"),N=c.createContext(void 0),m=()=>{const l=c.useContext(N);if(!l)throw new Error("Table components must be used within Table component");return l},r=({children:l,className:o,checkboxSelection:t=!1,...s})=>{const n={checkboxSelection:t},i=c.Children.toArray(l).find(a=>c.isValidElement(a)&&a.type===u),b=c.Children.toArray(l).filter(a=>c.isValidElement(a)&&a.type!==u);return e.jsx(N.Provider,{value:n,children:e.jsxs("div",{className:"flow-root border-0.5 border-solid border-border-subtle rounded-md divide-y-0.5 divide-x-0 divide-solid divide-border-subtle overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsx("div",{className:"relative",children:e.jsx("table",{className:d.cn("table-fixed min-w-full border-collapse border-spacing-0",o),...s,children:b})})}),i]})})},h=({children:l,className:o,selected:t,onChangeSelection:s,indeterminate:n,disabled:i,...b})=>{const{checkboxSelection:a}=m(),x=j=>{typeof s=="function"&&s(j)};return e.jsx("thead",{className:d.cn("bg-background-secondary border-x-0 border-t-0 border-b-0.5 border-solid border-border-subtle",o),...b,children:e.jsxs("tr",{children:[a&&e.jsx("th",{scope:"col",className:"relative px-5.5 w-11 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 grid grid-cols-1 place-content-center",children:e.jsx(T.default,{size:"sm",checked:t,indeterminate:n,disabled:i,onChange:x,"aria-label":t?"Deselect all":"Select all"})})}),l]})})},p=({children:l,className:o,...t})=>e.jsx("th",{scope:"col",className:d.cn("p-3 text-left text-sm font-medium leading-5 text-text-primary",o),...t,children:l}),y=({children:l,className:o,...t})=>e.jsx("tbody",{className:d.cn("bg-background-primary divide-y-0.5 divide-x-0 divide-solid divide-border-subtle",o),...t,children:l}),f=({children:l,selected:o,value:t,className:s,onChangeSelection:n,...i})=>{const{checkboxSelection:b}=m(),a=x=>{typeof n=="function"&&n(x,t)};return e.jsxs("tr",{className:d.cn("hover:bg-background-secondary",o&&"bg-background-secondary",s),...i,children:[b&&e.jsx("td",{className:"relative px-5.5 w-11 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 grid grid-cols-1 place-content-center",children:e.jsx(T.default,{size:"sm",checked:o,onChange:a,"aria-label":"Select row"})})}),l]})},v=({children:l,className:o,...t})=>e.jsx("td",{className:d.cn("px-3 py-3.5 text-sm font-normal leading-5 text-text-secondary",o),...t,children:l}),u=({children:l,className:o,...t})=>{const{checkboxSelection:s}=m();return e.jsx("div",{className:d.cn("px-3 py-3",s&&"px-4",o),...t,children:l})};r.displayName="Table";h.displayName="Table.Head";p.displayName="Table.HeadCell";y.displayName="Table.Body";f.displayName="Table.Row";v.displayName="Table.Cell";u.displayName="Table.Footer";r.Head=h;r.HeadCell=p;r.Body=y;r.Row=f;r.Cell=v;r.Footer=u;exports.Table=r;exports.TableBody=y;exports.TableCell=v;exports.TableFooter=u;exports.TableHead=h;exports.TableHeadCell=p;exports.TableRow=f;exports.default=r;
//# sourceMappingURL=table.cjs.js.map
