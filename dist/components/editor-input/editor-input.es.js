import { jsx as o, jsxs as S } from "react/jsx-runtime";
import { AutoFocusPlugin as w } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer as I } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin as M } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable as O } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin as A } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary as R } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin as j } from "@lexical/react/LexicalOnChangePlugin";
import { EditorRefPlugin as B } from "@lexical/react/LexicalEditorRefPlugin";
import { cn as p } from "../../utilities/functions.es.js";
import { editableContentAreaCommonClassNames as F, editorDisabledClassNames as L, editorInputClassNames as U, editorCommonClassNames as _ } from "./editor-input-style.es.js";
import D from "./mention-plugin/mention-plugin.es.js";
import H from "./mention-plugin/mention-node.es.js";
import Y from "./editor-theme.es.js";
import k from "./editor-placeholder.es.js";
import { forwardRef as q, isValidElement as u } from "react";
import G from "./override-editor-style-plugin/override-editor-style.es.js";
import { MaxLengthPlugin as J } from "./character-limit-plugin/character-limit.es.js";
function K(e) {
  console.error(e);
}
const Q = `{
    "root": {
        "children": [
            {
                "children": [],
                "direction": null,
                "format": "",
                "indent": 0,
                "type": "paragraph",
                "version": 1,
                "textFormat": 0,
                "textStyle": ""
            }
        ],
        "direction": null,
        "format": "",
        "indent": 0,
        "type": "root",
        "version": 1
    }
}`, V = q(
  ({
    defaultValue: e = "",
    placeholder: r = "Press @ to view variable suggestions",
    onChange: t,
    size: i = "md",
    autoFocus: c = !1,
    options: C,
    by: g = "name",
    trigger: E = "@",
    menuComponent: n,
    menuItemComponent: m,
    className: h,
    wrapperClassName: N,
    disabled: a = !1,
    autoSpaceAfterMention: P = !1,
    style: v,
    maxLength: l
  }, s) => {
    const y = {
      namespace: "Editor",
      editorTheme: Y,
      onError: K,
      nodes: [H],
      editorState: e || Q,
      editable: !a
    }, x = (T, b) => {
      typeof t == "function" && t(T, b);
    };
    let d, f;
    return u(n) && (d = n), u(m) && (f = m), /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "relative w-full",
          _,
          U[i],
          a && L,
          N
        ),
        children: /* @__PURE__ */ S(I, { initialConfig: y, children: [
          /* @__PURE__ */ o("div", { className: "relative w-full [&_p]:m-0", children: /* @__PURE__ */ o(
            M,
            {
              contentEditable: /* @__PURE__ */ o(
                O,
                {
                  "aria-label": r || "Text editor",
                  className: p(
                    "editor-content focus-visible:outline-none outline-none",
                    F,
                    h
                  )
                }
              ),
              placeholder: /* @__PURE__ */ o(k, { content: r }),
              ErrorBoundary: R
            }
          ) }),
          /* @__PURE__ */ o(A, {}),
          /* @__PURE__ */ o(
            D,
            {
              menuComponent: d,
              menuItemComponent: f,
              size: i,
              by: g,
              optionsArray: C,
              trigger: E,
              autoSpace: P
            }
          ),
          /* @__PURE__ */ o(
            j,
            {
              onChange: x,
              ignoreSelectionChange: !0
            }
          ),
          s && /* @__PURE__ */ o(B, { editorRef: s }),
          c && /* @__PURE__ */ o(w, {}),
          /* @__PURE__ */ o(G, { style: v }),
          l && /* @__PURE__ */ o(J, { maxLength: l })
        ] })
      }
    );
  }
);
V.displayName = "EditorInput";
export {
  V as default
};
//# sourceMappingURL=editor-input.es.js.map
