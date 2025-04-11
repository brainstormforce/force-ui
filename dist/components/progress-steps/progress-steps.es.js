import { jsx as e, jsxs as N, Fragment as P } from "react/jsx-runtime";
import x from "react";
import { cn as c } from "../../utilities/functions.es.js";
import { Check as v, Plus as I } from "lucide-react";
import { completedStepCommonClasses as j, stepWrapperClasses as L, getVariantClasses as E } from "./utils.es.js";
const F = {
  sm: {
    dot: "size-2.5",
    ring: "size-5",
    numberIcon: "size-5 text-tiny",
    icon: "size-5",
    label: "text-xs"
  },
  md: {
    dot: "size-3",
    ring: "size-6",
    numberIcon: "size-6 text-sm",
    icon: "size-6",
    label: "text-sm"
  },
  lg: {
    dot: "size-3.5",
    ring: "size-7",
    numberIcon: "size-7 text-md",
    icon: "size-7",
    label: "text-sm"
  }
}, V = ({
  variant: r = "dot",
  size: f = "sm",
  type: n = "inline",
  currentStep: t = 1,
  children: s,
  className: l,
  lineClassName: m = "min-w-10",
  completedVariant: d = "icon",
  completedIcon: o = /* @__PURE__ */ e(v, {}),
  ...b
}) => {
  const p = x.Children.count(s);
  t === -1 && (t = p + 1);
  const a = x.Children.map(s, (u, i) => {
    const g = i + 1 < t, h = i + 1 === t, C = i + 1 === p, y = {
      isCompleted: g,
      isCurrent: h,
      sizeClasses: F,
      size: f,
      variant: r,
      type: n,
      isLast: C,
      index: i,
      lineClassName: m,
      completedVariant: d,
      completedIcon: o
    };
    return /* @__PURE__ */ e(x.Fragment, { children: x.isValidElement(u) ? x.cloneElement(u, y) : u }, i);
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: c(
        "flex w-full",
        l,
        n === "inline" ? "items-center justify-between" : ""
      ),
      ...b,
      children: a
    }
  );
}, z = ({
  labelText: r = "",
  icon: f = /* @__PURE__ */ e(I, {}),
  isCurrent: n,
  isCompleted: t,
  className: s,
  type: l,
  variant: m,
  sizeClasses: d,
  size: o,
  isLast: b,
  index: p,
  lineClassName: a,
  completedVariant: u = "icon",
  completedIcon: i = /* @__PURE__ */ e(v, {}),
  ...g
}) => {
  const h = O(
    m,
    t,
    n,
    d,
    o,
    f,
    p,
    u,
    i
  ), C = {
    lg: "left-[calc(50%+14px)] right-[calc(-50%+14px)]",
    md: "left-[calc(50%+12px)] right-[calc(-50%+12px)]",
    sm: "left-[calc(50%+10px)] right-[calc(-50%+10px)]"
  }, y = {
    lg: "top-3.5",
    md: "top-3",
    sm: "top-2.5"
  }, w = () => {
    if (r) {
      const k = c(
        d[o].label,
        "text-text-tertiary",
        n ? "text-brand-primary-600" : "",
        "break-word",
        // max width for inline and stack
        l === "stack" ? "mt-2 transform max-w-xs" : "mx-2 max-w-32"
      );
      return /* @__PURE__ */ e("span", { className: k, children: r });
    }
    return null;
  }, S = () => {
    if (!b) {
      const k = c(
        "block",
        t ? "border-brand-primary-600" : "border-border-subtle",
        a
      );
      return l === "stack" ? /* @__PURE__ */ e(
        "div",
        {
          className: c(
            "relative",
            "flex",
            "border-solid",
            "border-y",
            "absolute",
            t ? "border-brand-primary-600" : "border-border-subtle",
            y[o],
            C[o]
          ),
          children: /* @__PURE__ */ e("span", { className: "block" })
        }
      ) : /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "mr-2 border-y border-solid",
            !r && "ml-2",
            k
          )
        }
      ) });
    }
    return null;
  };
  return l === "stack" ? /* @__PURE__ */ N("div", { className: "relative flex-1 justify-center", children: [
    /* @__PURE__ */ N(
      "div",
      {
        className: c("flex items-center flex-col", s),
        ...g,
        children: [
          h,
          w()
        ]
      }
    ),
    S()
  ] }) : /* @__PURE__ */ N(P, { children: [
    /* @__PURE__ */ N("div", { className: c("flex items-center", s), ...g, children: [
      h,
      w()
    ] }),
    S()
  ] });
};
z.displayName = "ProgressSteps.Step";
const O = (r, f, n, t, s, l, m, d = "icon", o = /* @__PURE__ */ e(v, {})) => {
  if (f)
    return d === "number" ? /* @__PURE__ */ e(
      "span",
      {
        className: c(
          j(t, s),
          "flex items-center justify-center bg-brand-primary-600 text-text-on-color rounded-full"
        ),
        children: m + 1
      }
    ) : /* @__PURE__ */ e("span", { className: j(t, s), children: o });
  const b = L(!!n, t, s), p = E(
    r,
    n,
    t,
    s
  );
  let a = null;
  return r === "number" ? a = m + 1 : r === "icon" && l && (a = l), /* @__PURE__ */ e("span", { className: b, children: /* @__PURE__ */ e("span", { className: p, children: a }) });
};
V.Step = z;
export {
  z as ProgressStep,
  V as ProgressSteps,
  O as createStepContent,
  V as default
};
//# sourceMappingURL=progress-steps.es.js.map
