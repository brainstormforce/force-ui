import { jsx as t } from "react/jsx-runtime";
import { AnimatePresence as o, motion as c } from "framer-motion";
import { useDrawerState as m } from "./drawer.es.js";
import { createPortal as s } from "react-dom";
import { cn as p } from "../../utilities/functions.es.js";
const d = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, u = ({ className: e, ...i }) => {
  const { open: n, drawerContainerRef: r, transitionDuration: a } = m();
  return r?.current ? !!r.current && s(
    /* @__PURE__ */ t(o, { children: n && /* @__PURE__ */ t(
      c.div,
      {
        className: p(
          "fixed inset-0 -z-10 bg-background-inverse/90",
          e
        ),
        ...i,
        initial: "exit",
        animate: "open",
        exit: "exit",
        variants: d,
        transition: a
      }
    ) }),
    r.current
  ) : null;
};
u.displayName = "Drawer.Backdrop";
export {
  u as default
};
//# sourceMappingURL=drawer-backdrop.es.js.map
