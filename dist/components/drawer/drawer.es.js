import { jsxs as j, Fragment as H, jsx as $ } from "react/jsx-runtime";
import { useState as K, useRef as p, useId as M, useMemo as w, useCallback as U, isValidElement as V, cloneElement as _, createContext as q, useContext as z } from "react";
import { callAll as G } from "../../utilities/functions.es.js";
import { useFloating as J, useDismiss as L, useRole as Q, useClick as W, useInteractions as X } from "@floating-ui/react";
import Y from "./drawer-panel.es.js";
import Z from "./drawer-header.es.js";
import ee from "./drawer-title.es.js";
import te from "./drawer-description.es.js";
import oe from "./drawer-body.es.js";
import re from "./drawer-footer.es.js";
import se from "./drawer-close-button.es.js";
import ne from "./drawer-backdrop.es.js";
import { DrawerPortal as ae } from "./drawer-portal.es.js";
const ie = 0.2, C = q({}), xe = () => z(C), e = ({
  open: a,
  setOpen: i,
  children: h,
  trigger: t,
  className: I,
  exitOnClickOutside: f = !1,
  exitOnEsc: m = !0,
  design: R = "simple",
  position: T = "right",
  transitionDuration: k = ie,
  scrollLock: x = !0
}) => {
  const r = a !== void 0 && i !== void 0, [u, d] = K(!1), P = p(null), D = M(), B = `${D}-title`, y = `${D}-description`, F = p(!1), S = p(!1), o = w(
    () => r ? a : u,
    [a, u, r]
  ), s = w(
    () => r ? i : d,
    [i, d, r]
  ), l = () => {
    o || s(!0);
  }, g = () => {
    o && s(!1);
  }, { refs: c, context: n } = J({
    open: o,
    onOpenChange: s,
    transform: !1
  }), v = L(n, {
    enabled: m || f,
    escapeKey: m,
    outsidePress: (O) => f ? !O?.target?.closest("ul.fui-toast-container") : !1
  }), N = Q(n, { role: "dialog" }), b = W(n), { getFloatingProps: A } = X([v, N, b]), E = U(() => V(t) ? _(t, {
    onClick: G(l, t.props.onClick),
    ref: c.setReference,
    "aria-haspopup": "dialog",
    "aria-expanded": o
  }) : typeof t == "function" ? t({
    onClick: l,
    "aria-haspopup": "dialog",
    "aria-expanded": o
  }) : null, [t, l, c.setReference]);
  return /* @__PURE__ */ j(H, { children: [
    E(),
    /* @__PURE__ */ $(
      C.Provider,
      {
        value: {
          open: o,
          setOpen: s,
          handleClose: g,
          design: R,
          position: T,
          drawerContainerRef: P,
          transitionDuration: { duration: k },
          getFloatingProps: A,
          scrollLock: x,
          context: n,
          className: I,
          refs: c,
          titleId: B,
          descriptionId: y,
          hasTitleRef: F,
          hasDescriptionRef: S
        },
        children: h
      }
    )
  ] });
};
e.displayName = "Drawer";
e.Panel = Y;
e.Header = Z;
e.Title = ee;
e.Description = te;
e.Body = oe;
e.CloseButton = se;
e.Footer = re;
e.Backdrop = ne;
e.Portal = ae;
export {
  e as default,
  xe as useDrawerState
};
//# sourceMappingURL=drawer.es.js.map
