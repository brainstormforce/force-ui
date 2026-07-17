"use client";
import { jsx as i, jsxs as M, Fragment as me } from "react/jsx-runtime";
import { forwardRef as Ie, useRef as re, useState as ee, useEffect as fe, useMemo as te, useCallback as ie, isValidElement as T, Fragment as Se, Children as P, useLayoutEffect as he, useContext as Le, cloneElement as ce, createContext as ke } from "react";
import { cn as m } from "../../utilities/functions.es.js";
import { ChevronsUpDown as Re, ChevronDown as De, CheckIcon as Oe, Search as Pe } from "lucide-react";
import { FloatingFocusManager as Me, FloatingPortal as Fe, useFloating as ze, autoUpdate as Ve, offset as je, flip as $e, size as Te, useClick as Be, useDismiss as Ee, useRole as Ke, useListNavigation as Ae, useTypeahead as Ge, useInteractions as _e } from "@floating-ui/react";
import { nanoid as He } from "nanoid";
import { mergeRefs as xe } from "../toaster/utils.es.js";
import { sizeClassNames as v, disabledClassNames as oe, selectItemClassNames as ge, optionGroupDividerSizeClassNames as We, optionGroupDividerClassNames as Ue } from "./component-style.es.js";
import { getTextContent as ue } from "./utils.es.js";
import { useDebouncedCallback as qe } from "../../utilities/hooks.es.js";
import Je from "../badge/badge.es.js";
import { Loader as Qe } from "../loader/loader.es.js";
const ye = ke(
  {}
), de = () => Le(ye), be = Ie(
  ({
    children: o,
    icon: b = null,
    // Icon to show in the select button.
    placeholder: h = "Select an option",
    // Placeholder text.
    optionIcon: G = null,
    // Icon to show in the selected option.
    render: c,
    label: d,
    // Label for the select component.
    className: N,
    ..._
  }, R) => {
    const {
      sizeValue: t,
      getReferenceProps: H,
      getValues: x,
      selectId: F,
      refs: z,
      isOpen: I,
      multiple: u,
      combobox: r,
      inlineSearch: D,
      setSelected: B,
      onChange: V,
      isControlled: W,
      disabled: s,
      by: j,
      searchKeyword: g,
      setSearchKeyword: S,
      searchPlaceholder: U,
      context: $,
      activeIndex: q,
      optionValuesRef: E,
      handleSelect: ne
    } = de(), K = {
      sm: "xs",
      md: "sm",
      lg: "md"
    }[t], J = re(null), [X, l] = ee(!1);
    fe(() => {
      I || l(!1);
    }, [I]);
    const L = te(() => {
      if (!D || u)
        return "";
      const e = x();
      if (!e)
        return "";
      if (typeof c == "function") {
        const n = c(e);
        if (typeof n == "string")
          return n;
      }
      if (typeof e == "string" || typeof e == "number")
        return String(e);
      const a = e.name;
      return typeof a == "string" ? a : "";
    }, [D, u, x, c]), C = ie(() => {
      if (b)
        return b;
      const e = "text-field-placeholder " + oe.icon;
      return r ? /* @__PURE__ */ i(Re, { className: e }) : /* @__PURE__ */ i(De, { className: e });
    }, [b]), k = ie(() => {
      const e = x();
      if (!e)
        return null;
      if (u)
        return e.map(
          (n, y) => /* @__PURE__ */ i(
            Je,
            {
              className: "cursor-default",
              icon: G,
              type: "rounded",
              size: K,
              onMouseDown: O(n),
              label: typeof c == "function" ? c(n) : n.toString(),
              closable: !0,
              disabled: s
            },
            y
          )
        );
      let a = typeof e == "string" ? e : "";
      if (typeof c == "function" && (a = c(e)), typeof o == "function" && typeof c != "function") {
        const n = {
          value: e,
          ...u ? {
            onClose: O(
              e
            )
          } : {}
        };
        a = o(n);
      }
      return (T(o) || typeof o == "string") && typeof c != "function" && (a = o), /* @__PURE__ */ i(
        "span",
        {
          className: m(
            "truncate",
            v[t].displaySelected,
            oe.text
          ),
          children: a
        }
      );
    }, [x, s]), O = (e) => (a) => {
      a?.preventDefault(), a?.stopPropagation();
      const n = [
        ...x() ?? []
      ], y = n.findIndex((A) => A !== null && e !== null && typeof A == "object" ? A[j] === e[j] : A === e);
      y !== -1 && (n.splice(y, 1), W || B(n), typeof V == "function" && V(n));
    };
    if (D) {
      let e = "";
      !u && x() ? e = I && X ? g : L : I && (e = g);
      const a = u ? !x()?.length : !x() && !g;
      return /* @__PURE__ */ M("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
        !!d && /* @__PURE__ */ i(
          "label",
          {
            className: m(
              v[t]?.label,
              "text-field-label"
            ),
            htmlFor: F,
            children: d
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            ref: z.setPositionReference,
            className: m(
              "flex flex-wrap items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white cursor-text",
              "outline outline-1 outline-field-border border-none",
              "focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-focus-border focus-within:ring-focus",
              "[&:hover:not(:focus-within):not(:has(:disabled))]:outline-border-strong",
              v[t].selectButton,
              u && v[t].multiSelect,
              oe.selectButton,
              N
            ),
            onMouseDown: (n) => {
              n.target !== J.current && (n.preventDefault(), J.current?.focus());
            },
            children: [
              /* @__PURE__ */ M("div", { className: "flex-1 flex flex-wrap items-center gap-1.5 overflow-hidden", children: [
                u && k(),
                /* @__PURE__ */ i(
                  "input",
                  {
                    ref: xe(z.setReference, J),
                    id: F,
                    type: "text",
                    autoComplete: "off",
                    "aria-autocomplete": "list",
                    disabled: s,
                    placeholder: a ? U : "",
                    value: e,
                    className: m(
                      "flex-1 min-w-[4rem] bg-transparent border-0 outline-none focus:ring-0 p-0",
                      "placeholder:text-field-placeholder",
                      v[t].displaySelected,
                      oe.text
                    ),
                    ...H({
                      onFocus: () => {
                        I || $.onOpenChange(!0);
                      },
                      onClick: () => {
                        I || $.onOpenChange(!0);
                      },
                      onChange: (n) => {
                        l(!0), S(n.target.value), I || $.onOpenChange(!0);
                      },
                      onKeyDown: (n) => {
                        if (n.key === "Enter" && q !== null && q >= 0) {
                          n.preventDefault();
                          const y = E.current[q];
                          y !== void 0 && ne(q, y);
                          return;
                        }
                        if (n.key === "Backspace" && !e && u) {
                          n.preventDefault();
                          const y = x() ?? [];
                          y.length && O(
                            y[y.length - 1]
                          )();
                        }
                      }
                    })
                  }
                )
              ] }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "flex items-center [&>svg]:shrink-0",
                    v[t].icon
                  ),
                  children: C()
                }
              )
            ]
          }
        )
      ] });
    }
    return /* @__PURE__ */ M("div", { className: "w-full flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
      !!d && /* @__PURE__ */ i(
        "label",
        {
          className: m(
            v[t]?.label,
            "text-field-label"
          ),
          htmlFor: F,
          children: d
        }
      ),
      /* @__PURE__ */ M(
        "button",
        {
          id: F,
          ref: xe(z.setReference, R),
          className: m(
            "flex items-center justify-between w-full box-border transition-[outline,background-color,color,box-shadow] duration-200 bg-white",
            "outline outline-1 outline-field-border border-none cursor-pointer",
            !I && "focus:ring-2 focus:ring-offset-2 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong",
            v[t].selectButton,
            u && v[t].multiSelect,
            oe.selectButton,
            N
          ),
          tabIndex: 0,
          disabled: s,
          ..._,
          ...H(),
          children: [
            /* @__PURE__ */ M(
              "div",
              {
                className: m(
                  "flex-1 grid items-center justify-start gap-1.5 overflow-hidden",
                  x() && "flex flex-wrap"
                ),
                children: [
                  k(),
                  (u ? !x()?.length : !x()) && /* @__PURE__ */ i(
                    "div",
                    {
                      className: m(
                        "[grid-area:1/1/2/3] text-field-input px-1",
                        v[t].displaySelected,
                        oe.text
                      ),
                      children: h
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: m(
                  "flex items-center [&>svg]:shrink-0",
                  v[t].icon
                ),
                children: C()
              }
            )
          ]
        }
      )
    ] });
  }
);
function se({
  label: o,
  children: b,
  className: h,
  ...G
}) {
  const { index: c, totalGroups: d } = G, { sizeValue: N } = de();
  return /* @__PURE__ */ M(Se, { children: [
    /* @__PURE__ */ M("div", { className: "flex flex-col", role: "group", "aria-label": o, children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: m(
            "p-2 font-normal text-text-tertiary",
            {
              sm: "text-xs",
              md: "text-xs",
              lg: "text-sm"
            }[N],
            h
          ),
          id: `group-${o?.toLowerCase().replace(/\s+/g, "-")}`,
          children: o
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          className: "flex flex-col",
          role: "presentation",
          "aria-labelledby": `group-${o?.toLowerCase().replace(/\s+/g, "-")}`,
          children: b
        }
      )
    ] }),
    c < d && !!(b && P.count(b) > 0) && /* @__PURE__ */ i(
      "hr",
      {
        className: m(
          Ue,
          We[N]
        )
      }
    )
  ] });
}
function we({
  children: o,
  className: b
  // Additional class name for the dropdown.
}) {
  const {
    isOpen: h,
    context: G,
    refs: c,
    combobox: d,
    inlineSearch: N,
    floatingStyles: _,
    getFloatingProps: R,
    sizeValue: t,
    setSearchKeyword: H,
    setActiveIndex: x,
    setSelectedIndex: F,
    value: z,
    selected: I,
    getValues: u,
    searchKeyword: r,
    listContentRef: D,
    by: B,
    searchPlaceholder: V,
    activeIndex: W,
    searchFn: s,
    debounceDelay: j,
    selectId: g,
    optionValuesRef: S
  } = de(), U = te(() => {
    const l = u();
    let L = -1;
    if (l) {
      let C = P.toArray(o);
      C.length > 0 && T(C[0]) && C[0].type === se && (C = P.toArray(o).map(
        (k) => T(k) ? P.toArray(k.props.children) : []
      ).flat()), L = C.findIndex((k) => {
        if (!T(k))
          return !1;
        const O = k.props.value;
        return typeof O == "object" && typeof l == "object" ? O[B] === l[B] : O === l;
      });
    }
    return L;
  }, [z, I, o, B]);
  he(() => {
    h || (x(U), F(U));
  }, [U, h]), he(() => {
    h && (d && [-1, null].includes(W) || x(-1));
  }, [r, h]);
  const $ = te(() => {
    let l = 0, L = 0;
    P.forEach(o, (e) => {
      if (T(e) && e.type === se) {
        let a = !1;
        if (r && !s) {
          const n = r.toLowerCase(), A = (e.props.label?.toLowerCase() || "").includes(n), le = P.toArray(
            e.props.children
          ).some((p) => T(p) ? (ue(
            p.props.children
          )?.toLowerCase()).includes(n) : !1);
          a = A || le;
        } else
          a = !0;
        a && l++;
      }
    }), L = Math.max(0, l - 1);
    let C = 0, k = 0;
    S.current = [];
    const O = (e) => {
      if (!T(e))
        return null;
      if (e.type === se) {
        let n = !1;
        if (r && !s) {
          const p = r.toLowerCase();
          n = (e.props.label?.toLowerCase() || "").includes(p);
        }
        const y = P.map(
          e.props.children,
          (p) => {
            if (!T(p))
              return null;
            if (n) {
              const Z = C++;
              S.current[Z] = p.props.value;
              const f = {
                ...p.props,
                index: Z,
                id: `${g}-option-${Z}`
              };
              return ce(p, f);
            }
            if (r && !s) {
              const Z = ue(
                p.props.children
              )?.toLowerCase(), f = r.toLowerCase();
              if (!Z?.includes(f))
                return null;
            }
            const Y = C++;
            S.current[Y] = p.props.value;
            const pe = {
              ...p.props,
              index: Y,
              id: `${g}-option-${Y}`
            };
            return ce(p, pe);
          }
        );
        if (!y?.some(
          (p) => p !== null
        ))
          return null;
        const le = {
          ...e.props,
          children: y,
          index: k,
          totalGroups: L
        };
        return k++, ce(e, le);
      }
      if (r && !s) {
        const n = ue(
          e.props?.children
        )?.toLowerCase(), y = r.toLowerCase();
        if (!n?.includes(y))
          return null;
      }
      const a = C++;
      return S.current[a] = e.props.value, ce(e, {
        ...e.props,
        index: a,
        id: `${g}-option-${a}`
      });
    };
    return P.map(o, O);
  }, [
    r,
    z,
    I,
    o,
    s,
    g,
    S
  ]), q = P.count($);
  fe(() => {
    D.current = [];
    let l = P.toArray(o);
    l && T(l[0]) && l[0].type === se && (l = P.toArray(l).map(
      (L) => T(L) ? L.props.children : null
    ).filter(Boolean)), P.forEach(l, (L) => {
      if (!T(L))
        return;
      const C = ue(
        L.props?.children
      )?.toLowerCase();
      if (r && !s) {
        const k = r.toLowerCase();
        if (!C?.includes(k))
          return;
      }
      D.current.push(C);
    });
  }, [r, s]);
  const [E, ne] = ee(!1), K = ie(async () => {
    if (!(!s || typeof s != "function" || E)) {
      ne(!0);
      try {
        await s(r);
      } catch (l) {
        console.error(l);
      } finally {
        ne(!1);
      }
    }
  }, [r]), J = qe(K, j);
  fe(() => {
    typeof s == "function" && J();
  }, [J]);
  const X = /* @__PURE__ */ M(
    "div",
    {
      ref: c.setFloating,
      className: m(
        "box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle",
        d && !N && "grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle",
        v[t].dropdown,
        !(d && !N) && "h-auto",
        d && !N ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden",
        b
      ),
      style: {
        ..._,
        zIndex: 1
      },
      ...R(),
      children: [
        d && !N && /* @__PURE__ */ M(
          "div",
          {
            className: m(
              v[t].searchbarWrapper
            ),
            children: [
              E ? /* @__PURE__ */ i(
                Qe,
                {
                  className: v[t].searchbarIcon
                }
              ) : /* @__PURE__ */ i(
                Pe,
                {
                  className: m(
                    "text-icon-secondary shrink-0",
                    v[t].searchbarIcon
                  )
                }
              ),
              /* @__PURE__ */ i(
                "input",
                {
                  className: m(
                    "px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none",
                    v[t].searchbar
                  ),
                  type: "search",
                  name: "keyword",
                  "aria-label": "Search options",
                  placeholder: V,
                  onChange: (l) => H(l.target.value),
                  value: r,
                  autoComplete: "off"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            className: m(
              "overflow-y-auto overflow-x-hidden",
              !(d && !N) && "w-full h-full",
              v[t].dropdownItemsWrapper
            ),
            children: [
              !!q && $,
              !q && /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "p-2 text-center font-medium text-field-placeholder",
                    ge[t]
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
  return /* @__PURE__ */ i(me, { children: h && /* @__PURE__ */ i(me, { children: N ? X : /* @__PURE__ */ i(
    Me,
    {
      context: G,
      modal: !1,
      visuallyHiddenDismiss: !0,
      children: X
    }
  ) }) });
}
function Ce({ children: o, root: b, id: h }) {
  return /* @__PURE__ */ i(Fe, { id: h, root: b, children: o });
}
function ve({
  value: o,
  selected: b,
  children: h,
  className: G,
  ...c
}) {
  const {
    sizeValue: d,
    getItemProps: N,
    onKeyDownItem: _,
    onClickItem: R,
    activeIndex: t,
    selectedIndex: H,
    updateListRef: x,
    getValues: F,
    by: z,
    multiple: I,
    inlineSearch: u
  } = de(), { index: r, id: D } = c, B = re(r), V = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5"
  }, W = te(() => {
    if (!I)
      return !1;
    const g = F();
    return g ? g.some((S) => S !== null && o !== null && typeof S == "object" ? S[z] === o[z] : S === o) : !1;
  }, [o, F]), s = te(() => typeof b == "boolean" ? b : I ? W : r === H, [W, H, b]);
  let j;
  return u || (j = r === t ? 0 : -1), /* @__PURE__ */ M(
    "div",
    {
      id: D,
      className: m(
        "w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none",
        ge[d],
        r === t && "bg-button-tertiary-hover",
        G
      ),
      ref: (g) => {
        x(r, g);
      },
      role: "option",
      tabIndex: j,
      "aria-selected": s && r === t,
      ...N({
        // Handle pointer select.
        onClick() {
          R(B.current, o);
        },
        // Handle keyboard select.
        onKeyDown(g) {
          _(
            g,
            B.current,
            o
          );
        }
      }),
      children: [
        /* @__PURE__ */ i("span", { className: "w-full truncate", children: h }),
        s && /* @__PURE__ */ i(
          Oe,
          {
            className: m(
              "text-icon-on-color-disabled",
              V[d]
            )
          }
        )
      ]
    }
  );
}
const Ne = ({
  id: o,
  size: b = "md",
  // sm, md, lg
  value: h,
  // Value of the select (for controlled component).
  defaultValue: G,
  // Default value of the select (for uncontrolled component).
  onChange: c,
  // Callback function to handle the change event.
  by: d = "id",
  // Used to identify the select component. Default is 'id'.
  children: N,
  multiple: _ = !1,
  // If true, it will allow multiple selection.
  combobox: R = !1,
  // If true, it will show a search box.
  inlineSearch: t = !1,
  // If true, renders search input inside the trigger.
  disabled: H = !1,
  // If true, it will disable the select component.
  searchPlaceholder: x = "Search...",
  // Placeholder text for search box.
  searchFn: F,
  // Function to handle the search.
  debounceDelay: z = 500
  // Debounce delay for the search.
}) => {
  const I = te(() => o || `select-${He()}`, [o]), u = te(() => typeof h < "u", [h]);
  process.env.NODE_ENV !== "production" && R && t && console.warn(
    "force-ui Select: `inlineSearch` and `combobox` are mutually exclusive. `inlineSearch` will take precedence."
  );
  const [r, D] = ee(G), [B, V] = ee(""), W = ie(() => u ? h : r, [u, h, r]), [s, j] = ee(!1), [g, S] = ee(null), [U, $] = ee(null), q = {
    sm: R && !t ? 256 : 172,
    md: R && !t ? 256 : 216,
    lg: R && !t ? 256 : 216
  }, { refs: E, floatingStyles: ne, context: K } = ze({
    strategy: "fixed",
    placement: "bottom-start",
    open: s,
    onOpenChange: j,
    whileElementsMounted: Ve,
    middleware: [
      je(5),
      $e({ padding: 10 }),
      Te({
        apply({ rects: f, elements: w, availableHeight: Q }) {
          Object.assign(w.floating.style, {
            maxHeight: `min(${Q}px, ${q[b]}px)`,
            maxWidth: `${f.reference.width}px`
          });
        },
        padding: 10
      })
    ]
  }), J = re([]), X = re([]), l = re(!1), L = re([]);
  fe(() => {
    s || V("");
  }, [s]);
  const C = Be(K, {
    event: "mousedown",
    enabled: !t
  }), k = Ee(K), O = Ke(K, { role: "listbox" }), e = Ae(K, {
    listRef: J,
    activeIndex: g,
    selectedIndex: U,
    onNavigate: S,
    loop: !0,
    // virtual: input is the reference, items use aria-activedescendant rather than DOM focus.
    virtual: t
  }), a = Ge(K, {
    listRef: X,
    activeIndex: g,
    selectedIndex: U,
    onMatch: s ? S : $,
    onTypingChange(f) {
      l.current = f;
    }
  }), { getReferenceProps: n, getFloatingProps: y, getItemProps: A } = _e([
    k,
    O,
    e,
    C,
    ...!R && !t ? [a] : []
  ]), le = (f, w) => {
    const Q = [
      ...W() ?? []
    ];
    Q.findIndex((ae) => ae !== null && w !== null && typeof ae == "object" ? ae[d] === w[d] : ae === w) === -1 && (Q.push(w), u || D(Q), $(f), (E.domReference.current ?? E.reference.current)?.focus(), j(!1), V(""), typeof c == "function" && c(Q));
  }, p = (f, w) => {
    if (_)
      return le(f, w);
    $(f), u || D(w), (E.domReference.current ?? E.reference.current)?.focus(), j(!1), V(""), typeof c == "function" && c(w);
  }, Y = ie((f, w) => {
    J.current[f] = w;
  }, []), pe = (f, w) => {
    p(f, w);
  }, Z = (f, w, Q) => {
    f.key === "Enter" && (f.preventDefault(), p(w, Q)), f.key === " " && !l.current && (f.preventDefault(), p(w, Q));
  };
  return /* @__PURE__ */ i(
    ye.Provider,
    {
      value: {
        selectedIndex: U,
        setSelectedIndex: $,
        activeIndex: g,
        setActiveIndex: S,
        selected: r,
        setSelected: D,
        handleSelect: p,
        combobox: R,
        inlineSearch: t,
        optionValuesRef: L,
        sizeValue: b,
        multiple: _,
        onChange: c,
        isTypingRef: l,
        getItemProps: A,
        onClickItem: pe,
        onKeyDownItem: Z,
        getValues: W,
        selectId: I,
        getReferenceProps: n,
        isOpen: s,
        value: h,
        updateListRef: Y,
        refs: E,
        listContentRef: X,
        by: d,
        getFloatingProps: y,
        floatingStyles: ne,
        context: K,
        searchKeyword: B,
        setSearchKeyword: V,
        disabled: H,
        isControlled: u,
        searchPlaceholder: x,
        searchFn: F,
        debounceDelay: z
      },
      children: N
    }
  );
};
Ne.displayName = "Select";
const ut = Object.assign(Ne, {
  Portal: Ce,
  Button: be,
  Options: we,
  Option: ve,
  OptionGroup: se
});
Ce.displayName = "Select.Portal";
be.displayName = "Select.Button";
we.displayName = "Select.Options";
ve.displayName = "Select.Option";
se.displayName = "Select.OptionGroup";
export {
  be as SelectButton,
  ve as SelectItem,
  se as SelectOptionGroup,
  we as SelectOptions,
  Ce as SelectPortal,
  ut as default
};
//# sourceMappingURL=select.es.js.map
