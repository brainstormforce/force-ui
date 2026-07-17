"use client";
import { jsx as z } from "react/jsx-runtime";
import { forwardRef as E, useRef as L, useMemo as p, useState as M, useCallback as q, useLayoutEffect as B } from "react";
import { nanoid as D } from "nanoid";
import { cn as F } from "../../utilities/functions.es.js";
import { mergeRefs as G } from "../toaster/utils.es.js";
const m = (e) => typeof e == "number" ? `${e}px` : e, H = ({
  id: e,
  defaultValue: x = "",
  value: r,
  size: g = "sm",
  // sm, md, lg
  className: y = "",
  disabled: t = !1,
  onChange: d = () => {
  },
  error: a = !1,
  onError: h = () => {
  },
  autoResize: s = !1,
  minHeight: u,
  maxHeight: n = 160,
  style: C,
  ...v
}, w) => {
  const i = L(null), V = p(() => e || `input-textarea-${D()}`, [e]), l = p(() => typeof r < "u", [r]), [f, k] = M(x), c = q(
    () => l ? r : f,
    [l, r, f]
  );
  B(() => {
    if (!s)
      return;
    const o = i.current;
    o && (o.style.height = "auto", o.style.height = `${o.scrollHeight}px`);
  }, [s, c(), u, n]);
  const A = (o) => {
    if (t)
      return;
    const b = o.target.value;
    l || k(b), typeof d == "function" && d(b);
  }, I = "py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary focus:outline-none focus-visible:outline-none transition ease-in-out duration-200", S = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, T = t ? "hover:border-border-disabled" : "hover:border-border-strong", $ = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", N = a ? "focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border" : "", R = t ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "", j = {
    ...C ?? {},
    minHeight: m(u),
    maxHeight: m(n),
    ...s && {
      resize: "none",
      overflow: n !== null ? "auto" : "hidden"
    }
  };
  return /* @__PURE__ */ z(
    "textarea",
    {
      ref: G(i, w),
      id: V,
      className: F(
        I,
        R,
        S[g],
        $,
        T,
        N,
        y
      ),
      disabled: t,
      onChange: A,
      onInvalid: h,
      value: c(),
      style: j,
      ...a && { "aria-invalid": !0 },
      ...v
    }
  );
}, J = E(H);
J.displayName = "TextArea";
export {
  H as TextAreaComponent,
  J as default
};
//# sourceMappingURL=textarea.es.js.map
