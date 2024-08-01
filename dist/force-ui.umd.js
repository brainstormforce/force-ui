(function(R,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(R=typeof globalThis<"u"?globalThis:R||self,u(R["force-ui"]={},R.React))})(this,function(R,u){"use strict";const Y="-";function ge(e){const r=fe(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function s(a){const l=a.split(Y);return l[0]===""&&l.length!==1&&l.shift(),te(l,r)||pe(a)}function n(a,l){const i=t[a]||[];return l&&o[a]?[...i,...o[a]]:i}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function te(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?te(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(Y);return r.validators.find(({validator:a})=>a(n))?.classGroupId}const oe=/^\[(.+)\]$/;function pe(e){if(oe.test(e)){const r=oe.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function fe(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return he(Object.entries(e.classGroups),t).forEach(([n,a])=>{ee(a,o,n,r)}),o}function ee(e,r,t,o){e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:ne(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(me(s)){ee(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,a])=>{ee(a,ne(r,n),t,o)})})}function ne(e,r){let t=e;return r.split(Y).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function me(e){return e.isThemeGetter}function he(e,r){return r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([a,l])=>[r+a,l])):n);return[t,s]}):e}function ye(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function s(n,a){t.set(n,a),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let a=t.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return s(n,a),a},set(n,a){t.has(n)?t.set(n,a):s(n,a)}}}const se="!";function xe(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length;function a(l){const i=[];let c=0,d=0,b;for(let p=0;p<l.length;p++){let x=l[p];if(c===0){if(x===s&&(o||l.slice(p,p+n)===r)){i.push(l.slice(d,p)),d=p+n;continue}if(x==="/"){b=p;continue}}x==="["?c++:x==="]"&&c--}const f=i.length===0?l:l.substring(d),h=f.startsWith(se),y=h?f.substring(1):f,m=b&&b>d?b-d:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:m}}return t?function(i){return t({className:i,parseClassName:a})}:a}function ve(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function we(e){return{cache:ye(e.cacheSize),parseClassName:xe(e),...ge(e)}}const ke=/\s+/;function Ce(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=new Set;return e.trim().split(ke).map(a=>{const{modifiers:l,hasImportantModifier:i,baseClassName:c,maybePostfixModifierPosition:d}=t(a);let b=!!d,f=o(b?c.substring(0,d):c);if(!f){if(!b)return{isTailwindClass:!1,originalClassName:a};if(f=o(c),!f)return{isTailwindClass:!1,originalClassName:a};b=!1}const h=ve(l).join(":");return{isTailwindClass:!0,modifierId:i?h+se:h,classGroupId:f,originalClassName:a,hasPostfixModifier:b}}).reverse().filter(a=>{if(!a.isTailwindClass)return!0;const{modifierId:l,classGroupId:i,hasPostfixModifier:c}=a,d=l+i;return n.has(d)?!1:(n.add(d),s(i,c).forEach(b=>n.add(l+b)),!0)}).reverse().map(a=>a.originalClassName).join(" ")}function Re(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ae(r))&&(o&&(o+=" "),o+=t);return o}function ae(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ae(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ne(e,...r){let t,o,s,n=a;function a(i){const c=r.reduce((d,b)=>b(d),e());return t=we(c),o=t.cache.get,s=t.cache.set,n=l,l(i)}function l(i){const c=o(i);if(c)return c;const d=Ce(i,t);return s(i,d),d}return function(){return n(Re.apply(null,arguments))}}function w(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const le=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ee=/^\d+\/\d+$/,ze=new Set(["px","full","screen"]),Me=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ae=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Se=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ie=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Pe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function M(e){return P(e)||ze.has(e)||Ee.test(e)}function A(e){return G(e,"length",We)}function P(e){return!!e&&!Number.isNaN(Number(e))}function Z(e){return G(e,"number",P)}function L(e){return!!e&&Number.isInteger(Number(e))}function je(e){return e.endsWith("%")&&P(e.slice(0,-1))}function g(e){return le.test(e)}function S(e){return Me.test(e)}const Ge=new Set(["length","size","percentage"]);function Ve(e){return G(e,Ge,ie)}function Te(e){return G(e,"position",ie)}const Le=new Set(["image","url"]);function Be(e){return G(e,Le,Oe)}function $e(e){return G(e,"",Fe)}function B(){return!0}function G(e,r,t){const o=le.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function We(e){return Ae.test(e)&&!Se.test(e)}function ie(){return!1}function Fe(e){return Ie.test(e)}function Oe(e){return Pe.test(e)}function _e(){const e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),s=w("borderColor"),n=w("borderRadius"),a=w("borderSpacing"),l=w("borderWidth"),i=w("contrast"),c=w("grayscale"),d=w("hueRotate"),b=w("invert"),f=w("gap"),h=w("gradientColorStops"),y=w("gradientColorStopPositions"),m=w("inset"),p=w("margin"),x=w("opacity"),C=w("padding"),N=w("saturate"),E=w("scale"),z=w("sepia"),I=w("skew"),j=w("space"),K=w("translate"),W=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",g,r],v=()=>[g,r],_=()=>["",M,A],V=()=>["auto",P,g],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",g],be=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[P,Z],Q=()=>[P,g];return{cacheSize:500,separator:":",theme:{colors:[B],spacing:[M,A],blur:["none","",S,g],brightness:X(),borderColor:[e],borderRadius:["none","","full",S,g],borderSpacing:v(),borderWidth:_(),contrast:X(),grayscale:q(),hueRotate:Q(),invert:q(),gap:v(),gradientColorStops:[e],gradientColorStopPositions:[je,A],inset:O(),margin:O(),opacity:X(),padding:v(),saturate:X(),scale:X(),sepia:q(),skew:Q(),space:v(),translate:v()},classGroups:{aspect:[{aspect:["auto","square","video",g]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":be()}],"break-before":[{"break-before":be()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),g]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,g]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",g]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",L,g]}],"grid-cols":[{"grid-cols":[B]}],"col-start-end":[{col:["auto",{span:["full",L,g]},g]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[B]}],"row-start-end":[{row:["auto",{span:[L,g]},g]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",g]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",g]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...re()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...re(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...re(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",g,r]}],"min-w":[{"min-w":[g,r,"min","max","fit"]}],"max-w":[{"max-w":[g,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[g,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[g,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[g,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[g,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Z]}],"font-family":[{font:[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],"line-clamp":[{"line-clamp":["none",P,Z]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,g]}],"list-image":[{"list-image":["none",g]}],"list-style-type":[{list:["none","disc","decimal",g]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,A]}],"underline-offset":[{"underline-offset":["auto",M,g]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",g]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),Te]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ve]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Be]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:T()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[M,g]}],"outline-w":[{outline:[M,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:_()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[M,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,$e]}],"shadow-color":[{shadow:[B]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",S,g]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[b]}],saturate:[{saturate:[N]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[N]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",g]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",g]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",g]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[L,g]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",g]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",g]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",g]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,A,Z]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const D=Ne(_e);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ce=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=u.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:a,...l},i)=>u.createElement("svg",{ref:i,...qe,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:ce("lucide",s),...l},[...a.map(([c,d])=>u.createElement(c,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(e,r)=>{const t=u.forwardRef(({className:o,...s},n)=>u.createElement(Xe,{ref:n,iconNode:r,className:ce(`lucide-${Ue(e)}`,o),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=J("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=J("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),He=e=>{const{variant:r="primary",size:t="md",type:o="button",tag:s="button",className:n,children:a,disabled:l=!1,destructive:i=!1,icon:c=null,iconPosition:d="left",...b}=e,f="border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled",h={primary:"text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",secondary:"text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",outline:"text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",ghost:"text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",link:"text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"}[r],y=i&&!l?{primary:"bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",outline:"text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",ghost:"text-button-danger hover:bg-field-background-error",link:"text-button-danger hover:text-button-danger-secondary"}[r]:"",m={xs:"p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",sm:"p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",md:"p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",lg:"p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"}[t];let p,x=null,C="";c&&(C="flex items-center justify-center gap-1",d==="left"?p=c:x=c);const N=s;return React.createElement(N,{type:o,className:D(C,f,m,h,y,n),disabled:l,...b},p,a,x)},Qe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let $=(e=21)=>{let r="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=Qe[t[e]&63];return r};function de(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=de(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ye(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=de(e))&&(o&&(o+=" "),o+=r);return o}const k=(...e)=>D(Ye(...e)),er=({label:e,switchId:r,disabled:t=!1,children:o})=>{const s=!e?.heading||!e?.description;if(s)return o;const n=u.isValidElement(e),a=u.useCallback(()=>{if(n)return e;const{heading:l="",description:i=""}=e;return React.createElement("div",{className:"space-y-1.5"},l&&React.createElement("p",{className:"text-text-primary text-base font-medium leading-4 m-0"},l),i&&React.createElement("p",{className:"text-text-secondary text-sm font-normal leading-5 m-0"},i))},[e]);return React.createElement("div",{className:k("inline-flex items-center",!s&&"items-start")},o,React.createElement("label",{htmlFor:r,className:k("ml-3",!t&&"cursor-pointer")},a()))},rr=({id:e,onChange:r,value:t,defaultValue:o=!1,size:s="lg",disabled:n=!1,label:a={heading:"",description:""},name:l,...i},c)=>{const d=u.useMemo(()=>typeof t<"u",[t]),b=u.useMemo(()=>e||`switch-${$()}`,[]),[f,h]=u.useState(o),y="primary",m=u.useCallback(()=>d?t:f,[d,t,f]),p=E=>{if(n)return;const z=E.target.checked;d||h(z),typeof r=="function"&&r(z)},x={primary:{input:"bg-toggle-off hover:bg-toggle-off-hover checked:bg-toggle-on checked:hover:bg-toggle-on-hover focus:ring focus:ring-toggle-on focus:ring-offset-4 border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border",toggleDial:"bg-toggle-dial-background shadow-toggleDial"}},C={lg:{container:"w-11 h-6",toggleDial:"size-4 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-5 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4"},sm:{container:"w-9 h-5",toggleDial:"size-3 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4"}},N={input:"bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed",toggleDial:"peer-disabled:cursor-not-allowed"};return React.createElement(er,{label:a,switchId:b,disabled:n},React.createElement("div",{className:k("relative inline-block cursor-pointer rounded-full shrink-0",C[s].container)},React.createElement("input",{ref:c,id:b,type:"checkbox",className:k("peer appearance-none absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0",x[y].input,n&&N.input),checked:m(),onChange:p,disabled:n,name:l,...i}),React.createElement("label",{htmlFor:b,className:k("bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300",C[s].toggleDial,x[y].toggleDial,n&&N.toggleDial)})))},tr=u.forwardRef(rr),or=({id:e,label:r,defaultChecked:t=!1,checked:o,onChange:s,value:n,indeterminate:a,disabled:l,size:i="md",...c},d)=>{const b=u.useMemo(()=>e||`checkbox-${$()}`,[e]),f=u.useMemo(()=>typeof o<"u",[o]),[h,y]=u.useState(t||!1),m="primary",p={sm:{checkbox:"size-4 rounded-sm",icon:"size-3"},md:{checkbox:"size-5 rounded",icon:"size-4"}},x={primary:{checkbox:"border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",icon:"text-white"}},C={checkbox:"disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",icon:"peer-disabled:text-border-disabled"},N=u.useCallback(()=>f?o:h,[f,o,h]),E=I=>{if(l)return;const j=I.target.checked;f||y(j),typeof s=="function"&&s(j)},z=u.useCallback(()=>u.isValidElement(r)?r:!r.heading||!r.description?null:React.createElement("div",{className:"space-y-1.5"},React.createElement("p",{className:"text-text-primary text-base font-medium leading-4 m-0"},r.heading),React.createElement("p",{className:"text-text-secondary text-sm font-normal leading-5 m-0"},r.description)),[r]);return React.createElement("div",{className:k("inline-flex items-center",!!r&&"items-start")},React.createElement("label",{className:k("relative flex items-center rounded-full",!l&&"cursor-pointer"),htmlFor:b},React.createElement("input",{ref:d,id:b,type:"checkbox",className:k("peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",x[m].checkbox,p[i].checkbox,l&&C.checkbox),checked:N(),onChange:E,disabled:l,...c}),React.createElement("span",{className:k("pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",x[m].icon,l&&C.icon)},a?React.createElement(Je,{className:k(p[i]?.icon)}):React.createElement(Ze,{className:k(p[i]?.icon)}))),!!r&&React.createElement("label",{className:k("ml-3",!l&&"cursor-pointer"),htmlFor:b},z()))},nr=u.forwardRef(or),ue=u.createContext(),sr=()=>u.useContext(ue),ar=({children:e,name:r,value:t,defaultValue:o,by:s="id",as:n=u.Fragment,onChange:a,className:l,disabled:i=!1})=>{const c=u.useMemo(()=>typeof t<"u",[t]),d=u.useMemo(()=>r||`radio-button-group-${$()}`,[r]),[b,f]=u.useState(c?t:o),h=u.useCallback(y=>{const m=y.target.value;c||f(m),typeof a=="function"&&a(m)},[a]);return React.createElement(n,{...n===u.Fragment?{}:{className:l}},React.createElement(ue.Provider,{value:{name:d,value:c?t:b,by:s,onChange:h,isControlled:c,disableAll:i}},React.Children.map(e,y=>u.isValidElement(y)?y:null)))},lr=({id:e,label:r,value:t,disabled:o,size:s="md",...n},a)=>{const l=sr();if(!l)throw new Error("RadioButton should be used inside RadioButton Group");const{name:i,value:c,by:d,onChange:b,disableAll:f,checked:h}=l,y="primary",m=u.useMemo(()=>e||`radio-button-${$()}`,[e]),p=u.useMemo(()=>f||o,[f,o]),x=u.useMemo(()=>typeof h!==void 0?h:typeof c!=typeof t?!1:typeof c=="string"?c===t:Array.isArray(c)?c.includes(t):c[d]===t[d],[c,t,h]),C={sm:{checkbox:"size-4",icon:"size-1.5"},md:{checkbox:"size-5",icon:"size-2"}},N={primary:{checkbox:"border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",icon:"text-white"}},E={checkbox:"disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",icon:"peer-disabled:text-border-disabled"},z=u.useCallback(()=>u.isValidElement(r)?r:!r.heading||!r.description?null:React.createElement("div",{className:"space-y-1.5"},React.createElement("p",{className:"text-text-primary text-base font-medium leading-4 m-0"},r.heading),React.createElement("p",{className:"text-text-secondary text-sm font-normal leading-5 m-0"},r.description)),[r]);return React.createElement("div",{className:k("inline-flex items-center",!!r&&"items-start")},React.createElement("label",{className:k("relative flex items-center rounded-full",!p&&"cursor-pointer"),htmlFor:m},React.createElement("input",{ref:a,id:m,type:"radio",className:k("peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid rounded-full",N[y].checkbox,C[s].checkbox,p&&E.checkbox),name:i,value:t,onChange:b,checked:x,disabled:p,...n}),React.createElement("span",{className:k("pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",N[y].icon,p&&E.icon)},React.createElement("div",{className:k("rounded-full bg-current",C[s]?.icon)}))),!!r&&React.createElement("label",{className:k("ml-3",!p&&"cursor-pointer"),htmlFor:m},z()))},ir={Group:ar,Button:u.forwardRef(lr)},cr=e=>{const{label:r="",size:t="sm",className:o="",type:s="pill",variant:n="neutral",icon:a=React.createElement(De,null),disabled:l=!1,onClose:i=()=>{},closable:c=!0}=e,d="font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid",b={xs:"py-0.5 px-1 text-xs",sm:"py-1 px-1.5 text-xs",md:"py-1 px-1.5 text-sm",lg:"py-1 px-1.5 text-base"},f={pill:"rounded-full",rounded:"rounded"},h={neutral:"bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray",red:"bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red",yellow:"bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow",green:"bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green",blue:"bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky",inverse:"bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse",disabled:"bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"};let y="",m="group relative justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer";return l?(y=h.disabled,m+=" cursor-not-allowed disabled"):y=h[n],r?React.createElement("span",{className:D(d,b[t],f[s],y,o)},a?React.createElement("span",{className:"justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4"},a):null,r,c&&React.createElement("span",{className:m,onClick:l?null:i},React.createElement("span",{className:"sr-only"},`Remove ${r}`),React.createElement(Ke,null),React.createElement("span",{className:"absolute -inset-1"}))):null},dr=e=>{const{value:r="",size:t="sm",className:o="",disabled:s=!1,inputProps:n,onChange:a=()=>{},error:l=!1,onError:i=()=>{}}=e;let c="py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";const d={sm:"px-3 rounded text-xs",md:"px-3 rounded-md text-sm",lg:"px-4 rounded-lg text-base"},b=s?"hover:border-border-disabled":"hover:border-border-strong",f="focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",h=l?"focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error":"",y=s?"border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled":"";return React.createElement("textarea",{className:D(c,y,d[t],f,b,h,o),...n,disabled:s,onChange:a,onInvalid:i,value:r})},ur=e=>{const{variant:r="primary",size:t="md",border:o="subtle",url:s="",children:n,className:a}=e,l=s&&o==="none"?"subtle":o,i="rounded-full overflow-hidden flex items-center justify-center",c={white:"text-text-primary bg-background-primary",gray:"text-text-primary bg-background-secondary",primary:"text-text-on-color bg-background-brand",primaryLight:"text-text-primary bg-brand-background-50",dark:"text-text-on-color bg-button-secondary"}[r],d={xs:"w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs",sm:"w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm",md:"w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base",lg:"w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg"}[t],b={none:"",subtle:"border border-solid border-border-transparent-subtle",ring:"border-4 border-solid border-border-white"}[l],f=s?"bg-cover bg-center bg-no-repeat":"",h=()=>n?typeof n=="string"?n?.[0]?.toUpperCase():n:null;return React.createElement("div",{className:k(i,!s&&c,d,b,f,a),style:s?{backgroundImage:`url(${s})`}:{}},h())},br=({id:e,type:r="text",defaultValue:t="",value:o,size:s="sm",className:n="",disabled:a=!1,onChange:l=()=>{},error:i=!1,onError:c=()=>{},prefix:d=null,suffix:b=null,...f},h)=>{const y=u.useMemo(()=>e||`input-${r}-${$()}`,[e]),m=u.useMemo(()=>typeof o<"u",[o]),[p,x]=u.useState(t),C=u.useCallback(()=>m?o:p,[m,o,p]),N=T=>{if(a)return;const U=T.target.value;m||x(U),typeof l=="function"&&l(U)};let E="border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";const z={sm:"px-2 py-2 rounded",md:"px-2.5 py-2.5 rounded-md",lg:"px-3 py-3 rounded-lg"},I={sm:"text-xs",md:"text-base",lg:"text-base"},j={sm:d?"pl-8":"",md:d?"pl-9":"",lg:d?"pl-10":""},K={sm:b?"pr-8":"",md:b?"pr-9":"",lg:b?"pr-10":""},W=a?"hover:border-border-disabled":"hover:border-border-strong",F="focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",O=i?"focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error":"",v=a?"border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled":"",_="font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4",V=()=>d?React.createElement("div",{className:k(_,"left-0 pl-3",I[s])},d):null,H=()=>b?React.createElement("div",{className:k(_,"right-0 pr-3",I[s])},b):null;return React.createElement("div",{className:k("relative flex focus-within:z-10",n)},V(),React.createElement("input",{ref:h,id:y,type:r,className:k(E,v,z[s],I[s],j[s],K[s],F,W,O),disabled:a,onChange:N,onInvalid:c,value:C(),...f}),H())},gr=u.forwardRef(br);R.Avatar=ur,R.Badge=cr,R.Button=He,R.Checkbox=nr,R.Input=gr,R.RadioButton=ir,R.Switch=tr,R.TextArea=dr,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=force-ui.umd.js.map
