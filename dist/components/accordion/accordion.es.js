import { jsx as r, jsxs as C } from "react/jsx-runtime";
import p, { useState as N } from "react";
import { ChevronDown as v, Minus as w, Plus as I } from "lucide-react";
import { AnimatePresence as T, motion as b } from "framer-motion";
import { cn as m, callAll as j } from "../../utilities/functions.es.js";
const y = ({
  type: n = "simple",
  defaultValue: s = [],
  autoClose: t = !1,
  disabled: i = !1,
  children: l,
  className: o
}) => {
  const [c, d] = N(
    Array.isArray(s) ? s : [s]
  ), f = (e) => {
    d((a) => t ? a.includes(e) ? [] : [e] : a.includes(e) ? a.filter((u) => u !== e) : [...a, e]);
  };
  return /* @__PURE__ */ r("div", { className: m(n === "boxed" ? "space-y-3" : "", o), children: p.Children.map(l, (e) => {
    if (p.isValidElement(e) && "value" in e.props) {
      const a = e.props.collapsible !== !1, u = a ? c.includes(e.props.value) : !0;
      return p.cloneElement(
        e,
        {
          isOpen: u,
          onToggle: a ? () => f(e.props.value) : void 0,
          type: n,
          disabled: i || e.props.disabled
        }
      );
    }
    return e;
  }) });
};
y.displayName = "Accordion";
const g = ({
  isOpen: n,
  onToggle: s,
  type: t = "simple",
  disabled: i = !1,
  children: l,
  className: o
}) => {
  const c = {
    simple: "border-0",
    separator: "border-0 border-b border-solid border-border-subtle",
    boxed: "border border-solid border-border-subtle rounded-md"
  }[t];
  return /* @__PURE__ */ r("div", { className: m(c, o), children: p.Children.map(
    l,
    (d) => p.isValidElement(d) ? p.cloneElement(d, {
      isOpen: n,
      onToggle: s,
      type: t,
      disabled: i
    }) : d
  ) });
};
g.displayName = "Accordion.Item";
const h = ({
  onClick: n,
  onToggle: s,
  isOpen: t,
  iconType: i = "arrow",
  collapsible: l = !0,
  disabled: o = !1,
  tag: c = "h3",
  type: d = "simple",
  children: f,
  className: x,
  ...e
}) => {
  const a = {
    simple: "px-2 py-3",
    separator: "px-2 py-4",
    boxed: "px-3 py-4"
  }[d], u = () => l ? i === "arrow" ? /* @__PURE__ */ r(
    v,
    {
      className: m(
        "flex-shrink-0 text-icon-secondary size-5 transition-transform duration-300 ease-in-out",
        t ? "rotate-180" : "rotate-0"
      ),
      "aria-hidden": "true"
    }
  ) : i === "plus-minus" ? /* @__PURE__ */ r(
    b.span,
    {
      initial: { opacity: 0, rotate: t ? -180 : 0 },
      animate: { opacity: 1, rotate: t ? 0 : 180 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: "easeInOut" },
      className: "flex items-center flex-shrink-0 text-icon-secondary",
      "aria-hidden": "true",
      children: t ? /* @__PURE__ */ r(w, {}) : /* @__PURE__ */ r(I, {})
    },
    t ? "minus" : "plus"
  ) : null : null;
  return /* @__PURE__ */ r(c, { className: "flex m-0 hover:bg-background-secondary transition duration-150 ease-in-out", children: /* @__PURE__ */ C(
    "button",
    {
      className: m(
        "flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3",
        a,
        o && "cursor-not-allowed opacity-40",
        x
      ),
      onClick: j(
        n,
        !o && l ? s : void 0
      ),
      "aria-expanded": t,
      "aria-disabled": o,
      disabled: o,
      ...e,
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-text-primary font-semibold text-left", children: f }),
        u()
      ]
    }
  ) });
};
h.displayName = "Accordion.Trigger";
const A = ({
  isOpen: n,
  disabled: s = !1,
  type: t = "simple",
  children: i,
  className: l
}) => {
  const o = {
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
  }, c = {
    simple: "px-2 pb-3",
    separator: "px-2 pb-4",
    boxed: "px-3 pb-4"
  }[t];
  return /* @__PURE__ */ r(T, { initial: !1, children: n && /* @__PURE__ */ r(
    b.div,
    {
      variants: o,
      initial: "closed",
      animate: "open",
      exit: "closed",
      transition: { duration: 0.3, ease: "easeInOut" },
      className: m(
        "text-text-secondary w-full text-sm transition-[height, opacity, transform] ease-in box-border",
        s && "opacity-40",
        l
      ),
      "aria-hidden": !n,
      role: "region",
      children: /* @__PURE__ */ r("div", { className: m(c), children: i })
    },
    "content"
  ) });
};
A.displayName = "Accordion.Content";
const R = Object.assign(y, {
  Item: g,
  Trigger: h,
  Content: A
});
export {
  y as Accordion,
  A as AccordionContent,
  g as AccordionItem,
  h as AccordionTrigger,
  R as default
};
//# sourceMappingURL=accordion.es.js.map
