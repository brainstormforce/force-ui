import { jsx as e } from "react/jsx-runtime";
import { AnimatePresence as f, motion as m } from "framer-motion";
import { useDrawerState as c } from "./drawer.es.js";
import { cn as n } from "../../utilities/functions.es.js";
const x = {
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
}, d = ({ children: t, className: r }) => {
  const { open: a, position: i, handleClose: o, drawerRef: s, transitionDuration: l } = c();
  return /* @__PURE__ */ e(f, { children: a && /* @__PURE__ */ e("div", { className: "fixed inset-0", children: /* @__PURE__ */ e(
    "div",
    {
      className: n(
        "flex items-center justify-center h-full",
        {
          "justify-start": i === "left",
          "justify-end": i === "right"
        }
      ),
      children: /* @__PURE__ */ e(
        m.div,
        {
          ref: s,
          className: n(
            "flex flex-col w-120 h-full bg-background-primary shadow-2xl my-5 overflow-hidden",
            r
          ),
          initial: "exit",
          animate: "open",
          exit: "exit",
          variants: x[i],
          transition: l,
          children: typeof t == "function" ? t({ close: o }) : t
        }
      )
    }
  ) }) });
};
d.displayName = "Drawer.Panel";
export {
  d as default
};
//# sourceMappingURL=drawer-panel.es.js.map
