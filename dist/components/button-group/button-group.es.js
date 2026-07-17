"use client";
import { jsx as a, jsxs as I } from "react/jsx-runtime";
import l, { forwardRef as R, useCallback as V, isValidElement as F, createContext as L } from "react";
import { cn as f } from "../../utilities/functions.es.js";
const h = L({
  activeItem: null,
  onChange: () => {
  },
  size: "md",
  iconPosition: "left"
}), x = ({
  children: o,
  activeItem: r = null,
  onChange: e,
  className: d,
  size: n = "md",
  iconPosition: i = "left"
}) => {
  const u = V(
    (t) => {
      e && e(t);
    },
    [e]
  ), c = f(
    "box-border flex border border-border-subtle border-solid rounded",
    d
  );
  return /* @__PURE__ */ a("div", { role: "group", className: c, children: /* @__PURE__ */ a(
    h.Provider,
    {
      value: {
        activeItem: r,
        onChange: u,
        size: n,
        iconPosition: i
      },
      children: l.Children.map(o, (t, s) => {
        if (!F(t))
          return null;
        const b = s === 0, p = s === l.Children.count(o) - 1;
        return l.cloneElement(t, {
          ...t.props,
          index: s,
          isFirstChild: b,
          isLastChild: p
        });
      })
    }
  ) });
}, $ = ({
  slug: o,
  text: r,
  icon: e,
  className: d,
  disabled: n = !1,
  isFirstChild: i,
  isLastChild: u,
  ...c
}, t) => {
  const s = l.useContext(h);
  if (!s)
    throw new Error("Button should be used inside Button Group");
  const { activeItem: b, onChange: p, size: g, iconPosition: C } = s, v = {
    xs: "py-1 px-1 text-sm gap-0.5 [&>svg]:size-4",
    sm: "py-2 px-2 text-base gap-1 [&>svg]:size-4",
    md: "py-2.5 px-2.5 text-base gap-1 [&>svg]:size-5"
  }, B = "bg-background-primary text-primary cursor-pointer flex items-center justify-center", y = "hover:bg-button-tertiary-hover", N = "focus:outline-none", z = n ? "text-text-disabled cursor-not-allowed" : "", G = i ? "rounded-tl rounded-bl border-0 border-r border-border-subtle" : "", k = u ? "rounded-tr rounded-br border-0" : "", w = "border-0 border-r border-border-subtle border-solid", j = b === o ? "bg-button-disabled" : "", E = f(
    B,
    y,
    N,
    z,
    v[g],
    w,
    j,
    G,
    k,
    d
  );
  return /* @__PURE__ */ I(
    "button",
    {
      ref: t,
      className: E,
      disabled: n,
      onClick: (P) => {
        p({ event: P, value: { slug: o, text: r } });
      },
      ...c,
      children: [
        C === "left" && e && /* @__PURE__ */ a("span", { className: "mr-1", children: e }),
        r,
        C === "right" && e && /* @__PURE__ */ a("span", { className: "ml-1", children: e })
      ]
    }
  );
}, m = R($);
m.displayName = "Button";
const J = {
  Group: x,
  Button: m
}, K = x, M = m;
export {
  $ as ButtonComponent,
  x as ButtonGroup,
  M as ButtonGroupButton,
  K as ButtonGroupContainer,
  h as ButtonGroupContext,
  J as default
};
//# sourceMappingURL=button-group.es.js.map
