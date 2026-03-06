import { jsx as A } from "react/jsx-runtime";
import { forwardRef as I, useMemo as a, useState as T, useCallback as N } from "react";
import { nanoid as j } from "nanoid";
import { cn as z } from "../../utilities/functions.es.js";
const M = ({
  id: s,
  defaultValue: l = "",
  value: e,
  size: u = "sm",
  // sm, md, lg
  className: c = "",
  disabled: r = !1,
  onChange: t = () => {
  },
  error: i = !1,
  onError: f = () => {
  },
  ...b
}, m) => {
  const p = a(() => s || `input-textarea-${j()}`, [s]), o = a(() => typeof e < "u", [e]), [n, x] = T(l), g = N(
    () => o ? e : n,
    [o, e, n]
  ), C = (w) => {
    if (r)
      return;
    const d = w.target.value;
    o || x(d), typeof t == "function" && t(d);
  }, y = "py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary focus:outline-none transition ease-in-out duration-200", h = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, V = r ? "hover:border-border-disabled" : "hover:border-border-strong", k = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", v = i ? "focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border" : "";
  return /* @__PURE__ */ A(
    "textarea",
    {
      ref: m,
      id: p,
      className: z(
        y,
        r ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "",
        h[u],
        k,
        V,
        v,
        c
      ),
      disabled: r,
      onChange: C,
      onInvalid: f,
      value: g(),
      ...b
    }
  );
}, R = I(M);
R.displayName = "TextArea";
export {
  M as TextAreaComponent,
  R as default
};
//# sourceMappingURL=textarea.es.js.map
