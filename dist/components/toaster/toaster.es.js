import { jsx as r, jsxs as h, Fragment as L } from "react/jsx-runtime";
import { useState as M, useEffect as N, useRef as k } from "react";
import { X as j } from "lucide-react";
import { ToastState as P } from "./controller.es.js";
import { cn as d } from "../../utilities/functions.es.js";
import { getIcon as T, getTitle as S, getContent as w, getAction as F } from "./utils.es.js";
import { positionClassNames as z, containerVariantClassNames as D, variantClassNames as m, closeIconClassNames as y } from "./component-style.es.js";
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
  className: b = "",
  autoDismiss: l = !0,
  // Auto dismiss the toast after a certain time.
  dismissAfter: e = 5e3
  // Time in milliseconds after which the toast will be dismissed.
}) => {
  const [g, o] = M([]);
  N(() => {
    P.subscribe((i) => {
      if (i?.dismiss) {
        o(
          (s) => s.map(
            (c) => c.id === i.id ? { ...c, dismiss: !0 } : c
          )
        );
        return;
      }
      setTimeout(() => {
        R(
          () => o((s) => s.findIndex(
            (t) => t.id === i.id
          ) !== -1 ? s.map((t) => t.id === i.id ? { ...t, ...i } : t) : [...s, i])
        );
      });
    });
  }, []);
  const a = (i) => {
    o((s) => s.filter((c) => c.id !== i));
  };
  return /* @__PURE__ */ r(
    "ul",
    {
      className: d(
        "fui-toast-container fixed flex flex-col list-none z-20 p-10 pointer-events-none [&>li]:pointer-events-auto gap-3",
        z[n] ?? z["top-right"],
        b
      ),
      children: /* @__PURE__ */ r(V, { initial: !1, children: g.map((i) => /* @__PURE__ */ r(
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
              design: i?.design ?? f,
              autoDismiss: i?.autoDismiss ?? l,
              dismissAfter: i?.dismissAfter ?? e,
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
  autoDismiss: b = !0,
  dismissAfter: l = 5e3,
  theme: e = "light",
  // light/dark
  design: g = "stack",
  // inline/stack
  icon: o,
  variant: a = "neutral",
  // neutral/info/success/warning/danger
  removeToast: i
  // Function to remove the toast.
}) => {
  const s = k(0), c = k(0), t = k(), C = (u, A = l) => {
    if (!(!b || l < 0))
      return s.current = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        typeof i == "function" && i(u.id);
      }, A);
  }, E = () => {
    clearTimeout(t.current), c.current = (/* @__PURE__ */ new Date()).getTime();
  }, _ = () => {
    t.current = C(
      n,
      l - (c.current - s.current)
    );
  };
  N(() => {
    const u = l;
    return t.current = C(n, u), () => {
      clearTimeout(t.current);
    };
  }, []), N(() => {
    !n?.dismiss || typeof i != "function" || i(n.id);
  }, [n]);
  const v = () => {
    typeof i == "function" && n?.action?.onClick?.(() => i(n.id));
  };
  let x = null;
  return g === "stack" && (x = /* @__PURE__ */ r(
    "div",
    {
      className: d(
        "flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md shadow-lg",
        e === "dark" ? m.dark : m.light?.[a],
        D.stack
      ),
      onMouseEnter: E,
      onMouseLeave: _,
      children: n.type !== "custom" ? /* @__PURE__ */ h(L, { children: [
        /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: o, theme: e }) }),
        /* @__PURE__ */ h("div", { className: "flex flex-col items-start justify-start gap-0.5 mr-6", children: [
          S({ title: f, theme: e }),
          w({ content: p, theme: e }),
          n?.action?.label && typeof n?.action?.onClick == "function" && /* eslint-disable */
          /* @__PURE__ */ r("div", { className: "mt-2.5", children: F({
            actionLabel: n?.action?.label,
            actionType: n?.action?.type ?? "button",
            onAction: v,
            theme: e
          }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "absolute right-4 top-4 [&_svg]:size-5", children: /* @__PURE__ */ r(
          "button",
          {
            className: d(
              "bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer",
              y[e] ?? y.light
            ),
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), typeof i == "function" && i(n.id);
            },
            children: /* @__PURE__ */ r(j, {})
          }
        ) })
      ] }) : n?.jsx?.({
        close: () => i(n.id),
        action: n?.action ? { ...n?.action, onClick: v } : null
      })
    }
  )), g === "inline" && (x = /* @__PURE__ */ h(
    "div",
    {
      className: d(
        "flex items-center justify-start p-3 gap-2 relative border border-solid rounded-md shadow-lg",
        e === "dark" ? m.dark : m.light?.[a],
        D.inline
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: T({ variant: a, icon: o, theme: e }) }),
        /* @__PURE__ */ h("div", { className: "flex items-start justify-start gap-1 mr-10 [&>span:first-child]:shrink-0", children: [
          S({ title: f, theme: e }),
          w({ content: p, theme: e })
        ] }),
        /* @__PURE__ */ r("div", { className: "absolute right-3 top-3 [&_svg]:size-5", children: /* @__PURE__ */ r(
          "button",
          {
            className: d(
              "bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer",
              y[e] ?? y.light
            ),
            onClick: () => i(n.id),
            children: /* @__PURE__ */ r(j, {})
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
