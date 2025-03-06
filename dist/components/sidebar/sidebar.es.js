import { jsx as e, jsxs as m, Fragment as b } from "react/jsx-runtime";
import { createContext as h, useRef as I, useState as z, useEffect as u, useContext as E } from "react";
import { safeLocalStorage as o, cn as n } from "../../utilities/functions.es.js";
import { PanelLeftOpen as L, PanelLeftClose as j } from "lucide-react";
import { Tooltip as B } from "../tooltip/tooltip.es.js";
const f = h({
  isCollapsed: !1,
  setIsCollapsed: () => {
  },
  collapsible: !0
}), S = ({
  children: r,
  className: s,
  onCollapseChange: t,
  collapsible: i = !0,
  borderOn: v = !0,
  ...g
}) => {
  const C = I(null), [l, d] = z(() => {
    const a = o.get("sidebar-collapsed"), c = window.innerWidth < 1280;
    return a || c;
  });
  return u(() => {
    t && t(l);
  }, [l, t]), u(() => {
    const a = () => {
      const c = window.innerWidth < 1280;
      if (!i)
        d(!1), o.remove("sidebar-collapsed");
      else if (c)
        d(!0), o.set("sidebar-collapsed", !0);
      else {
        const p = o.get("sidebar-collapsed");
        d(p || !1);
      }
    };
    return window.addEventListener("resize", a), a(), () => {
      window.removeEventListener("resize", a);
    };
  }, [i]), /* @__PURE__ */ e(
    f.Provider,
    {
      value: { isCollapsed: l, setIsCollapsed: d, collapsible: i },
      children: /* @__PURE__ */ e(
        "div",
        {
          ref: C,
          className: n(
            "h-full overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary",
            v && "border-0 border-r border-solid border-border-subtle",
            "transition-all duration-200",
            l && "w-16 px-2",
            s
          ),
          ...g,
          children: r
        }
      )
    }
  );
};
S.displayName = "Sidebar";
const w = ({ children: r }) => /* @__PURE__ */ e("div", { className: "space-y-2", children: r });
w.displayName = "Sidebar.Header";
const x = ({ children: r }) => /* @__PURE__ */ e("div", { className: n("space-y-4 grow items-start"), children: r });
x.displayName = "Sidebar.Body";
const y = ({ children: r }) => {
  const { isCollapsed: s, setIsCollapsed: t, collapsible: i } = E(f);
  return /* @__PURE__ */ m("div", { className: "space-y-4", children: [
    r,
    i && /* @__PURE__ */ e(
      "button",
      {
        className: n(
          "bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer",
          s && "justify-center"
        ),
        onClick: () => {
          t(!s), o.set("sidebar-collapsed", !s);
        },
        "aria-label": s ? "Expand sidebar" : "Collapse sidebar",
        children: s ? /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(B, { title: "Expand", children: /* @__PURE__ */ e(L, { className: "size-5" }) }) }) : /* @__PURE__ */ m(b, { children: [
          /* @__PURE__ */ e(j, { className: "size-5" }),
          " Collapse"
        ] })
      }
    )
  ] });
};
y.displayName = "Sidebar.Footer";
const N = ({ children: r, className: s }) => /* @__PURE__ */ e("div", { className: n("w-full", s), children: r });
N.displayName = "Sidebar.Item";
const O = Object.assign(S, {
  Header: w,
  Body: x,
  Footer: y,
  Item: N
});
export {
  S as Sidebar,
  x as SidebarBody,
  y as SidebarFooter,
  w as SidebarHeader,
  N as SidebarItem,
  O as default
};
//# sourceMappingURL=sidebar.es.js.map
