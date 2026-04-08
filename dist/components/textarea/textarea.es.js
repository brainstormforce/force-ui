import { jsx as A } from "react/jsx-runtime";
import { forwardRef as I, useMemo as l, useState as T, useCallback as N } from "react";
import { nanoid as j } from "nanoid";
import { cn as z } from "../../utilities/functions.es.js";
const M = ({
  id: s,
  defaultValue: i = "",
  value: e,
  size: u = "sm",
  // sm, md, lg
  className: c = "",
  disabled: o = !1,
  onChange: t = () => {
  },
  error: n = !1,
  onError: f = () => {
  },
  ...b
}, m) => {
  const p = l(() => s || `input-textarea-${j()}`, [s]), r = l(() => typeof e < "u", [e]), [a, x] = T(i), g = N(
    () => r ? e : a,
    [r, e, a]
  ), C = (w) => {
    if (o)
      return;
    const d = w.target.value;
    r || x(d), typeof t == "function" && t(d);
  }, y = "py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary focus:outline-none focus-visible:outline-none transition ease-in-out duration-200", h = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, v = o ? "hover:border-border-disabled" : "hover:border-border-strong", V = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", k = n ? "focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border" : "";
  return /* @__PURE__ */ A(
    "textarea",
    {
      ref: m,
      id: p,
      className: z(
        y,
        o ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "",
        h[u],
        V,
        v,
        k,
        c
      ),
      disabled: o,
      onChange: C,
      onInvalid: f,
      value: g(),
      ...n && { "aria-invalid": !0 },
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
