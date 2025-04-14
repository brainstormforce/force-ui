import { jsx as s, jsxs as K, Fragment as re } from "react/jsx-runtime";
import { createContext as Ce, useCallback as X, isValidElement as z, Fragment as we, Children as I, useMemo as J, useLayoutEffect as se, useEffect as le, useState as U, useRef as te, useContext as Ne, cloneElement as ie } from "react";
import { cn as x } from "../../utilities/functions.es.js";
import { ChevronsUpDown as Se, ChevronDown as Ie, Search as ve, CheckIcon as ke } from "lucide-react";
import { FloatingFocusManager as Oe, FloatingPortal as Pe, useFloating as De, autoUpdate as ze, offset as Fe, flip as Le, size as Re, useClick as je, useDismiss as Me, useRole as Ve, useListNavigation as Ae, useTypeahead as Be, useInteractions as Ee } from "@floating-ui/react";
import { nanoid as Ge } from "nanoid";
import { disabledClassNames as ee, sizeClassNames as v, optionGroupDividerSizeClassNames as Ke, optionGroupDividerClassNames as Te } from "./component-style.es.js";
import { getTextContent as ne } from "./utils.es.js";
import { useDebouncedCallback as $e } from "../../utilities/hooks.es.js";
import We from "../badge/badge.es.js";
import { Loader as _e } from "../loader/loader.es.js";
const ae = Ce(
  {}
), oe = () => Ne(ae);
function ce({
  children: e,
  icon: a = null,
  // Icon to show in the select button.
  placeholder: l = "Select an option",
  // Placeholder text.
  optionIcon: F = null,
  // Icon to show in the selected option.
  render: c,
  label: u,
  // Label for the select component.
  className: P,
  ...L
}) {
  const {
    sizeValue: n,
    getReferenceProps: R,
    getValues: h,
    selectId: T,
    refs: j,
    isOpen: M,
    multiple: m,
    combobox: o,
    setSelected: k,
    onChange: D,
    isControlled: V,
    disabled: O,
    by: i
  } = oe(), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }[n], g = X(() => {
    if (a)
      return a;
    const r = "text-field-placeholder " + ee.icon;
    return o ? /* @__PURE__ */ s(Se, { className: r }) : /* @__PURE__ */ s(Ie, { className: r });
  }, [a]), $ = X(() => {
    const r = h();
    if (!r)
      return null;
    if (m)
      return r.map(
        (p, B) => /* @__PURE__ */ s(
          We,
          {
            className: "cursor-default",
            icon: F,
            type: "rounded",
            size: y,
            onMouseDown: A(p),
            label: typeof c == "function" ? c(p) : p.toString(),
            closable: !0,
            disabled: O
          },
          B
        )
      );
    let S = typeof r == "string" ? r : "";
    if (typeof c == "function" && (S = c(r)), typeof e == "function" && typeof c != "function") {
      const p = {
        value: r,
        ...m ? {
          onClose: A(
            r
          )
        } : {}
      };
      S = e(p);
    }
    return (z(e) || typeof e == "string") && typeof c != "function" && (S = e), /* @__PURE__ */ s(
      "span",
      {
        className: x(
          "truncate",
          v[n].displaySelected,
          ee.text
        ),
        children: S
      }
    );
  }, [h, O]), A = (r) => (S) => {
    S?.preventDefault(), S?.stopPropagation();
    const p = [
      ...h() ?? []
    ], B = p.findIndex((t) => t !== null && r !== null && typeof t == "object" ? t[i] === r[i] : t === r);
    B !== -1 && (p.splice(B, 1), V || k(p), typeof D == "function" && D(p));
  };
  return /* @__PURE__ */ K("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    !!u && /* @__PURE__ */ s(
      "label",
      {
        className: x(
          v[n]?.label,
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
        className: x(
          "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
          "outline outline-1 outline-field-border border-none cursor-pointer",
          !M && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
          v[n].selectButton,
          m && v[n].multiSelect,
          ee.selectButton,
          P
        ),
        tabIndex: 0,
        disabled: O,
        ...L,
        ...R(),
        children: [
          /* @__PURE__ */ K(
            "div",
            {
              className: x(
                "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                h() && "flex flex-wrap"
              ),
              children: [
                $(),
                (m ? !h()?.length : !h()) && /* @__PURE__ */ s(
                  "div",
                  {
                    className: x(
                      "[grid-area:1/1/2/3] text-field-input px-1",
                      v[n].displaySelected,
                      ee.text
                    ),
                    children: l
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: x(
                "flex items-center [&>svg]:shrink-0",
                v[n].icon
              ),
              children: g()
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
  className: l,
  ...F
}) {
  const { index: c, totalGroups: u } = F, { sizeValue: P } = oe();
  return /* @__PURE__ */ K(we, { children: [
    /* @__PURE__ */ K("div", { className: "flex flex-col", role: "group", "aria-label": e, children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: x(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[P],
            l
          ),
          id: `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: e
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${e?.toLowerCase().replace(/\s+/g, "-")}`,
          children: a
        }
      )
    ] }),
    c < u && !!(a && I.count(a) > 0) && /* @__PURE__ */ s(
      "hr",
      {
        className: x(
          Te,
          Ke[P]
        )
      }
    )
  ] });
}
function ue({
  children: e,
  className: a
  // Additional class name for the dropdown.
}) {
  const {
    isOpen: l,
    context: F,
    refs: c,
    combobox: u,
    floatingStyles: P,
    getFloatingProps: L,
    sizeValue: n,
    setSearchKeyword: R,
    setActiveIndex: h,
    setSelectedIndex: T,
    value: j,
    selected: M,
    getValues: m,
    searchKeyword: o,
    listContentRef: k,
    by: D,
    searchPlaceholder: V,
    activeIndex: O,
    searchFn: i,
    debounceDelay: y
  } = oe(), g = J(() => {
    const t = m();
    let b = -1;
    if (t) {
      let N = I.toArray(e);
      N.length > 0 && z(N[0]) && N[0].type === q && (N = I.toArray(e).map(
        (C) => z(C) ? I.toArray(C.props.children) : []
      ).flat()), b = N.findIndex((C) => {
        if (!z(C))
          return !1;
        const E = C.props.value;
        return typeof E == "object" && typeof t == "object" ? E[D] === t[D] : E === t;
      });
    }
    return b;
  }, [j, M, e, D]);
  se(() => {
    l || (h(g), T(g));
  }, [g, l]), se(() => {
    l && (u && [-1, null].includes(O) || h(-1));
  }, [o, l]);
  const $ = J(() => {
    let t = 0, b = 0;
    I.forEach(e, (w) => {
      z(w) && w.type === q && I.toArray(
        w.props.children
      ).some((_) => {
        if (!z(_))
          return !1;
        if (o && !i) {
          const H = ne(
            _.props.children
          )?.toLowerCase(), Q = o.toLowerCase();
          return H.includes(Q);
        }
        return !0;
      }) && t++;
    }), b = Math.max(0, t - 1);
    let N = 0, C = 0;
    const E = (w) => {
      if (!z(w))
        return null;
      if (w.type === q) {
        const W = I.map(
          w.props.children,
          E
        );
        if (!W?.some((Q) => Q !== null))
          return null;
        const H = {
          ...w.props,
          children: W,
          index: C,
          totalGroups: b
        };
        return C++, ie(w, H);
      }
      if (o && !i) {
        const W = ne(
          w.props?.children
        )?.toLowerCase(), _ = o.toLowerCase();
        if (!W?.includes(_))
          return null;
      }
      return ie(w, {
        ...w.props,
        index: N++
      });
    };
    return I.map(e, E);
  }, [o, j, M, e, i]), A = I.count($);
  le(() => {
    k.current = [];
    let t = I.toArray(e);
    t && z(t[0]) && t[0].type === q && (t = I.toArray(t).map(
      (b) => z(b) ? b.props.children : null
    ).filter(Boolean)), I.forEach(t, (b) => {
      if (!z(b))
        return;
      const N = ne(
        b.props?.children
      )?.toLowerCase();
      if (o && !i) {
        const C = o.toLowerCase();
        if (!N?.includes(C))
          return;
      }
      k.current.push(N);
    });
  }, [o, i]);
  const [r, S] = U(!1), p = X(async () => {
    if (!(!i || typeof i != "function" || r)) {
      S(!0);
      try {
        await i(o);
      } catch (t) {
        console.error(t);
      } finally {
        S(!1);
      }
    }
  }, [o]), B = $e(p, y);
  return le(() => {
    typeof i == "function" && B();
  }, [B]), /* @__PURE__ */ s(re, { children: l && /* @__PURE__ */ s(re, { children: /* @__PURE__ */ s(Oe, { context: F, modal: !1, children: /* @__PURE__ */ K(
    "div",
    {
      ref: c.setFloating,
      className: x(
        "box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle",
        u && "grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle",
        v[n].dropdown,
        !u && "h-auto",
        u ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
        a
      ),
      style: {
        ...P
      },
      ...L(),
      children: [
        u && /* @__PURE__ */ K(
          "div",
          {
            className: x(
              v[n].searchbarWrapper
            ),
            children: [
              r ? /* @__PURE__ */ s(
                _e,
                {
                  className: v[n].searchbarIcon
                }
              ) : /* @__PURE__ */ s(
                ve,
                {
                  className: x(
                    "text-icon-secondary shrink-0",
                    v[n].searchbarIcon
                  )
                }
              ),
              /* @__PURE__ */ s(
                "input",
                {
                  className: x(
                    "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                    v[n].searchbar
                  ),
                  type: "search",
                  name: "keyword",
                  placeholder: V,
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
            className: x(
              "overflow-y-auto overflow-x-hidden",
              !u && "w-full h-full",
              v[n].dropdownItemsWrapper
            ),
            children: [
              !!A && $,
              !A && /* @__PURE__ */ s("div", { className: "p-2 text-center text-base font-medium text-field-placeholder", children: "No items found" })
            ]
          }
        )
      ]
    }
  ) }) }) });
}
function fe({ children: e, root: a, id: l }) {
  return /* @__PURE__ */ s(Pe, { id: l, root: a, children: e });
}
function de({
  value: e,
  selected: a,
  children: l,
  className: F,
  ...c
}) {
  const {
    sizeValue: u,
    getItemProps: P,
    onKeyDownItem: L,
    onClickItem: n,
    activeIndex: R,
    selectedIndex: h,
    updateListRef: T,
    getValues: j,
    by: M,
    multiple: m
  } = oe(), { index: o } = c, k = te(o), D = {
    sm: "py-1.5 px-2 text-xs font-normal",
    md: "p-2 text-sm font-normal",
    lg: "p-2 text-base font-normal"
  }, V = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, O = J(() => {
    if (!m)
      return !1;
    const y = j();
    return y ? y.some((g) => g !== null && e !== null && typeof g == "object" ? g[M] === e[M] : g === e) : !1;
  }, [e, j]), i = J(() => typeof a == "boolean" ? a : m ? O : o === h, [O, h, a]);
  return /* @__PURE__ */ K(
    "div",
    {
      className: x(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        D[u],
        o === R && "bg-button-tertiary-hover",
        F
      ),
      ref: (y) => {
        T(o, y);
      },
      role: "option",
      tabIndex: o === R ? 0 : -1,
      "aria-selected": i && o === R,
      ...P({
        // Handle pointer select.
        onClick() {
          n(k.current, e);
        },
        // Handle keyboard select.
        onKeyDown(y) {
          L(
            y,
            k.current,
            e
          );
        }
      }),
      children: [
        /* @__PURE__ */ s("span", { className: "w-full truncate", children: l }),
        i && /* @__PURE__ */ s(
          ke,
          {
            className: x(
              "text-icon-on-color-disabled",
              V[u]
            )
          }
        )
      ]
    }
  );
}
const pe = ({
  id: e,
  size: a = "md",
  // sm, md, lg
  value: l,
  // Value of the select (for controlled component).
  defaultValue: F,
  // Default value of the select (for uncontrolled component).
  onChange: c,
  // Callback function to handle the change event.
  by: u = "id",
  // Used to identify the select component. Default is 'id'.
  children: P,
  multiple: L = !1,
  // If true, it will allow multiple selection.
  combobox: n = !1,
  // If true, it will show a search box.
  disabled: R = !1,
  // If true, it will disable the select component.
  searchPlaceholder: h = "Search...",
  // Placeholder text for search box.
  searchFn: T,
  // Function to handle the search.
  debounceDelay: j = 500
  // Debounce delay for the search.
}) => {
  const M = J(() => e || `select-${Ge()}`, [e]), m = J(() => typeof l < "u", [l]), [o, k] = U(F), [D, V] = U(""), O = X(() => m ? l : o, [m, l, o]), [i, y] = U(!1), [g, $] = U(null), [A, r] = U(null), S = {
    sm: n ? 256 : 172,
    md: n ? 256 : 216,
    lg: n ? 256 : 216
  }, { refs: p, floatingStyles: B, context: t } = De({
    placement: "bottom-start",
    open: i,
    onOpenChange: y,
    whileElementsMounted: ze,
    middleware: [
      Fe(5),
      Le({ padding: 10 }),
      Re({
        apply({ rects: f, elements: d, availableHeight: G }) {
          Object.assign(d.floating.style, {
            maxHeight: `min(${G}px, ${S[a]}px)`,
            maxWidth: `${f.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), b = te([]), N = te([]), C = te(!1), E = je(t, { event: "mousedown" }), w = Me(t), W = Ve(t, { role: "listbox" }), _ = Ae(t, {
    listRef: b,
    activeIndex: g,
    selectedIndex: A,
    onNavigate: $,
    // This is a large list, allow looping.
    loop: !0
  }), H = Be(t, {
    listRef: N,
    activeIndex: g,
    selectedIndex: A,
    onMatch: i ? $ : r,
    onTypingChange(f) {
      C.current = f;
    }
  }), { getReferenceProps: Q, getFloatingProps: me, getItemProps: xe } = Ee([
    w,
    W,
    _,
    E,
    ...n ? [] : [H]
  ]), he = (f, d) => {
    const G = [
      ...O() ?? []
    ];
    G.findIndex((Z) => Z !== null && d !== null && typeof Z == "object" ? Z[u] === d[u] : Z === d) === -1 && (G.push(d), m || k(G), r(f), p.reference.current.focus(), y(!1), V(""), typeof c == "function" && c(G));
  }, Y = (f, d) => {
    if (L)
      return he(f, d);
    r(f), m || k(d), p.reference.current.focus(), y(!1), V(""), typeof c == "function" && c(d);
  }, ye = X((f, d) => {
    b.current[f] = d;
  }, []), ge = (f, d) => {
    Y(f, d);
  }, be = (f, d, G) => {
    f.key === "Enter" && (f.preventDefault(), Y(d, G)), f.key === " " && !C.current && (f.preventDefault(), Y(d, G));
  };
  return /* @__PURE__ */ s(
    ae.Provider,
    {
      value: {
        selectedIndex: A,
        setSelectedIndex: r,
        activeIndex: g,
        setActiveIndex: $,
        selected: o,
        setSelected: k,
        handleSelect: Y,
        combobox: n,
        sizeValue: a,
        multiple: L,
        onChange: c,
        isTypingRef: C,
        getItemProps: xe,
        onClickItem: ge,
        onKeyDownItem: be,
        getValues: O,
        selectId: M,
        getReferenceProps: Q,
        isOpen: i,
        value: l,
        updateListRef: ye,
        refs: p,
        listContentRef: N,
        by: u,
        getFloatingProps: me,
        floatingStyles: B,
        context: t,
        searchKeyword: D,
        setSearchKeyword: V,
        disabled: R,
        isControlled: m,
        searchPlaceholder: h,
        searchFn: T,
        debounceDelay: j
      },
      children: P
    }
  );
};
pe.displayName = "Select";
const rt = Object.assign(pe, {
  Portal: fe,
  Button: ce,
  Options: ue,
  Option: de,
  OptionGroup: q
});
fe.displayName = "Select.Portal";
ce.displayName = "Select.Button";
ue.displayName = "Select.Options";
de.displayName = "Select.Option";
q.displayName = "Select.OptionGroup";
export {
  ce as SelectButton,
  de as SelectItem,
  q as SelectOptionGroup,
  ue as SelectOptions,
  fe as SelectPortal,
  rt as default
};
//# sourceMappingURL=select.es.js.map
