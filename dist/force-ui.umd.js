(function(M,S){typeof exports=="object"&&typeof module<"u"?S(exports):typeof define=="function"&&define.amd?define(["exports"],S):(M=typeof globalThis<"u"?globalThis:M||self,S(M["force-ui"]={}))})(this,function(M){"use strict";const S="-";function se(e){const r=ae(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function a(s){const l=s.split(S);return l[0]===""&&l.length!==1&&l.shift(),U(l,r)||ie(s)}function n(s,l){const d=t[s]||[];return l&&o[s]?[...d,...o[s]]:d}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function U(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?U(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(S);return r.validators.find(({validator:s})=>s(n))?.classGroupId}const F=/^\[(.+)\]$/;function ie(e){if(F.test(e)){const r=F.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ae(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ce(Object.entries(e.classGroups),t).forEach(([n,s])=>{W(s,o,n,r)}),o}function W(e,r,t,o){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:q(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(le(a)){W(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{W(s,q(r,n),t,o)})})}function q(e,r){let t=e;return r.split(S).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function le(e){return e.isThemeGetter}function ce(e,r){return r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,a]}):e}function de(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function a(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}}const J="!";function ue(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length;function s(l){const d=[];let f=0,p=0,b;for(let g=0;g<l.length;g++){let h=l[g];if(f===0){if(h===a&&(o||l.slice(g,g+n)===r)){d.push(l.slice(p,g)),p=g+n;continue}if(h==="/"){b=g;continue}}h==="["?f++:h==="]"&&f--}const m=d.length===0?l:l.substring(p),y=m.startsWith(J),z=y?m.substring(1):m,x=b&&b>p?b-p:void 0;return{modifiers:d,hasImportantModifier:y,baseClassName:z,maybePostfixModifierPosition:x}}return t?function(d){return t({className:d,parseClassName:s})}:s}function pe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function fe(e){return{cache:de(e.cacheSize),parseClassName:ue(e),...se(e)}}const be=/\s+/;function ge(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(be).map(s=>{const{modifiers:l,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=t(s);let b=!!p,m=o(b?f.substring(0,p):f);if(!m){if(!b)return{isTailwindClass:!1,originalClassName:s};if(m=o(f),!m)return{isTailwindClass:!1,originalClassName:s};b=!1}const y=pe(l).join(":");return{isTailwindClass:!0,modifierId:d?y+J:y,classGroupId:m,originalClassName:s,hasPostfixModifier:b}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:d,hasPostfixModifier:f}=s,p=l+d;return n.has(p)?!1:(n.add(p),a(d,f).forEach(b=>n.add(l+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function me(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=X(r))&&(o&&(o+=" "),o+=t);return o}function X(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=X(e[o]))&&(t&&(t+=" "),t+=r);return t}function he(e,...r){let t,o,a,n=s;function s(d){const f=r.reduce((p,b)=>b(p),e());return t=fe(f),o=t.cache.get,a=t.cache.set,n=l,l(d)}function l(d){const f=o(d);if(f)return f;const p=ge(d,t);return a(d,p),p}return function(){return n(me.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const Z=/^\[(?:([a-z-]+):)?(.+)\]$/i,ye=/^\d+\/\d+$/,xe=new Set(["px","full","screen"]),we=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ce=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ze=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function w(e){return A(e)||xe.has(e)||ye.test(e)}function C(e){return P(e,"length",Te)}function A(e){return!!e&&!Number.isNaN(Number(e))}function j(e){return P(e,"number",A)}function R(e){return!!e&&Number.isInteger(Number(e))}function Se(e){return e.endsWith("%")&&A(e.slice(0,-1))}function i(e){return Z.test(e)}function k(e){return we.test(e)}const Ae=new Set(["length","size","percentage"]);function Me(e){return P(e,Ae,H)}function Pe(e){return P(e,"position",H)}const Re=new Set(["image","url"]);function Ge(e){return P(e,Re,Ee)}function Ie(e){return P(e,"",je)}function G(){return!0}function P(e,r,t){const o=Z.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Te(e){return ve.test(e)&&!Ce.test(e)}function H(){return!1}function je(e){return ke.test(e)}function Ee(e){return ze.test(e)}function Ne(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),a=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),l=c("borderWidth"),d=c("contrast"),f=c("grayscale"),p=c("hueRotate"),b=c("invert"),m=c("gap"),y=c("gradientColorStops"),z=c("gradientColorStopPositions"),x=c("inset"),g=c("margin"),h=c("opacity"),v=c("padding"),K=c("saturate"),O=c("scale"),Q=c("sepia"),Y=c("skew"),D=c("space"),ee=c("translate"),B=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",i,r],u=()=>[i,r],re=()=>["",w,C],E=()=>["auto",A,i],te=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["solid","dashed","dotted","double","none"],oe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",i],ne=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[A,j],L=()=>[A,i];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[w,C],blur:["none","",k,i],brightness:T(),borderColor:[e],borderRadius:["none","","full",k,i],borderSpacing:u(),borderWidth:re(),contrast:T(),grayscale:I(),hueRotate:L(),invert:I(),gap:u(),gradientColorStops:[e],gradientColorStopPositions:[Se,C],inset:_(),margin:_(),opacity:T(),padding:u(),saturate:T(),scale:T(),sepia:I(),skew:L(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":ne()}],"break-before":[{"break-before":ne()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...te(),i]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,i]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",R,i]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",R,i]},i]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[R,i]},i]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",k,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",A,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...N(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,C]}],"underline-offset":[{"underline-offset":["auto",w,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...te(),Pe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Me]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ge]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[z]}],"gradient-via-pos":[{via:[z]}],"gradient-to-pos":[{to:[z]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...N(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:N()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...N()]}],"outline-offset":[{"outline-offset":[w,i]}],"outline-w":[{outline:[w,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[w,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,Ie]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...oe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":oe()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",k,i]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[b]}],saturate:[{saturate:[K]}],sepia:[{sepia:[Q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[K]}],"backdrop-sepia":[{"backdrop-sepia":[Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[R,i]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,C,j]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Le=he(Ne),We=e=>{const{variant:r="primary",size:t="medium",iconPosition:o="left",type:a="button",className:n,onClick:s,children:l,disabled:d=!1,destructive:f=!1}=e;console.log("Button props",e);const p="text-white border border-solid cursor-pointer transition-colors duration-300 ease-in-out",b={},m={medium:"p-2.5 rounded-md"},y=z=>{s&&typeof s=="function"&&s(z)};return React.createElement("button",{type:a,className:Le(p,b[r],m[t],n),onClick:y,disabled:d,...e},l)};M.Button=We,Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=force-ui.umd.js.map
