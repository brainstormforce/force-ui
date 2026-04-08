"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),b=require("@lexical/react/LexicalAutoFocusPlugin"),S=require("@lexical/react/LexicalComposer"),R=require("@lexical/react/LexicalPlainTextPlugin"),I=require("@lexical/react/LexicalContentEditable"),O=require("@lexical/react/LexicalHistoryPlugin"),w=require("@lexical/react/LexicalErrorBoundary"),A=require("@lexical/react/LexicalOnChangePlugin"),M=require("@lexical/react/LexicalEditorRefPlugin"),f=require("../../utilities/functions.cjs.js"),n=require("./editor-input-style.cjs.js"),_=require("./mention-plugin/mention-plugin.cjs.js"),B=require("./mention-plugin/mention-node.cjs.js"),F=require("./editor-theme.cjs.js"),H=require("./editor-placeholder.cjs.js"),i=require("react"),U=require("./override-editor-style-plugin/override-editor-style.cjs.js"),D=require("./character-limit-plugin/character-limit.cjs.js");function V(t){console.error(t)}const Y=`{
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
}`,g=i.forwardRef(({defaultValue:t="",placeholder:r="Press @ to view variable suggestions",onChange:o,size:s="md",autoFocus:p=!1,options:C,by:q="name",trigger:P="@",menuComponent:l,menuItemComponent:a,className:E,wrapperClassName:h,disabled:u=!1,autoSpaceAfterMention:j=!1,style:y,maxLength:c},d)=>{const v={namespace:"Editor",editorTheme:F.default,onError:V,nodes:[B.default],editorState:t||Y,editable:!u},L=(N,T)=>{typeof o=="function"&&o(N,T)};let m,x;return i.isValidElement(l)&&(m=l),i.isValidElement(a)&&(x=a),e.jsx("div",{className:f.cn("relative w-full",n.editorCommonClassNames,n.editorInputClassNames[s],u&&n.editorDisabledClassNames,h),children:e.jsxs(S.LexicalComposer,{initialConfig:v,children:[e.jsx("div",{className:"relative w-full [&_p]:m-0",children:e.jsx(R.PlainTextPlugin,{contentEditable:e.jsx(I.ContentEditable,{"aria-label":r||"Text editor",className:f.cn("editor-content focus-visible:outline-none outline-none",n.editableContentAreaCommonClassNames,E)}),placeholder:e.jsx(H.default,{content:r}),ErrorBoundary:w.LexicalErrorBoundary})}),e.jsx(O.HistoryPlugin,{}),e.jsx(_.default,{menuComponent:m,menuItemComponent:x,size:s,by:q,optionsArray:C,trigger:P,autoSpace:j}),e.jsx(A.OnChangePlugin,{onChange:L,ignoreSelectionChange:!0}),d&&e.jsx(M.EditorRefPlugin,{editorRef:d}),p&&e.jsx(b.AutoFocusPlugin,{}),e.jsx(U.default,{style:y}),c&&e.jsx(D.MaxLengthPlugin,{maxLength:c})]})})});g.displayName="EditorInput";exports.default=g;
//# sourceMappingURL=editor-input.cjs.js.map
