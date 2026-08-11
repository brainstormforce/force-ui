import { jsx as C } from "react/jsx-runtime";
import { useRef as _, useMemo as D, useState as I, useCallback as h, useEffect as E } from "react";
import { useLexicalComposerContext as V } from "@lexical/react/LexicalComposerContext";
import { LexicalTypeaheadMenuPlugin as q } from "./lexical-typeahead-menu.es.js";
import { $createMentionNode as J, $isMentionNode as X } from "./mention-node.es.js";
import Z from "./mention-option-item.es.js";
import z from "./mention-hooks.es.js";
import k from "./mention-combobox.es.js";
import { $getSelection as ee, $createTextNode as te, KEY_DOWN_COMMAND as ne, COMMAND_PRIORITY_LOW as L, KEY_BACKSPACE_COMMAND as oe, FOCUS_COMMAND as re } from "lexical";
import { mergeRegister as se } from "@lexical/utils";
import { useFloating as ie, autoUpdate as ce, offset as ae, autoPlacement as ue, shift as le, flip as fe } from "@floating-ui/react";
const Ae = ({
  optionsArray: P,
  by: m = "name",
  size: R = "md",
  trigger: S = "@",
  // Default trigger value
  menuComponent: T = k,
  menuItemComponent: b = k.Item,
  autoSpace: x = !0,
  triggerRegex: N
}) => {
  const { y: F, refs: f, strategy: K } = ie({
    placement: "bottom",
    strategy: "absolute",
    middleware: [ae(8), ue(), le(), fe()],
    whileElementsMounted: ce
  }), d = _(!1), W = _(null), G = D(() => {
    if (N)
      return (u) => {
        const a = N.exec(u);
        if (a === null)
          return null;
        const A = a[1] ?? "";
        return {
          leadOffset: a.index + A.length,
          matchingString: a[3] ?? "",
          replaceableString: a[2] ?? ""
        };
      };
    const t = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, n = [S].join(""), r = "[^" + n + t + "\\s]", s = "(?:\\.[ |$]| |[" + t + "]|)", e = 75, i = new RegExp(
      `(^|\\s|\\()([${n}]((?:${r}${s}){0,${e}}))$`
    ), c = 50, l = new RegExp(
      `(^|\\s|\\()([${n}]((?:${r}){0,${c}}))$`
    );
    return (u) => {
      let a = i.exec(u);
      if (a === null && (a = l.exec(u)), a !== null) {
        const A = a[1], v = a[3];
        if (v.length >= 0)
          return {
            leadOffset: a.index + A.length,
            matchingString: v,
            replaceableString: a[2]
          };
      }
      return null;
    };
  }, [S, N]), [o] = V(), [U, O] = I(null), [M, g] = I(!1), [B, H] = I(
    void 0
  ), y = z(P, U, m), Y = h(
    (t, n, r) => {
      o.update(() => {
        const s = J(
          t.data,
          m,
          R
        );
        n && n.replace(s), r(), g(!1);
      });
    },
    [o]
  ), p = D(() => y.map(
    (t, n) => new Z(t, m, n)
  ), [y, m]), $ = h(
    (t) => {
      if (!x)
        return !1;
      const { key: n, ctrlKey: r, metaKey: s } = t;
      if (r || s || n === " " || n.length > 1 || d.current)
        return d.current && (d.current = !1), !1;
      const e = ee(), { focus: i, anchor: c } = e, [l] = e.getNodes();
      if (!c || !i || c?.key !== i?.key || c?.offset !== i?.offset || !l)
        return !1;
      if (X(l)) {
        const u = te(" ");
        return l.insertAfter(u), !0;
      }
      return !1;
    },
    [o, S, x]
  ), j = h(
    (t) => {
      const { key: n } = t;
      return n === "Backspace" ? (d.current = !0, !0) : !1;
    },
    [d]
  ), w = h(() => {
    g(!0);
  }, []), Q = h(() => (w(), !1), []);
  return E(() => {
    if (o)
      return se(
        o.registerCommand(
          ne,
          $,
          L
        ),
        o.registerCommand(
          oe,
          j,
          L
        ),
        o.registerCommand(
          re,
          Q,
          L
        )
      );
  }, [o, $]), E(() => {
    if (!o)
      return;
    const t = () => {
      const n = o.getRootElement()?.getRootNode(), r = n instanceof ShadowRoot ? n : void 0;
      H(
        (s) => s === r ? s : r
      );
    };
    return t(), o.registerRootListener(t);
  }, [o]), E(() => {
    if (!o)
      return;
    const t = o.getRootElement()?.parentElement?.parentElement;
    t && f.setReference(t);
  }, [o, f]), E(() => {
    M || g(p.length > 0);
  }, [p]), E(() => {
    if (!M)
      return;
    const t = (s) => {
      const e = o.getRootElement(), i = f.floating.current, c = s.composedPath(), l = !!e && c.includes(e), u = !!i && c.includes(i);
      !l && !u && (g(!1), O(null));
    }, n = () => {
      setTimeout(() => {
        const s = o.getRootElement(), e = f.floating.current;
        if (s) {
          const i = s.getRootNode(), c = i instanceof ShadowRoot ? i.activeElement : s.ownerDocument.activeElement;
          e && (!c || !e.contains(c)) && (g(!1), O(null));
        }
      }, 100);
    };
    document.addEventListener("mousedown", t);
    const r = o.getRootElement();
    return r && r.addEventListener("blur", n, !0), () => {
      document.removeEventListener("mousedown", t), r && r.removeEventListener("blur", n, !0);
    };
  }, [M, o, f.floating]), /* @__PURE__ */ C(
    q,
    {
      onOpen: w,
      onQueryChange: O,
      onSelectOption: Y,
      triggerFn: G,
      options: p,
      parent: B,
      menuRenderFn: (t, { selectedIndex: n, selectOptionAndCleanUp: r, setHighlightedIndex: s }) => !M || !t.current || !p?.length ? null : /* @__PURE__ */ C(
        T,
        {
          className: "w-full",
          size: R,
          ref: (e) => {
            f.setFloating(e), W.current = e;
          },
          onMouseDown: (e) => e.preventDefault(),
          style: {
            position: K,
            top: F ?? 0,
            // Match the editor's width exactly: 100% of the
            // editor wrapper, with border-box so the menu's own
            // padding/border don't make it wider than the editor.
            left: 0,
            width: "100%",
            boxSizing: "border-box"
          },
          children: p.map((e, i) => /* @__PURE__ */ C(
            b,
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
