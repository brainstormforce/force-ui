import { jsx as R } from "react/jsx-runtime";
import { useCallback as m, useEffect as S } from "react";
import { useLexicalComposerContext as M } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey as l, $isElementNode as d, $isTextNode as p, $isDecoratorNode as g, KEY_ARROW_LEFT_COMMAND as _, COMMAND_PRIORITY_LOW as N, KEY_ARROW_RIGHT_COMMAND as v } from "lexical";
import { mergeRegister as A } from "@lexical/utils";
import D from "../../badge/badge.es.js";
const E = (s) => {
  switch (s) {
    case "sm":
      return "xs";
    case "md":
      return "sm";
    case "lg":
      return "md";
    default:
      return "sm";
  }
}, w = ({
  data: s,
  by: x,
  size: C,
  nodeKey: n
}) => {
  const [i] = M(), u = !i.isEditable(), b = (o) => {
    o.stopPropagation(), o.preventDefault(), !u && i.update(() => {
      const r = l(n);
      r && r.remove();
    });
  };
  let c = s;
  typeof s == "object" && (c = s[x]);
  const f = m(
    (o) => {
      const r = l(n);
      if (!r || !r.isSelected())
        return !1;
      let t = !1;
      const e = r.getPreviousSibling();
      return d(e) && (e.selectEnd(), t = !0), p(e) && (e.select(), t = !0), g(e) && (e.selectNext(), t = !0), e === null && (r.selectPrevious(), t = !0), t && o.preventDefault(), t;
    },
    [n]
  ), a = m(
    (o) => {
      const r = l(n);
      if (!r || !r.isSelected())
        return !1;
      let t = !1;
      const e = r.getNextSibling();
      return d(e) && (e.selectStart(), t = !0), p(e) && (e.select(0, 0), t = !0), g(e) && (e.selectPrevious(), t = !0), e === null && (r.selectNext(), t = !0), t && o.preventDefault(), t;
    },
    [n]
  );
  return S(() => {
    const o = A(
      i.registerCommand(
        _,
        f,
        N
      ),
      i.registerCommand(
        v,
        a,
        N
      )
    );
    return () => {
      o();
    };
  }, [i, f, a]), /* @__PURE__ */ R(
    D,
    {
      className: "inline-flex",
      type: "rounded",
      size: E(C),
      label: c,
      icon: null,
      closable: !0,
      onClose: b,
      disabled: u
    }
  );
};
export {
  w as default
};
//# sourceMappingURL=mention-component.es.js.map
