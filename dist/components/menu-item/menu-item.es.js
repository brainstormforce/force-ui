import { jsx as s, jsxs as f } from "react/jsx-runtime";
import { createContext as j, useState as g, useContext as A } from "react";
import { motion as x, AnimatePresence as D } from "framer-motion";
import { ChevronDown as E } from "lucide-react";
import { cn as o } from "../../utilities/functions.es.js";
const y = j({}), C = () => A(y), d = ({ size: e = "md", children: a, className: t }) => /* @__PURE__ */ s(y.Provider, { value: { size: e }, children: /* @__PURE__ */ s("div", { className: o("flex flex-col bg-background-primary p-2", t), children: a }) });
d.displayName = "Menu";
const N = ({
  heading: e,
  arrow: a = !1,
  showArrowOnHover: t = !1,
  // Prop to toggle hover-based arrow display
  open: r = !0,
  onClick: i,
  children: c,
  className: m
}) => {
  const [n, u] = g(r), [v, p] = g(!1), { size: b } = C(), h = "text-text-primary bg-transparent cursor-pointer flex justify-between items-center gap-1", l = {
    sm: "text-xs",
    md: "text-sm"
  }[b ?? "md"], w = {
    sm: "size-4",
    md: "size-5"
  }[b ?? "md"], I = () => {
    u(!n), i && i(!n);
  }, k = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  }, S = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 }
  }, L = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }, V = () => t ? n || v ? "visible" : "hidden" : "visible";
  return /* @__PURE__ */ f("div", { children: [
    !!e && /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: I,
        onMouseEnter: () => t && p(!0),
        onMouseLeave: () => t && p(!1),
        className: o(
          h,
          l,
          e ? "p-1" : "p-0",
          "border-none w-full",
          m
        ),
        "aria-expanded": n,
        children: [
          /* @__PURE__ */ s("span", { className: "text-text-tertiary", children: e }),
          a && /* @__PURE__ */ s(
            x.span,
            {
              className: "flex items-center text-border-strong",
              initial: "hidden",
              animate: V(),
              exit: "hidden",
              variants: L,
              transition: { duration: 0.15 },
              children: /* @__PURE__ */ s(
                x.span,
                {
                  className: "inline-flex p-1",
                  variants: k,
                  animate: n ? "open" : "closed",
                  transition: { duration: 0.15 },
                  children: /* @__PURE__ */ s(
                    E,
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
    /* @__PURE__ */ s(D, { initial: !1, children: n && /* @__PURE__ */ s(
      x.ul,
      {
        role: "menu",
        variants: S,
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
N.displayName = "Menu.List";
const M = ({
  disabled: e = !1,
  active: a,
  onClick: t,
  children: r,
  className: i,
  ...c
}) => {
  const { size: m } = C(), n = "flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0", u = {
    sm: "[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm",
    md: "[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base"
  }[m ?? "md"];
  return /* @__PURE__ */ s(
    "li",
    {
      role: "menuitem",
      tabIndex: e ? -1 : 0,
      onClick: e ? void 0 : t,
      onKeyDown: (l) => {
        (l.key === "Enter" || l.key === " ") && t?.();
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
M.displayName = "Menu.Item";
const z = ({
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
z.displayName = "Menu.Separator";
d.List = N;
d.Item = M;
d.Separator = z;
export {
  d as Menu,
  M as MenuItem,
  N as MenuList,
  z as MenuSeparator,
  d as default
};
//# sourceMappingURL=menu-item.es.js.map
