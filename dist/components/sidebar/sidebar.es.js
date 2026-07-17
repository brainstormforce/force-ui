"use client";
import { jsx as e, jsxs as u, Fragment as p } from "react/jsx-runtime";
import { useRef as I, useState as z, useEffect as b, useContext as E, createContext as L } from "react";
import { safeLocalStorage as o, cn as c } from "../../utilities/functions.es.js";
import { PanelLeftOpen as j, PanelLeftClose as B } from "lucide-react";
import { Tooltip as F } from "../tooltip/tooltip.es.js";
const S = L({
  isCollapsed: !1,
  setIsCollapsed: () => {
  },
  collapsible: !0
}), w = ({
  children: r,
  className: s,
  onCollapseChange: i,
  collapsible: t = !0,
  borderOn: g = !0,
  collapsed: d = !1,
  ...C
}) => {
  const h = I(null), [n, l] = z(() => {
    if (!t && d)
      return d;
    const a = o.get("sidebar-collapsed");
    return a || (typeof window > "u" ? d : window.innerWidth < 1280);
  });
  return b(() => {
    typeof i == "function" && i(n);
  }, [n, i]), b(() => {
    if (!t && d)
      return;
    const a = () => {
      const f = window.innerWidth < 1280;
      if (!t)
        l(!1), o.remove("sidebar-collapsed");
      else if (f)
        l(!0), o.set("sidebar-collapsed", !0);
      else {
        const m = o.get("sidebar-collapsed");
        l(m || !1);
      }
    };
    return window.addEventListener("resize", a), a(), () => {
      window.removeEventListener("resize", a);
    };
  }, [t]), /* @__PURE__ */ e(
    S.Provider,
    {
      value: { isCollapsed: n, setIsCollapsed: l, collapsible: t },
      children: /* @__PURE__ */ e(
        "nav",
        {
          ref: h,
          "aria-label": "Sidebar",
          className: c(
            "h-full overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary",
            g && "border-0 border-r border-solid border-border-subtle",
            "transition-all duration-200",
            n && "w-16 px-2",
            s
          ),
          ...C,
          children: r
        }
      )
    }
  );
};
w.displayName = "Sidebar";
const y = ({ children: r }) => /* @__PURE__ */ e("div", { className: "space-y-2", children: r });
y.displayName = "Sidebar.Header";
const x = ({ children: r }) => /* @__PURE__ */ e("div", { className: c("space-y-4 grow items-start"), children: r });
x.displayName = "Sidebar.Body";
const N = ({ children: r }) => {
  const { isCollapsed: s, setIsCollapsed: i, collapsible: t } = E(S);
  return /* @__PURE__ */ u("div", { className: "space-y-4", children: [
    r,
    t && /* @__PURE__ */ e(
      "button",
      {
        className: c(
          "bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer",
          s && "justify-center"
        ),
        onClick: () => {
          i(!s), o.set("sidebar-collapsed", !s);
        },
        "aria-label": s ? "Expand sidebar" : "Collapse sidebar",
        children: s ? /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(F, { title: "Expand", children: /* @__PURE__ */ e(j, { className: "size-5" }) }) }) : /* @__PURE__ */ u(p, { children: [
          /* @__PURE__ */ e(B, { className: "size-5" }),
          " Collapse"
        ] })
      }
    )
  ] });
};
N.displayName = "Sidebar.Footer";
const v = ({ children: r, className: s }) => /* @__PURE__ */ e("div", { className: c("w-full", s), children: r });
v.displayName = "Sidebar.Item";
const W = Object.assign(w, {
  Header: y,
  Body: x,
  Footer: N,
  Item: v
});
export {
  w as Sidebar,
  x as SidebarBody,
  N as SidebarFooter,
  y as SidebarHeader,
  v as SidebarItem,
  W as default
};
//# sourceMappingURL=sidebar.es.js.map
