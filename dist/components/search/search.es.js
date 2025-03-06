import { jsx as r, jsxs as E } from "react/jsx-runtime";
import w, { createContext as q, forwardRef as b, useState as T, useEffect as U, useContext as W, Children as M, cloneElement as V } from "react";
import { omit as $ } from "lodash";
import { cn as a, getOperatingSystem as J } from "../../utilities/functions.es.js";
import { Search as Q } from "lucide-react";
import { disabledClassNames as R, sizeClassNames as c, variantClassNames as X, iconClasses as Y, textSizeClassNames as L } from "./styles.es.js";
import { useFloating as Z, autoUpdate as _, offset as ee, flip as te, size as re, useDismiss as oe, useInteractions as se, FloatingPortal as ne } from "@floating-ui/react";
import ae from "../badge/badge.es.js";
import { Loader as ie } from "../loader/loader.es.js";
const K = q({}), y = () => W(K), d = b(
  ({
    className: t,
    size: e = "sm",
    open: o = !1,
    onOpenChange: i = () => {
    },
    loading: n = !1,
    ...s
  }, f) => {
    const [l, m] = T(""), [p, N] = T(n ?? !1), { refs: u, floatingStyles: v, context: S } = Z({
      open: o,
      onOpenChange: i,
      placement: "bottom-start",
      whileElementsMounted: _,
      middleware: [
        ee(e === "sm" ? 4 : 6),
        te({ padding: 10 }),
        re({
          apply({ rects: h, elements: g, availableHeight: x }) {
            g.floating.style.maxHeight = `${x}px`, g.floating.style.width = `${h.reference.width}px`, g.floating.style.fontFamily = window.getComputedStyle(
              g.reference
            ).fontFamily;
          }
        })
      ]
    }), C = oe(S), { getReferenceProps: B, getFloatingProps: z } = se([
      C
    ]);
    return U(() => {
      const h = J(), g = (x) => {
        const H = h === "Mac OS" ? x.metaKey : x.ctrlKey;
        if (x.key === "/" && H && (x.preventDefault(), u.reference && u.reference.current)) {
          const P = u.reference.current instanceof HTMLElement ? u.reference.current.querySelector("input") : null;
          P && P.focus();
        }
      };
      return window.addEventListener("keydown", g), () => {
        window.removeEventListener("keydown", g);
      };
    }, [u.reference]), /* @__PURE__ */ r(
      K.Provider,
      {
        value: {
          size: e,
          open: o,
          onOpenChange: i,
          refs: u,
          floatingStyles: v,
          context: S,
          getReferenceProps: B,
          getFloatingProps: z,
          searchTerm: l,
          setSearchTerm: m,
          isLoading: p,
          setIsLoading: N
        },
        children: /* @__PURE__ */ r(
          "div",
          {
            className: a(
              "searchbox-wrapper box-border relative w-full",
              t
            ),
            ...s,
            ref: f
          }
        )
      }
    );
  }
);
d.displayName = "SearchBox";
const O = b(
  ({
    className: t,
    type: e = "text",
    placeholder: o = "Search...",
    variant: i = "primary",
    disabled: n = !1,
    onChange: s = () => {
    },
    ...f
  }, l) => {
    const {
      size: m,
      onOpenChange: p,
      refs: N,
      getReferenceProps: u,
      searchTerm: v,
      setSearchTerm: S
    } = y(), C = m === "lg" ? "sm" : "xs", B = (z) => {
      const h = z.target.value;
      S(h), s(h), typeof p == "function" && (h.trim() ? p(!0) : p(!1));
    };
    return /* @__PURE__ */ E(
      "div",
      {
        ref: N.setReference,
        className: a(
          "w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-colors ease-in-out duration-150",
          X[i],
          c.input[m],
          n ? R[i] : "focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-focus-border focus-within:hover:border-focus-border"
        ),
        ...u,
        children: [
          /* @__PURE__ */ r(
            "span",
            {
              className: a(
                L[m],
                n ? "text-icon-disabled" : Y,
                "flex justify-center items-center"
              ),
              children: /* @__PURE__ */ r(Q, {})
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              type: e,
              ref: l,
              className: a(
                L[m],
                "flex-grow font-medium bg-transparent border-none outline-none border-transparent focus:ring-0 py-0",
                n ? R[i] : [
                  "text-field-placeholder focus-within:text-field-input group-hover:text-field-input",
                  "placeholder:text-field-placeholder"
                ],
                t
              ),
              disabled: n,
              value: v,
              onChange: B,
              placeholder: o,
              ...$(f, [
                "size",
                "open",
                "onOpenChange",
                "loading"
              ])
            }
          ),
          /* @__PURE__ */ r(
            ae,
            {
              label: "⌘/",
              size: C,
              type: "rounded",
              variant: "neutral"
            }
          )
        ]
      }
    );
  }
);
O.displayName = "SearchBox.Input";
const D = ({
  className: t,
  dropdownPortalRoot: e = null,
  // Root element where the dropdown will be rendered.
  dropdownPortalId: o = "",
  // Id of the dropdown portal where the dropdown will be rendered.
  children: i,
  ...n
}) => {
  const { size: s, open: f, refs: l, floatingStyles: m, getFloatingProps: p } = y();
  return f ? /* @__PURE__ */ r(ne, { id: o, root: e, children: /* @__PURE__ */ r(
    "div",
    {
      ref: l.setFloating,
      style: {
        ...m
      },
      className: a(
        "bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap",
        c.dialog[s],
        t
      ),
      ...p(),
      ...n,
      children: i
    }
  ) }) : null;
};
D.displayName = "SearchBox.Content";
const G = ({
  filter: t = !0,
  children: e
}) => {
  const { searchTerm: o, isLoading: i } = y();
  if (!t)
    return /* @__PURE__ */ r("div", { children: e });
  const n = M.toArray(e).map((s) => {
    if (w.isValidElement(s) && s.type === I) {
      const f = M.toArray(
        s.props.children
      ).filter(
        (l) => w.isValidElement(l) && typeof l.props.children == "string" && l.props.children.toLowerCase().includes(o.toLowerCase())
      );
      return f.length > 0 ? V(s, {
        children: f
      }) : null;
    }
    return s;
  }).filter(Boolean);
  return i ? /* @__PURE__ */ r(F, {}) : /* @__PURE__ */ r("div", { children: n.some(
    (s) => w.isValidElement(s) && s.type !== k
  ) ? n : /* @__PURE__ */ r(j, {}) });
};
G.displayName = "SearchBox.List";
const j = ({
  children: t = "No results found."
}) => {
  const { size: e } = y();
  return /* @__PURE__ */ r(
    "div",
    {
      className: a(
        "flex justify-center items-center",
        c.item[e],
        "text-text-tertiary p-4"
      ),
      children: t
    }
  );
};
j.displayName = "SearchBox.Empty";
const I = ({ heading: t, children: e }) => {
  const { size: o } = y();
  return /* @__PURE__ */ E(
    "div",
    {
      className: a(
        c.content[o],
        c.item[o]
      ),
      children: [
        t && /* @__PURE__ */ r(
          "div",
          {
            className: a(
              c.title[o],
              "text-text-secondary"
            ),
            children: t
          }
        ),
        e
      ]
    }
  );
};
I.displayName = "SearchBox.Group";
const A = b(
  ({ className: t, icon: e, children: o, ...i }, n) => {
    const { size: s } = y();
    return /* @__PURE__ */ E(
      "div",
      {
        ref: n,
        className: a(
          "flex items-center justify-start gap-1 p-1 hover:bg-background-secondary focus:bg-background-secondary cursor-pointer",
          c.item[s]
        ),
        ...i,
        children: [
          e && /* @__PURE__ */ r(
            "span",
            {
              className: a(
                c.icon[s],
                "flex items-center justify-center"
              ),
              children: e
            }
          ),
          /* @__PURE__ */ r(
            "span",
            {
              className: a(
                "flex-grow p-1 font-normal cursor-pointer",
                c.item[s],
                t
              ),
              children: o
            }
          )
        ]
      }
    );
  }
);
A.displayName = "SearchBox.Item";
const F = ({
  loadingIcon: t = /* @__PURE__ */ r(ie, {})
}) => {
  const { size: e } = y(), o = w.isValidElement(t) ? V(t, { size: e }) : t;
  return /* @__PURE__ */ r(
    "div",
    {
      className: a(
        "flex justify-center p-4",
        L[e],
        c.item[e]
      ),
      children: o
    }
  );
};
F.displayName = "SearchBox.Loading";
const k = b(({ className: t, ...e }, o) => /* @__PURE__ */ r(
  "hr",
  {
    ref: o,
    className: a(
      "border-0 border-t border-border-subtle border-solid m-0",
      t
    ),
    ...e
  }
));
k.displayName = "SearchBox.Separator";
d.Input = O;
d.Loading = F;
d.Separator = k;
d.Content = D;
d.List = G;
d.Empty = j;
d.Group = I;
d.Item = A;
export {
  d as SearchBox,
  D as SearchBoxContent,
  j as SearchBoxEmpty,
  I as SearchBoxGroup,
  O as SearchBoxInput,
  A as SearchBoxItem,
  G as SearchBoxList,
  F as SearchBoxLoading,
  k as SearchBoxSeparator,
  d as default
};
//# sourceMappingURL=search.es.js.map
