import { jsx as o, jsxs as T } from "react/jsx-runtime";
import { AutoFocusPlugin as b } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer as w } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin as I } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable as S } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin as A } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary as M } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin as O } from "@lexical/react/LexicalOnChangePlugin";
import { EditorRefPlugin as R } from "@lexical/react/LexicalEditorRefPlugin";
import { cn as d } from "../../utilities/functions.es.js";
import { editorDisabledClassNames as j, editorInputClassNames as B, editorCommonClassNames as F, editableContentAreaCommonClassNames as L } from "./editor-input-style.es.js";
import U from "./mention-plugin/mention-plugin.es.js";
import _ from "./mention-plugin/mention-node.es.js";
import D from "./editor-theme.es.js";
import H from "./editor-placeholder.es.js";
import { forwardRef as Y, isValidElement as f } from "react";
function k(e) {
  console.error(e);
}
const q = `{
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
}`, G = Y(
  ({
    defaultValue: e = "",
    placeholder: p = "Press @ to view variable suggestions",
    onChange: t,
    size: r = "md",
    autoFocus: c = !1,
    options: u,
    by: C = "name",
    trigger: g = "@",
    menuComponent: n,
    menuItemComponent: i,
    className: h,
    wrapperClassName: E,
    disabled: m = !1,
    autoSpaceAfterMention: N = !1
  }, a) => {
    const P = {
      namespace: "Editor",
      editorTheme: D,
      onError: k,
      nodes: [_],
      editorState: e || q,
      editable: !m
    }, v = (y, x) => {
      typeof t == "function" && t(y, x);
    };
    let l, s;
    return f(n) && (l = n), f(i) && (s = i), /* @__PURE__ */ o(
      "div",
      {
        className: d(
          "relative w-full",
          F,
          B[r],
          m && j,
          E
        ),
        children: /* @__PURE__ */ T(w, { initialConfig: P, children: [
          /* @__PURE__ */ o("div", { className: "relative w-full [&_p]:m-0", children: /* @__PURE__ */ o(
            I,
            {
              contentEditable: /* @__PURE__ */ o(
                S,
                {
                  className: d(
                    "editor-content focus-visible:outline-none outline-none",
                    L,
                    h
                  )
                }
              ),
              placeholder: /* @__PURE__ */ o(H, { content: p }),
              ErrorBoundary: M
            }
          ) }),
          /* @__PURE__ */ o(A, {}),
          /* @__PURE__ */ o(
            U,
            {
              menuComponent: l,
              menuItemComponent: s,
              size: r,
              by: C,
              optionsArray: u,
              trigger: g,
              autoSpace: N
            }
          ),
          /* @__PURE__ */ o(
            O,
            {
              onChange: v,
              ignoreSelectionChange: !0
            }
          ),
          a && /* @__PURE__ */ o(R, { editorRef: a }),
          c && /* @__PURE__ */ o(b, {})
        ] })
      }
    );
  }
);
G.displayName = "EditorInput";
export {
  G as default
};
//# sourceMappingURL=editor-input.es.js.map
