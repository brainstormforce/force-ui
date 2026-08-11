import { useLexicalComposerContext as f } from "@lexical/react/LexicalComposerContext";
import { $trimTextContentFromAnchor as d } from "@lexical/selection";
import { $restoreEditorState as m } from "@lexical/utils";
import { RootNode as u, $getSelection as p, $isRangeSelection as S, $getRoot as C } from "lexical";
import { useEffect as x } from "react";
function l(n) {
  const r = C().getTextContentSize();
  let o = 0;
  const t = n._nodeMap;
  for (const [, i] of t)
    i.__type === "mention" && (o += 1);
  return r + o;
}
function N({ maxLength: n }) {
  const [e] = f();
  return x(() => {
    let r = null;
    return e.registerNodeTransform(u, () => {
      const o = p();
      if (!S(o) || !o.isCollapsed())
        return;
      const t = e.getEditorState(), i = t.read(
        () => l(t)
      ), s = l(t);
      if (i !== s) {
        const c = s - n, a = o.anchor;
        c > 0 && (i === n && r !== t ? (r = t, m(e, t)) : d(e, a, c));
      }
    });
  }, [e, n]), null;
}
export {
  N as MaxLengthPlugin,
  N as default
};
//# sourceMappingURL=character-limit.es.js.map
