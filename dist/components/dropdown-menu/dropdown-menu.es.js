import { jsx as s, jsxs as V } from "react/jsx-runtime";
import l, { useState as h, cloneElement as M, createContext as j, isValidElement as g, Fragment as U, useContext as q } from "react";
import { useFloating as z, autoUpdate as B, offset as G, flip as H, shift as J, useClick as K, useDismiss as Q, useRole as X, useInteractions as Y, useTransitionStyles as Z, FloatingPortal as _ } from "@floating-ui/react";
import { cn as u, callAll as w } from "../../utilities/functions.es.js";
import { Menu as c } from "../menu-item/menu-item.es.js";
const y = j({}), C = () => q(y), a = ({
  placement: e = "bottom",
  offset: o = 10,
  boundary: n = "clippingAncestors",
  children: t,
  className: m
}) => {
  const [f, i] = h(!1), { refs: p, floatingStyles: S, context: d } = z({
    open: f,
    onOpenChange: i,
    placement: e,
    strategy: "fixed",
    middleware: [
      G(o),
      H({ boundary: n }),
      J({ boundary: n })
    ],
    whileElementsMounted: B
  }), I = K(d), E = Q(d), F = X(d, { role: "menu" }), { getReferenceProps: R, getFloatingProps: L } = Y([
    I,
    E,
    F
  ]), { isMounted: T, styles: W } = Z(d, {
    duration: 150,
    initial: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 },
    close: { opacity: 0, scale: 0.95 }
  }), A = () => i((r) => !r), O = () => i(!1);
  return /* @__PURE__ */ s(
    y.Provider,
    {
      value: {
        refs: p,
        handleClose: O,
        isMounted: T,
        styles: W,
        floatingStyles: S,
        getFloatingProps: L
      },
      children: /* @__PURE__ */ V("div", { className: u("relative inline-block", m), children: [
        l.Children.map(t, (r) => l.isValidElement(r) && r?.type?.displayName === "DropdownMenu.Trigger" ? M(r, {
          ref: p.setReference,
          onClick: A,
          ...R()
        }) : null),
        l.Children.toArray(t).filter(
          (r) => l.isValidElement(r) && [
            "DropdownMenu.Portal",
            "DropdownMenu.ContentWrapper"
          ].includes(
            r.type.displayName || ""
          )
        ).map((r) => r)
      ] })
    }
  );
};
a.displayName = "DropdownMenu";
const D = ({
  children: e,
  className: o
}) => {
  const { refs: n, floatingStyles: t, getFloatingProps: m, isMounted: f, styles: i } = C();
  return f && /* @__PURE__ */ s(
    "div",
    {
      ref: n.setFloating,
      className: o,
      style: {
        ...t,
        ...i
      },
      ...m(),
      children: l.Children.map(e, (p) => p?.type?.displayName === "DropdownMenu.Content" ? p : null)
    }
  );
};
D.displayName = "DropdownMenu.ContentWrapper";
const N = ({
  children: e,
  root: o,
  id: n
}) => /* @__PURE__ */ s(_, { id: n, root: o, children: e });
N.displayName = "DropdownMenu.Portal";
const x = l.forwardRef(({ children: e, className: o, ...n }, t) => g(e) ? l.cloneElement(e, {
  className: u(o, e.props.className),
  ref: t,
  ...n
}) : /* @__PURE__ */ s(
  "div",
  {
    ref: t,
    className: u("cursor-pointer", o),
    role: "button",
    tabIndex: 0,
    ...n,
    children: e
  }
));
x.displayName = "DropdownMenu.Trigger";
const P = ({
  children: e,
  className: o,
  ...n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: u(
      "border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden",
      o
    ),
    children: /* @__PURE__ */ s(c, { ...n, children: e })
  }
);
P.displayName = "DropdownMenu.Content";
const b = (e) => /* @__PURE__ */ s(c.List, { ...e });
b.displayName = "DropdownMenu.List";
const k = ({
  children: e,
  as: o = c.Item,
  ...n
}) => {
  const { handleClose: t } = C();
  return e ? o === U && g(e) ? M(e, {
    onClick: w(
      e.props?.onClick,
      t
    )
  }) : /* @__PURE__ */ s(
    o,
    {
      ...n,
      className: u("px-2", n.className),
      onClick: w(n.onClick, t),
      children: e
    }
  ) : null;
};
k.displayName = "DropdownMenu.Item";
const v = (e) => /* @__PURE__ */ s(c.Separator, { ...e });
v.displayName = "DropdownMenu.Separator";
a.Trigger = x;
a.Content = P;
a.List = b;
a.Item = k;
a.Separator = v;
a.Portal = N;
a.ContentWrapper = D;
export {
  a as DropdownMenu,
  P as DropdownMenuContent,
  D as DropdownMenuContentWrapper,
  k as DropdownMenuItem,
  b as DropdownMenuList,
  N as DropdownMenuPortal,
  v as DropdownMenuSeparator,
  x as DropdownMenuTrigger,
  a as default
};
//# sourceMappingURL=dropdown-menu.es.js.map
