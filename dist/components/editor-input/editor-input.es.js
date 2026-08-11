"use client";
import { jsx as o, jsxs as w } from "react/jsx-runtime";
import { AutoFocusPlugin as I } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer as M } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin as O } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable as A } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin as R } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary as j } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin as B } from "@lexical/react/LexicalOnChangePlugin";
import { EditorRefPlugin as F } from "@lexical/react/LexicalEditorRefPlugin";
import { cn as p } from "../../utilities/functions.es.js";
import { editableContentAreaCommonClassNames as L, editorDisabledClassNames as U, editorInputClassNames as _, editorCommonClassNames as D } from "./editor-input-style.es.js";
import H from "./mention-plugin/mention-plugin.es.js";
import Y from "./mention-plugin/mention-node.es.js";
import k from "./editor-theme.es.js";
import q from "./editor-placeholder.es.js";
import { forwardRef as G, isValidElement as u } from "react";
import J from "./override-editor-style-plugin/override-editor-style.es.js";
import { MaxLengthPlugin as K } from "./character-limit-plugin/character-limit.es.js";
function Q(e) {
  console.error(e);
}
const V = `{
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
}`, W = G(
  ({
    defaultValue: e = "",
    placeholder: t = "Press @ to view variable suggestions",
    onChange: r,
    size: i = "md",
    autoFocus: c = !1,
    options: C,
    by: g = "name",
    trigger: E = "@",
    triggerRegex: h,
    menuComponent: n,
    menuItemComponent: m,
    className: N,
    wrapperClassName: P,
    disabled: l = !1,
    autoSpaceAfterMention: v = !1,
    style: y,
    maxLength: a
  }, s) => {
    const x = {
      namespace: "Editor",
      editorTheme: k,
      onError: Q,
      nodes: [Y],
      editorState: e || V,
      editable: !l
    }, T = (b, S) => {
      typeof r == "function" && r(b, S);
    };
    let d, f;
    return u(n) && (d = n), u(m) && (f = m), /* @__PURE__ */ o(
      "div",
      {
        className: p(
          "relative w-full",
          D,
          _[i],
          l && U,
          P
        ),
        children: /* @__PURE__ */ w(M, { initialConfig: x, children: [
          /* @__PURE__ */ o("div", { className: "relative w-full [&_p]:m-0", children: /* @__PURE__ */ o(
            O,
            {
              contentEditable: /* @__PURE__ */ o(
                A,
                {
                  "aria-label": t || "Text editor",
                  className: p(
                    "editor-content focus-visible:outline-none outline-none",
                    L,
                    N
                  )
                }
              ),
              placeholder: /* @__PURE__ */ o(q, { content: t }),
              ErrorBoundary: j
            }
          ) }),
          /* @__PURE__ */ o(R, {}),
          /* @__PURE__ */ o(
            H,
            {
              menuComponent: d,
              menuItemComponent: f,
              size: i,
              by: g,
              optionsArray: C,
              trigger: E,
              triggerRegex: h,
              autoSpace: v
            }
          ),
          /* @__PURE__ */ o(
            B,
            {
              onChange: T,
              ignoreSelectionChange: !0
            }
          ),
          s && /* @__PURE__ */ o(F, { editorRef: s }),
          c && /* @__PURE__ */ o(I, {}),
          /* @__PURE__ */ o(J, { style: y }),
          a && /* @__PURE__ */ o(K, { maxLength: a })
        ] })
      }
    );
  }
);
W.displayName = "EditorInput";
export {
  W as default
};
//# sourceMappingURL=editor-input.es.js.map
