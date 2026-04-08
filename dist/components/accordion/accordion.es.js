import { jsx as t, jsxs as I } from "react/jsx-runtime";
import u, { useState as T, useMemo as x } from "react";
import { nanoid as g } from "nanoid";
import { ChevronDown as j, Minus as k, Plus as E } from "lucide-react";
import { motion as y } from "framer-motion";
import { cn as f, callAll as M } from "../../utilities/functions.es.js";
const h = ({
  type: n = "simple",
  defaultValue: s = [],
  autoClose: r = !1,
  disabled: i = !1,
  children: l,
  className: o
}) => {
  const [c, d] = T(
    Array.isArray(s) ? s : [s]
  ), m = (e) => {
    d((a) => r ? a.includes(e) ? [] : [e] : a.includes(e) ? a.filter((b) => b !== e) : [...a, e]);
  };
  return /* @__PURE__ */ t("div", { className: f(n === "boxed" ? "space-y-3" : "", o), children: u.Children.map(l, (e) => {
    if (u.isValidElement(e) && "value" in e.props) {
      const a = e.props.collapsible !== !1, b = a ? c.includes(e.props.value) : !0;
      return u.cloneElement(
        e,
        {
          isOpen: b,
          onToggle: a ? () => m(e.props.value) : void 0,
          type: n,
          disabled: i || e.props.disabled
        }
      );
    }
    return e;
  }) });
};
h.displayName = "Accordion";
const C = ({
  isOpen: n,
  onToggle: s,
  type: r = "simple",
  disabled: i = !1,
  children: l,
  className: o
}) => {
  const c = x(() => `accordion-content-${g()}`, []), d = x(() => `accordion-trigger-${g()}`, []), m = {
    simple: "border-0",
    separator: "border-0 border-b border-solid border-border-subtle",
    boxed: "border border-solid border-border-subtle rounded-md"
  }[r];
  return /* @__PURE__ */ t("div", { className: f(m, o), children: u.Children.map(
    l,
    (p) => u.isValidElement(p) ? u.cloneElement(p, {
      isOpen: n,
      onToggle: s,
      type: r,
      disabled: i,
      contentId: c,
      triggerId: d
    }) : p
  ) });
};
C.displayName = "Accordion.Item";
const N = ({
  onClick: n,
  onToggle: s,
  isOpen: r,
  iconType: i = "arrow",
  collapsible: l = !0,
  disabled: o = !1,
  tag: c = "h3",
  type: d = "simple",
  children: m,
  className: p,
  contentId: e,
  triggerId: a,
  ...b
}) => {
  const v = {
    simple: "px-2 py-3",
    separator: "px-2 py-4",
    boxed: "px-3 py-4"
  }[d], w = () => l ? i === "arrow" ? /* @__PURE__ */ t(
    j,
    {
      className: f(
        "flex-shrink-0 text-icon-secondary size-5 transition-transform duration-300 ease-in-out",
        r ? "rotate-180" : "rotate-0"
      ),
      "aria-hidden": "true"
    }
  ) : i === "plus-minus" ? /* @__PURE__ */ t(
    y.span,
    {
      initial: { opacity: 0, rotate: r ? -180 : 0 },
      animate: { opacity: 1, rotate: r ? 0 : 180 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: "easeInOut" },
      className: "flex items-center flex-shrink-0 text-icon-secondary",
      "aria-hidden": "true",
      children: r ? /* @__PURE__ */ t(k, {}) : /* @__PURE__ */ t(E, {})
    },
    r ? "minus" : "plus"
  ) : null : null;
  return /* @__PURE__ */ t(c, { className: "flex m-0 hover:bg-background-secondary transition duration-150 ease-in-out", children: /* @__PURE__ */ I(
    "button",
    {
      id: a,
      className: f(
        "flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3",
        v,
        o && "cursor-not-allowed opacity-40",
        p
      ),
      onClick: M(
        n,
        !o && l ? s : void 0
      ),
      "aria-expanded": r,
      "aria-controls": e,
      "aria-disabled": o,
      disabled: o,
      ...b,
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-text-primary font-semibold text-left", children: m }),
        w()
      ]
    }
  ) });
};
N.displayName = "Accordion.Trigger";
const A = ({
  isOpen: n,
  disabled: s = !1,
  type: r = "simple",
  children: i,
  className: l,
  contentId: o,
  triggerId: c
}) => {
  const d = {
    open: {
      height: "auto",
      opacity: 1,
      overflow: "unset",
      transition: {
        overflow: {
          delay: 1
        }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden"
    }
  }, m = {
    simple: "px-2 pb-3",
    separator: "px-2 pb-4",
    boxed: "px-3 pb-4"
  }[r];
  return /* @__PURE__ */ t(
    y.div,
    {
      variants: d,
      initial: !1,
      animate: n ? "open" : "closed",
      transition: { duration: 0.3, ease: "easeInOut" },
      className: f(
        "text-text-secondary w-full text-sm box-border",
        s && "opacity-40",
        l
      ),
      role: "region",
      id: o,
      "aria-labelledby": c,
      "aria-hidden": !n,
      children: /* @__PURE__ */ t("div", { className: f(m), children: i })
    }
  );
};
A.displayName = "Accordion.Content";
const q = Object.assign(h, {
  Item: C,
  Trigger: N,
  Content: A
});
export {
  h as Accordion,
  A as AccordionContent,
  C as AccordionItem,
  N as AccordionTrigger,
  q as default
};
//# sourceMappingURL=accordion.es.js.map
