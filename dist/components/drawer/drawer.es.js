import { jsxs as v, Fragment as N, jsx as A } from "react/jsx-runtime";
import { createContext as O, useState as b, useRef as j, useMemo as d, useCallback as H, isValidElement as E, cloneElement as K, useContext as M } from "react";
import { callAll as U } from "../../utilities/functions.es.js";
import { useFloating as V, useDismiss as _, useRole as g, useClick as q, useInteractions as z } from "@floating-ui/react";
import G from "./drawer-panel.es.js";
import J from "./drawer-header.es.js";
import L from "./drawer-title.es.js";
import Q from "./drawer-description.es.js";
import W from "./drawer-body.es.js";
import X from "./drawer-footer.es.js";
import Y from "./drawer-close-button.es.js";
import Z from "./drawer-backdrop.es.js";
import { DrawerPortal as $ } from "./drawer-portal.es.js";
const ee = 0.2, D = O({}), de = () => M(D), e = ({
  open: a,
  setOpen: i,
  children: w,
  trigger: r,
  className: C,
  exitOnClickOutside: m = !1,
  exitOnEsc: p = !0,
  design: k = "simple",
  position: P = "right",
  transitionDuration: R = ee,
  scrollLock: h = !0
}) => {
  const t = a !== void 0 && i !== void 0, [f, u] = b(!1), x = j(null), o = d(
    () => t ? a : f,
    [a, f, t]
  ), n = d(
    () => t ? i : u,
    [i, u, t]
  ), l = () => {
    o || n(!0);
  }, B = () => {
    o && n(!1);
  }, { refs: c, context: s } = V({
    open: o,
    onOpenChange: n,
    transform: !1
  }), T = _(s, {
    enabled: p || m,
    escapeKey: p,
    outsidePress: m
  }), y = g(s, { role: "dialog" }), F = q(s), { getFloatingProps: I } = z([
    T,
    y,
    F
  ]), S = H(() => E(r) ? K(r, {
    onClick: U(l, r.props.onClick),
    ref: c.setReference,
    "aria-haspopup": "dialog",
    "aria-expanded": o
  }) : typeof r == "function" ? r({ onClick: l }) : null, [r, l, c.setReference]);
  return /* @__PURE__ */ v(N, { children: [
    S(),
    /* @__PURE__ */ A(
      D.Provider,
      {
        value: {
          open: o,
          setOpen: n,
          handleClose: B,
          design: k,
          position: P,
          drawerContainerRef: x,
          transitionDuration: { duration: R },
          getFloatingProps: I,
          scrollLock: h,
          context: s,
          className: C,
          refs: c
        },
        children: w
      }
    )
  ] });
};
e.displayName = "Drawer";
e.Panel = G;
e.Header = J;
e.Title = L;
e.Description = Q;
e.Body = W;
e.CloseButton = Y;
e.Footer = X;
e.Backdrop = Z;
e.Portal = $;
export {
  e as default,
  de as useDrawerState
};
//# sourceMappingURL=drawer.es.js.map
