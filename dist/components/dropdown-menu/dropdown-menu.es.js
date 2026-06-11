import { jsx as s, jsxs as O } from "react/jsx-runtime";
import l, { useState as V, cloneElement as w, createContext as j, isValidElement as y, Fragment as U, useContext as q } from "react";
import { useFloating as z, autoUpdate as B, offset as G, flip as H, shift as J, useClick as K, useDismiss as Q, useRole as X, useInteractions as Y, useTransitionStyles as Z, FloatingPortal as _, FloatingFocusManager as $ } from "@floating-ui/react";
import { cn as d, callAll as g } from "../../utilities/functions.es.js";
import { Menu as m } from "../menu-item/menu-item.es.js";
const C = j({}), D = () => q(C), a = ({
  placement: e = "bottom",
  offset: o = 10,
  boundary: n = "clippingAncestors",
  children: t,
  className: f
}) => {
  const [M, i] = V(!1), { refs: p, floatingStyles: c, context: u } = z({
    open: M,
    onOpenChange: i,
    placement: e,
    strategy: "fixed",
    middleware: [
      G(o),
      H({ boundary: n }),
      J({ boundary: n })
    ],
    whileElementsMounted: B
  }), v = K(u), E = Q(u), I = X(u, { role: "menu" }), { getReferenceProps: R, getFloatingProps: L } = Y([
    v,
    E,
    I
  ]), { isMounted: T, styles: W } = Z(u, {
    duration: 150,
    initial: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 },
    close: { opacity: 0, scale: 0.95 }
  }), h = () => i((r) => !r), A = () => i(!1);
  return /* @__PURE__ */ s(
    C.Provider,
    {
      value: {
        refs: p,
        handleClose: A,
        isMounted: T,
        styles: W,
        floatingStyles: c,
        getFloatingProps: L,
        context: u
      },
      children: /* @__PURE__ */ O("div", { className: d("relative inline-block", f), children: [
        l.Children.map(t, (r) => l.isValidElement(r) && r?.type?.displayName === "DropdownMenu.Trigger" ? w(r, {
          ref: p.setReference,
          onClick: h,
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
const N = ({
  children: e,
  className: o
}) => {
  const { refs: n, floatingStyles: t, getFloatingProps: f, isMounted: M, styles: i, context: p } = D();
  return !M || !p ? null : /* @__PURE__ */ s($, { context: p, modal: !1, children: /* @__PURE__ */ s(
    "div",
    {
      ref: n.setFloating,
      className: o,
      style: {
        ...t,
        ...i
      },
      ...f(),
      children: l.Children.map(e, (c) => c?.type?.displayName === "DropdownMenu.Content" ? c : null)
    }
  ) });
};
N.displayName = "DropdownMenu.ContentWrapper";
const x = ({
  children: e,
  root: o,
  id: n
}) => /* @__PURE__ */ s(_, { id: n, root: o, children: e });
x.displayName = "DropdownMenu.Portal";
const b = l.forwardRef(({ children: e, className: o, ...n }, t) => y(e) ? l.cloneElement(e, {
  className: d(o, e.props.className),
  ref: t,
  ...n
}) : /* @__PURE__ */ s(
  "button",
  {
    ref: t,
    type: "button",
    className: d("cursor-pointer bg-transparent border-none p-0", o),
    ...n,
    children: e
  }
));
b.displayName = "DropdownMenu.Trigger";
const P = ({
  children: e,
  className: o,
  ...n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: d(
      "border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden",
      o
    ),
    children: /* @__PURE__ */ s(m, { ...n, children: e })
  }
);
P.displayName = "DropdownMenu.Content";
const k = (e) => /* @__PURE__ */ s(m.List, { ...e });
k.displayName = "DropdownMenu.List";
const F = ({
  children: e,
  as: o = m.Item,
  ...n
}) => {
  const { handleClose: t } = D();
  return e ? o === U && y(e) ? w(e, {
    onClick: g(
      e.props?.onClick,
      t
    )
  }) : /* @__PURE__ */ s(
    o,
    {
      ...n,
      className: d("px-2", n.className),
      onClick: g(n.onClick, t),
      children: e
    }
  ) : null;
};
F.displayName = "DropdownMenu.Item";
const S = (e) => /* @__PURE__ */ s(m.Separator, { ...e });
S.displayName = "DropdownMenu.Separator";
a.Trigger = b;
a.Content = P;
a.List = k;
a.Item = F;
a.Separator = S;
a.Portal = x;
a.ContentWrapper = N;
export {
  a as DropdownMenu,
  P as DropdownMenuContent,
  N as DropdownMenuContentWrapper,
  F as DropdownMenuItem,
  k as DropdownMenuList,
  x as DropdownMenuPortal,
  S as DropdownMenuSeparator,
  b as DropdownMenuTrigger,
  a as default
};
//# sourceMappingURL=dropdown-menu.es.js.map
