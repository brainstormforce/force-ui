import { jsxs as N, Fragment as g, jsx as A } from "react/jsx-runtime";
import { createContext as E, useState as O, useRef as b, useMemo as d, useCallback as j, isValidElement as H, cloneElement as K, useContext as M } from "react";
import { callAll as U } from "../../utilities/functions.es.js";
import { useFloating as V, useDismiss as _, useRole as q, useClick as z, useInteractions as G } from "@floating-ui/react";
import J from "./drawer-panel.es.js";
import L from "./drawer-header.es.js";
import Q from "./drawer-title.es.js";
import W from "./drawer-description.es.js";
import X from "./drawer-body.es.js";
import Y from "./drawer-footer.es.js";
import Z from "./drawer-close-button.es.js";
import $ from "./drawer-backdrop.es.js";
import { DrawerPortal as ee } from "./drawer-portal.es.js";
const re = 0.2, D = E({}), Ce = () => M(D), e = ({
  open: a,
  setOpen: i,
  children: w,
  trigger: r,
  className: C,
  exitOnClickOutside: m = !1,
  exitOnEsc: f = !0,
  design: T = "simple",
  position: k = "right",
  transitionDuration: P = re,
  scrollLock: R = !0
}) => {
  const t = a !== void 0 && i !== void 0, [p, u] = O(!1), h = b(null), o = d(
    () => t ? a : p,
    [a, p, t]
  ), n = d(
    () => t ? i : u,
    [i, u, t]
  ), l = () => {
    o || n(!0);
  }, x = () => {
    o && n(!1);
  }, { refs: c, context: s } = V({
    open: o,
    onOpenChange: n,
    transform: !1
  }), B = _(s, {
    enabled: f || m,
    escapeKey: f,
    outsidePress: (v) => m ? !v?.target?.closest("ul.fui-toast-container") : !1
  }), y = q(s, { role: "dialog" }), F = z(s), { getFloatingProps: I } = G([B, y, F]), S = j(() => H(r) ? K(r, {
    onClick: U(l, r.props.onClick),
    ref: c.setReference,
    "aria-haspopup": "dialog",
    "aria-expanded": o
  }) : typeof r == "function" ? r({ onClick: l }) : null, [r, l, c.setReference]);
  return /* @__PURE__ */ N(g, { children: [
    S(),
    /* @__PURE__ */ A(
      D.Provider,
      {
        value: {
          open: o,
          setOpen: n,
          handleClose: x,
          design: T,
          position: k,
          drawerContainerRef: h,
          transitionDuration: { duration: P },
          getFloatingProps: I,
          scrollLock: R,
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
e.Panel = J;
e.Header = L;
e.Title = Q;
e.Description = W;
e.Body = X;
e.CloseButton = Z;
e.Footer = Y;
e.Backdrop = $;
e.Portal = ee;
export {
  e as default,
  Ce as useDrawerState
};
//# sourceMappingURL=drawer.es.js.map
