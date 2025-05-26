import { jsx as l, jsxs as K, Fragment as re } from "react/jsx-runtime";
import { createContext as we, useCallback as X, isValidElement as z, Fragment as Ne, Children as S, useMemo as J, useLayoutEffect as se, useEffect as le, useState as U, useRef as te, useContext as Se, cloneElement as ie } from "react";
import { cn as m } from "../../utilities/functions.es.js";
import { ChevronsUpDown as Ie, ChevronDown as ve, Search as ke, CheckIcon as Oe } from "lucide-react";
import { FloatingFocusManager as De, FloatingPortal as Pe, useFloating as ze, autoUpdate as Fe, offset as Le, flip as Re, size as je, useClick as Me, useDismiss as Ve, useRole as Ae, useListNavigation as Be, useTypeahead as Ee, useInteractions as Ge } from "@floating-ui/react";
import { nanoid as Ke } from "nanoid";
import { disabledClassNames as ee, sizeClassNames as I, optionGroupDividerSizeClassNames as Te, optionGroupDividerClassNames as $e, selectItemClassNames as ae } from "./component-style.es.js";
import { getTextContent as ne } from "./utils.es.js";
import { useDebouncedCallback as He } from "../../utilities/hooks.es.js";
import We from "../badge/badge.es.js";
import { Loader as _e } from "../loader/loader.es.js";
const ce = we(
  {}
), oe = () => Se(ce);
function ue({
  children: e,
  icon: a = null,
  // Icon to show in the select button.
  placeholder: i = "Select an option",
  // Placeholder text.
  optionIcon: F = null,
  // Icon to show in the selected option.
  render: c,
  label: u,
  // Label for the select component.
  className: O,
  ...L
}) {
  const {
    sizeValue: n,
    getReferenceProps: R,
    getValues: x,
    selectId: T,
    refs: j,
    isOpen: M,
    multiple: h,
    combobox: o,
    setSelected: v,
    onChange: D,
    isControlled: P,
    disabled: k,
    by: r
  } = oe(), w = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }[n], V = X(() => {
    if (a)
      return a;
    const s = "text-field-placeholder " + ee.icon;
    return o ? /* @__PURE__ */ l(Ie, { className: s }) : /* @__PURE__ */ l(ve, { className: s });
  }, [a]), $ = X(() => {
    const s = x();
    if (!s)
      return null;
    if (h)
      return s.map(
        (p, B) => /* @__PURE__ */ l(
          We,
          {
            className: "cursor-default",
            icon: F,
            type: "rounded",
            size: w,
            onMouseDown: A(p),
            label: typeof c == "function" ? c(p) : p.toString(),
            closable: !0,
            disabled: k
          },
          B
        )
      );
    let N = typeof s == "string" ? s : "";
    if (typeof c == "function" && (N = c(s)), typeof e == "function" && typeof c != "function") {
      const p = {
        value: s,
        ...h ? {
          onClose: A(
            s
          )
        } : {}
      };
      N = e(p);
    }
    return (z(e) || typeof e == "string") && typeof c != "function" && (N = e), /* @__PURE__ */ l(
      "span",
      {
        className: m(
          "truncate",
          I[n].displaySelected,
          ee.text
        ),
        children: N
      }
    );
  }, [x, k]), A = (s) => (N) => {
    N?.preventDefault(), N?.stopPropagation();
    const p = [
      ...x() ?? []
    ], B = p.findIndex((t) => t !== null && s !== null && typeof t == "object" ? t[r] === s[r] : t === s);
    B !== -1 && (p.splice(B, 1), P || v(p), typeof D == "function" && D(p));
  };
  return /* @__PURE__ */ K("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    !!u && /* @__PURE__ */ l(
      "label",
      {
        className: m(
          I[n]?.label,
          "text-field-label"
        ),
        htmlFor: T,
        children: u
      }
    ),
    /* @__PURE__ */ K(
      "button",
      {
        id: T,
        ref: j.setReference,
        className: m(
          "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
          "outline outline-1 outline-field-border border-none cursor-pointer",
          !M && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
          I[n].selectButton,
          h && I[n].multiSelect,
          ee.selectButton,
          O
        ),
        tabIndex: 0,
        disabled: k,
        ...L,
        ...R(),
        children: [
          /* @__PURE__ */ K(
            "div",
            {
              className: m(
                "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                x() && "flex flex-wrap"
              ),
              children: [
                $(),
                (h ? !x()?.length : !x()) && /* @__PURE__ */ l(
                  "div",
                  {
                    className: m(
                      "[grid-area:1/1/2/3] text-field-input px-1",
                      I[n].displaySelected,
                      ee.text
                    ),
                    children: i
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: m(
                "flex items-center [&>svg]:shrink-0",
                I[n].icon
              ),
              children: V()
            }
          )
        ]
      }
    )
  ] });
}
function q({
  label: e,
  children: a,
  className: i,
  ...F
}) {
  const { index: c, totalGroups: u } = F, { sizeValue: O } = oe();
  return /* @__PURE__ */ K(Ne, { children: [
    /* @__PURE__ */ K("div", { className: "flex flex-col", role: "group", "aria-label": e, children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: m(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[O],
            i
          ),
          id: `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: e
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: a
        }
      )
    ] }),
    c < u && !!(a && S.count(a) > 0) && /* @__PURE__ */ l(
      "hr",
      {
        className: m(
          $e,
          Te[O]
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
    isOpen: i,
    context: F,
    refs: c,
    combobox: u,
    floatingStyles: O,
    getFloatingProps: L,
    sizeValue: n,
    setSearchKeyword: R,
    setActiveIndex: x,
    setSelectedIndex: T,
    value: j,
    selected: M,
    getValues: h,
    searchKeyword: o,
    listContentRef: v,
    by: D,
    searchPlaceholder: P,
    activeIndex: k,
    searchFn: r,
    debounceDelay: w
  } = oe(), V = J(() => {
    const t = h();
    let y = -1;
    if (t) {
      let C = S.toArray(e);
      C.length > 0 && z(C[0]) && C[0].type === q && (C = S.toArray(e).map(
        (g) => z(g) ? S.toArray(g.props.children) : []
      ).flat()), y = C.findIndex((g) => {
        if (!z(g))
          return !1;
        const E = g.props.value;
        return typeof E == "object" && typeof t == "object" ? E[D] === t[D] : E === t;
      });
    }
    return y;
  }, [j, M, e, D]);
  se(() => {
    i || (x(V), T(V));
  }, [V, i]), se(() => {
    i && (u && [-1, null].includes(k) || x(-1));
  }, [o, i]);
  const $ = J(() => {
    let t = 0, y = 0;
    S.forEach(e, (b) => {
      z(b) && b.type === q && S.toArray(
        b.props.children
      ).some((W) => {
        if (!z(W))
          return !1;
        if (o && !r) {
          const _ = ne(
            W.props.children
          )?.toLowerCase(), Q = o.toLowerCase();
          return _.includes(Q);
        }
        return !0;
      }) && t++;
    }), y = Math.max(0, t - 1);
    let C = 0, g = 0;
    const E = (b) => {
      if (!z(b))
        return null;
      if (b.type === q) {
        const H = S.map(
          b.props.children,
          E
        );
        if (!H?.some((Q) => Q !== null))
          return null;
        const _ = {
          ...b.props,
          children: H,
          index: g,
          totalGroups: y
        };
        return g++, ie(b, _);
      }
      if (o && !r) {
        const H = ne(
          b.props?.children
        )?.toLowerCase(), W = o.toLowerCase();
        if (!H?.includes(W))
          return null;
      }
      return ie(b, {
        ...b.props,
        index: C++
      });
    };
    return S.map(e, E);
  }, [o, j, M, e, r]), A = S.count($);
  le(() => {
    v.current = [];
    let t = S.toArray(e);
    t && z(t[0]) && t[0].type === q && (t = S.toArray(t).map(
      (y) => z(y) ? y.props.children : null
    ).filter(Boolean)), S.forEach(t, (y) => {
      if (!z(y))
        return;
      const C = ne(
        y.props?.children
      )?.toLowerCase();
      if (o && !r) {
        const g = o.toLowerCase();
        if (!C?.includes(g))
          return;
      }
      v.current.push(C);
    });
  }, [o, r]);
  const [s, N] = U(!1), p = X(async () => {
    if (!(!r || typeof r != "function" || s)) {
      N(!0);
      try {
        await r(o);
      } catch (t) {
        console.error(t);
      } finally {
        N(!1);
      }
    }
  }, [o]), B = He(p, w);
  return le(() => {
    typeof r == "function" && B();
  }, [B]), /* @__PURE__ */ l(re, { children: i && /* @__PURE__ */ l(re, { children: /* @__PURE__ */ l(
    De,
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
            I[n].dropdown,
            !u && "h-auto",
            u ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
            a
          ),
          style: {
            ...O,
            zIndex: 1
          },
          ...L(),
          children: [
            u && /* @__PURE__ */ K(
              "div",
              {
                className: m(
                  I[n].searchbarWrapper
                ),
                children: [
                  s ? /* @__PURE__ */ l(
                    _e,
                    {
                      className: I[n].searchbarIcon
                    }
                  ) : /* @__PURE__ */ l(
                    ke,
                    {
                      className: m(
                        "text-icon-secondary shrink-0",
                        I[n].searchbarIcon
                      )
                    }
                  ),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      className: m(
                        "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                        I[n].searchbar
                      ),
                      type: "search",
                      name: "keyword",
                      placeholder: P,
                      onChange: (t) => R(t.target.value),
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
                  I[n].dropdownItemsWrapper
                ),
                children: [
                  !!A && $,
                  !A && /* @__PURE__ */ l(
                    "div",
                    {
                      className: m(
                        "p-2 text-center font-medium text-field-placeholder",
                        ae[n]
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
function fe({ children: e, root: a, id: i }) {
  return /* @__PURE__ */ l(Pe, { id: i, root: a, children: e });
}
function pe({
  value: e,
  selected: a,
  children: i,
  className: F,
  ...c
}) {
  const {
    sizeValue: u,
    getItemProps: O,
    onKeyDownItem: L,
    onClickItem: n,
    activeIndex: R,
    selectedIndex: x,
    updateListRef: T,
    getValues: j,
    by: M,
    multiple: h
  } = oe(), { index: o } = c, v = te(o), D = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, P = J(() => {
    if (!h)
      return !1;
    const r = j();
    return r ? r.some((w) => w !== null && e !== null && typeof w == "object" ? w[M] === e[M] : w === e) : !1;
  }, [e, j]), k = J(() => typeof a == "boolean" ? a : h ? P : o === x, [P, x, a]);
  return /* @__PURE__ */ K(
    "div",
    {
      className: m(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        ae[u],
        o === R && "bg-button-tertiary-hover",
        F
      ),
      ref: (r) => {
        T(o, r);
      },
      role: "option",
      tabIndex: o === R ? 0 : -1,
      "aria-selected": k && o === R,
      ...O({
        // Handle pointer select.
        onClick() {
          n(v.current, e);
        },
        // Handle keyboard select.
        onKeyDown(r) {
          L(
            r,
            v.current,
            e
          );
        }
      }),
      children: [
        /* @__PURE__ */ l("span", { className: "w-full truncate", children: i }),
        k && /* @__PURE__ */ l(
          Oe,
          {
            className: m(
              "text-icon-on-color-disabled",
              D[u]
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
  value: i,
  // Value of the select (for controlled component).
  defaultValue: F,
  // Default value of the select (for uncontrolled component).
  onChange: c,
  // Callback function to handle the change event.
  by: u = "id",
  // Used to identify the select component. Default is 'id'.
  children: O,
  multiple: L = !1,
  // If true, it will allow multiple selection.
  combobox: n = !1,
  // If true, it will show a search box.
  disabled: R = !1,
  // If true, it will disable the select component.
  searchPlaceholder: x = "Search...",
  // Placeholder text for search box.
  searchFn: T,
  // Function to handle the search.
  debounceDelay: j = 500
  // Debounce delay for the search.
}) => {
  const M = J(() => e || `select-${Ke()}`, [e]), h = J(() => typeof i < "u", [i]), [o, v] = U(F), [D, P] = U(""), k = X(() => h ? i : o, [h, i, o]), [r, w] = U(!1), [V, $] = U(null), [A, s] = U(null), N = {
    sm: n ? 256 : 172,
    md: n ? 256 : 216,
    lg: n ? 256 : 216
  }, { refs: p, floatingStyles: B, context: t } = ze({
    strategy: "fixed",
    placement: "bottom-start",
    open: r,
    onOpenChange: w,
    whileElementsMounted: Fe,
    middleware: [
      Le(5),
      Re({ padding: 10 }),
      je({
        apply({ rects: d, elements: f, availableHeight: G }) {
          Object.assign(f.floating.style, {
            maxHeight: `min(${G}px, ${N[a]}px)`,
            maxWidth: `${d.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), y = te([]), C = te([]), g = te(!1), E = Me(t, { event: "mousedown" }), b = Ve(t), H = Ae(t, { role: "listbox" }), W = Be(t, {
    listRef: y,
    activeIndex: V,
    selectedIndex: A,
    onNavigate: $,
    // This is a large list, allow looping.
    loop: !0
  }), _ = Ee(t, {
    listRef: C,
    activeIndex: V,
    selectedIndex: A,
    onMatch: r ? $ : s,
    onTypingChange(d) {
      g.current = d;
    }
  }), { getReferenceProps: Q, getFloatingProps: he, getItemProps: xe } = Ge([
    b,
    H,
    W,
    E,
    ...n ? [] : [_]
  ]), ye = (d, f) => {
    const G = [
      ...k() ?? []
    ];
    G.findIndex((Z) => Z !== null && f !== null && typeof Z == "object" ? Z[u] === f[u] : Z === f) === -1 && (G.push(f), h || v(G), s(d), p.reference.current.focus(), w(!1), P(""), typeof c == "function" && c(G));
  }, Y = (d, f) => {
    if (L)
      return ye(d, f);
    s(d), h || v(f), p.reference.current.focus(), w(!1), P(""), typeof c == "function" && c(f);
  }, ge = X((d, f) => {
    y.current[d] = f;
  }, []), be = (d, f) => {
    Y(d, f);
  }, Ce = (d, f, G) => {
    d.key === "Enter" && (d.preventDefault(), Y(f, G)), d.key === " " && !g.current && (d.preventDefault(), Y(f, G));
  };
  return /* @__PURE__ */ l(
    ce.Provider,
    {
      value: {
        selectedIndex: A,
        setSelectedIndex: s,
        activeIndex: V,
        setActiveIndex: $,
        selected: o,
        setSelected: v,
        handleSelect: Y,
        combobox: n,
        sizeValue: a,
        multiple: L,
        onChange: c,
        isTypingRef: g,
        getItemProps: xe,
        onClickItem: be,
        onKeyDownItem: Ce,
        getValues: k,
        selectId: M,
        getReferenceProps: Q,
        isOpen: r,
        value: i,
        updateListRef: ge,
        refs: p,
        listContentRef: C,
        by: u,
        getFloatingProps: he,
        floatingStyles: B,
        context: t,
        searchKeyword: D,
        setSearchKeyword: P,
        disabled: R,
        isControlled: h,
        searchPlaceholder: x,
        searchFn: T,
        debounceDelay: j
      },
      children: O
    }
  );
};
me.displayName = "Select";
const st = Object.assign(me, {
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
  st as default
};
//# sourceMappingURL=select.es.js.map
