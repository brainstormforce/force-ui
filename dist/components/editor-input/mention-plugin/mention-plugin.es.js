import { jsx as A } from "react/jsx-runtime";
import { useRef as y, useMemo as v, useState as C, useCallback as E, useEffect as M } from "react";
import { useLexicalComposerContext as Q } from "@lexical/react/LexicalComposerContext";
import { LexicalTypeaheadMenuPlugin as V } from "./lexical-typeahead-menu.es.js";
import { $createMentionNode as q, $isMentionNode as J } from "./mention-node.es.js";
import X from "./mention-option-item.es.js";
import Z from "./mention-hooks.es.js";
import _ from "./mention-combobox.es.js";
import { $getSelection as z, $createTextNode as ee, KEY_DOWN_COMMAND as te, COMMAND_PRIORITY_LOW as I, KEY_BACKSPACE_COMMAND as ne, FOCUS_COMMAND as oe } from "lexical";
import { mergeRegister as re } from "@lexical/utils";
import { useFloating as se, autoUpdate as ie, offset as ce, autoPlacement as ue, shift as ae, flip as le } from "@floating-ui/react";
const Ae = ({
  optionsArray: D,
  by: m = "name",
  size: R = "md",
  trigger: N = "@",
  // Default trigger value
  menuComponent: k = _,
  menuItemComponent: P = _.Item,
  autoSpace: O = !0
}) => {
  const { y: T, refs: l, strategy: F } = se({
    placement: "bottom",
    strategy: "absolute",
    middleware: [ce(8), ue(), ae(), le()],
    whileElementsMounted: ie
  }), d = y(!1), b = y(null), K = v(() => {
    const t = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, n = [N].join(""), r = "[^" + n + t + "\\s]", s = "(?:\\.[ |$]| |[" + t + "]|)", e = 75, i = new RegExp(
      `(^|\\s|\\()([${n}]((?:${r}${s}){0,${e}}))$`
    ), c = 50, u = new RegExp(
      `(^|\\s|\\()([${n}]((?:${r}){0,${c}}))$`
    );
    return (f) => {
      let a = i.exec(f);
      if (a === null && (a = u.exec(f)), a !== null) {
        const j = a[1], w = a[3];
        if (w.length >= 0)
          return {
            leadOffset: a.index + j.length,
            matchingString: w,
            replaceableString: a[2]
          };
      }
      return null;
    };
  }, [N]), [o] = Q(), [G, S] = C(null), [h, g] = C(!1), [U, W] = C(
    void 0
  ), L = Z(D, G, m), B = E(
    (t, n, r) => {
      o.update(() => {
        const s = q(
          t.data,
          m,
          R
        );
        n && n.replace(s), r(), g(!1);
      });
    },
    [o]
  ), p = v(() => L.map(
    (t, n) => new X(t, m, n)
  ), [L, m]), x = E(
    (t) => {
      if (!O)
        return !1;
      const { key: n, ctrlKey: r, metaKey: s } = t;
      if (r || s || n === " " || n.length > 1 || d.current)
        return d.current && (d.current = !1), !1;
      const e = z(), { focus: i, anchor: c } = e, [u] = e.getNodes();
      if (!c || !i || c?.key !== i?.key || c?.offset !== i?.offset || !u)
        return !1;
      if (J(u)) {
        const f = ee(" ");
        return u.insertAfter(f), !0;
      }
      return !1;
    },
    [o, N, O]
  ), H = E(
    (t) => {
      const { key: n } = t;
      return n === "Backspace" ? (d.current = !0, !0) : !1;
    },
    [d]
  ), $ = E(() => {
    g(!0);
  }, []), Y = E(() => ($(), !1), []);
  return M(() => {
    if (o)
      return re(
        o.registerCommand(
          te,
          x,
          I
        ),
        o.registerCommand(
          ne,
          H,
          I
        ),
        o.registerCommand(
          oe,
          Y,
          I
        )
      );
  }, [o, x]), M(() => {
    if (!o)
      return;
    const t = () => {
      const n = o.getRootElement()?.getRootNode(), r = n instanceof ShadowRoot ? n : void 0;
      W(
        (s) => s === r ? s : r
      );
    };
    return t(), o.registerRootListener(t);
  }, [o]), M(() => {
    if (!o)
      return;
    const t = o.getRootElement()?.parentElement?.parentElement;
    t && l.setReference(t);
  }, [o, l]), M(() => {
    h || g(p.length > 0);
  }, [p]), M(() => {
    if (!h)
      return;
    const t = (s) => {
      const e = o.getRootElement(), i = l.floating.current, c = s.composedPath(), u = !!e && c.includes(e), f = !!i && c.includes(i);
      !u && !f && (g(!1), S(null));
    }, n = () => {
      setTimeout(() => {
        const s = o.getRootElement(), e = l.floating.current;
        if (s) {
          const i = s.getRootNode(), c = i instanceof ShadowRoot ? i.activeElement : s.ownerDocument.activeElement;
          e && (!c || !e.contains(c)) && (g(!1), S(null));
        }
      }, 100);
    };
    document.addEventListener("mousedown", t);
    const r = o.getRootElement();
    return r && r.addEventListener("blur", n, !0), () => {
      document.removeEventListener("mousedown", t), r && r.removeEventListener("blur", n, !0);
    };
  }, [h, o, l.floating]), /* @__PURE__ */ A(
    V,
    {
      onOpen: $,
      onQueryChange: S,
      onSelectOption: B,
      triggerFn: K,
      options: p,
      parent: U,
      menuRenderFn: (t, { selectedIndex: n, selectOptionAndCleanUp: r, setHighlightedIndex: s }) => !h || !t.current || !p?.length ? null : /* @__PURE__ */ A(
        k,
        {
          className: "w-full",
          size: R,
          ref: (e) => {
            l.setFloating(e), b.current = e;
          },
          onMouseDown: (e) => e.preventDefault(),
          style: {
            position: F,
            top: T ?? 0,
            // Match the editor's width exactly: 100% of the
            // editor wrapper, with border-box so the menu's own
            // padding/border don't make it wider than the editor.
            left: 0,
            width: "100%",
            boxSizing: "border-box"
          },
          children: p.map((e, i) => /* @__PURE__ */ A(
            P,
            {
              ref: e.ref,
              size: R,
              selected: i === n,
              onMouseDown: (c) => c.preventDefault(),
              onMouseEnter: () => {
                s(i);
              },
              onClick: () => r(e),
              children: typeof e.data == "string" ? e.data : e.data?.[m]
            },
            e.key
          ))
        }
      )
    }
  );
};
export {
  Ae as default
};
//# sourceMappingURL=mention-plugin.es.js.map
