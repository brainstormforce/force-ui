import { jsx as s, jsxs as g, Fragment as z } from "react/jsx-runtime";
import b from "react";
import { cn as i } from "../../utilities/functions.es.js";
import { Plus as w, Check as S } from "lucide-react";
import { completedStepCommonClasses as P, stepWrapperClasses as j, getVariantClasses as I } from "./utils.es.js";
const L = {
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
}, E = ({
  variant: t = "dot",
  size: d = "sm",
  type: l = "inline",
  currentStep: e = 1,
  children: r,
  className: o,
  lineClassName: p = "min-w-10",
  ...m
}) => {
  const n = b.Children.count(r);
  e === -1 && (e = n + 1);
  const a = b.Children.map(r, (f, c) => {
    const x = c + 1 < e, u = c + 1 === e, h = c + 1 === n, C = {
      isCompleted: x,
      isCurrent: u,
      sizeClasses: L,
      size: d,
      variant: t,
      type: l,
      isLast: h,
      index: c,
      lineClassName: p
    };
    return /* @__PURE__ */ s(b.Fragment, { children: b.isValidElement(f) ? b.cloneElement(f, C) : f }, c);
  });
  return /* @__PURE__ */ s(
    "div",
    {
      className: i(
        "flex w-full",
        o,
        l === "inline" ? "items-center justify-between" : ""
      ),
      ...m,
      children: a
    }
  );
}, y = ({
  labelText: t = "",
  icon: d = /* @__PURE__ */ s(w, {}),
  isCurrent: l,
  isCompleted: e,
  className: r,
  type: o,
  variant: p,
  sizeClasses: m,
  size: n,
  isLast: a,
  index: f,
  lineClassName: c,
  ...x
}) => {
  const u = F(
    p,
    e,
    l,
    m,
    n,
    d,
    f
  ), h = {
    lg: "left-[calc(50%+14px)] right-[calc(-50%+14px)]",
    md: "left-[calc(50%+12px)] right-[calc(-50%+12px)]",
    sm: "left-[calc(50%+10px)] right-[calc(-50%+10px)]"
  }, C = {
    lg: "top-3.5",
    md: "top-3",
    sm: "top-2.5"
  }, k = () => {
    if (t) {
      const N = i(
        m[n].label,
        "text-text-tertiary",
        l ? "text-brand-primary-600" : "",
        "break-word",
        // max width for inline and stack
        o === "stack" ? "mt-2 transform max-w-xs" : "mx-2 max-w-32"
      );
      return /* @__PURE__ */ s("span", { className: N, children: t });
    }
    return null;
  }, v = () => {
    if (!a) {
      const N = i(
        "block",
        e ? "border-brand-primary-600" : "border-border-subtle",
        c
      );
      return o === "stack" ? /* @__PURE__ */ s(
        "div",
        {
          className: i(
            "relative",
            "flex",
            "border-solid",
            "border-y",
            "absolute",
            e ? "border-brand-primary-600" : "border-border-subtle",
            C[n],
            h[n]
          ),
          children: /* @__PURE__ */ s("span", { className: "block" })
        }
      ) : /* @__PURE__ */ s("div", { className: "flex-1", children: /* @__PURE__ */ s(
        "span",
        {
          className: i(
            "mr-2 border-y border-solid",
            !t && "ml-2",
            N
          )
        }
      ) });
    }
    return null;
  };
  return o === "stack" ? /* @__PURE__ */ g("div", { className: "relative flex-1 justify-center", children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: i("flex items-center flex-col", r),
        ...x,
        children: [
          u,
          k()
        ]
      }
    ),
    v()
  ] }) : /* @__PURE__ */ g(z, { children: [
    /* @__PURE__ */ g("div", { className: i("flex items-center", r), ...x, children: [
      u,
      k()
    ] }),
    v()
  ] });
};
y.displayName = "ProgressSteps.Step";
const F = (t, d, l, e, r, o, p) => {
  if (d)
    return /* @__PURE__ */ s(S, { className: P(e, r) });
  const m = j(!!l, e, r), n = I(
    t,
    l,
    e,
    r
  );
  let a = null;
  return t === "number" ? a = p + 1 : t === "icon" && o && (a = o), /* @__PURE__ */ s("span", { className: m, children: /* @__PURE__ */ s("span", { className: n, children: a }) });
};
E.Step = y;
export {
  y as ProgressStep,
  E as ProgressSteps,
  F as createStepContent,
  E as default
};
//# sourceMappingURL=progress-steps.es.js.map
