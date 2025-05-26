import { jsxs as b, Fragment as I, jsx as D } from "react/jsx-runtime";
import { createContext as L, useState as A, useRef as v, useMemo as C, useCallback as F, isValidElement as P, cloneElement as j, useEffect as h, useContext as H } from "react";
import { callAll as q, cn as z } from "../../utilities/functions.es.js";
import K from "./drawer-panel.es.js";
import M from "./drawer-header.es.js";
import U from "./drawer-title.es.js";
import V from "./drawer-description.es.js";
import _ from "./drawer-body.es.js";
import G from "./drawer-footer.es.js";
import J from "./drawer-close-button.es.js";
import Q from "./drawer-backdrop.es.js";
const W = 0.2, k = L({}), ie = () => H(k), e = ({
  open: a,
  setOpen: d,
  children: y,
  trigger: t,
  className: E,
  exitOnClickOutside: x = !1,
  exitOnEsc: O = !0,
  design: B = "simple",
  position: S = "right",
  transitionDuration: T = W,
  scrollLock: N = !0
}) => {
  const u = a !== void 0 && d !== void 0, [m, i] = A(!1), s = v(null), f = v(null), o = C(
    () => u ? a : m,
    [a, m]
  ), l = C(
    () => u ? d : i,
    [i, i]
  ), c = () => {
    o || l(!0);
  }, n = () => {
    o && l(!1);
  }, R = F(() => P(t) ? j(t, {
    onClick: q(c, t.props.onClick)
  }) : typeof t == "function" ? t({ onClick: c }) : null, [t, c, n]), w = (r) => {
    switch (r.key) {
      case "Escape":
        O && n();
        break;
    }
  }, p = (r) => {
    x && s.current && !s.current.contains(r.target) && n();
  };
  return h(() => (window.addEventListener("keydown", w), document.addEventListener("mousedown", p), () => {
    window.removeEventListener("keydown", w), document.removeEventListener("mousedown", p);
  }), [o]), h(() => {
    if (!N)
      return;
    const r = document.querySelector("html");
    return o && r && (r.style.overflow = "hidden"), () => {
      r && (r.style.overflow = "");
    };
  }, [o]), /* @__PURE__ */ b(I, { children: [
    R(),
    /* @__PURE__ */ D(
      k.Provider,
      {
        value: {
          open: o,
          setOpen: l,
          handleClose: n,
          design: B,
          position: S,
          drawerContainerRef: f,
          drawerRef: s,
          transitionDuration: { duration: T }
        },
        children: /* @__PURE__ */ D(
          "div",
          {
            className: z(
              "fixed z-auto w-0 h-0 overflow-visible",
              E
            ),
            ref: f,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "drawer",
            children: y
          }
        )
      }
    )
  ] });
};
e.displayName = "Drawer";
e.Panel = K;
e.Header = M;
e.Title = U;
e.Description = V;
e.Body = _;
e.CloseButton = J;
e.Footer = G;
e.Backdrop = Q;
export {
  e as default,
  ie as useDrawerState
};
//# sourceMappingURL=drawer.es.js.map
