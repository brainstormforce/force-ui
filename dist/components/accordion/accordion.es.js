import { jsx as r, jsxs as N } from "react/jsx-runtime";
import p, { useState as A } from "react";
import { ChevronDown as v, Minus as w, Plus as I } from "lucide-react";
import { AnimatePresence as T, motion as b } from "framer-motion";
import { cn as m } from "../../utilities/functions.es.js";
const y = ({
  type: o = "simple",
  defaultValue: t = [],
  autoClose: n = !1,
  disabled: i = !1,
  children: s,
  className: l
}) => {
  const [c, d] = A(
    Array.isArray(t) ? t : [t]
  ), f = (e) => {
    d((a) => n ? a.includes(e) ? [] : [e] : a.includes(e) ? a.filter((u) => u !== e) : [...a, e]);
  };
  return /* @__PURE__ */ r("div", { className: m(o === "boxed" ? "space-y-3" : "", l), children: p.Children.map(s, (e) => {
    if (p.isValidElement(e) && "value" in e.props) {
      const a = e.props.collapsible !== !1, u = a ? c.includes(e.props.value) : !0;
      return p.cloneElement(
        e,
        {
          isOpen: u,
          onToggle: a ? () => f(e.props.value) : void 0,
          type: o,
          disabled: i || e.props.disabled
        }
      );
    }
    return e;
  }) });
};
y.displayName = "Accordion";
const g = ({
  isOpen: o,
  onToggle: t,
  type: n = "simple",
  disabled: i = !1,
  children: s,
  className: l
}) => {
  const c = {
    simple: "border-0",
    separator: "border-0 border-b border-solid border-border-subtle",
    boxed: "border border-solid border-border-subtle rounded-md"
  }[n];
  return /* @__PURE__ */ r("div", { className: m(c, l), children: p.Children.map(
    s,
    (d) => p.isValidElement(d) ? p.cloneElement(d, {
      isOpen: o,
      onToggle: t,
      type: n,
      disabled: i
    }) : d
  ) });
};
g.displayName = "Accordion.Item";
const h = ({
  onToggle: o,
  isOpen: t,
  iconType: n = "arrow",
  collapsible: i = !0,
  disabled: s = !1,
  tag: l = "h3",
  type: c = "simple",
  children: d,
  className: f,
  ...x
}) => {
  const e = {
    simple: "px-2 py-3",
    separator: "px-2 py-4",
    boxed: "px-3 py-4"
  }[c], a = () => i ? n === "arrow" ? /* @__PURE__ */ r(
    v,
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
      children: t ? /* @__PURE__ */ r(w, {}) : /* @__PURE__ */ r(I, {})
    },
    t ? "minus" : "plus"
  ) : null : null;
  return /* @__PURE__ */ r(l, { className: "flex m-0 hover:bg-background-secondary transition duration-150 ease-in-out", children: /* @__PURE__ */ N(
    "button",
    {
      className: m(
        "flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3",
        e,
        s && "cursor-not-allowed opacity-40",
        f
      ),
      onClick: !s && i ? o : void 0,
      "aria-expanded": t,
      disabled: s,
      ...x,
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-text-primary font-semibold text-left", children: d }),
        a()
      ]
    }
  ) });
};
h.displayName = "Accordion.Trigger";
const C = ({
  isOpen: o,
  disabled: t = !1,
  type: n = "simple",
  children: i,
  className: s
}) => {
  const l = {
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
  }[n];
  return /* @__PURE__ */ r(T, { initial: !1, children: o && /* @__PURE__ */ r(
    b.div,
    {
      variants: l,
      initial: "closed",
      animate: "open",
      exit: "closed",
      transition: { duration: 0.3, ease: "easeInOut" },
      className: m(
        "text-text-secondary w-full text-sm transition-[height, opacity, transform] ease-in box-border",
        t && "opacity-40",
        s
      ),
      "aria-hidden": !o,
      children: /* @__PURE__ */ r("div", { className: m(c), children: i })
    },
    "content"
  ) });
};
C.displayName = "Accordion.Content";
const D = Object.assign(y, {
  Item: g,
  Trigger: h,
  Content: C
});
export {
  y as Accordion,
  C as AccordionContent,
  g as AccordionItem,
  h as AccordionTrigger,
  D as default
};
//# sourceMappingURL=accordion.es.js.map
