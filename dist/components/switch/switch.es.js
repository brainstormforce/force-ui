import { jsx as a, jsxs as d } from "react/jsx-runtime";
import { forwardRef as A, useMemo as C, useState as E, useCallback as F, isValidElement as H } from "react";
import { nanoid as I } from "nanoid";
import { cn as t } from "../../utilities/functions.es.js";
import N from "../label/label.es.js";
const M = ({
  label: e,
  switchId: g,
  disabled: r = !1,
  children: c,
  size: s
}) => {
  const o = {
    xs: "text-xs leading-4 font-medium",
    sm: "text-sm leading-5 font-medium",
    md: "text-base leading-6 font-medium"
  }, h = {
    xs: "text-xs leading-4 font-normal",
    sm: "text-sm leading-5 font-normal",
    md: "text-sm leading-5 font-normal"
  }, f = {
    xs: "space-y-0.5",
    sm: "space-y-0.5",
    md: "space-y-1"
  };
  if (H(e))
    return /* @__PURE__ */ d(
      "div",
      {
        className: t("inline-flex items-center gap-3", "items-start"),
        children: [
          c,
          e
        ]
      }
    );
  const u = () => {
    const { heading: n = "", description: l = "" } = e || {};
    return /* @__PURE__ */ d("div", { className: t("space-y-0.5", f[s]), children: [
      n && /* @__PURE__ */ a(
        N,
        {
          htmlFor: g,
          className: t("m-0", o[s]),
          ...r && { variant: "disabled" },
          children: n
        }
      ),
      l && /* @__PURE__ */ a(
        N,
        {
          tag: "p",
          variant: "help",
          className: t(
            "text-sm font-normal leading-5 m-0",
            h[s]
          ),
          ...r && { variant: "disabled" },
          children: l
        }
      )
    ] });
  }, p = !e?.heading && !e?.description, i = !e?.heading || !e?.description ? "items-center" : "items-start";
  return p ? c : /* @__PURE__ */ d("div", { className: t("inline-flex", i, "gap-3"), children: [
    c,
    u()
  ] });
}, R = ({
  id: e,
  onChange: g,
  value: r,
  defaultValue: c = !1,
  size: s = "sm",
  disabled: o = !1,
  label: h = { heading: "", description: "" },
  name: f,
  className: b,
  ...u
}, p) => {
  const i = s === "lg" ? "md" : s, n = C(() => typeof r < "u", [r]), l = C(() => e || `switch-${I()}`, []), [w, D] = E(c), m = "primary", z = F(
    () => n ? r : w,
    [n, r, w]
  ), L = (j) => {
    if (o)
      return;
    const y = j.target.checked;
    n || D(y), typeof g == "function" && g(y);
  }, x = {
    primary: {
      input: "bg-toggle-off checked:bg-toggle-on focus:ring focus:ring-toggle-on focus:ring-offset-2 border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border",
      toggleDial: "bg-toggle-dial-background shadow-toggleDial"
    }
  }, S = {
    primary: {
      input: "group-hover/switch:bg-toggle-off-hover checked:group-hover/switch:bg-toggle-on-hover checked:group-hover/switch:border-toggle-on-border"
    }
  }, v = {
    md: {
      container: "w-11 h-6",
      toggleDial: "size-4 peer-checked:translate-x-5"
    },
    sm: {
      container: "w-10 h-5",
      toggleDial: "size-3 peer-checked:translate-x-5"
    },
    xs: {
      container: "w-8 h-4",
      toggleDial: "size-2.5 peer-checked:translate-x-3.75"
    }
  }, V = {
    md: "group-hover/switch:size-5 group-focus-within/switch:size-5 not-rtl:group-focus-within/switch:left-0.5 rtl:group-focus-within/switch:right-0.5 not-rtl:group-hover/switch:left-0.5 rtl:group-hover/switch:right-0.5",
    sm: "group-hover/switch:size-4 group-focus-within/switch:size-4 not-rtl:group-focus-within/switch:left-0.5 rtl:group-focus-within/switch:right-0.5 not-rtl:group-hover/switch:left-0.5 rtl:group-hover/switch:right-0.5",
    xs: "group-hover/switch:size-3.25 group-focus-within/switch:size-3.25 not-rtl:group-focus-within/switch:left-0.5 rtl:group-focus-within/switch:right-0.5 not-rtl:group-hover/switch:left-0.5 rtl:group-hover/switch:right-0.5"
  }, k = {
    input: "bg-toggle-off-disabled disabled:border-transparent disabled:cursor-not-allowed checked:disabled:bg-toggle-on-disabled disabled:shadow-toggle-disabled",
    toggleDial: "peer-disabled:cursor-not-allowed"
  };
  return /* @__PURE__ */ a(
    M,
    {
      label: h,
      switchId: l,
      disabled: o,
      size: i,
      children: /* @__PURE__ */ d(
        "div",
        {
          className: t(
            "relative group/switch inline-block cursor-pointer rounded-full shrink-0",
            v[i].container,
            b
          ),
          children: [
            /* @__PURE__ */ a(
              "input",
              {
                ref: p,
                id: l,
                type: "checkbox",
                className: t(
                  "peer appearance-none absolute rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0 checked:[background-image:none]",
                  x[m].input,
                  o && k.input,
                  !o && S[m].input
                ),
                checked: z(),
                onChange: L,
                disabled: o,
                name: f,
                ...u
              }
            ),
            /* @__PURE__ */ a(
              "label",
              {
                htmlFor: l,
                className: t(
                  "peer/toggle-dial bg-white border rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300 top-2/4 not-rtl:left-1 rtl:right-1 -translate-y-2/4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 not-rtl:before:left-2/4 rtl:before:right-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
                  v[i].toggleDial,
                  x[m].toggleDial,
                  o && k.toggleDial,
                  !o && V[i]
                )
              }
            )
          ]
        }
      )
    }
  );
}, $ = A(R);
$.displayName = "Switch";
export {
  R as SwitchComponent,
  M as SwitchLabel,
  $ as default
};
//# sourceMappingURL=switch.es.js.map
