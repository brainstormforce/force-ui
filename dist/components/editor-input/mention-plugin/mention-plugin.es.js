import { jsx as A } from "react/jsx-runtime";
import { useRef as x, useState as _, useCallback as m, useMemo as q, useEffect as g } from "react";
import { useLexicalComposerContext as J } from "@lexical/react/LexicalComposerContext";
import { LexicalTypeaheadMenuPlugin as X } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { $createMentionNode as Z, $isMentionNode as z } from "./mention-node.es.js";
import ee from "./mention-option-item.es.js";
import te from "./mention-hooks.es.js";
import T from "./mention-combobox.es.js";
import { $getSelection as ne, $createTextNode as oe, KEY_DOWN_COMMAND as re, COMMAND_PRIORITY_LOW as C, KEY_BACKSPACE_COMMAND as se, FOCUS_COMMAND as ce } from "lexical";
import { mergeRegister as ie } from "@lexical/utils";
import { useFloating as le, offset as ae, autoPlacement as ue, shift as fe, flip as me, autoUpdate as de } from "@floating-ui/react";
const Ne = ({
  optionsArray: k,
  by: p = "name",
  size: E = "md",
  trigger: O = "@",
  // Default trigger value
  menuComponent: w = T,
  menuItemComponent: v = T.Item,
  autoSpace: S = !0
}) => {
  const { y: D, refs: l, strategy: F } = le({
    placement: "bottom",
    strategy: "absolute",
    middleware: [ae(8), ue(), fe(), me()],
    whileElementsMounted: de
  }), a = x(!1), P = x(null), I = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, M = [O].join(""), N = "[^" + M + I + "\\s]", b = "(?:\\.[ |$]| |[" + I + "]|)", K = 75, G = new RegExp(
    `(^|\\s|\\()([${M}]((?:${N}${b}){0,${K}}))$`
  ), U = 50, W = new RegExp(
    `(^|\\s|\\()([${M}]((?:${N}){0,${U}}))$`
  ), B = (t) => {
    let e = G.exec(t);
    if (e === null && (e = W.exec(t)), e !== null) {
      const s = e[1], r = e[3];
      if (r.length >= 0)
        return {
          leadOffset: e.index + s.length,
          matchingString: r,
          replaceableString: e[2]
        };
    }
    return null;
  }, [o] = J(), [H, h] = _(null), [d, u] = _(!1), L = te(k, H, p), Y = m(
    (t, e, s) => {
      o.update(() => {
        const r = Z(
          t.data,
          p,
          E
        );
        e && e.replace(r), s(), u(!1);
      });
    },
    [o]
  ), f = q(() => L.map((t) => new ee(t)), [o, L]), y = m(
    (t) => {
      if (!S)
        return !1;
      const { key: e, ctrlKey: s, metaKey: r } = t;
      if (s || r || e === " " || e.length > 1 || a.current)
        return a.current && (a.current = !1), !1;
      const n = ne(), { focus: c, anchor: i } = n, [R] = n.getNodes();
      if (!i || !c || i?.key !== c?.key || i?.offset !== c?.offset || !R)
        return !1;
      if (z(R)) {
        const V = oe(" ");
        return R.insertAfter(V), !0;
      }
      return !1;
    },
    [o, O, S]
  ), j = m(
    (t) => {
      const { key: e } = t;
      return e === "Backspace" ? (a.current = !0, !0) : !1;
    },
    [a]
  ), $ = m(() => {
    u(!0);
  }, []), Q = m(() => ($(), !1), []);
  return g(() => {
    if (o)
      return ie(
        o.registerCommand(
          re,
          y,
          C
        ),
        o.registerCommand(
          se,
          j,
          C
        ),
        o.registerCommand(
          ce,
          Q,
          C
        )
      );
  }, [o, y]), g(() => {
    if (!o)
      return;
    const t = o.getRootElement()?.parentElement?.parentElement;
    t && l.setReference(t);
  }, [o, l]), g(() => {
    d || u(f.length > 0);
  }, [f]), g(() => {
    if (!d)
      return;
    const t = (r) => {
      const n = r.target, c = o.getRootElement(), i = l.floating.current;
      c && !c.contains(n) && i && !i.contains(n) && (u(!1), h(null));
    }, e = () => {
      setTimeout(() => {
        const r = o.getRootElement(), n = l.floating.current;
        if (r) {
          const i = r.ownerDocument.activeElement;
          n && (!i || !n.contains(i)) && (u(!1), h(null));
        }
      }, 100);
    };
    document.addEventListener("mousedown", t);
    const s = o.getRootElement();
    return s && s.addEventListener("blur", e, !0), () => {
      document.removeEventListener("mousedown", t), s && s.removeEventListener("blur", e, !0);
    };
  }, [d, o, l.floating]), /* @__PURE__ */ A(
    X,
    {
      onOpen: $,
      onQueryChange: h,
      onSelectOption: Y,
      triggerFn: B,
      options: f,
      menuRenderFn: (t, { selectedIndex: e, selectOptionAndCleanUp: s, setHighlightedIndex: r }) => !d || !t.current || !f?.length ? null : /* @__PURE__ */ A(
        w,
        {
          className: "w-full",
          size: E,
          ref: (n) => {
            l.setFloating(n), P.current = n;
          },
          style: {
            position: F,
            top: D ?? 0,
            left: -2,
            width: "calc(100% + 4px)"
          },
          children: f.map((n, c) => /* @__PURE__ */ A(
            v,
            {
              ref: n.ref,
              size: E,
              selected: c === e,
              onMouseEnter: () => {
                r(c);
              },
              onClick: () => s(n),
              children: typeof n.data == "string" ? n.data : n.data?.[p]
            },
            c
          ))
        }
      )
    }
  );
};
export {
  Ne as default
};
//# sourceMappingURL=mention-plugin.es.js.map
