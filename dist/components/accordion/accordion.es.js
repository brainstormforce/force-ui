import { jsx as r, jsxs as A } from "react/jsx-runtime";
import d, { useState as C } from "react";
import { ChevronDown as w, Minus as I, Plus as v } from "lucide-react";
import { AnimatePresence as T, motion as b } from "framer-motion";
import { cn as m } from "../../utilities/functions.es.js";
const f = ({
  type: o = "simple",
  defaultValue: t = [],
  autoClose: n = !1,
  disabled: s = !1,
  children: a,
  className: i
}) => {
  const [c, l] = C(
    Array.isArray(t) ? t : [t]
  ), u = (e) => {
    l((p) => n ? p.includes(e) ? [] : [e] : p.includes(e) ? p.filter((N) => N !== e) : [...p, e]);
  };
  return /* @__PURE__ */ r("div", { className: m(o === "boxed" ? "space-y-3" : "", i), children: d.Children.map(a, (e) => d.isValidElement(e) && "value" in e.props ? d.cloneElement(
    e,
    {
      isOpen: c.includes(e.props.value),
      onToggle: () => u(e.props.value),
      type: o,
      disabled: s || e.props.disabled
    }
  ) : e) });
};
f.displayName = "Accordion";
const y = ({
  isOpen: o,
  onToggle: t,
  type: n = "simple",
  disabled: s = !1,
  children: a,
  className: i
}) => {
  const c = {
    simple: "border-0",
    separator: "border-0 border-b border-solid border-border-subtle",
    boxed: "border border-solid border-border-subtle rounded-md"
  }[n];
  return /* @__PURE__ */ r("div", { className: m(c, i), children: d.Children.map(
    a,
    (l) => d.isValidElement(l) ? d.cloneElement(l, {
      isOpen: o,
      onToggle: t,
      type: n,
      disabled: s
    }) : l
  ) });
};
y.displayName = "Accordion.Item";
const g = ({
  onToggle: o,
  isOpen: t,
  iconType: n = "arrow",
  // arrow, plus-minus
  disabled: s = !1,
  tag: a = "h3",
  type: i = "simple",
  children: c,
  className: l,
  ...u
}) => {
  const x = {
    simple: "px-2 py-3",
    separator: "px-2 py-4",
    boxed: "px-3 py-4"
  }[i], e = () => n === "arrow" ? /* @__PURE__ */ r(
    w,
    {
      className: m(
        "flex-shrink-0 text-icon-secondary size-5 transition-transform duration-300 ease-in-out",
        t ? "rotate-180" : "rotate-0"
      )
    }
  ) : n === "plus-minus" ? /* @__PURE__ */ r(
    b.span,
    {
      initial: { opacity: 0, rotate: t ? -180 : 0 },
      animate: { opacity: 1, rotate: t ? 0 : 180 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: "easeInOut" },
      className: "flex items-center flex-shrink-0 text-icon-secondary",
      children: t ? /* @__PURE__ */ r(I, {}) : /* @__PURE__ */ r(v, {})
    },
    t ? "minus" : "plus"
  ) : null;
  return /* @__PURE__ */ r(a, { className: "flex m-0 hover:bg-background-secondary transition duration-150 ease-in-out", children: /* @__PURE__ */ A(
    "button",
    {
      className: m(
        "flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3",
        x,
        s && "cursor-not-allowed opacity-40",
        l
      ),
      onClick: s ? () => {
      } : o,
      "aria-expanded": t,
      disabled: s,
      ...u,
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-text-primary font-semibold text-left", children: c }),
        e()
      ]
    }
  ) });
};
g.displayName = "Accordion.Trigger";
const h = ({
  isOpen: o,
  disabled: t = !1,
  type: n = "simple",
  children: s,
  className: a
}) => {
  const i = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 }
  }, c = {
    simple: "px-2 pb-3",
    separator: "px-2 pb-4",
    boxed: "px-3 pb-4"
  }[n];
  return /* @__PURE__ */ r(T, { initial: !1, children: o && /* @__PURE__ */ r(
    b.div,
    {
      variants: i,
      initial: "closed",
      animate: "open",
      exit: "closed",
      transition: { duration: 0.3, ease: "easeInOut" },
      className: m(
        "overflow-hidden text-text-secondary w-full text-sm transition-[height, opacity, transform] ease-in box-border",
        t && "opacity-40",
        a
      ),
      "aria-hidden": !o,
      children: /* @__PURE__ */ r("div", { className: m(c), children: s })
    },
    "content"
  ) });
};
h.displayName = "Accordion.Content";
const D = Object.assign(f, {
  Item: y,
  Trigger: g,
  Content: h
});
export {
  f as Accordion,
  h as AccordionContent,
  y as AccordionItem,
  g as AccordionTrigger,
  D as default
};
//# sourceMappingURL=accordion.es.js.map
