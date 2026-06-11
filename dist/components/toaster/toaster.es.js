import { jsx as e, jsxs as b, Fragment as L } from "react/jsx-runtime";
import { useState as M, useEffect as N, useRef as v } from "react";
import { X as j } from "lucide-react";
import { ToastState as P } from "./controller.es.js";
import { cn as d } from "../../utilities/functions.es.js";
import { getIcon as T, getTitle as D, getContent as S, getAction as F } from "./utils.es.js";
import { positionClassNames as w, closeIconClassNames as m, containerVariantClassNames as z, variantClassNames as h } from "./component-style.es.js";
import { flushSync as R } from "react-dom";
import { AnimatePresence as V, motion as X } from "framer-motion";
import $ from "../../hoc/withSingleton.es.js";
const q = ({
  position: n = "top-right",
  // top-right/top-left/bottom-right/bottom-left
  design: f = "stack",
  // stack/inline
  theme: p = "light",
  // light/dark
  className: y = "",
  autoDismiss: l = !0,
  // Auto dismiss the toast after a certain time.
  dismissAfter: r = 5e3
  // Time in milliseconds after which the toast will be dismissed.
}) => {
  const [g, c] = M([]);
  N(() => {
    P.subscribe((i) => {
      if (i?.dismiss) {
        c(
          (s) => s.map(
            (o) => o.id === i.id ? { ...o, dismiss: !0 } : o
          )
        );
        return;
      }
      setTimeout(() => {
        R(
          () => c((s) => s.findIndex(
            (t) => t.id === i.id
          ) !== -1 ? s.map((t) => t.id === i.id ? { ...t, ...i } : t) : [...s, i])
        );
      });
    });
  }, []);
  const a = (i) => {
    c((s) => s.filter((o) => o.id !== i));
  };
  return /* @__PURE__ */ e(
    "ul",
    {
      "aria-live": "polite",
      "aria-label": "Notifications",
      className: d(
        "fui-toast-container fixed flex flex-col list-none z-20 p-10 pointer-events-none [&>li]:pointer-events-auto gap-3",
        w[n] ?? w["top-right"],
        y
      ),
      children: /* @__PURE__ */ e(V, { initial: !1, children: g.map((i) => /* @__PURE__ */ e(
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
          children: /* @__PURE__ */ e(
            B,
            {
              toastItem: i,
              title: i.title,
              content: i?.description,
              icon: i?.icon ?? void 0,
              design: i?.design ?? f,
              autoDismiss: i?.autoDismiss ?? l,
              dismissAfter: i?.dismissAfter ?? r,
              removeToast: a,
              variant: i.type,
              theme: i?.theme ?? p
            }
          )
        },
        i.id
      )) })
    }
  );
}, B = ({
  toastItem: n,
  title: f = "",
  content: p = "",
  autoDismiss: y = !0,
  dismissAfter: l = 5e3,
  theme: r = "light",
  // light/dark
  design: g = "stack",
  // inline/stack
  icon: c,
  variant: a = "neutral",
  // neutral/info/success/warning/danger
  removeToast: i
  // Function to remove the toast.
}) => {
  const s = v(0), o = v(0), t = v(), k = (u, A = l) => {
    if (!(!y || l < 0))
      return s.current = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        typeof i == "function" && i(u.id);
      }, A);
  }, E = () => {
    clearTimeout(t.current), o.current = (/* @__PURE__ */ new Date()).getTime();
  }, _ = () => {
    t.current = k(
      n,
      l - (o.current - s.current)
    );
  };
  N(() => {
    const u = l;
    return t.current = k(n, u), () => {
      clearTimeout(t.current);
    };
  }, []), N(() => {
    !n?.dismiss || typeof i != "function" || i(n.id);
  }, [n]);
  const C = () => {
    typeof i == "function" && n?.action?.onClick?.(() => i(n.id));
  };
  let x = null;
  return g === "stack" && (x = /* @__PURE__ */ e(
    "div",
    {
      className: d(
        "flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md shadow-lg",
        r === "dark" ? h.dark : h.light?.[a],
        z.stack
      ),
      onMouseEnter: E,
      onMouseLeave: _,
      children: n.type !== "custom" ? /* @__PURE__ */ b(L, { children: [
        /* @__PURE__ */ e("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: c, theme: r }) }),
        /* @__PURE__ */ b("div", { className: "flex flex-col items-start justify-start gap-0.5 me-6", children: [
          D({ title: f, theme: r }),
          S({ content: p, theme: r }),
          n?.action?.label && typeof n?.action?.onClick == "function" && /* eslint-disable */
          /* @__PURE__ */ e("div", { className: "mt-2.5", children: F({
            actionLabel: n?.action?.label,
            actionType: n?.action?.type ?? "button",
            onAction: C,
            theme: r
          }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "absolute end-4 top-4 [&_svg]:size-5", children: /* @__PURE__ */ e(
          "button",
          {
            className: d(
              "inline-flex bg-transparent m-0 p-0 border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 active:outline-none cursor-pointer rounded",
              m[r] ?? m.light
            ),
            "aria-label": "Dismiss notification",
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), typeof i == "function" && i(n.id);
            },
            children: /* @__PURE__ */ e(j, { "aria-hidden": "true" })
          }
        ) })
      ] }) : n?.jsx?.({
        close: () => i(n.id),
        action: n?.action ? { ...n?.action, onClick: C } : null
      })
    }
  )), g === "inline" && (x = /* @__PURE__ */ b(
    "div",
    {
      className: d(
        "flex items-center justify-start p-3 gap-2 relative border border-solid rounded-md shadow-lg",
        r === "dark" ? h.dark : h.light?.[a],
        z.inline
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: c, theme: r }) }),
        /* @__PURE__ */ b("div", { className: "flex items-start justify-start gap-1 me-10 [&>span:first-child]:shrink-0", children: [
          D({ title: f, theme: r }),
          S({ content: p, theme: r })
        ] }),
        /* @__PURE__ */ e("div", { className: "absolute end-3 top-3 [&_svg]:size-5", children: /* @__PURE__ */ e(
          "button",
          {
            className: d(
              "bg-transparent m-0 p-0 border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 active:outline-none cursor-pointer rounded",
              m[r] ?? m.light
            ),
            "aria-label": "Dismiss notification",
            onClick: () => i(n.id),
            children: /* @__PURE__ */ e(j, { "aria-hidden": "true" })
          }
        ) })
      ]
    }
  )), x;
}, I = $(q);
export {
  B as Toast,
  q as Toaster,
  I as default
};
//# sourceMappingURL=toaster.es.js.map
