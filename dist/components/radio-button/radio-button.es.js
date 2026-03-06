import { jsx as t, Fragment as M, jsxs as j } from "react/jsx-runtime";
import _, { forwardRef as S, useMemo as g, useState as v, useCallback as K, Fragment as I, isValidElement as O, useContext as ee, createContext as te } from "react";
import { nanoid as q } from "nanoid";
import { Info as re, Check as se } from "lucide-react";
import { cn as d, columnClasses as oe } from "../../utilities/functions.es.js";
import { textSizeClassNames as ne, sizeClassNames as V, disabledClassNames as H, colorClassNames as J, borderClasses as ie, sizes as ae, focusClasses as de, hoverClasses as le, baseClasses as ce } from "./styles.es.js";
import { Tooltip as fe } from "../tooltip/tooltip.es.js";
import ue from "../switch/switch.es.js";
const Q = te({}), U = () => ee(Q), X = ({
  children: b,
  name: r,
  style: e = "simple",
  size: A = "md",
  value: c,
  defaultValue: i,
  by: y = "id",
  as: R = "div",
  onChange: s,
  className: l,
  disableGroup: x = !1,
  vertical: p = !1,
  columns: a = 4,
  multiSelection: m = !1,
  gapClassName: z = "gap-2"
}) => {
  const h = g(() => typeof c < "u", [c]), G = g(
    () => r || `radio-button-group-${q()}`,
    [r]
  );
  let k;
  h ? k = c : m ? k = i ?? [] : k = i;
  const [F, N] = v(k), P = K(
    (n) => {
      if (m)
        N((C) => {
          const D = Array.isArray(C) && typeof n == "string" && C.includes(n);
          let u;
          return D ? u = C.filter(
            (o) => o !== n
          ) : u = [
            ...Array.isArray(C) ? C : [],
            ...typeof n == "string" ? [n] : []
          ], typeof s == "function" && s(u), u;
        });
      else {
        if (h || N(n), typeof s != "function")
          return;
        s(n);
      }
    },
    [s]
  );
  l = d(
    "grid grid-cols-4",
    oe[a],
    z,
    e === "tile" && "gap-0",
    p && "grid-cols-1",
    l
  );
  const f = d(
    e === "tile" ? "border border-border-subtle border-solid rounded-md shadow-sm" : "gap-6",
    l
  ), $ = () => /* @__PURE__ */ t(
    Q.Provider,
    {
      value: {
        name: G,
        value: h ? c : F,
        by: y,
        onChange: P,
        isControlled: h,
        disableAll: x,
        style: e,
        columns: a,
        multiSelection: m,
        size: A
      },
      children: _.Children.map(b, (n) => O(n) ? n : null)
    }
  );
  return /* @__PURE__ */ t(M, { children: e === "tile" ? /* @__PURE__ */ t("div", { className: f, children: $() }) : /* @__PURE__ */ t(R, { ...R === I ? {} : { className: l }, children: $() }) });
};
X.displayName = "RadioButton.Group";
const pe = ({
  id: b,
  label: r,
  value: e,
  children: A,
  disabled: c,
  icon: i = null,
  inlineIcon: y = !1,
  hideSelection: R = !1,
  reversePosition: s = !1,
  borderOn: l = !1,
  borderOnActive: x = !0,
  badgeItem: p = null,
  useSwitch: a = !1,
  info: m = void 0,
  minWidth: z = !0,
  ...h
}, G) => {
  const { buttonWrapperClasses: k, ...F } = h, N = U(), {
    name: P,
    value: f,
    by: $,
    onChange: n,
    disableAll: C,
    checked: D,
    multiSelection: u,
    size: o = "md"
    // Default size to 'md' if not provided
  } = N, w = "primary", T = g(() => b || `radio-button-${q()}`, [b]), B = g(
    () => C || c,
    [C, c]
  ), L = g(() => u ? Array.isArray(f) && f.includes(e) : typeof D < "u" ? D : typeof f != typeof e ? !1 : typeof f == "string" ? f === e : Array.isArray(f) ? f.includes(e) : f[$] === e[$], [f, e, D]), Y = K(() => O(r) ? r : r?.heading ? /* @__PURE__ */ j(
    "div",
    {
      className: d(
        !y && {
          "space-y-3": o === "sm",
          "space-y-4": o === "md"
        },
        s && (a ? "ml-10" : "ml-4"),
        y && "flex gap-2",
        y && !r.description && "items-center"
      ),
      children: [
        i && /* @__PURE__ */ t(M, { children: i }),
        /* @__PURE__ */ j(
          "div",
          {
            className: d(
              !(i && a) || i && p ? {
                "space-y-0.5": o === "sm",
                "space-y-1": o === "md"
              } : "space-y-0.5"
            ),
            children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: d(
                    "text-text-primary font-medium m-0",
                    ne[o],
                    c && "text-text-disabled cursor-not-allowed"
                  ),
                  children: r.heading
                }
              ),
              r.description && /* @__PURE__ */ t("p", { className: "text-text-tertiary text-sm font-normal leading-5 m-0", children: r.description })
            ]
          }
        )
      ]
    }
  ) : null, [r]);
  if (N.style === "tile")
    return /* @__PURE__ */ t(
      me,
      {
        id: b,
        label: r,
        value: e,
        disabled: c,
        size: o,
        children: A
      }
    );
  const E = () => {
    B || (u ? a && n(e, !L) : n(e));
  };
  return /* @__PURE__ */ j(
    "label",
    {
      className: d(
        "inline-flex items-center relative cursor-pointer transition-all duration-300",
        !!r && "items-start justify-between",
        z && "min-w-[180px]",
        l && "outline outline-field-border outline-1 rounded-md shadow-sm hover:outline-border-interactive",
        x && l && L && "outline-border-interactive",
        {
          "pl-3.5 pr-2.5 py-2.5": o === "sm" && !(i && a),
          "p-3": o === "sm" && (i && a || i && p),
          "pl-4 pr-3 py-3": o === "md" && !(i && a),
          "p-4": o === "md" && (i && a || i && p)
        },
        "pr-12",
        B && "cursor-not-allowed opacity-40",
        k
      ),
      htmlFor: T,
      onClick: E,
      children: [
        !!r && /* @__PURE__ */ t(
          "label",
          {
            className: d(
              "cursor-pointer",
              B && "cursor-not-allowed"
            ),
            htmlFor: T,
            children: Y()
          }
        ),
        !!m && /* @__PURE__ */ t("div", { className: "absolute mr-0.5 bottom-1.5 right-3", children: /* @__PURE__ */ t(fe, { title: m?.heading, content: m?.description, children: /* @__PURE__ */ t(
          re,
          {
            className: d(
              "text-text-primary",
              V[o]?.info
            )
          }
        ) }) }),
        /* @__PURE__ */ j(
          "label",
          {
            className: d(
              "absolute mr-0.5 right-3 flex items-center cursor-pointer rounded-full gap-2",
              s && "left-0",
              B && "cursor-not-allowed",
              y && "mr-3"
            ),
            onClick: E,
            children: [
              !!p && p,
              !R && (a ? /* @__PURE__ */ t(M, { children: /* @__PURE__ */ t(
                ue,
                {
                  defaultValue: !1,
                  size: o,
                  onChange: () => {
                    u ? n(e, !L) : n(e);
                  },
                  checked: L,
                  ...F,
                  "aria-label": r?.heading ?? "Switch"
                }
              ) }) : /* @__PURE__ */ j("span", { className: "relative p-0.5", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: G,
                    id: T,
                    type: u ? "checkbox" : "radio",
                    className: d(
                      "peer flex relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",
                      !u && "rounded-full",
                      J[w].checkbox,
                      V[o].checkbox,
                      B && H.checkbox
                    ),
                    name: P,
                    value: e,
                    onChange: (Z) => n(Z.target.value),
                    checked: L,
                    disabled: B,
                    ...F
                  }
                ),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: d(
                      "inline-flex items-center absolute top-2/4 not-rtl:left-2/4 rtl:right-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
                      J[w].icon,
                      B && H.icon
                    ),
                    children: u ? /* @__PURE__ */ t(
                      se,
                      {
                        className: o === "sm" ? "size-3" : "size-4"
                      }
                    ) : /* @__PURE__ */ t(
                      "div",
                      {
                        className: d(
                          "rounded-full bg-current",
                          V[o]?.icon
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
}, W = S(pe);
W.displayName = "RadioButton.Button";
const me = ({
  id: b,
  children: r,
  value: e,
  disabled: A,
  size: c = "md",
  ...i
}) => {
  const y = U(), {
    name: R,
    value: s,
    by: l,
    onChange: x,
    disableAll: p,
    checked: a
  } = y || {}, m = g(() => b || `radio-button-${q()}`, [b]), z = g(
    () => p || A,
    [p, A]
  ), h = g(() => typeof a < "u" ? a : typeof s != typeof e ? !1 : typeof s == "string" ? s === e : Array.isArray(s) ? s.includes(e) : s && l ? s[l] === e[l] : !1, [s, e, a, l]), G = () => {
    x && x(e);
  }, F = d(
    ce,
    le,
    de,
    z ? "text-text-disabled cursor-not-allowed" : "",
    ae[c],
    ie
  );
  return /* @__PURE__ */ t(M, { children: /* @__PURE__ */ j(
    "button",
    {
      type: "button",
      id: m,
      "aria-label": "Radio Button",
      className: d(
        F,
        "first:rounded-tl first:rounded-bl first:border-0 first:border-r first:border-border-subtle last:rounded-tr last:rounded-br last:border-0",
        h && "bg-button-disabled"
      ),
      onClick: G,
      disabled: z,
      ...i,
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "hidden",
            value: e,
            name: R,
            checked: h,
            onChange: (N) => x?.(N.target.value)
          }
        ),
        r
      ]
    }
  ) });
}, Ae = Object.assign(W, {
  Group: X,
  Button: W
});
export {
  me as ButtonGroupItem,
  W as RadioButton,
  pe as RadioButtonComponent,
  X as RadioButtonGroup,
  Ae as default
};
//# sourceMappingURL=radio-button.es.js.map
