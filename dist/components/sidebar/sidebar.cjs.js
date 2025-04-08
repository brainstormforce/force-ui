"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),o=require("react"),t=require("../../utilities/functions.cjs.js"),y=require("lucide-react"),N=require("../tooltip/tooltip.cjs.js"),g=o.createContext({isCollapsed:!1,setIsCollapsed:()=>{},collapsible:!0}),u=({children:r,className:s,onCollapseChange:d,collapsible:a=!0,borderOn:j=!0,collapsed:c=!1,...v})=>{const w=o.useRef(null),[l,n]=o.useState(()=>{if(!a&&c)return c;const i=t.safeLocalStorage.get("sidebar-collapsed");return i||window.innerWidth<1280});return o.useEffect(()=>{typeof d=="function"&&d(l)},[l,d]),o.useEffect(()=>{if(!a&&c)return;const i=()=>{const m=window.innerWidth<1280;if(!a)n(!1),t.safeLocalStorage.remove("sidebar-collapsed");else if(m)n(!0),t.safeLocalStorage.set("sidebar-collapsed",!0);else{const x=t.safeLocalStorage.get("sidebar-collapsed");n(x||!1)}};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[a]),e.jsx(g.Provider,{value:{isCollapsed:l,setIsCollapsed:n,collapsible:a},children:e.jsx("div",{ref:w,className:t.cn("h-full overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary",j&&"border-0 border-r border-solid border-border-subtle","transition-all duration-200",l&&"w-16 px-2",s),...v,children:r})})};u.displayName="Sidebar";const b=({children:r})=>e.jsx("div",{className:"space-y-2",children:r});b.displayName="Sidebar.Header";const f=({children:r})=>e.jsx("div",{className:t.cn("space-y-4 grow items-start"),children:r});f.displayName="Sidebar.Body";const S=({children:r})=>{const{isCollapsed:s,setIsCollapsed:d,collapsible:a}=o.useContext(g);return e.jsxs("div",{className:"space-y-4",children:[r,a&&e.jsx("button",{className:t.cn("bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer",s&&"justify-center"),onClick:()=>{d(!s),t.safeLocalStorage.set("sidebar-collapsed",!s)},"aria-label":s?"Expand sidebar":"Collapse sidebar",children:s?e.jsx(e.Fragment,{children:e.jsx(N.Tooltip,{title:"Expand",children:e.jsx(y.PanelLeftOpen,{className:"size-5"})})}):e.jsxs(e.Fragment,{children:[e.jsx(y.PanelLeftClose,{className:"size-5"})," Collapse"]})})]})};S.displayName="Sidebar.Footer";const p=({children:r,className:s})=>e.jsx("div",{className:t.cn("w-full",s),children:r});p.displayName="Sidebar.Item";const C=Object.assign(u,{Header:b,Body:f,Footer:S,Item:p});exports.Sidebar=u;exports.SidebarBody=f;exports.SidebarFooter=S;exports.SidebarHeader=b;exports.SidebarItem=p;exports.default=C;
//# sourceMappingURL=sidebar.cjs.js.map
