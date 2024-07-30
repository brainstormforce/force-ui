(function(C,z){typeof exports=="object"&&typeof module<"u"?z(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],z):(C=typeof globalThis<"u"?globalThis:C||self,z(C["force-ui"]={},C.React))})(this,function(C,z){"use strict";const V="-";function de(e){const r=ue(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function a(s){const i=s.split(V);return i[0]===""&&i.length!==1&&i.shift(),K(i,r)||ce(s)}function n(s,i){const d=t[s]||[];return i&&o[s]?[...d,...o[s]]:d}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function K(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?K(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(V);return r.validators.find(({validator:s})=>s(n))?.classGroupId}const H=/^\[(.+)\]$/;function ce(e){if(H.test(e)){const r=H.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ue(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return pe(Object.entries(e.classGroups),t).forEach(([n,s])=>{_(s,o,n,r)}),o}function _(e,r,t,o){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:Q(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(be(a)){_(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{_(s,Q(r,n),t,o)})})}function Q(e,r){let t=e;return r.split(V).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function be(e){return e.isThemeGetter}function pe(e,r){return r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>[r+s,i])):n);return[t,a]}):e}function ge(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function a(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}}const Y="!";function fe(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length;function s(i){const d=[];let u=0,c=0,g;for(let f=0;f<i.length;f++){let x=i[f];if(u===0){if(x===a&&(o||i.slice(f,f+n)===r)){d.push(i.slice(c,f)),c=f+n;continue}if(x==="/"){g=f;continue}}x==="["?u++:x==="]"&&u--}const m=d.length===0?i:i.substring(c),h=m.startsWith(Y),v=h?m.substring(1):m,y=g&&g>c?g-c:void 0;return{modifiers:d,hasImportantModifier:h,baseClassName:v,maybePostfixModifierPosition:y}}return t?function(d){return t({className:d,parseClassName:s})}:s}function me(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function he(e){return{cache:ge(e.cacheSize),parseClassName:fe(e),...de(e)}}const ye=/\s+/;function xe(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(ye).map(s=>{const{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:c}=t(s);let g=!!c,m=o(g?u.substring(0,c):u);if(!m){if(!g)return{isTailwindClass:!1,originalClassName:s};if(m=o(u),!m)return{isTailwindClass:!1,originalClassName:s};g=!1}const h=me(i).join(":");return{isTailwindClass:!0,modifierId:d?h+Y:h,classGroupId:m,originalClassName:s,hasPostfixModifier:g}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:i,classGroupId:d,hasPostfixModifier:u}=s,c=i+d;return n.has(c)?!1:(n.add(c),a(d,u).forEach(g=>n.add(i+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function ve(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=D(r))&&(o&&(o+=" "),o+=t);return o}function D(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=D(e[o]))&&(t&&(t+=" "),t+=r);return t}function we(e,...r){let t,o,a,n=s;function s(d){const u=r.reduce((c,g)=>g(c),e());return t=he(u),o=t.cache.get,a=t.cache.set,n=i,i(d)}function i(d){const u=o(d);if(u)return u;const c=xe(d,t);return a(d,c),c}return function(){return n(ve.apply(null,arguments))}}function b(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ee=/^\[(?:([a-z-]+):)?(.+)\]$/i,ke=/^\d+\/\d+$/,Ce=new Set(["px","full","screen"]),ze=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Re=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ae=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Se=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Me=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function R(e){return M(e)||Ce.has(e)||ke.test(e)}function A(e){return E(e,"length",Le)}function M(e){return!!e&&!Number.isNaN(Number(e))}function L(e){return E(e,"number",M)}function I(e){return!!e&&Number.isInteger(Number(e))}function Ee(e){return e.endsWith("%")&&M(e.slice(0,-1))}function l(e){return ee.test(e)}function S(e){return ze.test(e)}const Ne=new Set(["length","size","percentage"]);function Ie(e){return E(e,Ne,re)}function Pe(e){return E(e,"position",re)}const je=new Set(["image","url"]);function Te(e){return E(e,je,Be)}function Ge(e){return E(e,"",$e)}function P(){return!0}function E(e,r,t){const o=ee.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Le(e){return Re.test(e)&&!Ae.test(e)}function re(){return!1}function $e(e){return Se.test(e)}function Be(e){return Me.test(e)}function We(){const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),a=b("borderColor"),n=b("borderRadius"),s=b("borderSpacing"),i=b("borderWidth"),d=b("contrast"),u=b("grayscale"),c=b("hueRotate"),g=b("invert"),m=b("gap"),h=b("gradientColorStops"),v=b("gradientColorStopPositions"),y=b("inset"),f=b("margin"),x=b("opacity"),w=b("padding"),N=b("saturate"),k=b("scale"),$=b("sepia"),j=b("skew"),oe=b("space"),ne=b("translate"),q=()=>["auto","contain","none"],X=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",l,r],p=()=>[l,r],se=()=>["",R,A],B=()=>["auto",M,l],ae=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",l],le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[M,L],O=()=>[M,l];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[R,A],blur:["none","",S,l],brightness:G(),borderColor:[e],borderRadius:["none","","full",S,l],borderSpacing:p(),borderWidth:se(),contrast:G(),grayscale:T(),hueRotate:O(),invert:T(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ee,A],inset:Z(),margin:Z(),opacity:G(),padding:p(),saturate:G(),scale:G(),sepia:T(),skew:O(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ae(),l]}],overflow:[{overflow:X()}],"overflow-x":[{"overflow-x":X()}],"overflow-y":[{"overflow-y":X()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,l]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",I,l]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",I,l]},l]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[I,l]},l]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[oe]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[oe]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",L]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",M,L]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",R,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",R,A]}],"underline-offset":[{"underline-offset":["auto",R,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ae(),Pe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ie]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Te]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:W()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[R,l]}],"outline-w":[{outline:[R,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[R,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Ge]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...ie(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ie()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[g]}],saturate:[{saturate:[N]}],sepia:[{sepia:[$]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[N]}],"backdrop-sepia":[{"backdrop-sepia":[$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:O()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:O()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[I,l]}],"translate-x":[{"translate-x":[ne]}],"translate-y":[{"translate-y":[ne]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[R,A,L]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const U=we(We);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),te=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ve={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=z.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:a="",children:n,iconNode:s,...i},d)=>z.createElement("svg",{ref:d,...Ve,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:te("lucide",a),...i},[...s.map(([u,c])=>z.createElement(u,c)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(e,r)=>{const t=z.forwardRef(({className:o,...a},n)=>z.createElement(_e,{ref:n,iconNode:r,className:te(`lucide-${Oe(e)}`,o),...a}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=F("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=F("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xe=e=>{const{variant:r="primary",size:t="md",type:o="button",tag:a="button",className:n,children:s,disabled:i=!1,destructive:d=!1,icon:u=null,iconPosition:c="left",loading:g=!1,loaderIcon:m=null,...h}=e,v="border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled",y={primary:"text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",secondary:"text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",outline:"text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",ghost:"text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",link:"text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"}[r],f=d&&!i?{primary:"bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",outline:"text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",ghost:"text-button-danger hover:bg-field-background-error",link:"text-button-danger hover:text-button-danger-secondary"}[r]:"",x={xs:"p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",sm:"p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",md:"p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",lg:"p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"}[t];let w,N=null,k="";if(u&&(k="flex items-center justify-center gap-1",c==="left"?w=u:N=u),g&&!i&&["primary","secondary","outline","ghost"].includes(r)){const j=m||React.createElement(Fe,{className:"animate-spin"});k=k?k+" opacity-50":"flex items-center justify-center gap-1 opacity-50",c==="right"?N=j:w=j,["outline","ghost"].includes(r)&&(k+=" [&>svg]:text-brand-primary-600")}const $=a;return React.createElement($,{type:o,className:U(k,v,x,y,f,n),disabled:i,...h},w,s,N)},Ze=e=>{const{value:r="",size:t="sm",className:o="",disabled:a=!1,inputProps:n,onChange:s=()=>{},error:i=!1,onError:d=()=>{}}=e;let u="rounded py-2 border bg-field-primary-background font-normal border-field-border";const c={sm:"px-3 rounded text-xs",md:"px-3 rounded-md text-sm",lg:"px-4 rounded-lg text-base"},g="hover:border-strong",m="focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",h=i?"focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error":"",v=a?"border-field-border-disabled bg-field-background-disabled cursor-not-allowed":"";return React.createElement("textarea",{className:U(u,v,c[t],m,g,h,o),...n,disabled:a,onChange:s,onInvalid:d,value:r})},Je=e=>{const{label:r="",size:t="sm",className:o="",type:a="pill",variant:n="neutral",icon:s=React.createElement(Ue,null),disabled:i=!1,onClose:d=()=>{},closable:u=!0}=e,c="font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid",g={xs:"py-0.5 px-1 text-xs",sm:"py-1 px-1.5 text-xs",md:"py-1 px-1.5 text-sm",lg:"py-1 px-1.5 text-base"},m={pill:"rounded-full",rounded:"rounded"},h={neutral:"bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray",red:"bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red",yellow:"bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow",green:"bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green",blue:"bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky",inverse:"bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse",disabled:"bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"};let v="",y="group relative justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer";return i?(v=h.disabled,y+=" cursor-not-allowed disabled"):v=h[n],r?React.createElement("span",{className:U(c,g[t],m[a],v,o)},s?React.createElement("span",{className:"justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4"},s):null,r,u&&React.createElement("span",{className:y,onClick:i?null:d},React.createElement("span",{className:"sr-only"},`Remove ${r}`),React.createElement(qe,null),React.createElement("span",{className:"absolute -inset-1"}))):null};C.Badge=Je,C.Button=Xe,C.TextArea=Ze,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=force-ui.umd.js.map
