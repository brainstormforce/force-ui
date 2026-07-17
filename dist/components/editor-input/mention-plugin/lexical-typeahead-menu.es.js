import { jsx as $ } from "react/jsx-runtime";
import { useLexicalComposerContext as I } from "@lexical/react/LexicalComposerContext";
import { useDynamicPositioning as W } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { MenuOption as Ee } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { mergeRegister as T } from "@lexical/utils";
import { COMMAND_PRIORITY_LOW as L, $getSelection as A, $isRangeSelection as N, KEY_ARROW_DOWN_COMMAND as Y, KEY_ARROW_UP_COMMAND as H, KEY_ESCAPE_COMMAND as U, KEY_TAB_COMMAND as K, KEY_ENTER_COMMAND as V, createCommand as B, $isTextNode as k, getDOMSelectionForEditor as Q } from "lexical";
import { useState as P, useCallback as R, useEffect as x, useRef as X, useLayoutEffect as j, startTransition as q } from "react";
const _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", z = _ ? j : x, v = B("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function G(t, e) {
  return t === null ? 0 : t !== e - 1 ? t + 1 : 0;
}
function J(t, e) {
  return t === null ? e - 1 : t !== 0 ? t - 1 : e - 1;
}
const D = (t) => {
  t.scrollIntoView({ block: "nearest", inline: "nearest" });
};
function Z(t, e, u) {
  let l = u;
  for (let n = l; n <= e.length; n++)
    t.slice(-n) === e.substring(0, n) && (l = n);
  return l;
}
function F(t) {
  const e = A();
  if (!N(e) || !e.isCollapsed())
    return null;
  const u = e.anchor;
  if (u.type !== "text")
    return null;
  const l = u.getNode();
  if (!l.isSimpleText())
    return null;
  const n = u.offset, m = l.getTextContent().slice(0, n), c = t.replaceableString.length, C = Z(
    m,
    t.matchingString,
    c
  ), g = n - C;
  if (g < 0)
    return null;
  let a;
  return g === 0 ? [a] = l.splitText(n) : [, a] = l.splitText(g, n), a;
}
function ee(t) {
  const e = t.anchor;
  if (e.type !== "text")
    return null;
  const u = e.getNode();
  if (!u.isSimpleText())
    return null;
  const l = e.offset;
  return u.getTextContent().slice(0, l);
}
function te(t, e, u) {
  const l = Q(u);
  if (l === null || !l.isCollapsed)
    return !1;
  const n = l.anchorNode, m = t, c = l.anchorOffset;
  if (n === null || c === null)
    return !1;
  try {
    e.setStart(n, m), e.setEnd(n, c);
  } catch {
    return !1;
  }
  return !0;
}
function ne(t) {
  let e = null;
  return t.getEditorState().read(() => {
    const u = A();
    N(u) && (e = ee(u));
  }), e;
}
function re(t, e) {
  return e !== 0 ? !1 : t.getEditorState().read(() => {
    const u = A();
    if (N(u)) {
      const m = u.anchor.getNode().getPreviousSibling();
      return k(m) && m.isTextEntity();
    }
    return !1;
  });
}
function le(t, e) {
  e !== void 0 && (t.className = e), t.setAttribute("aria-label", "Typeahead menu"), t.setAttribute("role", "listbox"), t.style.display = "block", t.style.position = "absolute";
}
function ie(t, e, u, l = _ ? document.body : void 0, n = !0) {
  const [m] = I(), c = X(null);
  t !== null && c.current === null && _ && (c.current = document.createElement("div"));
  const C = R(() => {
    if (c.current === null || l === void 0)
      return;
    c.current.style.top = c.current.style.bottom;
    const a = m.getRootElement(), s = c.current, E = s.firstChild;
    if (a !== null && t !== null) {
      const { left: i, top: f, width: O, height: h } = t.getRect(), r = c.current.offsetHeight;
      if (s.style.top = `${f + r + 3 + (n ? window.pageYOffset : 0)}px`, s.style.left = `${i + window.pageXOffset}px`, s.style.height = `${h}px`, s.style.width = `${O}px`, E !== null) {
        E.style.top = `${f}`;
        const o = E.getBoundingClientRect(), d = o.height, p = o.width, S = a.getBoundingClientRect();
        i + p > S.right && (s.style.left = `${S.right - p + window.pageXOffset}px`), (f + d > window.innerHeight || f + d > S.bottom) && f - S.top > d + h && (s.style.top = `${f - d - h + (n ? window.pageYOffset : 0)}px`);
      }
      s.isConnected || (le(s, u), l.append(s)), s.setAttribute("id", "typeahead-menu"), a.setAttribute("aria-controls", "typeahead-menu");
    }
  }, [
    m,
    t,
    n,
    u,
    l
  ]);
  x(() => {
    const a = m.getRootElement();
    return t !== null && C(), () => {
      a !== null && a.removeAttribute("aria-controls");
      const s = c.current;
      s !== null && s.isConnected && (s.remove(), s.removeAttribute("id"));
    };
  }, [m, C, t]);
  const g = R(
    (a) => {
      t !== null && (a || e(null));
    },
    [t, e]
  );
  return W(
    t,
    c.current,
    C,
    g
  ), c;
}
function oe({
  close: t,
  editor: e,
  anchorElementRef: u,
  resolution: l,
  options: n,
  menuRenderFn: m,
  onSelectOption: c,
  shouldSplitNodeWithQuery: C = !1,
  commandPriority: g = L,
  preselectFirstItem: a = !0
}) {
  const [s, E] = P(null), i = s !== null ? Math.min(n.length - 1, s) : null, f = l.match && l.match.matchingString || null;
  x(() => {
    a && E(0);
  }, [f, a]);
  const O = R(
    (r) => {
      e.update(() => {
        const o = l.match && C ? F(l.match) : null;
        c(
          r,
          o,
          t,
          l.match ? l.match.matchingString : ""
        );
      });
    },
    [
      e,
      C,
      l.match,
      c,
      t
    ]
  ), h = R(
    (r) => {
      const o = e.getRootElement();
      o !== null && (o.setAttribute(
        "aria-activedescendant",
        "typeahead-item-" + r
      ), E(r));
    },
    [e]
  );
  return x(() => () => {
    const r = e.getRootElement();
    r !== null && r.removeAttribute("aria-activedescendant");
  }, [e]), z(() => {
    n === null ? E(null) : i === null && a && h(0);
  }, [n, i, h, a]), x(() => T(
    e.registerCommand(
      v,
      ({ option: r }) => r.ref && r.ref.current !== null ? (D(r.ref.current), !0) : !1,
      g
    )
  ), [e, h, g]), x(() => T(
    e.registerCommand(
      Y,
      (r) => {
        const o = r;
        if (n !== null && n.length) {
          const d = G(
            i,
            n.length
          );
          h(d);
          const p = n[d];
          if (!p)
            return h(-1), o.preventDefault(), o.stopImmediatePropagation(), !0;
          p.ref && p.ref.current && e.dispatchCommand(
            v,
            { index: d, option: p }
          ), o.preventDefault(), o.stopImmediatePropagation();
        }
        return !0;
      },
      g
    ),
    e.registerCommand(
      H,
      (r) => {
        const o = r;
        if (n !== null && n.length) {
          const d = J(
            i,
            n.length
          );
          h(d);
          const p = n[d];
          if (!p)
            return h(-1), o.preventDefault(), o.stopImmediatePropagation(), !0;
          p.ref && p.ref.current && D(p.ref.current), o.preventDefault(), o.stopImmediatePropagation();
        }
        return !0;
      },
      g
    ),
    e.registerCommand(
      U,
      (r) => {
        const o = r;
        return o.preventDefault(), o.stopImmediatePropagation(), t(), !0;
      },
      g
    ),
    e.registerCommand(
      K,
      (r) => {
        const o = r;
        return n === null || i === null || !n[i] ? !1 : (o.preventDefault(), o.stopImmediatePropagation(), O(n[i]), !0);
      },
      g
    ),
    e.registerCommand(
      V,
      (r) => n === null || i === null || !n[i] ? !1 : (r !== null && (r.preventDefault(), r.stopImmediatePropagation()), O(n[i]), !0),
      g
    )
  ), [
    O,
    t,
    e,
    n,
    i,
    h,
    g
  ]), m(
    u,
    { selectedIndex: i, selectOptionAndCleanUp: O, setHighlightedIndex: E },
    f
  );
}
function me({
  options: t,
  onQueryChange: e,
  onSelectOption: u,
  onOpen: l,
  onClose: n,
  menuRenderFn: m,
  triggerFn: c,
  anchorClassName: C,
  commandPriority: g = L,
  parent: a,
  preselectFirstItem: s = !0,
  ignoreEntityBoundary: E = !1
}) {
  const [i] = I(), [f, O] = P(
    null
  ), h = ie(
    f,
    O,
    C,
    a
  ), r = R(() => {
    O(null), n !== void 0 && f !== null && n();
  }, [n, f]), o = R(
    (d) => {
      O(d), l !== void 0 && f === null && l(d);
    },
    [l, f]
  );
  return x(() => {
    const d = () => {
      i.getEditorState().read(() => {
        if (!i.isEditable()) {
          r();
          return;
        }
        if (i.isComposing())
          return;
        const y = (i._window || window).document.createRange(), b = A(), M = ne(i);
        if (!N(b) || !b.isCollapsed() || M === null || y === null) {
          r();
          return;
        }
        const w = c(M, i);
        if (e(w ? w.matchingString : null), w !== null && (E || !re(
          i,
          w.leadOffset
        )) && te(
          w.leadOffset,
          y,
          i
        )) {
          q(
            () => o({
              getRect: () => y.getBoundingClientRect(),
              match: w
            })
          );
          return;
        }
        r();
      });
    }, p = i.registerUpdateListener(d);
    return () => {
      p();
    };
  }, [
    i,
    c,
    e,
    f,
    r,
    o,
    E
  ]), x(
    () => i.registerEditableListener((d) => {
      d || r();
    }),
    [i, r]
  ), f === null || i === null || h.current === null ? null : /* @__PURE__ */ $(
    oe,
    {
      close: r,
      resolution: f,
      editor: i,
      anchorElementRef: h,
      options: t,
      menuRenderFn: m,
      shouldSplitNodeWithQuery: !0,
      onSelectOption: u,
      commandPriority: g,
      preselectFirstItem: s
    }
  );
}
export {
  me as LexicalTypeaheadMenuPlugin,
  Ee as MenuOption
};
//# sourceMappingURL=lexical-typeahead-menu.es.js.map
