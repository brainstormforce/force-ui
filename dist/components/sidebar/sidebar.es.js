import { jsx as e, jsxs as f, Fragment as u } from "react/jsx-runtime";
import { createContext as I, useRef as z, useState as E, useEffect as b, useContext as L } from "react";
import { safeLocalStorage as o, cn as n } from "../../utilities/functions.es.js";
import { PanelLeftOpen as j, PanelLeftClose as B } from "lucide-react";
import { Tooltip as F } from "../tooltip/tooltip.es.js";
const S = I({
  isCollapsed: !1,
  setIsCollapsed: () => {
  },
  collapsible: !0
}), y = ({
  children: r,
  className: s,
  onCollapseChange: i,
  collapsible: t = !0,
  borderOn: g = !0,
  collapsed: c = !1,
  ...C
}) => {
  const h = z(null), [d, l] = E(() => {
    if (!t && c)
      return c;
    const a = o.get("sidebar-collapsed");
    return a || window.innerWidth < 1280;
  });
  return b(() => {
    typeof i == "function" && i(d);
  }, [d, i]), b(() => {
    if (!t && c)
      return;
    const a = () => {
      const m = window.innerWidth < 1280;
      if (!t)
        l(!1), o.remove("sidebar-collapsed");
      else if (m)
        l(!0), o.set("sidebar-collapsed", !0);
      else {
        const p = o.get("sidebar-collapsed");
        l(p || !1);
      }
    };
    return window.addEventListener("resize", a), a(), () => {
      window.removeEventListener("resize", a);
    };
  }, [t]), /* @__PURE__ */ e(
    S.Provider,
    {
      value: { isCollapsed: d, setIsCollapsed: l, collapsible: t },
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: h,
          className: n(
            "h-full overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary",
            g && "border-0 border-r border-solid border-border-subtle",
            "transition-all duration-200",
            d && "w-16 px-2",
            s
          ),
          ...C,
          children: r
        }
      )
    }
  );
};
y.displayName = "Sidebar";
const w = ({ children: r }) => /* @__PURE__ */ e("div", { className: "space-y-2", children: r });
w.displayName = "Sidebar.Header";
const x = ({ children: r }) => /* @__PURE__ */ e("div", { className: n("space-y-4 grow items-start"), children: r });
x.displayName = "Sidebar.Body";
const N = ({ children: r }) => {
  const { isCollapsed: s, setIsCollapsed: i, collapsible: t } = L(S);
  return /* @__PURE__ */ f("div", { className: "space-y-4", children: [
    r,
    t && /* @__PURE__ */ e(
      "button",
      {
        className: n(
          "bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer",
          s && "justify-center"
        ),
        onClick: () => {
          i(!s), o.set("sidebar-collapsed", !s);
        },
        "aria-label": s ? "Expand sidebar" : "Collapse sidebar",
        children: s ? /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(F, { title: "Expand", children: /* @__PURE__ */ e(j, { className: "size-5" }) }) }) : /* @__PURE__ */ f(u, { children: [
          /* @__PURE__ */ e(B, { className: "size-5" }),
          " Collapse"
        ] })
      }
    )
  ] });
};
N.displayName = "Sidebar.Footer";
const v = ({ children: r, className: s }) => /* @__PURE__ */ e("div", { className: n("w-full", s), children: r });
v.displayName = "Sidebar.Item";
const W = Object.assign(y, {
  Header: w,
  Body: x,
  Footer: N,
  Item: v
});
export {
  y as Sidebar,
  x as SidebarBody,
  N as SidebarFooter,
  w as SidebarHeader,
  v as SidebarItem,
  W as default
};
//# sourceMappingURL=sidebar.es.js.map
