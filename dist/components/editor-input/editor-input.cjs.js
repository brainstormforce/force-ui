"use client";"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),S=require("@lexical/react/LexicalAutoFocusPlugin"),R=require("@lexical/react/LexicalComposer"),I=require("@lexical/react/LexicalPlainTextPlugin"),O=require("@lexical/react/LexicalContentEditable"),w=require("@lexical/react/LexicalHistoryPlugin"),A=require("@lexical/react/LexicalErrorBoundary"),M=require("@lexical/react/LexicalOnChangePlugin"),_=require("@lexical/react/LexicalEditorRefPlugin"),f=require("../../utilities/functions.cjs.js"),n=require("./editor-input-style.cjs.js"),B=require("./mention-plugin/mention-plugin.cjs.js"),F=require("./mention-plugin/mention-node.cjs.js"),H=require("./editor-theme.cjs.js"),U=require("./editor-placeholder.cjs.js"),i=require("react"),D=require("./override-editor-style-plugin/override-editor-style.cjs.js"),V=require("./character-limit-plugin/character-limit.cjs.js");function Y(t){console.error(t)}const k=`{
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
}`,g=i.forwardRef(({defaultValue:t="",placeholder:r="Press @ to view variable suggestions",onChange:o,size:s="md",autoFocus:p=!1,options:C,by:q="name",trigger:P="@",triggerRegex:E,menuComponent:l,menuItemComponent:a,className:h,wrapperClassName:j,disabled:u=!1,autoSpaceAfterMention:y=!1,style:v,maxLength:c},d)=>{const L={namespace:"Editor",editorTheme:H.default,onError:Y,nodes:[F.default],editorState:t||k,editable:!u},N=(T,b)=>{typeof o=="function"&&o(T,b)};let m,x;return i.isValidElement(l)&&(m=l),i.isValidElement(a)&&(x=a),e.jsx("div",{className:f.cn("relative w-full",n.editorCommonClassNames,n.editorInputClassNames[s],u&&n.editorDisabledClassNames,j),children:e.jsxs(R.LexicalComposer,{initialConfig:L,children:[e.jsx("div",{className:"relative w-full [&_p]:m-0",children:e.jsx(I.PlainTextPlugin,{contentEditable:e.jsx(O.ContentEditable,{"aria-label":r||"Text editor",className:f.cn("editor-content focus-visible:outline-none outline-none",n.editableContentAreaCommonClassNames,h)}),placeholder:e.jsx(U.default,{content:r}),ErrorBoundary:A.LexicalErrorBoundary})}),e.jsx(w.HistoryPlugin,{}),e.jsx(B.default,{menuComponent:m,menuItemComponent:x,size:s,by:q,optionsArray:C,trigger:P,triggerRegex:E,autoSpace:y}),e.jsx(M.OnChangePlugin,{onChange:N,ignoreSelectionChange:!0}),d&&e.jsx(_.EditorRefPlugin,{editorRef:d}),p&&e.jsx(S.AutoFocusPlugin,{}),e.jsx(D.default,{style:v}),c&&e.jsx(V.MaxLengthPlugin,{maxLength:c})]})})});g.displayName="EditorInput";exports.default=g;
//# sourceMappingURL=editor-input.cjs.js.map
