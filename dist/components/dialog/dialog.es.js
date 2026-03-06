import { jsxs as J, Fragment as F, jsx as n } from "react/jsx-runtime";
import { useState as Q, useRef as h, useMemo as v, useCallback as W, isValidElement as Y, cloneElement as P, createContext as Z, Fragment as k, useContext as ee } from "react";
import { AnimatePresence as R, motion as B } from "framer-motion";
import { callAll as oe, cn as s } from "../../utilities/functions.es.js";
import { X as te } from "lucide-react";
import { createPortal as ne } from "react-dom";
import { useFloating as ae, useClick as re, useDismiss as se, useRole as le, useInteractions as ie, FloatingOverlay as ce, FloatingFocusManager as de, FloatingPortal as ue } from "@floating-ui/react";
const T = Z({}), x = () => ee(T), w = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, S = { duration: 0.2 }, r = ({
  open: e,
  setOpen: o,
  children: a,
  trigger: t = null,
  className: l,
  exitOnClickOutside: u = !1,
  exitOnEsc: m = !0,
  design: y = "simple",
  scrollLock: C = !0
}) => {
  const f = e !== void 0 && o !== void 0, [c, D] = Q(!1), d = h(null), K = h(null), i = v(
    () => f ? e : c,
    [e, c]
  ), p = v(
    () => f ? o : D,
    [D, o]
  ), { refs: N, context: g } = ae({
    open: i,
    onOpenChange: p
  }), L = re(g), U = se(g, {
    enabled: u || m,
    escapeKey: m,
    outsidePress: (G) => u ? !G?.target?.closest("ul.fui-toast-container") : !1
  }), X = le(g, { role: "dialog" }), { getFloatingProps: _ } = ie([L, U, X]), b = () => {
    i || p(!0);
  }, $ = () => {
    i && p(!1);
  }, q = W(() => Y(t) ? P(t, {
    onClick: oe(b, t?.props?.onClick),
    ref: N.setReference,
    "aria-haspopup": "dialog",
    // Added for accessibility
    "aria-expanded": i
    // Added for accessibility
  }) : typeof t == "function" ? t({ onClick: b }) : null, [t, b, N.setReference, i]);
  return /* @__PURE__ */ J(F, { children: [
    q(),
    /* @__PURE__ */ n(
      T.Provider,
      {
        value: {
          open: i,
          setOpen: p,
          handleClose: $,
          design: y,
          context: g,
          getFloatingProps: _,
          refs: N,
          dialogContainerRef: K,
          dialogRef: d,
          scrollLock: C,
          className: l
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
    context: l,
    getFloatingProps: u,
    dialogRef: m,
    scrollLock: y,
    dialogContainerRef: C,
    className: f,
    refs: c
  } = x();
  return /* @__PURE__ */ n(R, { children: a && /* @__PURE__ */ n(
    ce,
    {
      ref: C,
      lockScroll: y,
      className: s("z-999999", f),
      "aria-modal": "true",
      children: /* @__PURE__ */ n(
        de,
        {
          context: l,
          ...c?.reference && { returnFocus: c.reference },
          children: /* @__PURE__ */ n(
            B.div,
            {
              className: "fixed inset-0 overflow-y-auto",
              initial: "exit",
              animate: "open",
              exit: "exit",
              variants: w,
              role: "dialog",
              "aria-modal": "true",
              transition: S,
              children: /* @__PURE__ */ n("div", { className: "flex items-center justify-center min-h-full", children: /* @__PURE__ */ n(
                "div",
                {
                  ref: (d) => {
                    d && (m.current = d, l && l.refs.setFloating(d));
                  },
                  ...u?.(),
                  className: s(
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
}) => /* @__PURE__ */ n(ue, { ...o, children: e });
I.displayName = "Dialog.Portal";
const A = ({
  className: e,
  ...o
}) => {
  const { open: a, dialogContainerRef: t } = x();
  return t?.current ? /* @__PURE__ */ n(F, { children: ne(
    /* @__PURE__ */ n(R, { children: a && /* @__PURE__ */ n(
      B.div,
      {
        className: s(
          "fixed inset-0 -z-10 bg-background-inverse/90",
          e
        ),
        ...o,
        initial: "exit",
        animate: "open",
        exit: "exit",
        variants: w,
        transition: S
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
}) => /* @__PURE__ */ n("div", { className: s("space-y-2 px-5 pt-5 pb-1", o), ...a, children: e });
O.displayName = "Dialog.Header";
const z = ({
  children: e,
  as: o = "h3",
  className: a,
  ...t
}) => /* @__PURE__ */ n(
  o,
  {
    className: s(
      "text-base font-semibold text-text-primary m-0 p-0",
      a
    ),
    ...t,
    children: e
  }
);
z.displayName = "Dialog.Title";
const E = ({
  children: e,
  as: o = "p",
  className: a,
  ...t
}) => /* @__PURE__ */ n(
  o,
  {
    className: s(
      "text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0",
      a
    ),
    ...t,
    children: e
  }
);
E.displayName = "Dialog.Description";
const me = ({
  className: e,
  ...o
}) => /* @__PURE__ */ n(
  "button",
  {
    className: s(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none",
      e
    ),
    "aria-label": "Close dialog",
    ...o,
    children: /* @__PURE__ */ n(te, { className: "size-4 text-text-primary shrink-0" })
  }
), H = ({
  children: e,
  as: o = k,
  ...a
}) => {
  const { handleClose: t } = x();
  return e ? o === k ? typeof e == "function" ? e({
    close: t
  }) : P(e, {
    onClick: t
  }) : /* @__PURE__ */ n(o, { ...a, onClick: t, "aria-label": "Close dialog", children: e }) : /* @__PURE__ */ n(me, { onClick: t, ...a });
};
H.displayName = "Dialog.CloseButton";
const M = ({
  children: e,
  className: o,
  ...a
}) => /* @__PURE__ */ n("div", { className: s("px-5", o), ...a, children: e });
M.displayName = "Dialog.Body";
const V = ({
  children: e,
  className: o
}) => {
  const { design: a, handleClose: t } = x(), l = () => e ? typeof e == "function" ? e({ close: t }) : e : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: s(
        "p-4 flex justify-end gap-3",
        {
          "bg-background-secondary": a === "footer-divided"
        },
        o
      ),
      children: l()
    }
  );
};
V.displayName = "Dialog.Footer";
r.Panel = j;
r.Portal = I;
r.Title = z;
r.Description = E;
r.CloseButton = H;
r.Header = O;
r.Body = M;
r.Footer = V;
r.Backdrop = A;
export {
  me as DefaultCloseButton,
  A as DialogBackdrop,
  M as DialogBody,
  H as DialogCloseButton,
  E as DialogDescription,
  V as DialogFooter,
  O as DialogHeader,
  j as DialogPanel,
  I as DialogPortal,
  z as DialogTitle,
  r as default
};
//# sourceMappingURL=dialog.es.js.map
