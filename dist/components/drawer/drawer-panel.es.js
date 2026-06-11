import { jsx as e } from "react/jsx-runtime";
import { AnimatePresence as y, motion as N } from "framer-motion";
import { useDrawerState as b } from "./drawer.es.js";
import { cn as a } from "../../utilities/functions.es.js";
import { FloatingOverlay as F, FloatingFocusManager as D } from "@floating-ui/react";
const j = {
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
}, P = ({ children: r, className: c, ariaLabel: d }) => {
  const {
    open: f,
    position: i,
    handleClose: m,
    transitionDuration: o,
    getFloatingProps: l,
    drawerContainerRef: u,
    scrollLock: x,
    context: n,
    className: p,
    refs: t,
    titleId: h,
    descriptionId: v,
    hasTitleRef: s,
    hasDescriptionRef: g
  } = b();
  return !n || !l ? null : /* @__PURE__ */ e(y, { children: f && /* @__PURE__ */ e(
    F,
    {
      ref: u,
      lockScroll: x,
      className: a("z-50", p),
      children: /* @__PURE__ */ e(
        D,
        {
          context: n,
          modal: !0,
          ...t?.reference && { returnFocus: t.reference },
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
                      "justify-start": i === "left",
                      "justify-end": i === "right"
                    }
                  ),
                  children: /* @__PURE__ */ e(
                    N.div,
                    {
                      className: a(
                        "flex flex-col w-120 h-full bg-background-primary shadow-2xl overflow-hidden z-20",
                        c
                      ),
                      initial: "exit",
                      animate: "open",
                      exit: "exit",
                      variants: j[i],
                      transition: o,
                      ref: (w) => {
                        setTimeout(() => {
                          t?.setFloating(w);
                        }, ((o?.duration || 0.3) + 0.1) * 1e3);
                      },
                      "aria-label": s?.current ? void 0 : d,
                      "aria-labelledby": s?.current ? h : void 0,
                      "aria-describedby": g?.current ? v : void 0,
                      role: "dialog",
                      "aria-modal": "true",
                      ...l?.(),
                      children: typeof r == "function" ? r({ close: m }) : r
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
P.displayName = "Drawer.Panel";
export {
  P as default
};
//# sourceMappingURL=drawer-panel.es.js.map
