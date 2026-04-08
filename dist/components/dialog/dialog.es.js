import { jsxs as te, Fragment as B, jsx as n } from "react/jsx-runtime";
import { useState as oe, useRef as D, useId as ne, useMemo as P, useCallback as ae, isValidElement as ie, cloneElement as w, createContext as re, useEffect as S, Fragment as T, useContext as se } from "react";
import { AnimatePresence as j, motion as A } from "framer-motion";
import { callAll as le, cn as l } from "../../utilities/functions.es.js";
import { X as ce } from "lucide-react";
import { createPortal as de } from "react-dom";
import { useFloating as ue, useClick as fe, useDismiss as pe, useRole as me, useInteractions as ge, FloatingOverlay as ye, FloatingFocusManager as xe, FloatingPortal as be } from "@floating-ui/react";
const E = re({}), d = () => se(E), O = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, z = { duration: 0.2 }, r = ({
  open: e,
  setOpen: t,
  children: a,
  trigger: o = null,
  className: s,
  exitOnClickOutside: i = !1,
  exitOnEsc: m = !0,
  design: C = "simple",
  scrollLock: N = !0
}) => {
  const g = e !== void 0 && t !== void 0, [y, u] = oe(!1), h = D(null), v = D(null), f = ne(), k = `${f}-title`, I = `${f}-description`, p = D(!1), q = D(!1), c = P(
    () => g ? e : y,
    [e, y]
  ), x = P(
    () => g ? t : u,
    [u, t]
  ), { refs: R, context: b } = ue({
    open: c,
    onOpenChange: x
  }), G = fe(b), J = pe(b, {
    enabled: i || m,
    escapeKey: m,
    outsidePress: (ee) => i ? !ee?.target?.closest("ul.fui-toast-container") : !1
  }), Q = me(b, { role: "dialog" }), { getFloatingProps: W } = ge([G, J, Q]), F = () => {
    c || x(!0);
  }, Y = () => {
    c && x(!1);
  }, Z = ae(() => ie(o) ? w(o, {
    onClick: le(F, o?.props?.onClick),
    ref: R.setReference,
    "aria-haspopup": "dialog",
    // Added for accessibility
    "aria-expanded": c
    // Added for accessibility
  }) : typeof o == "function" ? o({
    onClick: F,
    "aria-haspopup": "dialog",
    "aria-expanded": c
  }) : null, [o, F, R.setReference, c]);
  return /* @__PURE__ */ te(B, { children: [
    Z(),
    /* @__PURE__ */ n(
      E.Provider,
      {
        value: {
          open: c,
          setOpen: x,
          handleClose: Y,
          design: C,
          context: b,
          getFloatingProps: W,
          refs: R,
          dialogContainerRef: v,
          dialogRef: h,
          scrollLock: N,
          className: s,
          titleId: k,
          descriptionId: I,
          hasTitleRef: p,
          hasDescriptionRef: q
        },
        children: a
      }
    )
  ] });
};
r.displayName = "Dialog";
const H = ({
  children: e,
  className: t,
  ariaLabel: a
}) => {
  const {
    open: o,
    handleClose: s,
    context: i,
    getFloatingProps: m,
    dialogRef: C,
    scrollLock: N,
    dialogContainerRef: g,
    className: y,
    refs: u,
    titleId: h,
    descriptionId: v,
    hasTitleRef: f,
    hasDescriptionRef: k
  } = d();
  return /* @__PURE__ */ n(j, { children: o && /* @__PURE__ */ n(
    ye,
    {
      ref: g,
      lockScroll: N,
      className: l("z-999999", y),
      "aria-modal": "true",
      children: /* @__PURE__ */ n(
        xe,
        {
          context: i,
          ...u?.reference && { returnFocus: u.reference },
          children: /* @__PURE__ */ n(
            A.div,
            {
              className: "fixed inset-0 overflow-y-auto",
              initial: "exit",
              animate: "open",
              exit: "exit",
              variants: O,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": f?.current ? void 0 : a,
              "aria-labelledby": f?.current ? h : void 0,
              "aria-describedby": k?.current ? v : void 0,
              transition: z,
              children: /* @__PURE__ */ n("div", { className: "flex items-center justify-center min-h-full", children: /* @__PURE__ */ n(
                "div",
                {
                  ref: (p) => {
                    p && (C.current = p, i && i.refs.setFloating(p));
                  },
                  ...m?.(),
                  className: l(
                    "flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden",
                    t
                  ),
                  children: typeof e == "function" ? e({ close: s }) : e
                }
              ) })
            }
          )
        }
      )
    }
  ) });
};
H.displayName = "Dialog.Panel";
const $ = ({
  children: e,
  ...t
}) => /* @__PURE__ */ n(be, { ...t, children: e });
$.displayName = "Dialog.Portal";
const M = ({
  className: e,
  ...t
}) => {
  const { open: a, dialogContainerRef: o } = d();
  return o?.current ? /* @__PURE__ */ n(B, { children: de(
    /* @__PURE__ */ n(j, { children: a && /* @__PURE__ */ n(
      A.div,
      {
        className: l(
          "fixed inset-0 -z-10 bg-background-inverse/90",
          e
        ),
        ...t,
        initial: "exit",
        animate: "open",
        exit: "exit",
        variants: O,
        transition: z
      }
    ) }),
    o.current
  ) }) : null;
};
M.displayName = "Dialog.Backdrop";
const V = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ n("div", { className: l("space-y-2 px-5 pt-5 pb-1", t), ...a, children: e });
V.displayName = "Dialog.Header";
const K = ({
  children: e,
  as: t = "h3",
  className: a,
  ...o
}) => {
  const { titleId: s, hasTitleRef: i } = d();
  return S(() => (i && (i.current = !0), () => {
    i && (i.current = !1);
  }), [i]), /* @__PURE__ */ n(
    t,
    {
      id: s,
      className: l(
        "text-base font-semibold text-text-primary m-0 p-0",
        a
      ),
      ...o,
      children: e
    }
  );
};
K.displayName = "Dialog.Title";
const L = ({
  children: e,
  as: t = "p",
  className: a,
  ...o
}) => {
  const { descriptionId: s, hasDescriptionRef: i } = d();
  return S(() => (i && (i.current = !0), () => {
    i && (i.current = !1);
  }), [i]), /* @__PURE__ */ n(
    t,
    {
      id: s,
      className: l(
        "text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0",
        a
      ),
      ...o,
      children: e
    }
  );
};
L.displayName = "Dialog.Description";
const De = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "button",
  {
    className: l(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-border-strong outline-none shadow-none",
      e
    ),
    "aria-label": "Close dialog",
    ...t,
    children: /* @__PURE__ */ n(ce, { className: "size-4 text-text-primary shrink-0" })
  }
), U = ({
  children: e,
  as: t = T,
  ...a
}) => {
  const { handleClose: o } = d();
  return e ? t === T ? typeof e == "function" ? e({
    close: o
  }) : w(e, {
    onClick: o
  }) : /* @__PURE__ */ n(t, { ...a, onClick: o, "aria-label": "Close dialog", children: e }) : /* @__PURE__ */ n(De, { onClick: o, ...a });
};
U.displayName = "Dialog.CloseButton";
const X = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ n("div", { className: l("px-5", t), ...a, children: e });
X.displayName = "Dialog.Body";
const _ = ({
  children: e,
  className: t
}) => {
  const { design: a, handleClose: o } = d(), s = () => e ? typeof e == "function" ? e({ close: o }) : e : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: l(
        "p-4 flex justify-end gap-3",
        {
          "bg-background-secondary": a === "footer-divided"
        },
        t
      ),
      children: s()
    }
  );
};
_.displayName = "Dialog.Footer";
r.Panel = H;
r.Portal = $;
r.Title = K;
r.Description = L;
r.CloseButton = U;
r.Header = V;
r.Body = X;
r.Footer = _;
r.Backdrop = M;
export {
  De as DefaultCloseButton,
  M as DialogBackdrop,
  X as DialogBody,
  U as DialogCloseButton,
  L as DialogDescription,
  _ as DialogFooter,
  V as DialogHeader,
  H as DialogPanel,
  $ as DialogPortal,
  K as DialogTitle,
  r as default
};
//# sourceMappingURL=dialog.es.js.map
