import { jsx as p } from "react/jsx-runtime";
import { useRef as w, useState as F, useCallback as d, useMemo as H, useEffect as W } from "react";
import { useLexicalComposerContext as Y } from "@lexical/react/LexicalComposerContext";
import { LexicalTypeaheadMenuPlugin as j } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { $createMentionNode as B, $isMentionNode as Q } from "./mention-node.es.js";
import U from "./mention-option-item.es.js";
import V from "./mention-hooks.es.js";
import $ from "./mention-combobox.es.js";
import { $getSelection as q, $createTextNode as v, KEY_DOWN_COMMAND as J, COMMAND_PRIORITY_LOW as h, KEY_BACKSPACE_COMMAND as X } from "lexical";
import { mergeRegister as Z } from "@lexical/utils";
const ae = ({
  optionsArray: x,
  by: u = "name",
  size: a = "md",
  trigger: A = "@",
  // Default trigger value
  menuComponent: O = $,
  menuItemComponent: L = $.Item,
  autoSpace: M = !0
}) => {
  const i = w(!1), S = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, f = [A].join(""), C = "[^" + f + S + "\\s]", R = "(?:\\.[ |$]| |[" + S + "]|)", _ = 75, y = new RegExp(
    `(^|\\s|\\()([${f}]((?:${C}${R}){0,${_}}))$`
  ), E = 50, T = new RegExp(
    `(^|\\s|\\()([${f}]((?:${C}){0,${E}}))$`
  ), k = (t) => {
    let e = y.exec(t);
    if (e === null && (e = T.exec(t)), e !== null) {
      const s = e[1], r = e[3];
      if (r.length >= 0)
        return {
          leadOffset: e.index + s.length,
          matchingString: r,
          replaceableString: e[2]
        };
    }
    return null;
  }, [n] = Y(), [D, K] = F(null), I = V(x, D, u), P = d(
    (t, e, s) => {
      n.update(() => {
        const r = B(
          t.data,
          u,
          a
        );
        e && e.replace(r), s();
      });
    },
    [n]
  ), m = H(() => I.map((t) => new U(t)), [n, I]), N = d(
    (t) => {
      if (!M)
        return !1;
      const { key: e, ctrlKey: s, metaKey: r } = t;
      if (s || r || e === " " || e.length > 1 || i.current)
        return i.current && (i.current = !1), !1;
      const o = q(), { focus: c, anchor: l } = o, [g] = o.getNodes();
      if (!l || !c || l?.key !== c?.key || l?.offset !== c?.offset || !g)
        return !1;
      if (Q(g)) {
        const b = v(" ");
        return g.insertAfter(b), !0;
      }
      return !1;
    },
    [n, A, M]
  ), G = d(
    (t) => {
      const { key: e } = t;
      return e === "Backspace" ? (i.current = !0, !0) : !1;
    },
    [i]
  );
  return W(() => {
    if (n)
      return Z(
        n.registerCommand(
          J,
          N,
          h
        ),
        n.registerCommand(
          X,
          G,
          h
        )
      );
  }, [n, N]), /* @__PURE__ */ p(
    j,
    {
      onQueryChange: K,
      onSelectOption: P,
      triggerFn: k,
      options: m,
      menuRenderFn: (t, { selectedIndex: e, selectOptionAndCleanUp: s, setHighlightedIndex: r }) => t.current && m?.length ? /* @__PURE__ */ p(O, { size: a, children: m.map((o, c) => /* @__PURE__ */ p(
        L,
        {
          ref: o.ref,
          size: a,
          selected: c === e,
          onMouseEnter: () => {
            r(c);
          },
          onClick: () => s(o),
          children: typeof o.data == "string" ? o.data : o.data?.[u]
        },
        c
      )) }) : null
    }
  );
};
export {
  ae as default
};
//# sourceMappingURL=mention-plugin.es.js.map
