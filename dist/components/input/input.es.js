import { jsx as t, jsxs as x } from "react/jsx-runtime";
import { forwardRef as z, useRef as ee, useMemo as w, useState as $, useCallback as te } from "react";
import { nanoid as re } from "nanoid";
import { cn as r } from "../../utilities/functions.es.js";
import { Upload as D, X as le } from "lucide-react";
import { mergeRefs as K } from "../toaster/utils.es.js";
import oe from "../label/label.es.js";
const se = ({
  id: N,
  type: s = "text",
  defaultValue: M = "",
  value: d,
  size: e = "sm",
  // sm, md, lg
  className: I = "",
  disabled: l = !1,
  onChange: p = () => {
  },
  error: u = !1,
  onError: k = () => {
  },
  prefix: n = null,
  suffix: i = null,
  label: b = "",
  ...g
}, R) => {
  const c = ee(null), f = w(() => N || `input-${s}-${re()}`, [N]), h = w(() => typeof d < "u", [d]), [F, X] = $(M), [S, v] = $(null), A = te(
    () => h ? d : F,
    [h, d, F]
  ), V = (a) => {
    if (l)
      return;
    let o;
    s === "file" ? (o = a.target.files, o && o.length > 0 ? v(o[0].name) : v(null)) : o = a.target.value, !h && s !== "file" && X(o), typeof p == "function" && p(o);
  }, j = () => {
    v(null), c.current && (c.current.value = ""), p(null);
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
  }, m = {
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
  }, P = l ? "hover:outline-border-disabled" : "hover:outline-border-strong", U = "focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", H = u ? "focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border" : "", J = u ? "focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border" : "", O = l ? "outline-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "", Q = l ? "outline-border-disabled cursor-not-allowed text-text-disabled file:text-text-tertiary" : "", W = "font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4", C = l ? "font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center" : "font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center", y = {
    xs: "[&>svg]:size-4",
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6"
  }, T = () => n ? /* @__PURE__ */ t("div", { className: r(W, "left-0 pl-3", m[e]), children: n }) : null, Y = () => s === "file" ? S ? /* @__PURE__ */ t(
    "div",
    {
      className: r(
        C,
        "right-0 pr-3 cursor-pointer z-20 pointer-events-auto",
        y[e]
      ),
      onClick: j,
      role: "button",
      tabIndex: 0,
      "aria-label": "Remove file",
      onKeyDown: (a) => {
        (a.key === "Enter" || a.key === " ") && j();
      },
      children: /* @__PURE__ */ t(le, { "aria-hidden": "true" })
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      className: r(
        C,
        "right-0 pr-3",
        y[e]
      ),
      "aria-hidden": "true",
      children: /* @__PURE__ */ t(D, {})
    }
  ) : i ? /* @__PURE__ */ t("div", { className: r(W, "right-0 pr-3", m[e]), children: i }) : null, _ = w(() => b ? /* @__PURE__ */ t(
    oe,
    {
      className: r(B[e]),
      htmlFor: f,
      ...g?.required && { required: !0 },
      children: b
    }
  ) : null, [b, e, f]), Z = S ? "file:border-0 file:bg-transparent pr-10" : "text-text-tertiary file:border-0 file:bg-transparent pr-10";
  return s === "file" ? /* @__PURE__ */ x("div", { className: "flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    _,
    /* @__PURE__ */ x(
      "div",
      {
        className: r(
          "w-full relative flex focus-within:z-10",
          I
        ),
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: K(c, R),
              id: f,
              type: "file",
              className: r(
                q,
                Q,
                L[e],
                m[e],
                U,
                P,
                J,
                Z
              ),
              disabled: l,
              onChange: V,
              onInvalid: k,
              ...u && { "aria-invalid": !0 },
              ...g
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: r(
                C,
                "right-0 pr-3",
                y[e]
              ),
              "aria-hidden": "true",
              children: /* @__PURE__ */ t(D, {})
            }
          )
        ]
      }
    )
  ] }) : /* @__PURE__ */ x("div", { className: "flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    _,
    /* @__PURE__ */ x(
      "div",
      {
        className: r(
          "w-full relative flex focus-within:z-10",
          I
        ),
        children: [
          T(),
          /* @__PURE__ */ t(
            "input",
            {
              ref: K(c, R),
              id: f,
              type: s,
              className: r(
                q,
                O,
                L[e],
                m[e],
                E[e],
                G[e],
                U,
                P,
                H
              ),
              disabled: l,
              onChange: V,
              onInvalid: k,
              value: A(),
              ...u && { "aria-invalid": !0 },
              ...g
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
