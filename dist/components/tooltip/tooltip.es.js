import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { useMemo as U, useState as V, useRef as q, Fragment as g, isValidElement as B, cloneElement as G } from "react";
import { useFloating as J, autoUpdate as K, offset as L, flip as Q, shift as W, arrow as X, useClick as Y, useHover as Z, safePolygon as _, useFocus as $, useDismiss as ee, useRole as oe, useInteractions as te, useTransitionStyles as se, FloatingPortal as le, FloatingArrow as ne } from "@floating-ui/react";
import { cn as r } from "../../utilities/functions.es.js";
import { mergeRefs as ae } from "../toaster/utils.es.js";
const ie = ({
  variant: c = "dark",
  // 'light' | 'dark';
  placement: h = "bottom",
  //  | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
  title: d = "",
  content: f,
  arrow: x = !1,
  open: l,
  setOpen: n,
  children: s,
  className: w,
  tooltipPortalRoot: b,
  // Root element where the dropdown will be rendered.
  tooltipPortalId: k,
  // Id of the dropdown portal where the dropdown will be rendered.
  boundary: p = "clippingAncestors",
  strategy: y = "fixed",
  // 'fixed' | 'absolute';
  offset: C = 8,
  // Offset option or number value. Default is 8.
  triggers: a = ["hover", "focus"],
  // 'click' | 'hover' | 'focus';
  interactive: v = !1
}) => {
  const o = U(
    () => typeof l == "boolean" && typeof n == "function",
    [l, n]
  ), [F, N] = V(!1), m = q(null), { refs: u, floatingStyles: R, context: e } = J({
    open: o ? l : F,
    onOpenChange: o ? n : N,
    placement: h,
    strategy: y,
    middleware: [
      L(C),
      Q({ boundary: p }),
      // Ensure this is correctly cast
      W({ boundary: p }),
      // Ensure this is correctly cast
      X({ element: m })
    ],
    whileElementsMounted: K
  }), P = Y(e, {
    enabled: !o && a.includes("click")
  }), E = Z(e, {
    move: !1,
    enabled: !o && a.includes("hover"),
    ...v && { handleClose: _() }
  }), M = $(e, {
    enabled: !o && a.includes("focus")
  }), S = ee(e), T = oe(e, { role: "tooltip" }), { getReferenceProps: j, getFloatingProps: A } = te([
    P,
    E,
    M,
    S,
    T
  ]), { isMounted: I, styles: z } = se(e, {
    duration: 150,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0 }
  }), D = "absolute z-20 py-2 px-3 rounded-md text-xs leading-4 shadow-soft-shadow-lg", H = {
    light: "bg-tooltip-background-light text-text-primary",
    dark: "bg-tooltip-background-dark text-text-on-color"
  }[c], O = c === "dark" ? "text-tooltip-background-dark" : "text-tooltip-background-light";
  return /* @__PURE__ */ i(g, { children: [
    B(s) && /* @__PURE__ */ t(g, { children: G(s, {
      ref: ae(
        s.ref,
        u.setReference
      ),
      className: r(s.props.className),
      ...j()
    }) }, "tooltip-reference"),
    /* @__PURE__ */ t(le, { id: k, root: b, children: I && /* @__PURE__ */ i(
      "div",
      {
        className: r(
          D,
          H,
          "max-w-80 w-fit",
          w
        ),
        ref: u.setFloating,
        style: {
          ...R,
          ...z
        },
        ...A(),
        children: [
          /* @__PURE__ */ i("div", { children: [
            !!d && /* @__PURE__ */ t(
              "span",
              {
                className: "font-semibold",
                children: d
              },
              "tooltip-title"
            ),
            !!f && /* @__PURE__ */ t(
              "div",
              {
                className: "font-normal",
                children: f
              },
              "tooltip-content"
            )
          ] }),
          x && /* @__PURE__ */ t(
            ne,
            {
              ref: m,
              context: e,
              className: r("fill-current", O)
            }
          )
        ]
      }
    ) })
  ] });
};
ie.displayName = "Tooltip";
export {
  ie as Tooltip,
  ie as default
};
//# sourceMappingURL=tooltip.es.js.map
