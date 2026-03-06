import { jsx as a, jsxs as P } from "react/jsx-runtime";
import l, { forwardRef as I, useCallback as R, isValidElement as V, createContext as F } from "react";
import { cn as C } from "../../utilities/functions.es.js";
const f = F({
  activeItem: null,
  onChange: () => {
  },
  size: "md",
  iconPosition: "left"
}), L = ({
  children: o,
  activeItem: r = null,
  onChange: e,
  className: d,
  size: n = "md",
  iconPosition: i = "left"
}) => {
  const c = R(
    (s) => {
      e && e(s);
    },
    [e]
  ), u = C(
    "box-border flex border border-border-subtle border-solid rounded",
    d
  );
  return /* @__PURE__ */ a("div", { className: u, children: /* @__PURE__ */ a(
    f.Provider,
    {
      value: {
        activeItem: r,
        onChange: c,
        size: n,
        iconPosition: i
      },
      children: l.Children.map(o, (s, t) => {
        if (!V(s))
          return null;
        const b = t === 0, p = t === l.Children.count(o) - 1;
        return l.cloneElement(s, {
          ...s.props,
          index: t,
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
  isLastChild: c,
  ...u
}, s) => {
  const t = l.useContext(f);
  if (!t)
    throw new Error("Button should be used inside Button Group");
  const { activeItem: b, onChange: p, size: x, iconPosition: m } = t, v = {
    xs: "py-1 px-1 text-sm gap-0.5 [&>svg]:size-4",
    sm: "py-2 px-2 text-base gap-1 [&>svg]:size-4",
    md: "py-2.5 px-2.5 text-base gap-1 [&>svg]:size-5"
  }, g = "bg-background-primary text-primary cursor-pointer flex items-center justify-center", y = "hover:bg-button-tertiary-hover", B = "focus:outline-none", N = n ? "text-text-disabled cursor-not-allowed" : "", z = i ? "rounded-tl rounded-bl border-0 border-r border-border-subtle" : "", k = c ? "rounded-tr rounded-br border-0" : "", w = "border-0 border-r border-border-subtle border-solid", G = b === o ? "bg-button-disabled" : "", j = C(
    g,
    y,
    B,
    N,
    v[x],
    w,
    G,
    z,
    k,
    d
  );
  return /* @__PURE__ */ P(
    "button",
    {
      ref: s,
      className: j,
      disabled: n,
      onClick: (E) => {
        p({ event: E, value: { slug: o, text: r } });
      },
      ...u,
      children: [
        m === "left" && e && /* @__PURE__ */ a("span", { className: "mr-1", children: e }),
        r,
        m === "right" && e && /* @__PURE__ */ a("span", { className: "ml-1", children: e })
      ]
    }
  );
}, h = I($);
h.displayName = "Button";
const J = {
  Group: L,
  Button: h
};
export {
  $ as ButtonComponent,
  L as ButtonGroup,
  f as ButtonGroupContext,
  J as default
};
//# sourceMappingURL=button-group.es.js.map
