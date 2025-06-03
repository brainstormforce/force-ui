import { jsx as r, jsxs as K, Fragment as re } from "react/jsx-runtime";
import { createContext as we, forwardRef as Ne, useCallback as X, isValidElement as z, useContext as Se, Fragment as Ie, Children as I, useMemo as J, useLayoutEffect as se, useEffect as le, useState as U, useRef as te, cloneElement as ie } from "react";
import { cn as m } from "../../utilities/functions.es.js";
import { ChevronsUpDown as ve, ChevronDown as ke, Search as Oe, CheckIcon as De } from "lucide-react";
import { FloatingFocusManager as Pe, FloatingPortal as Re, useFloating as ze, autoUpdate as Fe, offset as Le, flip as je, size as Me, useClick as Ve, useDismiss as Ae, useRole as Be, useListNavigation as Ee, useTypeahead as Ge, useInteractions as Ke } from "@floating-ui/react";
import { nanoid as Te } from "nanoid";
import { mergeRefs as $e } from "../toaster/utils.es.js";
import { disabledClassNames as ee, sizeClassNames as v, optionGroupDividerSizeClassNames as He, optionGroupDividerClassNames as We, selectItemClassNames as ae } from "./component-style.es.js";
import { getTextContent as ne } from "./utils.es.js";
import { useDebouncedCallback as _e } from "../../utilities/hooks.es.js";
import Ue from "../badge/badge.es.js";
import { Loader as qe } from "../loader/loader.es.js";
const ce = we(
  {}
), oe = () => Se(ce), ue = Ne(({
  children: e,
  icon: a = null,
  // Icon to show in the select button.
  placeholder: s = "Select an option",
  // Placeholder text.
  optionIcon: F = null,
  // Icon to show in the selected option.
  render: c,
  label: u,
  // Label for the select component.
  className: D,
  ...L
}, d) => {
  const {
    sizeValue: h,
    getReferenceProps: j,
    getValues: N,
    selectId: P,
    refs: M,
    isOpen: S,
    multiple: o,
    combobox: k,
    setSelected: V,
    onChange: O,
    isControlled: A,
    disabled: n,
    by: b
  } = oe(), B = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }[h], T = X(() => {
    if (a)
      return a;
    const l = "text-field-placeholder " + ee.icon;
    return k ? /* @__PURE__ */ r(ve, { className: l }) : /* @__PURE__ */ r(ke, { className: l });
  }, [a]), $ = X(() => {
    const l = N();
    if (!l)
      return null;
    if (o)
      return l.map(
        (x, t) => /* @__PURE__ */ r(
          Ue,
          {
            className: "cursor-default",
            icon: F,
            type: "rounded",
            size: B,
            onMouseDown: R(x),
            label: typeof c == "function" ? c(x) : x.toString(),
            closable: !0,
            disabled: n
          },
          t
        )
      );
    let C = typeof l == "string" ? l : "";
    if (typeof c == "function" && (C = c(l)), typeof e == "function" && typeof c != "function") {
      const x = {
        value: l,
        ...o ? {
          onClose: R(
            l
          )
        } : {}
      };
      C = e(x);
    }
    return (z(e) || typeof e == "string") && typeof c != "function" && (C = e), /* @__PURE__ */ r(
      "span",
      {
        className: m(
          "truncate",
          v[h].displaySelected,
          ee.text
        ),
        children: C
      }
    );
  }, [N, n]), R = (l) => (C) => {
    C?.preventDefault(), C?.stopPropagation();
    const x = [
      ...N() ?? []
    ], t = x.findIndex((i) => i !== null && l !== null && typeof i == "object" ? i[b] === l[b] : i === l);
    t !== -1 && (x.splice(t, 1), A || V(x), typeof O == "function" && O(x));
  };
  return /* @__PURE__ */ K("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    !!u && /* @__PURE__ */ r(
      "label",
      {
        className: m(
          v[h]?.label,
          "text-field-label"
        ),
        htmlFor: P,
        children: u
      }
    ),
    /* @__PURE__ */ K(
      "button",
      {
        id: P,
        ref: $e(M.setReference, d),
        className: m(
          "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
          "outline outline-1 outline-field-border border-none cursor-pointer",
          !S && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
          v[h].selectButton,
          o && v[h].multiSelect,
          ee.selectButton,
          D
        ),
        tabIndex: 0,
        disabled: n,
        ...L,
        ...j(),
        children: [
          /* @__PURE__ */ K(
            "div",
            {
              className: m(
                "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                N() && "flex flex-wrap"
              ),
              children: [
                $(),
                (o ? !N()?.length : !N()) && /* @__PURE__ */ r(
                  "div",
                  {
                    className: m(
                      "[grid-area:1/1/2/3] text-field-input px-1",
                      v[h].displaySelected,
                      ee.text
                    ),
                    children: s
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: m(
                "flex items-center [&>svg]:shrink-0",
                v[h].icon
              ),
              children: T()
            }
          )
        ]
      }
    )
  ] });
});
function q({
  label: e,
  children: a,
  className: s,
  ...F
}) {
  const { index: c, totalGroups: u } = F, { sizeValue: D } = oe();
  return /* @__PURE__ */ K(Ie, { children: [
    /* @__PURE__ */ K("div", { className: "flex flex-col", role: "group", "aria-label": e, children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: m(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[D],
            s
          ),
          id: `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: e
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: a
        }
      )
    ] }),
    c < u && !!(a && I.count(a) > 0) && /* @__PURE__ */ r(
      "hr",
      {
        className: m(
          We,
          He[D]
        )
      }
    )
  ] });
}
function de({
  children: e,
  className: a
  // Additional class name for the dropdown.
}) {
  const {
    isOpen: s,
    context: F,
    refs: c,
    combobox: u,
    floatingStyles: D,
    getFloatingProps: L,
    sizeValue: d,
    setSearchKeyword: h,
    setActiveIndex: j,
    setSelectedIndex: N,
    value: P,
    selected: M,
    getValues: S,
    searchKeyword: o,
    listContentRef: k,
    by: V,
    searchPlaceholder: O,
    activeIndex: A,
    searchFn: n,
    debounceDelay: b
  } = oe(), B = J(() => {
    const t = S();
    let i = -1;
    if (t) {
      let w = I.toArray(e);
      w.length > 0 && z(w[0]) && w[0].type === q && (w = I.toArray(e).map(
        (y) => z(y) ? I.toArray(y.props.children) : []
      ).flat()), i = w.findIndex((y) => {
        if (!z(y))
          return !1;
        const E = y.props.value;
        return typeof E == "object" && typeof t == "object" ? E[V] === t[V] : E === t;
      });
    }
    return i;
  }, [P, M, e, V]);
  se(() => {
    s || (j(B), N(B));
  }, [B, s]), se(() => {
    s && (u && [-1, null].includes(A) || j(-1));
  }, [o, s]);
  const T = J(() => {
    let t = 0, i = 0;
    I.forEach(e, (g) => {
      z(g) && g.type === q && I.toArray(
        g.props.children
      ).some((W) => {
        if (!z(W))
          return !1;
        if (o && !n) {
          const _ = ne(
            W.props.children
          )?.toLowerCase(), Q = o.toLowerCase();
          return _.includes(Q);
        }
        return !0;
      }) && t++;
    }), i = Math.max(0, t - 1);
    let w = 0, y = 0;
    const E = (g) => {
      if (!z(g))
        return null;
      if (g.type === q) {
        const H = I.map(
          g.props.children,
          E
        );
        if (!H?.some((Q) => Q !== null))
          return null;
        const _ = {
          ...g.props,
          children: H,
          index: y,
          totalGroups: i
        };
        return y++, ie(g, _);
      }
      if (o && !n) {
        const H = ne(
          g.props?.children
        )?.toLowerCase(), W = o.toLowerCase();
        if (!H?.includes(W))
          return null;
      }
      return ie(g, {
        ...g.props,
        index: w++
      });
    };
    return I.map(e, E);
  }, [o, P, M, e, n]), $ = I.count(T);
  le(() => {
    k.current = [];
    let t = I.toArray(e);
    t && z(t[0]) && t[0].type === q && (t = I.toArray(t).map(
      (i) => z(i) ? i.props.children : null
    ).filter(Boolean)), I.forEach(t, (i) => {
      if (!z(i))
        return;
      const w = ne(
        i.props?.children
      )?.toLowerCase();
      if (o && !n) {
        const y = o.toLowerCase();
        if (!w?.includes(y))
          return;
      }
      k.current.push(w);
    });
  }, [o, n]);
  const [R, l] = U(!1), C = X(async () => {
    if (!(!n || typeof n != "function" || R)) {
      l(!0);
      try {
        await n(o);
      } catch (t) {
        console.error(t);
      } finally {
        l(!1);
      }
    }
  }, [o]), x = _e(C, b);
  return le(() => {
    typeof n == "function" && x();
  }, [x]), /* @__PURE__ */ r(re, { children: s && /* @__PURE__ */ r(re, { children: /* @__PURE__ */ r(
    Pe,
    {
      context: F,
      modal: !1,
      visuallyHiddenDismiss: !0,
      children: /* @__PURE__ */ K(
        "div",
        {
          ref: c.setFloating,
          className: m(
            "box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle",
            u && "grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle",
            v[d].dropdown,
            !u && "h-auto",
            u ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
            a
          ),
          style: {
            ...D,
            zIndex: 1
          },
          ...L(),
          children: [
            u && /* @__PURE__ */ K(
              "div",
              {
                className: m(
                  v[d].searchbarWrapper
                ),
                children: [
                  R ? /* @__PURE__ */ r(
                    qe,
                    {
                      className: v[d].searchbarIcon
                    }
                  ) : /* @__PURE__ */ r(
                    Oe,
                    {
                      className: m(
                        "text-icon-secondary shrink-0",
                        v[d].searchbarIcon
                      )
                    }
                  ),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      className: m(
                        "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                        v[d].searchbar
                      ),
                      type: "search",
                      name: "keyword",
                      placeholder: O,
                      onChange: (t) => h(t.target.value),
                      value: o,
                      autoComplete: "off"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ K(
              "div",
              {
                className: m(
                  "overflow-y-auto overflow-x-hidden",
                  !u && "w-full h-full",
                  v[d].dropdownItemsWrapper
                ),
                children: [
                  !!$ && T,
                  !$ && /* @__PURE__ */ r(
                    "div",
                    {
                      className: m(
                        "p-2 text-center font-medium text-field-placeholder",
                        ae[d]
                      ),
                      children: "No items found"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  ) }) });
}
function fe({ children: e, root: a, id: s }) {
  return /* @__PURE__ */ r(Re, { id: s, root: a, children: e });
}
function pe({
  value: e,
  selected: a,
  children: s,
  className: F,
  ...c
}) {
  const {
    sizeValue: u,
    getItemProps: D,
    onKeyDownItem: L,
    onClickItem: d,
    activeIndex: h,
    selectedIndex: j,
    updateListRef: N,
    getValues: P,
    by: M,
    multiple: S
  } = oe(), { index: o } = c, k = te(o), V = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, O = J(() => {
    if (!S)
      return !1;
    const n = P();
    return n ? n.some((b) => b !== null && e !== null && typeof b == "object" ? b[M] === e[M] : b === e) : !1;
  }, [e, P]), A = J(() => typeof a == "boolean" ? a : S ? O : o === j, [O, j, a]);
  return /* @__PURE__ */ K(
    "div",
    {
      className: m(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        ae[u],
        o === h && "bg-button-tertiary-hover",
        F
      ),
      ref: (n) => {
        N(o, n);
      },
      role: "option",
      tabIndex: o === h ? 0 : -1,
      "aria-selected": A && o === h,
      ...D({
        // Handle pointer select.
        onClick() {
          d(k.current, e);
        },
        // Handle keyboard select.
        onKeyDown(n) {
          L(
            n,
            k.current,
            e
          );
        }
      }),
      children: [
        /* @__PURE__ */ r("span", { className: "w-full truncate", children: s }),
        A && /* @__PURE__ */ r(
          De,
          {
            className: m(
              "text-icon-on-color-disabled",
              V[u]
            )
          }
        )
      ]
    }
  );
}
const me = ({
  id: e,
  size: a = "md",
  // sm, md, lg
  value: s,
  // Value of the select (for controlled component).
  defaultValue: F,
  // Default value of the select (for uncontrolled component).
  onChange: c,
  // Callback function to handle the change event.
  by: u = "id",
  // Used to identify the select component. Default is 'id'.
  children: D,
  multiple: L = !1,
  // If true, it will allow multiple selection.
  combobox: d = !1,
  // If true, it will show a search box.
  disabled: h = !1,
  // If true, it will disable the select component.
  searchPlaceholder: j = "Search...",
  // Placeholder text for search box.
  searchFn: N,
  // Function to handle the search.
  debounceDelay: P = 500
  // Debounce delay for the search.
}) => {
  const M = J(() => e || `select-${Te()}`, [e]), S = J(() => typeof s < "u", [s]), [o, k] = U(F), [V, O] = U(""), A = X(() => S ? s : o, [S, s, o]), [n, b] = U(!1), [B, T] = U(null), [$, R] = U(null), l = {
    sm: d ? 256 : 172,
    md: d ? 256 : 216,
    lg: d ? 256 : 216
  }, { refs: C, floatingStyles: x, context: t } = ze({
    strategy: "fixed",
    placement: "bottom-start",
    open: n,
    onOpenChange: b,
    whileElementsMounted: Fe,
    middleware: [
      Le(5),
      je({ padding: 10 }),
      Me({
        apply({ rects: f, elements: p, availableHeight: G }) {
          Object.assign(p.floating.style, {
            maxHeight: `min(${G}px, ${l[a]}px)`,
            maxWidth: `${f.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), i = te([]), w = te([]), y = te(!1), E = Ve(t, { event: "mousedown" }), g = Ae(t), H = Be(t, { role: "listbox" }), W = Ee(t, {
    listRef: i,
    activeIndex: B,
    selectedIndex: $,
    onNavigate: T,
    // This is a large list, allow looping.
    loop: !0
  }), _ = Ge(t, {
    listRef: w,
    activeIndex: B,
    selectedIndex: $,
    onMatch: n ? T : R,
    onTypingChange(f) {
      y.current = f;
    }
  }), { getReferenceProps: Q, getFloatingProps: he, getItemProps: xe } = Ke([
    g,
    H,
    W,
    E,
    ...d ? [] : [_]
  ]), ye = (f, p) => {
    const G = [
      ...A() ?? []
    ];
    G.findIndex((Z) => Z !== null && p !== null && typeof Z == "object" ? Z[u] === p[u] : Z === p) === -1 && (G.push(p), S || k(G), R(f), C.reference.current.focus(), b(!1), O(""), typeof c == "function" && c(G));
  }, Y = (f, p) => {
    if (L)
      return ye(f, p);
    R(f), S || k(p), C.reference.current.focus(), b(!1), O(""), typeof c == "function" && c(p);
  }, ge = X((f, p) => {
    i.current[f] = p;
  }, []), be = (f, p) => {
    Y(f, p);
  }, Ce = (f, p, G) => {
    f.key === "Enter" && (f.preventDefault(), Y(p, G)), f.key === " " && !y.current && (f.preventDefault(), Y(p, G));
  };
  return /* @__PURE__ */ r(
    ce.Provider,
    {
      value: {
        selectedIndex: $,
        setSelectedIndex: R,
        activeIndex: B,
        setActiveIndex: T,
        selected: o,
        setSelected: k,
        handleSelect: Y,
        combobox: d,
        sizeValue: a,
        multiple: L,
        onChange: c,
        isTypingRef: y,
        getItemProps: xe,
        onClickItem: be,
        onKeyDownItem: Ce,
        getValues: A,
        selectId: M,
        getReferenceProps: Q,
        isOpen: n,
        value: s,
        updateListRef: ge,
        refs: C,
        listContentRef: w,
        by: u,
        getFloatingProps: he,
        floatingStyles: x,
        context: t,
        searchKeyword: V,
        setSearchKeyword: O,
        disabled: h,
        isControlled: S,
        searchPlaceholder: j,
        searchFn: N,
        debounceDelay: P
      },
      children: D
    }
  );
};
me.displayName = "Select";
const at = Object.assign(me, {
  Portal: fe,
  Button: ue,
  Options: de,
  Option: pe,
  OptionGroup: q
});
fe.displayName = "Select.Portal";
ue.displayName = "Select.Button";
de.displayName = "Select.Options";
pe.displayName = "Select.Option";
q.displayName = "Select.OptionGroup";
export {
  ue as SelectButton,
  pe as SelectItem,
  q as SelectOptionGroup,
  de as SelectOptions,
  fe as SelectPortal,
  at as default
};
//# sourceMappingURL=select.es.js.map
