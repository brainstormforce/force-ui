import { jsx as r, jsxs as $, Fragment as ce } from "react/jsx-runtime";
import { useMemo as Y, useState as Q, useCallback as ee, useRef as le, Fragment as we, Children as v, isValidElement as k, useLayoutEffect as ue, useEffect as fe, forwardRef as Ne, createContext as Se, useContext as Ie, cloneElement as ne } from "react";
import { cn as x } from "../../utilities/functions.es.js";
import { CheckIcon as ve, Search as Le, ChevronsUpDown as Me, ChevronDown as Pe } from "lucide-react";
import { useFloating as ke, autoUpdate as Oe, offset as De, flip as Re, size as ze, useClick as Fe, useDismiss as je, useRole as Te, useListNavigation as Ve, useTypeahead as Ae, useInteractions as Be, FloatingFocusManager as Ee, FloatingPortal as Ge } from "@floating-ui/react";
import { nanoid as Ke } from "nanoid";
import { mergeRefs as $e } from "../toaster/utils.es.js";
import { optionGroupDividerSizeClassNames as He, optionGroupDividerClassNames as We, selectItemClassNames as de, sizeClassNames as L, disabledClassNames as re } from "./component-style.es.js";
import { getTextContent as se } from "./utils.es.js";
import { useDebouncedCallback as _e } from "../../utilities/hooks.es.js";
import { Loader as Ue } from "../loader/loader.es.js";
import qe from "../badge/badge.es.js";
const pe = Se(
  {}
), ie = () => Ie(pe), me = Ne(({
  children: t,
  icon: a = null,
  // Icon to show in the select button.
  placeholder: s = "Select an option",
  // Placeholder text.
  optionIcon: F = null,
  // Icon to show in the selected option.
  render: c,
  label: u,
  // Label for the select component.
  className: O,
  ...j
}, f) => {
  const {
    sizeValue: h,
    getReferenceProps: T,
    getValues: S,
    selectId: D,
    refs: V,
    isOpen: I,
    multiple: e,
    combobox: M,
    setSelected: A,
    onChange: P,
    isControlled: B,
    disabled: n,
    by: w
  } = ie(), E = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }[h], H = ee(() => {
    if (a)
      return a;
    const l = "text-field-placeholder " + re.icon;
    return M ? /* @__PURE__ */ r(Me, { className: l }) : /* @__PURE__ */ r(Pe, { className: l });
  }, [a]), W = ee(() => {
    const l = S();
    if (!l)
      return null;
    if (e)
      return l.map(
        (g, o) => /* @__PURE__ */ r(
          qe,
          {
            className: "cursor-default",
            icon: F,
            type: "rounded",
            size: E,
            onMouseDown: R(g),
            label: typeof c == "function" ? c(g) : g.toString(),
            closable: !0,
            disabled: n
          },
          o
        )
      );
    let N = typeof l == "string" ? l : "";
    if (typeof c == "function" && (N = c(l)), typeof t == "function" && typeof c != "function") {
      const g = {
        value: l,
        ...e ? {
          onClose: R(
            l
          )
        } : {}
      };
      N = t(g);
    }
    return (k(t) || typeof t == "string") && typeof c != "function" && (N = t), /* @__PURE__ */ r(
      "span",
      {
        className: x(
          "truncate",
          L[h].displaySelected,
          re.text
        ),
        children: N
      }
    );
  }, [S, n]), R = (l) => (N) => {
    N?.preventDefault(), N?.stopPropagation();
    const g = [
      ...S() ?? []
    ], o = g.findIndex((i) => i !== null && l !== null && typeof i == "object" ? i[w] === l[w] : i === l);
    o !== -1 && (g.splice(o, 1), B || A(g), typeof P == "function" && P(g));
  };
  return /* @__PURE__ */ $("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    !!u && /* @__PURE__ */ r(
      "label",
      {
        className: x(
          L[h]?.label,
          "text-field-label"
        ),
        htmlFor: D,
        children: u
      }
    ),
    /* @__PURE__ */ $(
      "button",
      {
        id: D,
        ref: $e(V.setReference, f),
        className: x(
          "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
          "outline outline-1 outline-field-border border-none cursor-pointer",
          !I && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
          L[h].selectButton,
          e && L[h].multiSelect,
          re.selectButton,
          O
        ),
        tabIndex: 0,
        disabled: n,
        ...j,
        ...T(),
        children: [
          /* @__PURE__ */ $(
            "div",
            {
              className: x(
                "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                S() && "flex flex-wrap"
              ),
              children: [
                W(),
                (e ? !S()?.length : !S()) && /* @__PURE__ */ r(
                  "div",
                  {
                    className: x(
                      "[grid-area:1/1/2/3] text-field-input px-1",
                      L[h].displaySelected,
                      re.text
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
              className: x(
                "flex items-center [&>svg]:shrink-0",
                L[h].icon
              ),
              children: H()
            }
          )
        ]
      }
    )
  ] });
});
function X({
  label: t,
  children: a,
  className: s,
  ...F
}) {
  const { index: c, totalGroups: u } = F, { sizeValue: O } = ie();
  return /* @__PURE__ */ $(we, { children: [
    /* @__PURE__ */ $("div", { className: "flex flex-col", role: "group", "aria-label": t, children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: x(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[O],
            s
          ),
          id: `group-${t?.toLowerCase().replace(/\s+/g, "-")}`,
          children: t
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${t?.toLowerCase().replace(/\s+/g, "-")}`,
          children: a
        }
      )
    ] }),
    c < u && !!(a && v.count(a) > 0) && /* @__PURE__ */ r(
      "hr",
      {
        className: x(
          We,
          He[O]
        )
      }
    )
  ] });
}
function xe({
  children: t,
  className: a
  // Additional class name for the dropdown.
}) {
  const {
    isOpen: s,
    context: F,
    refs: c,
    combobox: u,
    floatingStyles: O,
    getFloatingProps: j,
    sizeValue: f,
    setSearchKeyword: h,
    setActiveIndex: T,
    setSelectedIndex: S,
    value: D,
    selected: V,
    getValues: I,
    searchKeyword: e,
    listContentRef: M,
    by: A,
    searchPlaceholder: P,
    activeIndex: B,
    searchFn: n,
    debounceDelay: w
  } = ie(), E = Y(() => {
    const o = I();
    let i = -1;
    if (o) {
      let y = v.toArray(t);
      y.length > 0 && k(y[0]) && y[0].type === X && (y = v.toArray(t).map(
        (b) => k(b) ? v.toArray(b.props.children) : []
      ).flat()), i = y.findIndex((b) => {
        if (!k(b))
          return !1;
        const _ = b.props.value;
        return typeof _ == "object" && typeof o == "object" ? _[A] === o[A] : _ === o;
      });
    }
    return i;
  }, [D, V, t, A]);
  ue(() => {
    s || (T(E), S(E));
  }, [E, s]), ue(() => {
    s && (u && [-1, null].includes(B) || T(-1));
  }, [e, s]);
  const H = Y(() => {
    let o = 0, i = 0;
    v.forEach(t, (m) => {
      if (k(m) && m.type === X) {
        let z = !1;
        if (e && !n) {
          const G = e.toLowerCase(), Z = (m.props.label?.toLowerCase() || "").includes(G), C = v.toArray(
            m.props.children
          ).some((U) => k(U) ? (se(
            U.props.children
          )?.toLowerCase()).includes(G) : !1);
          z = Z || C;
        } else
          z = !0;
        z && o++;
      }
    }), i = Math.max(0, o - 1);
    let y = 0, b = 0;
    const _ = (m) => {
      if (!k(m))
        return null;
      if (m.type === X) {
        let z = !1;
        if (e && !n) {
          const C = e.toLowerCase();
          z = (m.props.label?.toLowerCase() || "").includes(C);
        }
        const G = v.map(
          m.props.children,
          (C) => {
            if (!k(C))
              return null;
            if (z) {
              const q = {
                ...C.props,
                index: y++
              };
              return ne(C, q);
            }
            if (e && !n) {
              const q = se(
                C.props.children
              )?.toLowerCase(), J = e.toLowerCase();
              if (!q?.includes(J))
                return null;
            }
            const U = {
              ...C.props,
              index: y++
            };
            return ne(C, U);
          }
        );
        if (!G?.some((C) => C !== null))
          return null;
        const Z = {
          ...m.props,
          children: G,
          index: b,
          totalGroups: i
        };
        return b++, ne(m, Z);
      }
      if (e && !n) {
        const z = se(
          m.props?.children
        )?.toLowerCase(), G = e.toLowerCase();
        if (!z?.includes(G))
          return null;
      }
      return ne(m, {
        ...m.props,
        index: y++
      });
    };
    return v.map(t, _);
  }, [e, D, V, t, n]), W = v.count(H);
  fe(() => {
    M.current = [];
    let o = v.toArray(t);
    o && k(o[0]) && o[0].type === X && (o = v.toArray(o).map(
      (i) => k(i) ? i.props.children : null
    ).filter(Boolean)), v.forEach(o, (i) => {
      if (!k(i))
        return;
      const y = se(
        i.props?.children
      )?.toLowerCase();
      if (e && !n) {
        const b = e.toLowerCase();
        if (!y?.includes(b))
          return;
      }
      M.current.push(y);
    });
  }, [e, n]);
  const [R, l] = Q(!1), N = ee(async () => {
    if (!(!n || typeof n != "function" || R)) {
      l(!0);
      try {
        await n(e);
      } catch (o) {
        console.error(o);
      } finally {
        l(!1);
      }
    }
  }, [e]), g = _e(N, w);
  return fe(() => {
    typeof n == "function" && g();
  }, [g]), /* @__PURE__ */ r(ce, { children: s && /* @__PURE__ */ r(ce, { children: /* @__PURE__ */ r(
    Ee,
    {
      context: F,
      modal: !1,
      visuallyHiddenDismiss: !0,
      children: /* @__PURE__ */ $(
        "div",
        {
          ref: c.setFloating,
          className: x(
            "box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle",
            u && "grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle",
            L[f].dropdown,
            !u && "h-auto",
            u ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
            a
          ),
          style: {
            ...O,
            zIndex: 1
          },
          ...j(),
          children: [
            u && /* @__PURE__ */ $(
              "div",
              {
                className: x(
                  L[f].searchbarWrapper
                ),
                children: [
                  R ? /* @__PURE__ */ r(
                    Ue,
                    {
                      className: L[f].searchbarIcon
                    }
                  ) : /* @__PURE__ */ r(
                    Le,
                    {
                      className: x(
                        "text-icon-secondary shrink-0",
                        L[f].searchbarIcon
                      )
                    }
                  ),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      className: x(
                        "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                        L[f].searchbar
                      ),
                      type: "search",
                      name: "keyword",
                      placeholder: P,
                      onChange: (o) => h(o.target.value),
                      value: e,
                      autoComplete: "off"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ $(
              "div",
              {
                className: x(
                  "overflow-y-auto overflow-x-hidden",
                  !u && "w-full h-full",
                  L[f].dropdownItemsWrapper
                ),
                children: [
                  !!W && H,
                  !W && /* @__PURE__ */ r(
                    "div",
                    {
                      className: x(
                        "p-2 text-center font-medium text-field-placeholder",
                        de[f]
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
function he({ children: t, root: a, id: s }) {
  return /* @__PURE__ */ r(Ge, { id: s, root: a, children: t });
}
function ge({
  value: t,
  selected: a,
  children: s,
  className: F,
  ...c
}) {
  const {
    sizeValue: u,
    getItemProps: O,
    onKeyDownItem: j,
    onClickItem: f,
    activeIndex: h,
    selectedIndex: T,
    updateListRef: S,
    getValues: D,
    by: V,
    multiple: I
  } = ie(), { index: e } = c, M = le(e), A = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, P = Y(() => {
    if (!I)
      return !1;
    const n = D();
    return n ? n.some((w) => w !== null && t !== null && typeof w == "object" ? w[V] === t[V] : w === t) : !1;
  }, [t, D]), B = Y(() => typeof a == "boolean" ? a : I ? P : e === T, [P, T, a]);
  return /* @__PURE__ */ $(
    "div",
    {
      className: x(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        de[u],
        e === h && "bg-button-tertiary-hover",
        F
      ),
      ref: (n) => {
        S(e, n);
      },
      role: "option",
      tabIndex: e === h ? 0 : -1,
      "aria-selected": B && e === h,
      ...O({
        // Handle pointer select.
        onClick() {
          f(M.current, t);
        },
        // Handle keyboard select.
        onKeyDown(n) {
          j(
            n,
            M.current,
            t
          );
        }
      }),
      children: [
        /* @__PURE__ */ r("span", { className: "w-full truncate", children: s }),
        B && /* @__PURE__ */ r(
          ve,
          {
            className: x(
              "text-icon-on-color-disabled",
              A[u]
            )
          }
        )
      ]
    }
  );
}
const ye = ({
  id: t,
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
  children: O,
  multiple: j = !1,
  // If true, it will allow multiple selection.
  combobox: f = !1,
  // If true, it will show a search box.
  disabled: h = !1,
  // If true, it will disable the select component.
  searchPlaceholder: T = "Search...",
  // Placeholder text for search box.
  searchFn: S,
  // Function to handle the search.
  debounceDelay: D = 500
  // Debounce delay for the search.
}) => {
  const V = Y(() => t || `select-${Ke()}`, [t]), I = Y(() => typeof s < "u", [s]), [e, M] = Q(F), [A, P] = Q(""), B = ee(() => I ? s : e, [I, s, e]), [n, w] = Q(!1), [E, H] = Q(null), [W, R] = Q(null), l = {
    sm: f ? 256 : 172,
    md: f ? 256 : 216,
    lg: f ? 256 : 216
  }, { refs: N, floatingStyles: g, context: o } = ke({
    strategy: "fixed",
    placement: "bottom-start",
    open: n,
    onOpenChange: w,
    whileElementsMounted: Oe,
    middleware: [
      De(5),
      Re({ padding: 10 }),
      ze({
        apply({ rects: d, elements: p, availableHeight: K }) {
          Object.assign(p.floating.style, {
            maxHeight: `min(${K}px, ${l[a]}px)`,
            maxWidth: `${d.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), i = le([]), y = le([]), b = le(!1), _ = Fe(o, { event: "mousedown" }), m = je(o), z = Te(o, { role: "listbox" }), G = Ve(o, {
    listRef: i,
    activeIndex: E,
    selectedIndex: W,
    onNavigate: H,
    // This is a large list, allow looping.
    loop: !0
  }), te = Ae(o, {
    listRef: y,
    activeIndex: E,
    selectedIndex: W,
    onMatch: n ? H : R,
    onTypingChange(d) {
      b.current = d;
    }
  }), { getReferenceProps: Z, getFloatingProps: C, getItemProps: U } = Be([
    m,
    z,
    G,
    _,
    ...f ? [] : [te]
  ]), q = (d, p) => {
    const K = [
      ...B() ?? []
    ];
    K.findIndex((oe) => oe !== null && p !== null && typeof oe == "object" ? oe[u] === p[u] : oe === p) === -1 && (K.push(p), I || M(K), R(d), N.reference.current.focus(), w(!1), P(""), typeof c == "function" && c(K));
  }, J = (d, p) => {
    if (j)
      return q(d, p);
    R(d), I || M(p), N.reference.current.focus(), w(!1), P(""), typeof c == "function" && c(p);
  }, ae = ee((d, p) => {
    i.current[d] = p;
  }, []), be = (d, p) => {
    J(d, p);
  }, Ce = (d, p, K) => {
    d.key === "Enter" && (d.preventDefault(), J(p, K)), d.key === " " && !b.current && (d.preventDefault(), J(p, K));
  };
  return /* @__PURE__ */ r(
    pe.Provider,
    {
      value: {
        selectedIndex: W,
        setSelectedIndex: R,
        activeIndex: E,
        setActiveIndex: H,
        selected: e,
        setSelected: M,
        handleSelect: J,
        combobox: f,
        sizeValue: a,
        multiple: j,
        onChange: c,
        isTypingRef: b,
        getItemProps: U,
        onClickItem: be,
        onKeyDownItem: Ce,
        getValues: B,
        selectId: V,
        getReferenceProps: Z,
        isOpen: n,
        value: s,
        updateListRef: ae,
        refs: N,
        listContentRef: y,
        by: u,
        getFloatingProps: C,
        floatingStyles: g,
        context: o,
        searchKeyword: A,
        setSearchKeyword: P,
        disabled: h,
        isControlled: I,
        searchPlaceholder: T,
        searchFn: S,
        debounceDelay: D
      },
      children: O
    }
  );
};
ye.displayName = "Select";
const at = Object.assign(ye, {
  Portal: he,
  Button: me,
  Options: xe,
  Option: ge,
  OptionGroup: X
});
he.displayName = "Select.Portal";
me.displayName = "Select.Button";
xe.displayName = "Select.Options";
ge.displayName = "Select.Option";
X.displayName = "Select.OptionGroup";
export {
  me as SelectButton,
  ge as SelectItem,
  X as SelectOptionGroup,
  xe as SelectOptions,
  he as SelectPortal,
  at as default
};
//# sourceMappingURL=select.es.js.map
