import { jsxs as X, Fragment as k, jsx as i } from "react/jsx-runtime";
import { createContext as _, useState as $, useRef as N, useMemo as h, useCallback as G, isValidElement as J, cloneElement as B, useEffect as b, Fragment as w, useContext as Q } from "react";
import { AnimatePresence as E, motion as O } from "framer-motion";
import { callAll as W, cn as a } from "../../utilities/functions.es.js";
import { X as Y } from "lucide-react";
import { createPortal as Z } from "react-dom";
const R = _({}), u = () => Q(R), F = {
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}, P = { duration: 0.2 }, r = ({
  open: e,
  setOpen: o,
  children: n,
  trigger: t = null,
  className: c,
  exitOnClickOutside: V = !1,
  exitOnEsc: q = !0,
  design: K = "simple",
  scrollLock: M = !0
}) => {
  const x = e !== void 0 && o !== void 0, [g, m] = $(!1), f = N(null), v = N(null), l = h(
    () => x ? e : g,
    [e, g]
  ), p = h(
    () => x ? o : m,
    [m, m]
  ), y = () => {
    l || p(!0);
  }, d = () => {
    l && p(!1);
  }, U = G(() => J(t) ? B(t, {
    onClick: W(y, t?.props?.onClick)
  }) : typeof t == "function" ? t({ onClick: y }) : null, [t, y, d]), D = (s) => {
    switch (s.key) {
      case "Escape":
        q && d();
        break;
    }
  }, C = (s) => {
    V && f.current && !f.current.contains(s.target) && d();
  };
  return b(() => (window.addEventListener("keydown", D), document.addEventListener("mousedown", C), () => {
    window.removeEventListener("keydown", D), document.removeEventListener("mousedown", C);
  }), [l]), b(() => {
    if (!M)
      return;
    const s = document.querySelector("html");
    return l && s && (s.style.overflow = "hidden"), () => {
      s && (s.style.overflow = "");
    };
  }, [l]), /* @__PURE__ */ X(k, { children: [
    U(),
    /* @__PURE__ */ i(
      R.Provider,
      {
        value: {
          open: l,
          setOpen: p,
          handleClose: d,
          design: K,
          dialogContainerRef: v,
          dialogRef: f
        },
        children: /* @__PURE__ */ i(
          "div",
          {
            ref: v,
            className: a(
              "fixed z-999999 w-0 h-0 overflow-visible",
              c
            ),
            children: n
          }
        )
      }
    )
  ] });
};
r.displayName = "Dialog";
const S = ({
  children: e,
  className: o
}) => {
  const { open: n, handleClose: t, dialogRef: c } = u();
  return /* @__PURE__ */ i(E, { children: n && /* @__PURE__ */ i(
    O.div,
    {
      className: "fixed inset-0 overflow-y-auto",
      initial: "exit",
      animate: "open",
      exit: "exit",
      variants: F,
      role: "dialog",
      transition: P,
      children: /* @__PURE__ */ i("div", { className: "flex items-center justify-center min-h-full", children: /* @__PURE__ */ i(
        "div",
        {
          ref: c,
          className: a(
            "flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden",
            o
          ),
          children: typeof e == "function" ? e({ close: t }) : e
        }
      ) })
    }
  ) });
};
S.displayName = "Dialog.Panel";
const T = ({
  className: e,
  ...o
}) => {
  const { open: n, dialogContainerRef: t } = u();
  return t?.current ? /* @__PURE__ */ i(k, { children: Z(
    /* @__PURE__ */ i(E, { children: n && /* @__PURE__ */ i(
      O.div,
      {
        className: a(
          "fixed inset-0 -z-10 bg-background-inverse/90",
          e
        ),
        ...o,
        initial: "exit",
        animate: "open",
        exit: "exit",
        variants: F,
        transition: P
      }
    ) }),
    t.current
  ) }) : null;
};
T.displayName = "Dialog.Backdrop";
const j = ({
  children: e,
  className: o,
  ...n
}) => /* @__PURE__ */ i("div", { className: a("space-y-2 px-5 pt-5 pb-1", o), ...n, children: e });
j.displayName = "Dialog.Header";
const A = ({
  children: e,
  as: o = "h3",
  className: n,
  ...t
}) => /* @__PURE__ */ i(
  o,
  {
    className: a(
      "text-base font-semibold text-text-primary m-0 p-0",
      n
    ),
    ...t,
    children: e
  }
);
A.displayName = "Dialog.Title";
const I = ({
  children: e,
  as: o = "p",
  className: n,
  ...t
}) => /* @__PURE__ */ i(
  o,
  {
    className: a(
      "text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0",
      n
    ),
    ...t,
    children: e
  }
);
I.displayName = "Dialog.Description";
const ee = ({
  className: e,
  ...o
}) => /* @__PURE__ */ i(
  "button",
  {
    className: a(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none",
      e
    ),
    "aria-label": "Close dialog",
    ...o,
    children: /* @__PURE__ */ i(Y, { className: "size-4 text-text-primary shrink-0" })
  }
), L = ({
  children: e,
  as: o = w,
  ...n
}) => {
  const { handleClose: t } = u();
  return e ? o === w ? typeof e == "function" ? e({
    close: t
  }) : B(e, {
    onClick: t
  }) : /* @__PURE__ */ i(o, { ...n, onClick: t, children: e }) : /* @__PURE__ */ i(ee, { onClick: t, ...n });
};
L.displayName = "Dialog.CloseButton";
const z = ({
  children: e,
  className: o,
  ...n
}) => /* @__PURE__ */ i("div", { className: a("px-5", o), ...n, children: e });
z.displayName = "Dialog.Body";
const H = ({
  children: e,
  className: o
}) => {
  const { design: n, handleClose: t } = u(), c = () => e ? typeof e == "function" ? e({ close: t }) : e : null;
  return /* @__PURE__ */ i(
    "div",
    {
      className: a(
        "p-4 flex justify-end gap-3",
        {
          "bg-background-secondary": n === "footer-divided"
        },
        o
      ),
      children: c()
    }
  );
};
H.displayName = "Dialog.Footer";
r.Panel = S;
r.Title = A;
r.Description = I;
r.CloseButton = L;
r.Header = j;
r.Body = z;
r.Footer = H;
r.Backdrop = T;
export {
  ee as DefaultCloseButton,
  T as DialogBackdrop,
  z as DialogBody,
  L as DialogCloseButton,
  I as DialogDescription,
  H as DialogFooter,
  j as DialogHeader,
  S as DialogPanel,
  A as DialogTitle,
  r as default
};
//# sourceMappingURL=dialog.es.js.map
