import { jsx as s, jsxs as y } from "react/jsx-runtime";
import { createContext as A, useState as C, useContext as D } from "react";
import { motion as b, AnimatePresence as E } from "framer-motion";
import { ChevronDown as K } from "lucide-react";
import { cn as o } from "../../utilities/functions.es.js";
const N = A({}), M = () => D(N), l = ({ size: e = "md", children: a, className: t }) => /* @__PURE__ */ s(N.Provider, { value: { size: e }, children: /* @__PURE__ */ s("div", { className: o("flex flex-col bg-background-primary p-2", t), children: a }) });
l.displayName = "Menu";
const z = ({
  heading: e,
  arrow: a = !1,
  showArrowOnHover: t = !1,
  // Prop to toggle hover-based arrow display
  open: r = !0,
  onClick: i,
  children: c,
  className: m
}) => {
  const [n, u] = C(r), [v, p] = C(!1), { size: x } = M(), h = "text-text-primary bg-transparent cursor-pointer flex justify-between items-center gap-1", d = {
    sm: "text-xs",
    md: "text-sm"
  }[x ?? "md"], w = {
    sm: "size-4",
    md: "size-5"
  }[x ?? "md"], f = () => {
    u(!n), i && i(!n);
  }, S = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  }, L = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 }
  }, V = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }, j = () => t ? n || v ? "visible" : "hidden" : "visible";
  return /* @__PURE__ */ y("div", { children: [
    !!e && /* @__PURE__ */ y(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: f,
        onKeyDown: (g) => {
          (g.key === "Enter" || g.key === " ") && f();
        },
        onMouseEnter: () => t && p(!0),
        onMouseLeave: () => t && p(!1),
        className: o(
          h,
          d,
          e ? "p-1" : "p-0",
          m
        ),
        "aria-expanded": n,
        children: [
          /* @__PURE__ */ s("span", { className: "text-text-tertiary", children: e }),
          a && /* @__PURE__ */ s(
            b.span,
            {
              className: "flex items-center text-border-strong",
              initial: "hidden",
              animate: j(),
              exit: "hidden",
              variants: V,
              transition: { duration: 0.15 },
              children: /* @__PURE__ */ s(
                b.span,
                {
                  className: "inline-flex p-1",
                  variants: S,
                  animate: n ? "open" : "closed",
                  transition: { duration: 0.15 },
                  children: /* @__PURE__ */ s(
                    K,
                    {
                      className: o("shrink-0", w)
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s(E, { initial: !1, children: n && /* @__PURE__ */ s(
      b.ul,
      {
        role: "menu",
        variants: L,
        initial: "closed",
        animate: "open",
        exit: "closed",
        transition: { duration: 0.3, ease: "easeInOut" },
        className: "overflow flex gap-0.5 flex-col m-0 bg-white rounded p-0",
        children: c
      }
    ) })
  ] });
};
z.displayName = "Menu.List";
const k = ({
  disabled: e = !1,
  active: a,
  onClick: t,
  children: r,
  className: i,
  ...c
}) => {
  const { size: m } = M(), n = "flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0", u = {
    sm: "[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm",
    md: "[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base"
  }[m ?? "md"];
  return /* @__PURE__ */ s(
    "li",
    {
      role: "menuitem",
      tabIndex: e ? -1 : 0,
      onClick: e ? void 0 : t,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && t?.();
      },
      className: o(
        n,
        u,
        "hover:bg-background-secondary hover:text-text-primary",
        e ? "text-text-disabled hover:text-text-disabled cursor-not-allowed hover:bg-transparent" : "",
        a ? "text-icon-primary [&>svg]:text-icon-interactive bg-background-secondary" : "",
        "transition-colors duration-300 ease-in-out",
        i
      ),
      "aria-disabled": e,
      ...c,
      children: r
    }
  );
};
k.displayName = "Menu.Item";
const I = ({
  variant: e = "solid",
  className: a
}) => {
  const t = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    hidden: "border-hidden",
    none: "border-none"
  }[e];
  return /* @__PURE__ */ s("li", { className: "m-0 p-0 list-none", role: "separator", "aria-hidden": "true", children: /* @__PURE__ */ s(
    "hr",
    {
      className: o(
        "w-full border-0 border-t border-border-subtle",
        t,
        a
      )
    }
  ) });
};
I.displayName = "Menu.Separator";
l.List = z;
l.Item = k;
l.Separator = I;
export {
  l as Menu,
  k as MenuItem,
  z as MenuList,
  I as MenuSeparator,
  l as default
};
//# sourceMappingURL=menu-item.es.js.map
