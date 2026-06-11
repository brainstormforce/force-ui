import { jsxs as a, jsx as c } from "react/jsx-runtime";
import { forwardRef as E, useMemo as h, useState as F, useCallback as y, isValidElement as R } from "react";
import { nanoid as S } from "nanoid";
import { cn as r } from "../../utilities/functions.es.js";
import { Minus as q, Check as A } from "lucide-react";
import v from "../label/label.es.js";
const B = ({
  id: l,
  label: e,
  defaultChecked: C = !1,
  checked: i,
  onChange: p,
  indeterminate: m,
  disabled: t,
  size: o = "md",
  className: N,
  ...w
}, j) => {
  const s = h(() => l || `checkbox-${S()}`, [l]), f = h(() => `${s}-description`, [s]), d = h(
    () => typeof i < "u",
    [i]
  ), [u, I] = F(C || !1), x = "primary", n = {
    sm: {
      checkbox: "size-4 rounded gap-1",
      icon: "size-3",
      text: "text-sm",
      // text class for sm
      description: "text-sm",
      gap: "gap-0.5"
    },
    md: {
      checkbox: "size-5 rounded gap-1",
      icon: "size-4",
      text: "text-base",
      // text class for md
      description: "text-sm",
      gap: "gap-1"
    }
  }, b = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-2 focus:ring-focus",
      icon: "text-white"
    }
  }, g = {
    checkbox: "cursor-not-allowed disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "cursor-not-allowed peer-disabled:text-border-disabled"
  }, V = y(
    () => d ? i : u,
    [d, i, u]
  ), L = ($) => {
    if (t)
      return;
    const k = $.target.checked;
    d || I(k), typeof p == "function" && p(k);
  }, M = y(() => R(e) ? e : !e?.heading && !e?.description ? null : /* @__PURE__ */ a("div", { className: n[o].gap, children: [
    e?.heading && /* @__PURE__ */ c(
      v,
      {
        className: r(
          "text-text-primary font-medium leading-4 m-0",
          n[o].text,
          n[o].gap,
          t && "text-text-disabled"
        ),
        htmlFor: s,
        children: e?.heading
      }
    ),
    e?.description && /* @__PURE__ */ c(
      v,
      {
        tag: "p",
        id: f,
        className: r(
          "font-normal leading-5 m-0",
          n[o].description,
          t && "text-text-disabled"
        ),
        variant: "help",
        children: e?.description
      }
    )
  ] }), [e, o, t]);
  return /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "inline-flex items-center justify-center gap-2",
        !!e && "items-start",
        t && "cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            className: r(
              "relative flex items-center justify-center rounded-full p-0.5",
              !t && "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: j,
                  id: s,
                  type: "checkbox",
                  ...m && { "aria-checked": "mixed" },
                  ...e?.description && { "aria-describedby": f },
                  className: r(
                    "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid focus:outline-none",
                    b[x].checkbox,
                    n[o].checkbox,
                    t && g.checkbox,
                    N
                  ),
                  checked: V(),
                  onChange: L,
                  disabled: t,
                  ...w
                }
              ),
              /* @__PURE__ */ c(
                "span",
                {
                  "aria-hidden": "true",
                  className: r(
                    "pointer-events-none inline-flex items-center absolute top-2/4 not-rtl:left-2/4 rtl:right-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
                    b[x].icon,
                    t && g.icon
                  ),
                  children: m ? /* @__PURE__ */ c(q, { className: r(n[o]?.icon) }) : /* @__PURE__ */ c(A, { className: r(n[o]?.icon) })
                }
              )
            ]
          }
        ),
        !!e && M()
      ]
    }
  );
}, D = E(B);
D.displayName = "Checkbox";
export {
  B as CheckboxComponent,
  D as default
};
//# sourceMappingURL=checkbox.es.js.map
