import { jsx as e, jsxs as g } from "react/jsx-runtime";
import { createContext as A, useState as y, useContext as D } from "react";
import { motion as b, AnimatePresence as E } from "framer-motion";
import { ChevronDown as K } from "lucide-react";
import { cn as o } from "../../utilities/functions.es.js";
const C = A({}), N = () => D(C), l = ({ size: t = "md", children: a, className: s }) => /* @__PURE__ */ e(C.Provider, { value: { size: t }, children: /* @__PURE__ */ e("div", { className: o("flex flex-col bg-background-primary p-2", s), children: a }) });
l.displayName = "Menu";
const M = ({
  heading: t,
  arrow: a = !1,
  showArrowOnHover: s = !1,
  // Prop to toggle hover-based arrow display
  open: r = !0,
  onClick: i,
  children: c,
  className: m
}) => {
  const [n, x] = y(r), [v, u] = y(!1), { size: p } = N(), d = "text-text-primary bg-transparent cursor-pointer flex justify-between items-center gap-1", k = {
    sm: "text-xs",
    md: "text-sm"
  }[p ?? "md"], w = {
    sm: "size-4",
    md: "size-5"
  }[p ?? "md"], h = () => {
    x(!n), i && i(!n);
  }, S = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  }, L = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 }
  }, V = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }, j = () => s ? n || v ? "visible" : "hidden" : "visible";
  return /* @__PURE__ */ g("div", { children: [
    !!t && /* @__PURE__ */ g(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: h,
        onKeyDown: (f) => {
          (f.key === "Enter" || f.key === " ") && h();
        },
        onMouseEnter: () => s && u(!0),
        onMouseLeave: () => s && u(!1),
        className: o(
          d,
          k,
          t ? "p-1" : "p-0",
          m
        ),
        "aria-expanded": n,
        children: [
          /* @__PURE__ */ e("span", { className: "text-text-tertiary", children: t }),
          a && /* @__PURE__ */ e(
            b.span,
            {
              className: "flex items-center text-border-strong",
              initial: "hidden",
              animate: j(),
              exit: "hidden",
              variants: V,
              transition: { duration: 0.15 },
              children: /* @__PURE__ */ e(
                b.span,
                {
                  className: "inline-flex p-1",
                  variants: S,
                  animate: n ? "open" : "closed",
                  transition: { duration: 0.15 },
                  children: /* @__PURE__ */ e(
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
    /* @__PURE__ */ e(E, { initial: !1, children: n && /* @__PURE__ */ e(
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
M.displayName = "Menu.List";
const z = ({
  disabled: t = !1,
  active: a,
  onClick: s,
  children: r,
  className: i
}) => {
  const { size: c } = N(), m = "flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0", n = {
    sm: "[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm",
    md: "[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base"
  }[c ?? "md"];
  return /* @__PURE__ */ e(
    "li",
    {
      role: "menuitem",
      tabIndex: 0,
      onClick: s,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && s?.();
      },
      className: o(
        m,
        n,
        "hover:bg-background-secondary hover:text-text-primary",
        t ? "text-text-disabled hover:text-text-disabled cursor-not-allowed hover:bg-transparent" : "",
        a ? "text-icon-primary [&>svg]:text-icon-interactive bg-background-secondary" : "",
        "transition-colors duration-300 ease-in-out",
        i
      ),
      children: r
    }
  );
};
z.displayName = "Menu.Item";
const I = ({
  variant: t = "solid",
  className: a
}) => {
  const s = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    hidden: "border-hidden",
    none: "border-none"
  }[t];
  return /* @__PURE__ */ e("li", { className: "m-0 p-0 list-none", role: "separator", "aria-hidden": "true", children: /* @__PURE__ */ e(
    "hr",
    {
      className: o(
        "w-full border-0 border-t border-border-subtle",
        s,
        a
      )
    }
  ) });
};
I.displayName = "Menu.Separator";
l.List = M;
l.Item = z;
l.Separator = I;
export {
  l as Menu,
  z as MenuItem,
  M as MenuList,
  I as MenuSeparator,
  l as default
};
//# sourceMappingURL=menu-item.es.js.map
