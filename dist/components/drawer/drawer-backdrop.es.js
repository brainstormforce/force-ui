import { jsx as s } from "react/jsx-runtime";
import { useState as m, useEffect as p, createElement as d } from "react";
import { AnimatePresence as f, motion as u } from "framer-motion";
import { useDrawerState as l } from "./drawer.es.js";
import { createPortal as k } from "react-dom";
import { cn as x } from "../../utilities/functions.es.js";
const b = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, w = ({ className: n, ...a }) => {
  const { open: e, drawerContainerRef: t, transitionDuration: i } = l(), [r, c] = m(null);
  p(() => {
    t?.current && c(t.current);
  }, [e, t]);
  const o = /* @__PURE__ */ s(f, { mode: "wait", children: e && /* @__PURE__ */ d(
    u.div,
    {
      className: x(
        "fixed inset-0 -z-10 bg-background-inverse/90",
        n
      ),
      ...a,
      initial: "exit",
      animate: "open",
      exit: "exit",
      variants: b,
      transition: i,
      key: "backdrop"
    }
  ) });
  return r ? k(o, r) : o;
};
w.displayName = "Drawer.Backdrop";
export {
  w as default
};
//# sourceMappingURL=drawer-backdrop.es.js.map
