import { jsxs as d, jsx as c } from "react/jsx-runtime";
import { forwardRef as M, useMemo as g, useState as E, useCallback as u, isValidElement as R } from "react";
import { nanoid as S } from "nanoid";
import { cn as r } from "../../utilities/functions.es.js";
import { Minus as $, Check as q } from "lucide-react";
import k from "../label/label.es.js";
const A = ({
  id: l,
  label: e,
  defaultChecked: v = !1,
  checked: i,
  onChange: h,
  indeterminate: y,
  disabled: t,
  size: o = "md",
  className: C,
  ...N
}, w) => {
  const s = g(() => l || `checkbox-${S()}`, [l]), a = g(
    () => typeof i < "u",
    [i]
  ), [m, j] = E(v || !1), p = "primary", n = {
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
  }, f = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-2 focus:ring-focus",
      icon: "text-white"
    }
  }, x = {
    checkbox: "cursor-not-allowed disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "cursor-not-allowed peer-disabled:text-border-disabled"
  }, V = u(
    () => a ? i : m,
    [a, i, m]
  ), F = (L) => {
    if (t)
      return;
    const b = L.target.checked;
    a || j(b), typeof h == "function" && h(b);
  }, I = u(() => R(e) ? e : !e?.heading && !e?.description ? null : /* @__PURE__ */ d("div", { className: n[o].gap, children: [
    e?.heading && /* @__PURE__ */ c(
      k,
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
      k,
      {
        tag: "p",
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
  return /* @__PURE__ */ d(
    "div",
    {
      className: r(
        "inline-flex items-center justify-center gap-2",
        !!e && "items-start",
        t && "cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ d(
          "label",
          {
            className: r(
              "relative flex items-center justify-center rounded-full p-0.5",
              !t && "cursor-pointer"
            ),
            htmlFor: s,
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: w,
                  id: s,
                  type: "checkbox",
                  className: r(
                    "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",
                    f[p].checkbox,
                    n[o].checkbox,
                    t && x.checkbox,
                    C
                  ),
                  checked: V(),
                  onChange: F,
                  disabled: t,
                  ...N
                }
              ),
              /* @__PURE__ */ c(
                "span",
                {
                  className: r(
                    "pointer-events-none inline-flex items-center absolute top-2/4 not-rtl:left-2/4 rtl:right-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
                    f[p].icon,
                    t && x.icon
                  ),
                  children: y ? /* @__PURE__ */ c($, { className: r(n[o]?.icon) }) : /* @__PURE__ */ c(q, { className: r(n[o]?.icon) })
                }
              )
            ]
          }
        ),
        !!e && I()
      ]
    }
  );
}, B = M(A);
B.displayName = "Checkbox";
export {
  A as CheckboxComponent,
  B as default
};
//# sourceMappingURL=checkbox.es.js.map
