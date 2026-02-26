import { jsx as n, jsxs as j } from "react/jsx-runtime";
import I, { forwardRef as R, useState as P, useMemo as oe, useEffect as G, createContext as se, useContext as ie, cloneElement as $, Children as U } from "react";
import { omit as ae } from "lodash";
import { cn as a, getOperatingSystem as q } from "../../utilities/functions.es.js";
import { Search as ce } from "lucide-react";
import { iconClasses as le, textSizeClassNames as D, disabledClassNames as fe, sizeClassNames as p, variantClassNames as ue } from "./styles.es.js";
import { useFloating as de, autoUpdate as me, offset as pe, flip as he, size as ge, useListNavigation as ye, useDismiss as xe, useInteractions as we, useListItem as Se, FloatingFocusManager as be, FloatingList as H, FloatingPortal as Ne } from "@floating-ui/react";
import Ce from "../badge/badge.es.js";
import { Loader as ve } from "../loader/loader.es.js";
const W = se({}), N = () => ie(W), h = R(
  ({
    className: t,
    size: r = "sm",
    open: e = !1,
    setOpen: s,
    onOpenChange: f,
    loading: c = !1,
    clearAfterSelect: l = !0,
    closeAfterSelect: o = !0,
    variant: u = "primary",
    filter: g = !0,
    ...C
  }, L) => {
    const [z, v] = P(""), [E, d] = P(c ?? !1), [y, S] = P(null), x = I.useRef([]), k = oe(() => typeof s == "function" ? s : f, [s, f]), { refs: w, floatingStyles: m, context: i } = de({
      open: e,
      onOpenChange: k,
      placement: "bottom-start",
      whileElementsMounted: me,
      middleware: [
        pe(2),
        he({ padding: 10 }),
        ge({
          apply({ rects: A, elements: b, availableHeight: B }) {
            b.floating.style.maxHeight = `${B}px`, b.floating.style.width = `${A.reference.width}px`, b.floating.style.fontFamily = window.getComputedStyle(
              b.reference
            ).fontFamily;
          }
        })
      ]
    }), F = ye(i, {
      listRef: x,
      activeIndex: y,
      onNavigate: S,
      loop: !0,
      // Prevent opening the dropdown with arrow keys
      openOnArrowKeyDown: !1
    }), _ = xe(i), { getReferenceProps: ee, getFloatingProps: te, getItemProps: re } = we([_, F]);
    return G(() => {
      const A = q(), b = (B) => {
        const ne = A === "Mac OS" ? B.metaKey : B.ctrlKey;
        if (B.key === "/" && ne && (B.preventDefault(), w.reference && w.reference.current)) {
          const V = w.reference.current instanceof HTMLElement ? w.reference.current.querySelector("input") : null;
          V && V.focus();
        }
      };
      return window.addEventListener("keydown", b), () => {
        window.removeEventListener("keydown", b);
      };
    }, [w.reference]), G(() => {
      e || S(null);
    }, [e]), /* @__PURE__ */ n(
      W.Provider,
      {
        value: {
          size: r,
          open: e,
          onOpenChange: k,
          refs: w,
          floatingStyles: m,
          context: i,
          getReferenceProps: ee,
          getFloatingProps: te,
          getItemProps: re,
          activeIndex: y,
          setActiveIndex: S,
          listRef: x,
          searchTerm: z,
          setSearchTerm: v,
          isLoading: E,
          setIsLoading: d,
          clearAfterSelect: l,
          closeAfterSelect: o,
          variant: u,
          filter: g
        },
        children: /* @__PURE__ */ n(
          "div",
          {
            className: a(
              "searchbox-wrapper box-border relative w-full",
              t
            ),
            ...C,
            ref: L
          }
        )
      }
    );
  }
);
h.displayName = "SearchBox";
const J = R(
  ({
    className: t,
    type: r = "text",
    placeholder: e = "Search...",
    disabled: s = !1,
    onChange: f = () => {
    },
    ...c
  }, l) => {
    const {
      size: o,
      refs: u,
      getReferenceProps: g,
      searchTerm: C,
      setSearchTerm: L,
      open: z,
      setActiveIndex: v,
      listRef: E,
      onOpenChange: d,
      variant: y
    } = N(), S = o === "lg" ? "sm" : "xs", x = (m) => {
      const i = m.target.value;
      L(i), f(i), typeof d == "function" && (i.trim() ? d(!0) : d(!1));
    }, k = () => {
      s || typeof d != "function" || C?.trim() && d(!0);
    }, w = (m) => {
      if (!s) {
        if (m.key === "ArrowDown" || m.key === "ArrowUp") {
          z && (m.preventDefault(), m.key === "ArrowDown" ? v((i) => i === null ? 0 : i) : m.key === "ArrowUp" && v((i) => {
            const F = E?.current?.length || 0;
            return i === null && F > 0 ? F - 1 : i;
          }));
          return;
        }
        m.key === "Escape" && d(!1);
      }
    };
    return /* @__PURE__ */ j(
      "div",
      {
        ref: u.setReference,
        className: a(
          "w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-all ease-in-out duration-200",
          ue[y],
          p.input[o],
          s ? fe[y] : "focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-focus-border focus-within:hover:border-focus-border",
          t
        ),
        ...g(),
        children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: a(
                D[o],
                s ? "text-icon-disabled" : le,
                "flex justify-center items-center"
              ),
              children: /* @__PURE__ */ n(ce, {})
            }
          ),
          /* @__PURE__ */ n(
            "input",
            {
              type: r,
              ref: l,
              className: a(
                D[o],
                "flex-grow font-medium bg-transparent border-none outline-none border-transparent focus:ring-0 p-0 min-h-fit",
                s && "text-field-placeholder focus-within:text-field-input group-hover:text-field-input placeholder:text-field-placeholder"
              ),
              disabled: s,
              value: C,
              onChange: x,
              onFocus: k,
              onKeyDown: w,
              placeholder: e,
              ...ae(c, [
                "size",
                "open",
                "onOpenChange",
                "loading"
              ])
            }
          ),
          /* @__PURE__ */ n(
            Ce,
            {
              label: q() === "Mac OS" ? "⌘/" : "Ctrl /",
              size: S,
              type: "rounded",
              variant: "neutral",
              className: "bg-background-primary"
            }
          )
        ]
      }
    );
  }
);
J.displayName = "SearchBox.Input";
const Q = ({
  className: t,
  children: r,
  ...e
}) => {
  const { size: s, open: f, refs: c, floatingStyles: l, getFloatingProps: o, context: u } = N();
  return f ? /* @__PURE__ */ n(
    be,
    {
      context: u,
      initialFocus: -1,
      returnFocus: !0,
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: c.setFloating,
          style: {
            ...l
          },
          className: a(
            "bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap focus:outline-none",
            p.dialog[s],
            t
          ),
          ...o(),
          ...e,
          children: r
        }
      )
    }
  ) : null;
};
Q.displayName = "SearchBox.Content";
const X = ({
  children: t,
  id: r,
  root: e
}) => /* @__PURE__ */ n(Ne, { id: r, root: e, children: t });
X.displayName = "SearchBox.Portal";
const Y = ({ children: t, className: r }) => {
  const {
    searchTerm: e,
    isLoading: s,
    listRef: f,
    filter: c = !0
  } = N();
  if (!c)
    return /* @__PURE__ */ n(H, { elementsRef: f, children: /* @__PURE__ */ n("div", { className: r, children: t }) });
  const l = U.toArray(t).map((o) => {
    if (I.isValidElement(o) && o.type === K) {
      const u = U.toArray(
        o.props.children
      ).filter(
        (g) => I.isValidElement(g) && typeof g.props.children == "string" && g.props.children.toLowerCase().includes(e.toLowerCase())
      );
      return u.length > 0 ? $(o, {
        children: u
      }) : null;
    }
    return o;
  }).filter(Boolean);
  return s ? /* @__PURE__ */ n(O, {}) : /* @__PURE__ */ n(H, { elementsRef: f, children: /* @__PURE__ */ n("div", { className: r, children: l.some(
    (o) => I.isValidElement(o) && o.type !== T
  ) ? l : /* @__PURE__ */ n(M, {}) }) });
};
Y.displayName = "SearchBox.List";
const M = ({
  children: t = "No results found.",
  className: r
}) => {
  const { size: e } = N();
  return /* @__PURE__ */ n(
    "div",
    {
      className: a(
        "flex justify-center items-center",
        p.item[e],
        "text-text-tertiary p-4",
        r
      ),
      children: t
    }
  );
};
M.displayName = "SearchBox.Empty";
const K = ({ heading: t, children: r }) => {
  const { size: e } = N();
  return /* @__PURE__ */ j(
    "div",
    {
      className: a(
        p.content[e],
        p.item[e]
      ),
      children: [
        t && /* @__PURE__ */ n(
          "div",
          {
            className: a(
              p.title[e],
              "text-text-tertiary"
            ),
            children: t
          }
        ),
        r
      ]
    }
  );
};
K.displayName = "SearchBox.Group";
const Z = R(
  ({ className: t, icon: r, children: e, onClick: s, ...f }, c) => {
    const {
      size: l,
      setSearchTerm: o,
      clearAfterSelect: u,
      getItemProps: g,
      activeIndex: C,
      onOpenChange: L,
      closeAfterSelect: z
    } = N(), { ref: v, index: E } = Se(), d = (x) => {
      typeof c == "function" ? c(x) : c && (c.current = x), v(x);
    }, y = C === E, S = () => {
      typeof s == "function" && s(), u && o(""), z && L(!1);
    };
    return /* @__PURE__ */ j(
      "button",
      {
        type: "button",
        ref: d,
        className: a(
          "flex w-full items-center justify-start gap-1 p-1 cursor-pointer border-none bg-transparent text-left focus:outline-none",
          y && "bg-background-secondary",
          !y && "hover:bg-background-secondary focus:bg-background-secondary",
          p.item[l],
          t
        ),
        ...g?.({
          role: "option",
          "aria-selected": y,
          onClick: S,
          ...f
        }),
        children: [
          r && /* @__PURE__ */ n(
            "span",
            {
              className: a(
                p.icon[l],
                "flex items-center justify-center"
              ),
              children: r
            }
          ),
          /* @__PURE__ */ n(
            "span",
            {
              className: a(
                "flex-grow py-0.5 px-1 font-normal",
                p.item[l]
              ),
              children: e
            }
          )
        ]
      }
    );
  }
);
Z.displayName = "SearchBox.Item";
const O = ({
  loadingIcon: t = /* @__PURE__ */ n(ve, {})
}) => {
  const { size: r } = N(), e = I.isValidElement(t) ? $(t, { size: r }) : t;
  return /* @__PURE__ */ n(
    "div",
    {
      className: a(
        "flex justify-center p-4",
        D[r],
        p.item[r]
      ),
      children: e
    }
  );
};
O.displayName = "SearchBox.Loading";
const T = R(({ className: t, ...r }, e) => /* @__PURE__ */ n(
  "hr",
  {
    ref: e,
    className: a(
      "border-0 border-t border-border-subtle border-solid m-0",
      t
    ),
    ...r
  }
));
T.displayName = "SearchBox.Separator";
h.Input = J;
h.Loading = O;
h.Separator = T;
h.Content = Q;
h.List = Y;
h.Empty = M;
h.Group = K;
h.Item = Z;
h.Portal = X;
export {
  h as SearchBox,
  Q as SearchBoxContent,
  M as SearchBoxEmpty,
  K as SearchBoxGroup,
  J as SearchBoxInput,
  Z as SearchBoxItem,
  Y as SearchBoxList,
  O as SearchBoxLoading,
  X as SearchBoxPortal,
  T as SearchBoxSeparator,
  h as default
};
//# sourceMappingURL=search.es.js.map
