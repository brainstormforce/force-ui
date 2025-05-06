import { jsx as r, jsxs as g, Fragment as L } from "react/jsx-runtime";
import { useState as M, useEffect as N, useRef as k } from "react";
import { X as j } from "lucide-react";
import { ToastState as F } from "./controller.es.js";
import { cn as u } from "../../utilities/functions.es.js";
import { getIcon as T, getTitle as S, getContent as w, getAction as P } from "./utils.es.js";
import { positionClassNames as z, containerVariantClassNames as D, variantClassNames as h, closeIconClassNames as m } from "./component-style.es.js";
import { flushSync as R } from "react-dom";
import { AnimatePresence as V, motion as X } from "framer-motion";
import $ from "../../hoc/withSingleton.es.js";
const q = ({
  position: n = "top-right",
  // top-right/top-left/bottom-right/bottom-left
  design: d = "stack",
  // stack/inline
  theme: f = "light",
  // light/dark
  className: y = "",
  autoDismiss: l = !0,
  // Auto dismiss the toast after a certain time.
  dismissAfter: e = 5e3
  // Time in milliseconds after which the toast will be dismissed.
}) => {
  const [p, o] = M([]);
  N(() => {
    F.subscribe((i) => {
      if (i?.dismiss) {
        o(
          (s) => s.map(
            (t) => t.id === i.id ? { ...t, dismiss: !0 } : t
          )
        );
        return;
      }
      setTimeout(() => {
        R(
          () => o((s) => s.findIndex(
            (c) => c.id === i.id
          ) !== -1 ? s.map((c) => c.id === i.id ? { ...c, ...i } : c) : [...s, i])
        );
      });
    });
  }, []);
  const a = (i) => {
    o((s) => s.filter((t) => t.id !== i));
  };
  return /* @__PURE__ */ r(
    "ul",
    {
      className: u(
        "fixed flex flex-col list-none z-20 p-10 pointer-events-none [&>li]:pointer-events-auto gap-3",
        z[n] ?? z["top-right"],
        y
      ),
      children: /* @__PURE__ */ r(V, { initial: !1, children: p.map((i) => /* @__PURE__ */ r(
        X.li,
        {
          initial: { opacity: 0, y: 50, scale: 0.7 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: {
            opacity: 0,
            scale: 0.6,
            transition: { duration: 0.15 }
          },
          layoutId: `toast-${i.id}`,
          children: /* @__PURE__ */ r(
            B,
            {
              toastItem: i,
              title: i.title,
              content: i?.description,
              icon: i?.icon ?? void 0,
              design: i?.design ?? d,
              autoDismiss: i?.autoDismiss ?? l,
              dismissAfter: i?.dismissAfter ?? e,
              removeToast: a,
              variant: i.type,
              theme: i?.theme ?? f
            }
          )
        },
        i.id
      )) })
    }
  );
}, B = ({
  toastItem: n,
  title: d = "",
  content: f = "",
  autoDismiss: y = !0,
  dismissAfter: l = 5e3,
  theme: e = "light",
  // light/dark
  design: p = "stack",
  // inline/stack
  icon: o,
  variant: a = "neutral",
  // neutral/info/success/warning/danger
  removeToast: i
  // Function to remove the toast.
}) => {
  const s = k(0), t = k(0), c = k(), C = (x, A = l) => {
    if (!(!y || l < 0))
      return s.current = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        typeof i == "function" && i(x.id);
      }, A);
  }, E = () => {
    clearTimeout(c.current), t.current = (/* @__PURE__ */ new Date()).getTime();
  }, _ = () => {
    c.current = C(
      n,
      l - (t.current - s.current)
    );
  };
  N(() => {
    const x = l;
    return c.current = C(n, x), () => {
      clearTimeout(c.current);
    };
  }, []), N(() => {
    !n?.dismiss || typeof i != "function" || i(n.id);
  }, [n]);
  const v = () => {
    typeof i == "function" && n?.action?.onClick?.(() => i(n.id));
  };
  let b = null;
  return p === "stack" && (b = /* @__PURE__ */ r(
    "div",
    {
      className: u(
        "flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md shadow-lg",
        e === "dark" ? h.dark : h.light?.[a],
        D.stack
      ),
      onMouseEnter: E,
      onMouseLeave: _,
      children: n.type !== "custom" ? /* @__PURE__ */ g(L, { children: [
        /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: o, theme: e }) }),
        /* @__PURE__ */ g("div", { className: "flex flex-col items-start justify-start gap-0.5 mr-6", children: [
          S({ title: d, theme: e }),
          w({ content: f, theme: e }),
          n?.action?.label && typeof n?.action?.onClick == "function" && /* eslint-disable */
          /* @__PURE__ */ r("div", { className: "mt-2.5", children: P({
            actionLabel: n?.action?.label,
            actionType: n?.action?.type ?? "button",
            onAction: v,
            theme: e
          }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "absolute right-4 top-4 [&_svg]:size-5", children: /* @__PURE__ */ r(
          "button",
          {
            className: u(
              "bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer",
              m[e] ?? m.light
            ),
            onClick: () => {
              typeof i == "function" && i(n.id);
            },
            children: /* @__PURE__ */ r(j, {})
          }
        ) })
      ] }) : n?.jsx?.({
        close: () => i(n.id),
        action: n?.action ? { ...n?.action, onClick: v } : null
      })
    }
  )), p === "inline" && (b = /* @__PURE__ */ g(
    "div",
    {
      className: u(
        "flex items-center justify-start p-3 gap-2 relative border border-solid rounded-md shadow-lg",
        e === "dark" ? h.dark : h.light?.[a],
        D.inline
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: o, theme: e }) }),
        /* @__PURE__ */ g("div", { className: "flex items-start justify-start gap-1 mr-10 [&>span:first-child]:shrink-0", children: [
          S({ title: d, theme: e }),
          w({ content: f, theme: e })
        ] }),
        /* @__PURE__ */ r("div", { className: "absolute right-3 top-3 [&_svg]:size-5", children: /* @__PURE__ */ r(
          "button",
          {
            className: u(
              "bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer",
              m[e] ?? m.light
            ),
            onClick: () => i(n.id),
            children: /* @__PURE__ */ r(j, {})
          }
        ) })
      ]
    }
  )), b;
}, I = $(q);
export {
  B as Toast,
  q as Toaster,
  I as default
};
//# sourceMappingURL=toaster.es.js.map
