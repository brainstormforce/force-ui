import { jsx as e } from "react/jsx-runtime";
import { AnimatePresence as p, motion as h } from "framer-motion";
import { useDrawerState as g } from "./drawer.es.js";
import { cn as a } from "../../utilities/functions.es.js";
import { FloatingOverlay as w, FloatingFocusManager as v } from "@floating-ui/react";
const N = {
  left: {
    open: {
      x: 0
    },
    exit: {
      x: "-100%"
    }
  },
  right: {
    open: {
      x: 0
    },
    exit: {
      x: "100%"
    }
  }
}, y = ({ children: r, className: s }) => {
  const {
    open: c,
    position: t,
    handleClose: f,
    transitionDuration: o,
    getFloatingProps: l,
    drawerContainerRef: m,
    scrollLock: d,
    context: n,
    className: u,
    refs: i
  } = g();
  return !n || !l ? null : /* @__PURE__ */ e(p, { children: c && /* @__PURE__ */ e(
    w,
    {
      ref: m,
      lockScroll: d,
      className: a("z-50", u),
      children: /* @__PURE__ */ e(
        v,
        {
          context: n,
          modal: !0,
          ...i?.reference && { returnFocus: i.reference },
          children: /* @__PURE__ */ e(
            "div",
            {
              className: "fixed inset-0 overflow-hidden",
              children: /* @__PURE__ */ e("div", { className: "relative inset-0 h-full flex items-center", children: /* @__PURE__ */ e(
                "div",
                {
                  className: a(
                    "flex items-center justify-center h-full w-full",
                    {
                      "justify-start": t === "left",
                      "justify-end": t === "right"
                    }
                  ),
                  children: /* @__PURE__ */ e(
                    h.div,
                    {
                      className: a(
                        "flex flex-col w-120 h-full bg-background-primary shadow-2xl overflow-hidden z-20",
                        s
                      ),
                      initial: "exit",
                      animate: "open",
                      exit: "exit",
                      variants: N[t],
                      transition: o,
                      ref: (x) => {
                        setTimeout(() => {
                          i?.setFloating(x);
                        }, ((o?.duration || 0.3) + 0.1) * 1e3);
                      },
                      "aria-label": "drawer",
                      role: "dialog",
                      "aria-modal": "true",
                      ...l?.(),
                      children: typeof r == "function" ? r({ close: f }) : r
                    }
                  )
                }
              ) })
            }
          )
        }
      )
    }
  ) });
};
y.displayName = "Drawer.Panel";
export {
  y as default
};
//# sourceMappingURL=drawer-panel.es.js.map
