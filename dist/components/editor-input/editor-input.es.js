import { jsx as o, jsxs as S } from "react/jsx-runtime";
import { AutoFocusPlugin as w } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer as I } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin as M } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable as O } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin as A } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary as R } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin as j } from "@lexical/react/LexicalOnChangePlugin";
import { EditorRefPlugin as B } from "@lexical/react/LexicalEditorRefPlugin";
import { cn as f } from "../../utilities/functions.es.js";
import { editableContentAreaCommonClassNames as F, editorDisabledClassNames as L, editorInputClassNames as U, editorCommonClassNames as _ } from "./editor-input-style.es.js";
import D from "./mention-plugin/mention-plugin.es.js";
import H from "./mention-plugin/mention-node.es.js";
import Y from "./editor-theme.es.js";
import k from "./editor-placeholder.es.js";
import { forwardRef as q, isValidElement as p } from "react";
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
    placeholder: c = "Press @ to view variable suggestions",
    onChange: r,
    size: t = "md",
    autoFocus: u = !1,
    options: C,
    by: g = "name",
    trigger: E = "@",
    menuComponent: i,
    menuItemComponent: n,
    className: h,
    wrapperClassName: N,
    disabled: m = !1,
    autoSpaceAfterMention: P = !1,
    style: v,
    maxLength: l
  }, a) => {
    const y = {
      namespace: "Editor",
      editorTheme: Y,
      onError: K,
      nodes: [H],
      editorState: e || Q,
      editable: !m
    }, x = (T, b) => {
      typeof r == "function" && r(T, b);
    };
    let s, d;
    return p(i) && (s = i), p(n) && (d = n), /* @__PURE__ */ o(
      "div",
      {
        className: f(
          "relative w-full",
          _,
          U[t],
          m && L,
          N
        ),
        children: /* @__PURE__ */ S(I, { initialConfig: y, children: [
          /* @__PURE__ */ o("div", { className: "relative w-full [&_p]:m-0", children: /* @__PURE__ */ o(
            M,
            {
              contentEditable: /* @__PURE__ */ o(
                O,
                {
                  className: f(
                    "editor-content focus-visible:outline-none outline-none",
                    F,
                    h
                  )
                }
              ),
              placeholder: /* @__PURE__ */ o(k, { content: c }),
              ErrorBoundary: R
            }
          ) }),
          /* @__PURE__ */ o(A, {}),
          /* @__PURE__ */ o(
            D,
            {
              menuComponent: s,
              menuItemComponent: d,
              size: t,
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
          a && /* @__PURE__ */ o(B, { editorRef: a }),
          u && /* @__PURE__ */ o(w, {}),
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
