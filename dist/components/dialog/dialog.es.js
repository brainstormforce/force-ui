import { jsxs as G, Fragment as F, jsx as n } from "react/jsx-runtime";
import { createContext as J, useState as Q, useRef as h, useMemo as v, useCallback as W, isValidElement as Y, cloneElement as P, Fragment as k, useContext as Z } from "react";
import { AnimatePresence as R, motion as B } from "framer-motion";
import { callAll as ee, cn as l } from "../../utilities/functions.es.js";
import { X as oe } from "lucide-react";
import { createPortal as te } from "react-dom";
import { useFloating as ne, useClick as ae, useDismiss as re, useRole as le, useInteractions as ie, FloatingOverlay as se, FloatingFocusManager as ce, FloatingPortal as de } from "@floating-ui/react";
const w = J({}), x = () => Z(w), S = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, T = { duration: 0.2 }, r = ({
  open: e,
  setOpen: o,
  children: a,
  trigger: t = null,
  className: i,
  exitOnClickOutside: u = !1,
  exitOnEsc: m = !0,
  design: y = "simple",
  scrollLock: C = !0
}) => {
  const f = e !== void 0 && o !== void 0, [c, D] = Q(!1), d = h(null), K = h(null), s = v(
    () => f ? e : c,
    [e, c]
  ), p = v(
    () => f ? o : D,
    [D, o]
  ), { refs: N, context: g } = ne({
    open: s,
    onOpenChange: p
  }), L = ae(g), U = re(g, {
    enabled: u || m,
    escapeKey: m,
    outsidePress: u
  }), X = le(g, { role: "dialog" }), { getFloatingProps: _ } = ie([L, U, X]), b = () => {
    s || p(!0);
  }, $ = () => {
    s && p(!1);
  }, q = W(() => Y(t) ? P(t, {
    onClick: ee(b, t?.props?.onClick),
    ref: N.setReference,
    "aria-haspopup": "dialog",
    // Added for accessibility
    "aria-expanded": s
    // Added for accessibility
  }) : typeof t == "function" ? t({ onClick: b }) : null, [t, b, N.setReference, s]);
  return /* @__PURE__ */ G(F, { children: [
    q(),
    /* @__PURE__ */ n(
      w.Provider,
      {
        value: {
          open: s,
          setOpen: p,
          handleClose: $,
          design: y,
          context: g,
          getFloatingProps: _,
          refs: N,
          dialogContainerRef: K,
          dialogRef: d,
          scrollLock: C,
          className: i
        },
        children: a
      }
    )
  ] });
};
r.displayName = "Dialog";
const j = ({
  children: e,
  className: o
}) => {
  const {
    open: a,
    handleClose: t,
    context: i,
    getFloatingProps: u,
    dialogRef: m,
    scrollLock: y,
    dialogContainerRef: C,
    className: f,
    refs: c
  } = x();
  return /* @__PURE__ */ n(R, { children: a && /* @__PURE__ */ n(
    se,
    {
      ref: C,
      lockScroll: y,
      className: l("z-999999", f),
      "aria-modal": "true",
      children: /* @__PURE__ */ n(
        ce,
        {
          context: i,
          ...c?.reference && { returnFocus: c.reference },
          children: /* @__PURE__ */ n(
            B.div,
            {
              className: "fixed inset-0 overflow-y-auto",
              initial: "exit",
              animate: "open",
              exit: "exit",
              variants: S,
              role: "dialog",
              "aria-modal": "true",
              transition: T,
              children: /* @__PURE__ */ n("div", { className: "flex items-center justify-center min-h-full", children: /* @__PURE__ */ n(
                "div",
                {
                  ref: (d) => {
                    d && (m.current = d, i && i.refs.setFloating(d));
                  },
                  ...u?.(),
                  className: l(
                    "flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden",
                    o
                  ),
                  children: typeof e == "function" ? e({ close: t }) : e
                }
              ) })
            }
          )
        }
      )
    }
  ) });
};
j.displayName = "Dialog.Panel";
const I = ({
  children: e,
  ...o
}) => /* @__PURE__ */ n(de, { ...o, children: e });
I.displayName = "Dialog.Portal";
const A = ({
  className: e,
  ...o
}) => {
  const { open: a, dialogContainerRef: t } = x();
  return t?.current ? /* @__PURE__ */ n(F, { children: te(
    /* @__PURE__ */ n(R, { children: a && /* @__PURE__ */ n(
      B.div,
      {
        className: l(
          "fixed inset-0 -z-10 bg-background-inverse/90",
          e
        ),
        ...o,
        initial: "exit",
        animate: "open",
        exit: "exit",
        variants: S,
        transition: T
      }
    ) }),
    t.current
  ) }) : null;
};
A.displayName = "Dialog.Backdrop";
const O = ({
  children: e,
  className: o,
  ...a
}) => /* @__PURE__ */ n("div", { className: l("space-y-2 px-5 pt-5 pb-1", o), ...a, children: e });
O.displayName = "Dialog.Header";
const z = ({
  children: e,
  as: o = "h3",
  className: a,
  ...t
}) => /* @__PURE__ */ n(
  o,
  {
    className: l(
      "text-base font-semibold text-text-primary m-0 p-0",
      a
    ),
    ...t,
    children: e
  }
);
z.displayName = "Dialog.Title";
const H = ({
  children: e,
  as: o = "p",
  className: a,
  ...t
}) => /* @__PURE__ */ n(
  o,
  {
    className: l(
      "text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0",
      a
    ),
    ...t,
    children: e
  }
);
H.displayName = "Dialog.Description";
const ue = ({
  className: e,
  ...o
}) => /* @__PURE__ */ n(
  "button",
  {
    className: l(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none",
      e
    ),
    "aria-label": "Close dialog",
    ...o,
    children: /* @__PURE__ */ n(oe, { className: "size-4 text-text-primary shrink-0" })
  }
), M = ({
  children: e,
  as: o = k,
  ...a
}) => {
  const { handleClose: t } = x();
  return e ? o === k ? typeof e == "function" ? e({
    close: t
  }) : P(e, {
    onClick: t
  }) : /* @__PURE__ */ n(o, { ...a, onClick: t, "aria-label": "Close dialog", children: e }) : /* @__PURE__ */ n(ue, { onClick: t, ...a });
};
M.displayName = "Dialog.CloseButton";
const V = ({
  children: e,
  className: o,
  ...a
}) => /* @__PURE__ */ n("div", { className: l("px-5", o), ...a, children: e });
V.displayName = "Dialog.Body";
const E = ({
  children: e,
  className: o
}) => {
  const { design: a, handleClose: t } = x(), i = () => e ? typeof e == "function" ? e({ close: t }) : e : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: l(
        "p-4 flex justify-end gap-3",
        {
          "bg-background-secondary": a === "footer-divided"
        },
        o
      ),
      children: i()
    }
  );
};
E.displayName = "Dialog.Footer";
r.Panel = j;
r.Portal = I;
r.Title = z;
r.Description = H;
r.CloseButton = M;
r.Header = O;
r.Body = V;
r.Footer = E;
r.Backdrop = A;
export {
  ue as DefaultCloseButton,
  A as DialogBackdrop,
  V as DialogBody,
  M as DialogCloseButton,
  H as DialogDescription,
  E as DialogFooter,
  O as DialogHeader,
  j as DialogPanel,
  I as DialogPortal,
  z as DialogTitle,
  r as default
};
//# sourceMappingURL=dialog.es.js.map
