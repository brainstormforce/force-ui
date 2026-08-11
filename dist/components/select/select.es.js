"use client";
import { jsx as c, jsxs as F, Fragment as xe } from "react/jsx-runtime";
import { forwardRef as Le, useRef as se, useState as ee, useEffect as de, useMemo as oe, useCallback as ce, isValidElement as T, Fragment as ke, Children as V, useLayoutEffect as ge, useContext as Re, cloneElement as ue, createContext as De } from "react";
import { cn as h } from "../../utilities/functions.es.js";
import { ChevronsUpDown as Pe, ChevronDown as Oe, CheckIcon as Me, Search as Ve } from "lucide-react";
import { FloatingFocusManager as Fe, FloatingPortal as je, useFloating as ze, autoUpdate as $e, offset as Te, flip as Ae, size as Be, useClick as Ee, useDismiss as Ke, useRole as Ge, useListNavigation as _e, useTypeahead as He, useInteractions as We } from "@floating-ui/react";
import { nanoid as Ue } from "nanoid";
import { mergeRefs as ye } from "../toaster/utils.es.js";
import { sizeClassNames as v, disabledClassNames as re, selectItemClassNames as be, optionGroupDividerSizeClassNames as qe, optionGroupDividerClassNames as Je } from "./component-style.es.js";
import { toValuesArray as te, getTextContent as fe } from "./utils.es.js";
import { useDebouncedCallback as Qe } from "../../utilities/hooks.es.js";
import Xe from "../badge/badge.es.js";
import { Loader as Ye } from "../loader/loader.es.js";
const we = De(
  {}
), pe = () => Re(we), Ce = Le(
  ({
    children: n,
    icon: b = null,
    // Icon to show in the select button.
    placeholder: x = "Select an option",
    // Placeholder text.
    optionIcon: H = null,
    // Icon to show in the selected option.
    render: a,
    label: p,
    // Label for the select component.
    className: S,
    ...W
  }, R) => {
    const {
      sizeValue: t,
      getReferenceProps: U,
      getValues: g,
      selectId: j,
      refs: D,
      isOpen: w,
      multiple: d,
      combobox: r,
      inlineSearch: P,
      setSelected: A,
      onChange: z,
      isControlled: q,
      disabled: l,
      by: O,
      searchKeyword: y,
      setSearchKeyword: I,
      searchPlaceholder: B,
      context: M,
      activeIndex: J,
      optionValuesRef: E,
      handleSelect: ne
    } = pe(), K = {
      sm: "xs",
      md: "sm",
      lg: "md"
    }[t], Q = se(null), [X, i] = ee(!1);
    de(() => {
      w || i(!1);
    }, [w]);
    const L = oe(() => {
      if (!P || d)
        return "";
      const e = g();
      if (!e)
        return "";
      if (typeof a == "function") {
        const o = a(e);
        if (typeof o == "string")
          return o;
      }
      if (typeof e == "string" || typeof e == "number")
        return String(e);
      const u = e.name;
      return typeof u == "string" ? u : "";
    }, [P, d, g, a]), N = ce(() => {
      if (b)
        return b;
      const e = "text-field-placeholder " + re.icon;
      return r ? /* @__PURE__ */ c(Pe, { className: e }) : /* @__PURE__ */ c(Oe, { className: e });
    }, [b]), k = ce(() => {
      const e = g();
      if (!e)
        return null;
      if (d)
        return te(e).map(
          (s) => /* @__PURE__ */ c(
            Xe,
            {
              className: "cursor-default",
              icon: H,
              type: "rounded",
              size: K,
              onMouseDown: $(s),
              label: typeof a == "function" ? a(s) : s.toString(),
              closable: !0,
              disabled: l
            },
            String(
              s !== null && typeof s == "object" ? s[O] : s
            )
          )
        );
      const u = Array.isArray(e) && e.length ? e[0] : e;
      let o = typeof u == "string" ? u : "";
      return typeof a == "function" && (o = a(u)), typeof n == "function" && typeof a != "function" && (o = n({
        value: u
      })), (T(n) || typeof n == "string") && typeof a != "function" && (o = n), /* @__PURE__ */ c(
        "span",
        {
          className: h(
            "truncate",
            v[t].displaySelected,
            re.text
          ),
          children: o
        }
      );
    }, [g, l, d, a, n, O]), $ = (e) => (u) => {
      u?.preventDefault(), u?.stopPropagation();
      const o = [...te(g())], s = o.findIndex((G) => G !== null && e !== null && typeof G == "object" ? G[O] === e[O] : G === e);
      s !== -1 && (o.splice(s, 1), q || A(o), typeof z == "function" && z(o));
    };
    if (P) {
      let e = "";
      !d && g() ? e = w && X ? y : L : w && (e = y);
      const u = d ? !te(g()).length : !g() && !y;
      return /* @__PURE__ */ F("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
        !!p && /* @__PURE__ */ c(
          "label",
          {
            className: h(
              v[t]?.label,
              "text-field-label"
            ),
            htmlFor: j,
            children: p
          }
        ),
        /* @__PURE__ */ F(
          "div",
          {
            ref: D.setPositionReference,
            className: h(
              "flex flex-wrap items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white cursor-text",
              "outline outline-1 outline-field-border border-none",
              "focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-focus-border focus-within:ring-focus",
              "[&:hover:not(:focus-within):not(:has(:disabled))]:outline-border-strong",
              v[t].selectButton,
              d && v[t].multiSelect,
              re.selectButton,
              S
            ),
            onMouseDown: (o) => {
              o.target !== Q.current && (o.preventDefault(), Q.current?.focus());
            },
            children: [
              /* @__PURE__ */ F("div", { className: "flex-1 flex flex-wrap items-center gap-1.5 overflow-hidden", children: [
                d && k(),
                /* @__PURE__ */ c(
                  "input",
                  {
                    ref: ye(D.setReference, Q),
                    id: j,
                    type: "text",
                    autoComplete: "off",
                    "aria-autocomplete": "list",
                    disabled: l,
                    placeholder: u ? B : "",
                    value: e,
                    className: h(
                      "flex-1 min-w-[4rem] bg-transparent border-0 outline-none focus:ring-0 p-0",
                      "placeholder:text-field-placeholder",
                      v[t].displaySelected,
                      re.text
                    ),
                    ...U({
                      onFocus: () => {
                        w || M.onOpenChange(!0);
                      },
                      onClick: () => {
                        w || M.onOpenChange(!0);
                      },
                      onChange: (o) => {
                        i(!0), I(o.target.value), w || M.onOpenChange(!0);
                      },
                      onKeyDown: (o) => {
                        if (o.key === "Enter" && J !== null && J >= 0) {
                          o.preventDefault();
                          const s = E.current[J];
                          s !== void 0 && ne(J, s);
                          return;
                        }
                        if (o.key === "Backspace" && !e && d) {
                          o.preventDefault();
                          const s = te(
                            g()
                          );
                          s.length && $(
                            s[s.length - 1]
                          )();
                        }
                      }
                    })
                  }
                )
              ] }),
              /* @__PURE__ */ c(
                "div",
                {
                  className: h(
                    "flex items-center [&>svg]:shrink-0",
                    v[t].icon
                  ),
                  children: N()
                }
              )
            ]
          }
        )
      ] });
    }
    return /* @__PURE__ */ F("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
      !!p && /* @__PURE__ */ c(
        "label",
        {
          className: h(
            v[t]?.label,
            "text-field-label"
          ),
          htmlFor: j,
          children: p
        }
      ),
      /* @__PURE__ */ F(
        "button",
        {
          id: j,
          ref: ye(D.setReference, R),
          className: h(
            "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
            "outline outline-1 outline-field-border border-none cursor-pointer",
            !w && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
            v[t].selectButton,
            d && v[t].multiSelect,
            re.selectButton,
            S
          ),
          tabIndex: 0,
          disabled: l,
          ...W,
          ...U(),
          children: [
            /* @__PURE__ */ F(
              "div",
              {
                className: h(
                  "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                  g() && "flex flex-wrap"
                ),
                children: [
                  k(),
                  (d ? !te(g()).length : !g()) && /* @__PURE__ */ c(
                    "div",
                    {
                      className: h(
                        "[grid-area:1/1/2/3] text-field-input px-1",
                        v[t].displaySelected,
                        re.text
                      ),
                      children: x
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ c(
              "div",
              {
                className: h(
                  "flex items-center [&>svg]:shrink-0",
                  v[t].icon
                ),
                children: N()
              }
            )
          ]
        }
      )
    ] });
  }
);
function le({
  label: n,
  children: b,
  className: x,
  ...H
}) {
  const { index: a, totalGroups: p } = H, { sizeValue: S } = pe();
  return /* @__PURE__ */ F(ke, { children: [
    /* @__PURE__ */ F("div", { className: "flex flex-col", role: "group", "aria-label": n, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: h(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[S],
            x
          ),
          id: `group-${n?.toLowerCase().replace(/\s+/g, "-")}`,
          children: n
        }
      ),
      /* @__PURE__ */ c(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${n?.toLowerCase().replace(/\s+/g, "-")}`,
          children: b
        }
      )
    ] }),
    a < p && !!(b && V.count(b) > 0) && /* @__PURE__ */ c(
      "hr",
      {
        className: h(
          Je,
          qe[S]
        )
      }
    )
  ] });
}
function Ne({
  children: n,
  className: b
  // Additional class name for the dropdown.
}) {
  const {
    isOpen: x,
    context: H,
    refs: a,
    combobox: p,
    inlineSearch: S,
    floatingStyles: W,
    getFloatingProps: R,
    sizeValue: t,
    setSearchKeyword: U,
    setActiveIndex: g,
    setSelectedIndex: j,
    value: D,
    selected: w,
    getValues: d,
    searchKeyword: r,
    listContentRef: P,
    by: A,
    searchPlaceholder: z,
    activeIndex: q,
    searchFn: l,
    debounceDelay: O,
    selectId: y,
    optionValuesRef: I
  } = pe(), B = oe(() => {
    const i = d();
    let L = -1;
    if (i) {
      let N = V.toArray(n);
      N.length > 0 && T(N[0]) && N[0].type === le && (N = V.toArray(n).map(
        (k) => T(k) ? V.toArray(k.props.children) : []
      ).flat()), L = N.findIndex((k) => {
        if (!T(k))
          return !1;
        const $ = k.props.value;
        return typeof $ == "object" && typeof i == "object" ? $[A] === i[A] : $ === i;
      });
    }
    return L;
  }, [D, w, n, A]);
  ge(() => {
    x || (g(B), j(B));
  }, [B, x]), ge(() => {
    x && (p && [-1, null].includes(q) || g(-1));
  }, [r, x]);
  const M = oe(() => {
    let i = 0, L = 0;
    V.forEach(n, (e) => {
      if (T(e) && e.type === le) {
        let u = !1;
        if (r && !l) {
          const o = r.toLowerCase(), G = (e.props.label?.toLowerCase() || "").includes(o), ie = V.toArray(
            e.props.children
          ).some((m) => T(m) ? (fe(
            m.props.children
          )?.toLowerCase()).includes(o) : !1);
          u = G || ie;
        } else
          u = !0;
        u && i++;
      }
    }), L = Math.max(0, i - 1);
    let N = 0, k = 0;
    I.current = [];
    const $ = (e) => {
      if (!T(e))
        return null;
      if (e.type === le) {
        let o = !1;
        if (r && !l) {
          const m = r.toLowerCase();
          o = (e.props.label?.toLowerCase() || "").includes(m);
        }
        const s = V.map(
          e.props.children,
          (m) => {
            if (!T(m))
              return null;
            if (o) {
              const Z = N++;
              I.current[Z] = m.props.value;
              const f = {
                ...m.props,
                index: Z,
                id: `${y}-option-${Z}`
              };
              return ue(m, f);
            }
            if (r && !l) {
              const Z = fe(
                m.props.children
              )?.toLowerCase(), f = r.toLowerCase();
              if (!Z?.includes(f))
                return null;
            }
            const Y = N++;
            I.current[Y] = m.props.value;
            const me = {
              ...m.props,
              index: Y,
              id: `${y}-option-${Y}`
            };
            return ue(m, me);
          }
        );
        if (!s?.some(
          (m) => m !== null
        ))
          return null;
        const ie = {
          ...e.props,
          children: s,
          index: k,
          totalGroups: L
        };
        return k++, ue(e, ie);
      }
      if (r && !l) {
        const o = fe(
          e.props?.children
        )?.toLowerCase(), s = r.toLowerCase();
        if (!o?.includes(s))
          return null;
      }
      const u = N++;
      return I.current[u] = e.props.value, ue(e, {
        ...e.props,
        index: u,
        id: `${y}-option-${u}`
      });
    };
    return V.map(n, $);
  }, [
    r,
    D,
    w,
    n,
    l,
    y,
    I
  ]), J = V.count(M);
  de(() => {
    P.current = [];
    let i = V.toArray(n);
    i && T(i[0]) && i[0].type === le && (i = V.toArray(i).map(
      (L) => T(L) ? L.props.children : null
    ).filter(Boolean)), V.forEach(i, (L) => {
      if (!T(L))
        return;
      const N = fe(
        L.props?.children
      )?.toLowerCase();
      if (r && !l) {
        const k = r.toLowerCase();
        if (!N?.includes(k))
          return;
      }
      P.current.push(N);
    });
  }, [r, l]);
  const [E, ne] = ee(!1), K = ce(async () => {
    if (!(!l || typeof l != "function" || E)) {
      ne(!0);
      try {
        await l(r);
      } catch (i) {
        console.error(i);
      } finally {
        ne(!1);
      }
    }
  }, [r]), Q = Qe(K, O);
  de(() => {
    typeof l == "function" && Q();
  }, [Q]);
  const X = /* @__PURE__ */ F(
    "div",
    {
      ref: a.setFloating,
      className: h(
        "box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle",
        p && !S && "grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle",
        v[t].dropdown,
        !(p && !S) && "h-auto",
        p && !S ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
        b
      ),
      style: {
        ...W,
        zIndex: 1
      },
      ...R(),
      children: [
        p && !S && /* @__PURE__ */ F(
          "div",
          {
            className: h(
              v[t].searchbarWrapper
            ),
            children: [
              E ? /* @__PURE__ */ c(
                Ye,
                {
                  className: v[t].searchbarIcon
                }
              ) : /* @__PURE__ */ c(
                Ve,
                {
                  className: h(
                    "text-icon-secondary shrink-0",
                    v[t].searchbarIcon
                  )
                }
              ),
              /* @__PURE__ */ c(
                "input",
                {
                  className: h(
                    "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                    v[t].searchbar
                  ),
                  type: "search",
                  name: "keyword",
                  "aria-label": "Search options",
                  placeholder: z,
                  onChange: (i) => U(i.target.value),
                  value: r,
                  autoComplete: "off"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ F(
          "div",
          {
            className: h(
              "overflow-y-auto overflow-x-hidden",
              !(p && !S) && "w-full h-full",
              v[t].dropdownItemsWrapper
            ),
            children: [
              !!J && M,
              !J && /* @__PURE__ */ c(
                "div",
                {
                  className: h(
                    "p-2 text-center font-medium text-field-placeholder",
                    be[t]
                  ),
                  children: "No items found"
                }
              )
            ]
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ c(xe, { children: x && /* @__PURE__ */ c(xe, { children: S ? X : /* @__PURE__ */ c(
    Fe,
    {
      context: H,
      modal: !1,
      visuallyHiddenDismiss: !0,
      children: X
    }
  ) }) });
}
function ve({ children: n, root: b, id: x }) {
  return /* @__PURE__ */ c(je, { id: x, root: b, children: n });
}
function Se({
  value: n,
  selected: b,
  children: x,
  className: H,
  ...a
}) {
  const {
    sizeValue: p,
    getItemProps: S,
    onKeyDownItem: W,
    onClickItem: R,
    activeIndex: t,
    selectedIndex: U,
    updateListRef: g,
    getValues: j,
    by: D,
    multiple: w,
    inlineSearch: d
  } = pe(), { index: r, id: P } = a, A = se(r), z = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, q = oe(() => {
    if (!w)
      return !1;
    const y = j();
    return y ? te(y).some((I) => I !== null && n !== null && typeof I == "object" ? I[D] === n[D] : I === n) : !1;
  }, [n, j, w, D]), l = oe(() => typeof b == "boolean" ? b : w ? q : r === U, [q, U, b, w, r]);
  let O;
  return d || (O = r === t ? 0 : -1), /* @__PURE__ */ F(
    "div",
    {
      id: P,
      className: h(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        be[p],
        r === t && "bg-button-tertiary-hover",
        H
      ),
      ref: (y) => {
        g(r, y);
      },
      role: "option",
      tabIndex: O,
      "aria-selected": l && r === t,
      ...S({
        // Handle pointer select.
        onClick() {
          R(A.current, n);
        },
        // Handle keyboard select.
        onKeyDown(y) {
          W(
            y,
            A.current,
            n
          );
        }
      }),
      children: [
        /* @__PURE__ */ c("span", { className: "w-full truncate", children: x }),
        l && /* @__PURE__ */ c(
          Me,
          {
            className: h(
              "text-icon-on-color-disabled",
              z[p]
            )
          }
        )
      ]
    }
  );
}
const Ie = ({
  id: n,
  size: b = "md",
  // sm, md, lg
  value: x,
  // Value of the select (for controlled component).
  defaultValue: H,
  // Default value of the select (for uncontrolled component).
  onChange: a,
  // Callback function to handle the change event.
  by: p = "id",
  // Used to identify the select component. Default is 'id'.
  children: S,
  multiple: W = !1,
  // If true, it will allow multiple selection.
  combobox: R = !1,
  // If true, it will show a search box.
  inlineSearch: t = !1,
  // If true, renders search input inside the trigger.
  disabled: U = !1,
  // If true, it will disable the select component.
  searchPlaceholder: g = "Search...",
  // Placeholder text for search box.
  searchFn: j,
  // Function to handle the search.
  debounceDelay: D = 500
  // Debounce delay for the search.
}) => {
  const w = oe(() => n || `select-${Ue()}`, [n]), d = oe(() => typeof x < "u", [x]);
  process.env.NODE_ENV !== "production" && R && t && console.warn(
    "force-ui Select: `inlineSearch` and `combobox` are mutually exclusive. `inlineSearch` will take precedence."
  );
  const [r, P] = ee(H), [A, z] = ee(""), q = ce(() => d ? x : r, [d, x, r]), [l, O] = ee(!1), [y, I] = ee(null), [B, M] = ee(null), J = {
    sm: R && !t ? 256 : 172,
    md: R && !t ? 256 : 216,
    lg: R && !t ? 256 : 216
  }, { refs: E, floatingStyles: ne, context: K } = ze({
    strategy: "fixed",
    placement: "bottom-start",
    open: l,
    onOpenChange: O,
    whileElementsMounted: $e,
    middleware: [
      Te(5),
      Ae({ padding: 10 }),
      Be({
        apply({ rects: f, elements: C, availableHeight: _ }) {
          Object.assign(C.floating.style, {
            maxHeight: `min(${_}px, ${J[b]}px)`,
            maxWidth: `${f.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), Q = se([]), X = se([]), i = se(!1), L = se([]);
  de(() => {
    l || z("");
  }, [l]);
  const N = Ee(K, {
    event: "mousedown",
    enabled: !t
  }), k = Ke(K), $ = Ge(K, { role: "listbox" }), e = _e(K, {
    listRef: Q,
    activeIndex: y,
    selectedIndex: B,
    onNavigate: I,
    loop: !0,
    // virtual: input is the reference, items use aria-activedescendant rather than DOM focus.
    virtual: t
  }), u = He(K, {
    listRef: X,
    activeIndex: y,
    selectedIndex: B,
    onMatch: l ? I : M,
    onTypingChange(f) {
      i.current = f;
    }
  }), { getReferenceProps: o, getFloatingProps: s, getItemProps: G } = We([
    k,
    $,
    e,
    N,
    ...!R && !t ? [u] : []
  ]), ie = (f, C) => {
    const _ = [...te(q())], he = _.findIndex((ae) => ae !== null && C !== null && typeof ae == "object" ? ae[p] === C[p] : ae === C);
    he !== -1 ? (_.splice(he, 1), B === f && M(null)) : (_.push(C), M(f)), d || P(_), t && (E.domReference.current ?? E.reference.current)?.focus(), z(""), typeof a == "function" && a(_);
  }, m = (f, C) => {
    if (W)
      return ie(f, C);
    M(f), d || P(C), (E.domReference.current ?? E.reference.current)?.focus(), O(!1), z(""), typeof a == "function" && a(C);
  }, Y = ce((f, C) => {
    Q.current[f] = C;
  }, []), me = (f, C) => {
    m(f, C);
  }, Z = (f, C, _) => {
    f.key === "Enter" && (f.preventDefault(), m(C, _)), f.key === " " && !i.current && (f.preventDefault(), m(C, _));
  };
  return /* @__PURE__ */ c(
    we.Provider,
    {
      value: {
        selectedIndex: B,
        setSelectedIndex: M,
        activeIndex: y,
        setActiveIndex: I,
        selected: r,
        setSelected: P,
        handleSelect: m,
        combobox: R,
        inlineSearch: t,
        optionValuesRef: L,
        sizeValue: b,
        multiple: W,
        onChange: a,
        isTypingRef: i,
        getItemProps: G,
        onClickItem: me,
        onKeyDownItem: Z,
        getValues: q,
        selectId: w,
        getReferenceProps: o,
        isOpen: l,
        value: x,
        updateListRef: Y,
        refs: E,
        listContentRef: X,
        by: p,
        getFloatingProps: s,
        floatingStyles: ne,
        context: K,
        searchKeyword: A,
        setSearchKeyword: z,
        disabled: U,
        isControlled: d,
        searchPlaceholder: g,
        searchFn: j,
        debounceDelay: D
      },
      children: S
    }
  );
};
Ie.displayName = "Select";
const ft = Object.assign(Ie, {
  Portal: ve,
  Button: Ce,
  Options: Ne,
  Option: Se,
  OptionGroup: le
});
ve.displayName = "Select.Portal";
Ce.displayName = "Select.Button";
Ne.displayName = "Select.Options";
Se.displayName = "Select.Option";
le.displayName = "Select.OptionGroup";
export {
  Ce as SelectButton,
  Se as SelectItem,
  le as SelectOptionGroup,
  Ne as SelectOptions,
  ve as SelectPortal,
  ft as default
};
//# sourceMappingURL=select.es.js.map
