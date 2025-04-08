"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),L=require("@lexical/react/LexicalAutoFocusPlugin"),T=require("@lexical/react/LexicalComposer"),b=require("@lexical/react/LexicalPlainTextPlugin"),S=require("@lexical/react/LexicalContentEditable"),R=require("@lexical/react/LexicalHistoryPlugin"),I=require("@lexical/react/LexicalErrorBoundary"),O=require("@lexical/react/LexicalOnChangePlugin"),w=require("@lexical/react/LexicalEditorRefPlugin"),m=require("../../utilities/functions.cjs.js"),n=require("./editor-input-style.cjs.js"),A=require("./mention-plugin/mention-plugin.cjs.js"),_=require("./mention-plugin/mention-node.cjs.js"),B=require("./editor-theme.cjs.js"),F=require("./editor-placeholder.cjs.js"),o=require("react");function M(t){console.error(t)}const H=`{
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
}`,f=o.forwardRef(({defaultValue:t="",placeholder:x="Press @ to view variable suggestions",onChange:i,size:r="md",autoFocus:g=!1,options:p,by:C="name",trigger:P="@",menuComponent:l,menuItemComponent:s,className:q,wrapperClassName:E,disabled:a=!1,autoSpaceAfterMention:h=!1},u)=>{const j={namespace:"Editor",editorTheme:B.default,onError:M,nodes:[_.default],editorState:t||H,editable:!a},y=(v,N)=>{typeof i=="function"&&i(v,N)};let c,d;return o.isValidElement(l)&&(c=l),o.isValidElement(s)&&(d=s),e.jsx("div",{className:m.cn("relative w-full",n.editorCommonClassNames,n.editorInputClassNames[r],a&&n.editorDisabledClassNames,E),children:e.jsxs(T.LexicalComposer,{initialConfig:j,children:[e.jsx("div",{className:"relative w-full [&_p]:m-0",children:e.jsx(b.PlainTextPlugin,{contentEditable:e.jsx(S.ContentEditable,{className:m.cn("editor-content focus-visible:outline-none outline-none",n.editableContentAreaCommonClassNames,q)}),placeholder:e.jsx(F.default,{content:x}),ErrorBoundary:I.LexicalErrorBoundary})}),e.jsx(R.HistoryPlugin,{}),e.jsx(A.default,{menuComponent:c,menuItemComponent:d,size:r,by:C,optionsArray:p,trigger:P,autoSpace:h}),e.jsx(O.OnChangePlugin,{onChange:y,ignoreSelectionChange:!0}),u&&e.jsx(w.EditorRefPlugin,{editorRef:u}),g&&e.jsx(L.AutoFocusPlugin,{})]})})});f.displayName="EditorInput";exports.default=f;
//# sourceMappingURL=editor-input.cjs.js.map
