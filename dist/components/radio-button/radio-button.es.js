"use client";
import { jsx as r, Fragment as L, jsxs as F } from "react/jsx-runtime";
import I, { forwardRef as O, useMemo as g, useState as ee, useCallback as X, Fragment as te, isValidElement as Y, useContext as re, createContext as se } from "react";
import { nanoid as q } from "nanoid";
import { Info as oe, Check as ne } from "lucide-react";
import { cn as d, columnClasses as ie } from "../../utilities/functions.es.js";
import { textSizeClassNames as ae, sizeClassNames as V, disabledClassNames as Q, colorClassNames as U, borderClasses as le, sizes as de, focusClasses as ce, hoverClasses as fe, baseClasses as pe } from "./styles.es.js";
import { Tooltip as ue } from "../tooltip/tooltip.es.js";
import me from "../switch/switch.es.js";
const Z = se({}), _ = () => re(Z), P = ({
  children: y,
  name: s,
  style: e = "simple",
  size: A = "md",
  value: c,
  defaultValue: l,
  by: b = "id",
  as: R = "div",
  onChange: t,
  className: o,
  disableGroup: x = !1,
  vertical: u = !1,
  columns: n = 4,
  multiSelection: m = !1,
  gapClassName: z = "gap-2"
}) => {
  const h = g(() => typeof c < "u", [c]), j = g(
    () => s || `radio-button-group-${q()}`,
    [s]
  );
  let k;
  h ? k = c : m ? k = l ?? [] : k = l;
  const [w, N] = ee(k), M = X(
    (a) => {
      if (m)
        N((C) => {
          const $ = Array.isArray(C) && typeof a == "string" && C.includes(a);
          let p;
          return $ ? p = C.filter(
            (i) => i !== a
          ) : p = [
            ...Array.isArray(C) ? C : [],
            ...typeof a == "string" ? [a] : []
          ], typeof t == "function" && t(p), p;
        });
      else {
        if (h || N(a), typeof t != "function")
          return;
        t(a);
      }
    },
    [t]
  );
  o = d(
    "grid grid-cols-4",
    ie[n],
    z,
    e === "tile" && "gap-0",
    u && "grid-cols-1",
    o
  );
  const f = d(
    e === "tile" ? "border border-border-subtle border-solid rounded-md shadow-sm" : "gap-6",
    o
  ), G = () => /* @__PURE__ */ r(
    Z.Provider,
    {
      value: {
        name: j,
        value: h ? c : w,
        by: b,
        onChange: M,
        isControlled: h,
        disableAll: x,
        style: e,
        columns: n,
        multiSelection: m,
        size: A
      },
      children: I.Children.map(y, (a) => Y(a) ? a : null)
    }
  );
  return /* @__PURE__ */ r(L, { children: e === "tile" ? /* @__PURE__ */ r("div", { className: f, children: G() }) : /* @__PURE__ */ r(R, { ...R === te ? {} : { className: o }, children: G() }) });
};
P.displayName = "RadioButton.Group";
const he = ({
  id: y,
  label: s,
  value: e,
  children: A,
  disabled: c,
  icon: l = null,
  inlineIcon: b = !1,
  hideSelection: R = !1,
  reversePosition: t = !1,
  borderOn: o = !1,
  borderOnActive: x = !0,
  badgeItem: u = null,
  useSwitch: n = !1,
  info: m = void 0,
  minWidth: z = !0,
  ...h
}, j) => {
  const { buttonWrapperClasses: k, ...w } = h, N = _(), {
    name: M,
    value: f,
    by: G,
    onChange: a,
    disableAll: C,
    checked: $,
    multiSelection: p,
    size: i = "md"
    // Default size to 'md' if not provided
  } = N, E = "primary", T = g(() => y || `radio-button-${q()}`, [y]), B = g(
    () => C || c,
    [C, c]
  ), D = g(() => p ? Array.isArray(f) && f.includes(e) : typeof $ < "u" ? $ : typeof f != typeof e ? !1 : typeof f == "string" ? f === e : Array.isArray(f) ? f.includes(e) : f[G] === e[G], [f, e, $]), S = X(() => Y(s) ? s : s?.heading ? /* @__PURE__ */ F(
    "div",
    {
      className: d(
        !b && {
          "space-y-3": i === "sm",
          "space-y-4": i === "md"
        },
        // Borderless reverse layout keeps the control flush left, so
        // offset the content by the control width (legacy behavior).
        t && !o && (n ? "ml-10" : "ml-4"),
        b && "flex gap-2",
        b && !s.description && "items-center"
      ),
      children: [
        l && /* @__PURE__ */ r(L, { children: l }),
        /* @__PURE__ */ F(
          "div",
          {
            className: d(
              !(l && n) || l && u ? {
                "space-y-0.5": i === "sm",
                "space-y-1": i === "md"
              } : "space-y-0.5"
            ),
            children: [
              /* @__PURE__ */ r(
                "p",
                {
                  className: d(
                    "text-text-primary font-medium m-0 [overflow-wrap:anywhere]",
                    ae[i],
                    c && "text-text-disabled cursor-not-allowed"
                  ),
                  children: s.heading
                }
              ),
              s.description && /* @__PURE__ */ r("p", { className: "text-text-tertiary text-sm font-normal leading-5 m-0 [overflow-wrap:anywhere]", children: s.description })
            ]
          }
        )
      ]
    }
  ) : null, [s, t, o, n]);
  if (N.style === "tile")
    return /* @__PURE__ */ r(
      ye,
      {
        id: y,
        label: s,
        value: e,
        disabled: c,
        size: i,
        children: A
      }
    );
  const H = () => {
    B || (p ? n && a(e, !D) : a(e));
  };
  let J = "pr-12";
  t && o && (J = n ? "pl-16" : "pl-12");
  let K = "right-3 mr-0.5";
  return t && (K = o ? "left-3 ml-0.5" : "left-0"), /* @__PURE__ */ F(
    "label",
    {
      className: d(
        "inline-flex items-center relative cursor-pointer transition-all duration-300",
        !!s && "items-start justify-between",
        z && "min-w-[180px]",
        o && "outline outline-field-border outline-1 rounded-md shadow-sm hover:outline-border-interactive",
        x && o && D && "outline-border-interactive",
        {
          "pl-3.5 pr-2.5 py-2.5": i === "sm" && !(l && n),
          "p-3": i === "sm" && (l && n || l && u),
          "pl-4 pr-3 py-3": i === "md" && !(l && n),
          "p-4": i === "md" && (l && n || l && u)
        },
        J,
        B && "cursor-not-allowed opacity-40",
        k
      ),
      htmlFor: T,
      onClick: H,
      children: [
        !!s && /* @__PURE__ */ r(
          "label",
          {
            className: d(
              "cursor-pointer",
              B && "cursor-not-allowed"
            ),
            htmlFor: T,
            children: S()
          }
        ),
        !!m && /* @__PURE__ */ r("div", { className: "absolute mr-0.5 bottom-1.5 right-3", children: /* @__PURE__ */ r(ue, { title: m?.heading, content: m?.description, children: /* @__PURE__ */ r(
          oe,
          {
            className: d(
              "text-text-primary",
              V[i]?.info
            )
          }
        ) }) }),
        /* @__PURE__ */ F(
          "label",
          {
            className: d(
              "absolute flex items-center cursor-pointer rounded-full gap-2",
              K,
              B && "cursor-not-allowed",
              b && (t && o ? "ml-3" : "mr-3")
            ),
            onClick: H,
            children: [
              !!u && u,
              !R && (n ? /* @__PURE__ */ r(L, { children: /* @__PURE__ */ r(
                me,
                {
                  defaultValue: !1,
                  size: i,
                  onChange: () => {
                    p ? a(e, !D) : a(e);
                  },
                  checked: D,
                  ...w,
                  "aria-label": s?.heading ?? "Switch"
                }
              ) }) : /* @__PURE__ */ F("span", { className: "relative p-0.5", children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    ref: j,
                    id: T,
                    type: p ? "checkbox" : "radio",
                    className: d(
                      "peer flex relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid focus-within:outline-none",
                      !p && "rounded-full",
                      U[E].checkbox,
                      V[i].checkbox,
                      B && Q.checkbox
                    ),
                    name: M,
                    value: e,
                    onChange: (v) => a(v.target.value),
                    checked: D,
                    disabled: B,
                    ...w
                  }
                ),
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: d(
                      "inline-flex items-center absolute top-2/4 not-rtl:left-2/4 rtl:right-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
                      U[E].icon,
                      B && Q.icon
                    ),
                    children: p ? /* @__PURE__ */ r(
                      ne,
                      {
                        className: i === "sm" ? "size-3" : "size-4"
                      }
                    ) : /* @__PURE__ */ r(
                      "div",
                      {
                        className: d(
                          "rounded-full bg-current",
                          V[i]?.icon
                        )
                      }
                    )
                  }
                )
              ] }))
            ]
          }
        )
      ]
    }
  );
}, W = O(he);
W.displayName = "RadioButton.Button";
const ye = ({
  id: y,
  children: s,
  value: e,
  disabled: A,
  size: c = "md",
  ...l
}) => {
  const b = _(), {
    name: R,
    value: t,
    by: o,
    onChange: x,
    disableAll: u,
    checked: n
  } = b || {}, m = g(() => y || `radio-button-${q()}`, [y]), z = g(
    () => u || A,
    [u, A]
  ), h = g(() => typeof n < "u" ? n : typeof t != typeof e ? !1 : typeof t == "string" ? t === e : Array.isArray(t) ? t.includes(e) : t && o ? t[o] === e[o] : !1, [t, e, n, o]), j = () => {
    x && x(e);
  }, w = d(
    pe,
    fe,
    ce,
    z ? "text-text-disabled cursor-not-allowed" : "",
    de[c],
    le
  );
  return /* @__PURE__ */ r(L, { children: /* @__PURE__ */ F(
    "button",
    {
      type: "button",
      id: m,
      "aria-label": "Radio Button",
      className: d(
        w,
        "first:rounded-tl first:rounded-bl first:border-0 first:border-r first:border-border-subtle last:rounded-tr last:rounded-br last:border-0",
        h && "bg-button-disabled"
      ),
      onClick: j,
      disabled: z,
      ...l,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "hidden",
            value: e,
            name: R,
            checked: h,
            onChange: (N) => x?.(N.target.value)
          }
        ),
        s
      ]
    }
  ) });
}, ze = Object.assign(W, {
  Group: P,
  Button: W
});
export {
  ye as ButtonGroupItem,
  W as RadioButton,
  he as RadioButtonComponent,
  P as RadioButtonGroup,
  ze as default
};
//# sourceMappingURL=radio-button.es.js.map
