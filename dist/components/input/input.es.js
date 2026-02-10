import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { forwardRef as z, useRef as ee, useMemo as y, useState as $, useCallback as te } from "react";
import { nanoid as re } from "nanoid";
import { cn as r } from "../../utilities/functions.es.js";
import { Upload as D, X as oe } from "lucide-react";
import { mergeRefs as K } from "../toaster/utils.es.js";
import le from "../label/label.es.js";
const se = ({
  id: w,
  type: s = "text",
  defaultValue: M = "",
  value: d,
  size: e = "sm",
  // sm, md, lg
  className: N = "",
  disabled: o = !1,
  onChange: x = () => {
  },
  error: I = !1,
  onError: k = () => {
  },
  prefix: n = null,
  suffix: i = null,
  label: p = "",
  ...b
}, F) => {
  const u = ee(null), c = y(() => w || `input-${s}-${re()}`, [w]), g = y(() => typeof d < "u", [d]), [R, X] = $(M), [S, h] = $(null), A = te(
    () => g ? d : R,
    [g, d, R]
  ), V = (a) => {
    if (o)
      return;
    let l;
    s === "file" ? (l = a.target.files, l && l.length > 0 ? h(l[0].name) : h(null)) : l = a.target.value, !g && s !== "file" && X(l), typeof x == "function" && x(l);
  }, j = () => {
    h(null), u.current && (u.current.value = ""), x(null);
  }, q = "bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200", L = {
    xs: "px-2 py-1 rounded",
    sm: "p-3 py-2 rounded",
    md: "p-3.5 py-2.5 rounded-md",
    lg: "p-4 py-3 rounded-lg"
  }, B = {
    xs: "text-xs font-medium",
    sm: "text-sm font-medium",
    md: "text-sm font-medium",
    lg: "text-base font-medium"
  }, f = {
    xs: "text-xs",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, E = {
    sm: n ? "pl-8" : "",
    md: n ? "pl-9" : "",
    lg: n ? "pl-10" : ""
  }, G = {
    sm: i ? "pr-8" : "",
    md: i ? "pr-9" : "",
    lg: i ? "pr-10" : ""
  }, P = o ? "hover:outline-border-disabled" : "hover:outline-border-strong", U = "focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", H = I ? "focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border" : "", J = I ? "focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border" : "", O = o ? "outline-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "", Q = o ? "outline-border-disabled cursor-not-allowed text-text-disabled file:text-text-tertiary" : "", W = "font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4", v = o ? "font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center" : "font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center", C = {
    xs: "[&>svg]:size-4",
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6"
  }, T = () => n ? /* @__PURE__ */ t("div", { className: r(W, "left-0 pl-3", f[e]), children: n }) : null, Y = () => s === "file" ? S ? /* @__PURE__ */ t(
    "div",
    {
      className: r(
        v,
        "right-0 pr-3 cursor-pointer z-20 pointer-events-auto",
        C[e]
      ),
      onClick: j,
      role: "button",
      tabIndex: 0,
      onKeyDown: (a) => {
        (a.key === "Enter" || a.key === " ") && j();
      },
      children: /* @__PURE__ */ t(oe, {})
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      className: r(
        v,
        "right-0 pr-3",
        C[e]
      ),
      children: /* @__PURE__ */ t(D, {})
    }
  ) : i ? /* @__PURE__ */ t("div", { className: r(W, "right-0 pr-3", f[e]), children: i }) : null, _ = y(() => p ? /* @__PURE__ */ t(
    le,
    {
      className: r(B[e]),
      htmlFor: c,
      ...b?.required && { required: !0 },
      children: p
    }
  ) : null, [p, e, c]), Z = S ? "file:border-0 file:bg-transparent pr-10" : "text-text-tertiary file:border-0 file:bg-transparent pr-10";
  return s === "file" ? /* @__PURE__ */ m("div", { className: "flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    _,
    /* @__PURE__ */ m(
      "div",
      {
        className: r(
          "w-full relative flex focus-within:z-10",
          N
        ),
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: K(u, F),
              id: c,
              type: "file",
              className: r(
                q,
                Q,
                L[e],
                f[e],
                U,
                P,
                J,
                Z
              ),
              disabled: o,
              onChange: V,
              onInvalid: k,
              ...b
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: r(
                v,
                "right-0 pr-3",
                C[e]
              ),
              children: /* @__PURE__ */ t(D, {})
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ m("div", { className: "flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    _,
    /* @__PURE__ */ m(
      "div",
      {
        className: r(
          "w-full relative flex focus-within:z-10",
          N
        ),
        children: [
          T(),
          /* @__PURE__ */ t(
            "input",
            {
              ref: K(u, F),
              id: c,
              type: s,
              className: r(
                q,
                O,
                L[e],
                f[e],
                E[e],
                G[e],
                U,
                P,
                H
              ),
              disabled: o,
              onChange: V,
              onInvalid: k,
              value: A(),
              ...b
            }
          ),
          Y()
        ]
      }
    )
  ] });
}, ne = z(se);
ne.displayName = "Input";
export {
  se as InputComponent,
  ne as default
};
//# sourceMappingURL=input.es.js.map
