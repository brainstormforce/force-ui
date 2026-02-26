"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),b=require("@lexical/react/LexicalAutoFocusPlugin"),S=require("@lexical/react/LexicalComposer"),R=require("@lexical/react/LexicalPlainTextPlugin"),I=require("@lexical/react/LexicalContentEditable"),O=require("@lexical/react/LexicalHistoryPlugin"),w=require("@lexical/react/LexicalErrorBoundary"),A=require("@lexical/react/LexicalOnChangePlugin"),M=require("@lexical/react/LexicalEditorRefPlugin"),x=require("../../utilities/functions.cjs.js"),n=require("./editor-input-style.cjs.js"),_=require("./mention-plugin/mention-plugin.cjs.js"),B=require("./mention-plugin/mention-node.cjs.js"),F=require("./editor-theme.cjs.js"),H=require("./editor-placeholder.cjs.js"),i=require("react"),U=require("./override-editor-style-plugin/override-editor-style.cjs.js"),D=require("./character-limit-plugin/character-limit.cjs.js");function V(t){console.error(t)}const Y=`{
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
}`,f=i.forwardRef(({defaultValue:t="",placeholder:g="Press @ to view variable suggestions",onChange:o,size:r="md",autoFocus:p=!1,options:C,by:q="name",trigger:P="@",menuComponent:s,menuItemComponent:l,className:E,wrapperClassName:h,disabled:a=!1,autoSpaceAfterMention:j=!1,style:y,maxLength:u},c)=>{const v={namespace:"Editor",editorTheme:F.default,onError:V,nodes:[B.default],editorState:t||Y,editable:!a},L=(N,T)=>{typeof o=="function"&&o(N,T)};let d,m;return i.isValidElement(s)&&(d=s),i.isValidElement(l)&&(m=l),e.jsx("div",{className:x.cn("relative w-full",n.editorCommonClassNames,n.editorInputClassNames[r],a&&n.editorDisabledClassNames,h),children:e.jsxs(S.LexicalComposer,{initialConfig:v,children:[e.jsx("div",{className:"relative w-full [&_p]:m-0",children:e.jsx(R.PlainTextPlugin,{contentEditable:e.jsx(I.ContentEditable,{className:x.cn("editor-content focus-visible:outline-none outline-none",n.editableContentAreaCommonClassNames,E)}),placeholder:e.jsx(H.default,{content:g}),ErrorBoundary:w.LexicalErrorBoundary})}),e.jsx(O.HistoryPlugin,{}),e.jsx(_.default,{menuComponent:d,menuItemComponent:m,size:r,by:q,optionsArray:C,trigger:P,autoSpace:j}),e.jsx(A.OnChangePlugin,{onChange:L,ignoreSelectionChange:!0}),c&&e.jsx(M.EditorRefPlugin,{editorRef:c}),p&&e.jsx(b.AutoFocusPlugin,{}),e.jsx(U.default,{style:y}),u&&e.jsx(D.MaxLengthPlugin,{maxLength:u})]})})});f.displayName="EditorInput";exports.default=f;
//# sourceMappingURL=editor-input.cjs.js.map
