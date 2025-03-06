import { jsx as s, jsxs as h } from "react/jsx-runtime";
import l, { createContext as j, useState as A, cloneElement as M, isValidElement as y, Fragment as U, useContext as q } from "react";
import { useFloating as z, offset as B, flip as G, shift as H, autoUpdate as J, useClick as K, useDismiss as Q, useRole as W, useInteractions as X, useTransitionStyles as Y, FloatingPortal as Z } from "@floating-ui/react";
import { cn as p, callAll as w } from "../../utilities/functions.es.js";
import { Menu as c } from "../menu-item/menu-item.es.js";
const C = j({}), D = () => q(C), i = ({
  placement: e = "bottom",
  offset: o = 10,
  boundary: n = "clippingAncestors",
  children: t,
  className: m
}) => {
  const [f, u] = A(!1), { refs: d, floatingStyles: g, context: a } = z({
    open: f,
    onOpenChange: u,
    placement: e,
    strategy: "absolute",
    middleware: [
      B(o),
      G({ boundary: n }),
      H({ boundary: n })
    ],
    whileElementsMounted: J
  }), S = K(a), I = Q(a), E = W(a, { role: "menu" }), { getReferenceProps: F, getFloatingProps: R } = X([
    S,
    I,
    E
  ]), { isMounted: L, styles: T } = Y(a, {
    duration: 150,
    initial: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 },
    close: { opacity: 0, scale: 0.95 }
  }), O = () => u((r) => !r), V = () => u(!1);
  return /* @__PURE__ */ s(
    C.Provider,
    {
      value: {
        refs: d,
        handleClose: V,
        isMounted: L,
        styles: T,
        floatingStyles: g,
        getFloatingProps: R
      },
      children: /* @__PURE__ */ h("div", { className: p("relative inline-block", m), children: [
        l.Children.map(t, (r) => l.isValidElement(r) && r?.type?.displayName === "DropdownMenu.Trigger" ? M(r, {
          ref: d.setReference,
          onClick: O,
          ...F()
        }) : null),
        l.Children.map(t, (r) => l.isValidElement(r) && r?.type?.displayName === "DropdownMenu.Portal" ? r : null)
      ] })
    }
  );
};
i.displayName = "DropdownMenu";
const N = ({
  children: e,
  className: o,
  root: n,
  id: t
}) => {
  const { refs: m, floatingStyles: f, getFloatingProps: u, isMounted: d, styles: g } = D();
  return d && /* @__PURE__ */ s(Z, { id: t, root: n, children: /* @__PURE__ */ s(
    "div",
    {
      ref: m.setFloating,
      className: o,
      style: {
        ...f,
        ...g
      },
      ...u(),
      children: l.Children.map(e, (a) => a?.type?.displayName === "DropdownMenu.Content" ? a : null)
    }
  ) });
};
N.displayName = "DropdownMenu.Portal";
const x = l.forwardRef(({ children: e, className: o, ...n }, t) => y(e) ? l.cloneElement(e, {
  className: p(o, e.props.className),
  ref: t,
  ...n
}) : /* @__PURE__ */ s(
  "div",
  {
    ref: t,
    className: p("cursor-pointer", o),
    role: "button",
    tabIndex: 0,
    ...n,
    children: e
  }
));
x.displayName = "DropdownMenu.Trigger";
const b = ({
  children: e,
  className: o,
  ...n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: p(
      "border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden",
      o
    ),
    children: /* @__PURE__ */ s(c, { ...n, children: e })
  }
);
b.displayName = "DropdownMenu.Content";
const P = (e) => /* @__PURE__ */ s(c.List, { ...e });
P.displayName = "DropdownMenu.List";
const k = ({
  children: e,
  as: o = c.Item,
  ...n
}) => {
  const { handleClose: t } = D();
  return e ? o === U && y(e) ? M(e, {
    onClick: w(
      e.props?.onClick,
      t
    )
  }) : /* @__PURE__ */ s(
    o,
    {
      ...n,
      className: p("px-2", n.className),
      onClick: w(n.onClick, t),
      children: e
    }
  ) : null;
};
k.displayName = "DropdownMenu.Item";
const v = (e) => /* @__PURE__ */ s(c.Separator, { ...e });
v.displayName = "DropdownMenu.Separator";
i.Trigger = x;
i.Content = b;
i.List = P;
i.Item = k;
i.Separator = v;
i.Portal = N;
export {
  i as DropdownMenu,
  b as DropdownMenuContent,
  k as DropdownMenuItem,
  P as DropdownMenuList,
  N as DropdownMenuPortal,
  v as DropdownMenuSeparator,
  x as DropdownMenuTrigger,
  i as default
};
//# sourceMappingURL=dropdown-menu.es.js.map
