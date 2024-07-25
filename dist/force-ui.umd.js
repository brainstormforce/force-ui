( function( M, S ) {
typeof exports === 'object' && typeof module < 'u' ? S( exports ) : typeof define === 'function' && define.amd ? define( [ 'exports' ], S ) : ( M = typeof globalThis < 'u' ? globalThis : M || self, S( M[ 'force-ui' ] = {} ) );
}( this, function( M ) {
'use strict'; const S = '-'; function se( e ) {
const r = ae( e ),
{ conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e; function l( s ) {
const a = s.split( S ); return a[ 0 ] === '' && a.length !== 1 && a.shift(), F( a, r ) || ie( s );
} function n( s, a ) {
const d = t[ s ] || []; return a && o[ s ] ? [ ...d, ...o[ s ] ] : d;
} return { getClassGroupId: l, getConflictingClassGroupIds: n };
} function F( e, r ) {
if ( e.length === 0 ) {
return r.classGroupId;
} const t = e[ 0 ],
o = r.nextPart.get( t ),
l = o ? F( e.slice( 1 ), o ) : void 0; if ( l ) {
return l;
} if ( r.validators.length === 0 ) {
return;
} const n = e.join( S ); return r.validators.find( ( { validator: s } ) => s( n ) )?.classGroupId;
} const q = /^\[(.+)\]$/; function ie( e ) {
if ( q.test( e ) ) {
const r = q.exec( e )[ 1 ],
t = r?.substring( 0, r.indexOf( ':' ) ); if ( t ) {
return 'arbitrary..' + t;
}
}
} function ae( e ) {
const { theme: r, prefix: t } = e,
o = { nextPart: new Map, validators: [] }; return ce( Object.entries( e.classGroups ), t ).forEach( ( [ n, s ] ) => {
O( s, o, n, r );
} ), o;
} function O( e, r, t, o ) {
e.forEach( ( l ) => {
if ( typeof l === 'string' ) {
const n = l === '' ? r : J( r, l ); n.classGroupId = t; return;
} if ( typeof l === 'function' ) {
if ( le( l ) ) {
O( l( o ), r, t, o ); return;
}r.validators.push( { validator: l, classGroupId: t } ); return;
}Object.entries( l ).forEach( ( [ n, s ] ) => {
O( s, J( r, n ), t, o );
} );
} );
} function J( e, r ) {
let t = e; return r.split( S ).forEach( ( o ) => {
t.nextPart.has( o ) || t.nextPart.set( o, { nextPart: new Map, validators: [] } ), t = t.nextPart.get( o );
} ), t;
} function le( e ) {
return e.isThemeGetter;
} function ce( e, r ) {
return r ? e.map( ( [ t, o ] ) => {
const l = o.map( ( n ) => typeof n === 'string' ? r + n : typeof n === 'object' ? Object.fromEntries( Object.entries( n ).map( ( [ s, a ] ) => [ r + s, a ] ) ) : n ); return [ t, l ];
} ) : e;
} function de( e ) {
if ( e < 1 ) {
return { get: () => {}, set: () => {} };
} let r = 0,
t = new Map,
o = new Map; function l( n, s ) {
t.set( n, s ), r++, r > e && ( r = 0, o = t, t = new Map );
} return { get( n ) {
let s = t.get( n ); if ( s !== void 0 ) {
return s;
} if ( ( s = o.get( n ) ) !== void 0 ) {
return l( n, s ), s;
}
}, set( n, s ) {
t.has( n ) ? t.set( n, s ) : l( n, s );
} };
} const X = '!'; function ue( e ) {
const { separator: r, experimentalParseClassName: t } = e,
o = r.length === 1,
l = r[ 0 ],
n = r.length; function s( a ) {
const d = []; let p = 0,
b = 0,
g; for ( let f = 0; f < a.length; f++ ) {
const m = a[ f ]; if ( p === 0 ) {
if ( m === l && ( o || a.slice( f, f + n ) === r ) ) {
d.push( a.slice( b, f ) ), b = f + n; continue;
} if ( m === '/' ) {
g = f; continue;
}
}m === '[' ? p++ : m === ']' && p--;
} const h = d.length === 0 ? a : a.substring( b ),
v = h.startsWith( X ),
z = v ? h.substring( 1 ) : h,
y = g && g > b ? g - b : void 0; return { modifiers: d, hasImportantModifier: v, baseClassName: z, maybePostfixModifierPosition: y };
} return t ? function( d ) {
return t( { className: d, parseClassName: s } );
} : s;
} function pe( e ) {
if ( e.length <= 1 ) {
return e;
} const r = []; let t = []; return e.forEach( ( o ) => {
o[ 0 ] === '[' ? ( r.push( ...t.sort(), o ), t = [] ) : t.push( o );
} ), r.push( ...t.sort() ), r;
} function be( e ) {
return { cache: de( e.cacheSize ), parseClassName: ue( e ), ...se( e ) };
} const fe = /\s+/; function ge( e, r ) {
const { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: l } = r,
n = new Set; return e.trim().split( fe ).map( ( s ) => {
const { modifiers: a, hasImportantModifier: d, baseClassName: p, maybePostfixModifierPosition: b } = t( s ); let g = !! b,
h = o( g ? p.substring( 0, b ) : p ); if ( ! h ) {
if ( ! g ) {
return { isTailwindClass: ! 1, originalClassName: s };
} if ( h = o( p ), ! h ) {
return { isTailwindClass: ! 1, originalClassName: s };
} g = ! 1;
} const v = pe( a ).join( ':' ); return { isTailwindClass: ! 0, modifierId: d ? v + X : v, classGroupId: h, originalClassName: s, hasPostfixModifier: g };
} ).reverse().filter( ( s ) => {
if ( ! s.isTailwindClass ) {
return ! 0;
} const { modifierId: a, classGroupId: d, hasPostfixModifier: p } = s,
b = a + d; return n.has( b ) ? ! 1 : ( n.add( b ), l( d, p ).forEach( ( g ) => n.add( a + g ) ), ! 0 );
} ).reverse().map( ( s ) => s.originalClassName ).join( ' ' );
} function me() {
let e = 0,
r, t,
o = ''; for ( ;e < arguments.length; ) {
( r = arguments[ e++ ] ) && ( t = Z( r ) ) && ( o && ( o += ' ' ), o += t );
} return o;
} function Z( e ) {
if ( typeof e === 'string' ) {
return e;
} let r,
t = ''; for ( let o = 0; o < e.length; o++ ) {
e[ o ] && ( r = Z( e[ o ] ) ) && ( t && ( t += ' ' ), t += r );
} return t;
} function he( e, ...r ) {
let t, o, l,
n = s; function s( d ) {
const p = r.reduce( ( b, g ) => g( b ), e() ); return t = be( p ), o = t.cache.get, l = t.cache.set, n = a, a( d );
} function a( d ) {
const p = o( d ); if ( p ) {
return p;
} const b = ge( d, t ); return l( d, b ), b;
} return function() {
return n( me.apply( null, arguments ) );
};
} function c( e ) {
const r = ( t ) => t[ e ] || []; return r.isThemeGetter = ! 0, r;
} const H = /^\[(?:([a-z-]+):)?(.+)\]$/i,
ye = /^\d+\/\d+$/,
xe = new Set( [ 'px', 'full', 'screen' ] ),
ve = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
we = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
ke = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
Ce = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
ze = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/; function w( e ) {
return A( e ) || xe.has( e ) || ye.test( e );
} function k( e ) {
return P( e, 'length', Ie );
} function A( e ) {
return !! e && ! Number.isNaN( Number( e ) );
} function j( e ) {
return P( e, 'number', A );
} function R( e ) {
return !! e && Number.isInteger( Number( e ) );
} function Se( e ) {
return e.endsWith( '%' ) && A( e.slice( 0, -1 ) );
} function i( e ) {
return H.test( e );
} function C( e ) {
return ve.test( e );
} const Ae = new Set( [ 'length', 'size', 'percentage' ] ); function Me( e ) {
return P( e, Ae, K );
} function Pe( e ) {
return P( e, 'position', K );
} const Re = new Set( [ 'image', 'url' ] ); function Ge( e ) {
return P( e, Re, Ne );
} function Te( e ) {
return P( e, '', je );
} function G() {
return ! 0;
} function P( e, r, t ) {
const o = H.exec( e ); return o ? o[ 1 ] ? typeof r === 'string' ? o[ 1 ] === r : r.has( o[ 1 ] ) : t( o[ 2 ] ) : ! 1;
} function Ie( e ) {
return we.test( e ) && ! ke.test( e );
} function K() {
return ! 1;
} function je( e ) {
return Ce.test( e );
} function Ne( e ) {
return ze.test( e );
} function Ee() {
const e = c( 'colors' ),
r = c( 'spacing' ),
t = c( 'blur' ),
o = c( 'brightness' ),
l = c( 'borderColor' ),
n = c( 'borderRadius' ),
s = c( 'borderSpacing' ),
a = c( 'borderWidth' ),
d = c( 'contrast' ),
p = c( 'grayscale' ),
b = c( 'hueRotate' ),
g = c( 'invert' ),
h = c( 'gap' ),
v = c( 'gradientColorStops' ),
z = c( 'gradientColorStopPositions' ),
y = c( 'inset' ),
f = c( 'margin' ),
m = c( 'opacity' ),
x = c( 'padding' ),
N = c( 'saturate' ),
V = c( 'scale' ),
Q = c( 'sepia' ),
Y = c( 'skew' ),
D = c( 'space' ),
ee = c( 'translate' ),
B = () => [ 'auto', 'contain', 'none' ],
_ = () => [ 'auto', 'hidden', 'clip', 'visible', 'scroll' ],
$ = () => [ 'auto', i, r ],
u = () => [ i, r ],
re = () => [ '', w, k ],
E = () => [ 'auto', A, i ],
te = () => [ 'bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top' ],
L = () => [ 'solid', 'dashed', 'dotted', 'double', 'none' ],
oe = () => [ 'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity' ],
U = () => [ 'start', 'end', 'center', 'between', 'around', 'evenly', 'stretch' ],
T = () => [ '', '0', i ],
ne = () => [ 'auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column' ],
I = () => [ A, j ],
W = () => [ A, i ]; return { cacheSize: 500, separator: ':', theme: { colors: [ G ], spacing: [ w, k ], blur: [ 'none', '', C, i ], brightness: I(), borderColor: [ e ], borderRadius: [ 'none', '', 'full', C, i ], borderSpacing: u(), borderWidth: re(), contrast: I(), grayscale: T(), hueRotate: W(), invert: T(), gap: u(), gradientColorStops: [ e ], gradientColorStopPositions: [ Se, k ], inset: $(), margin: $(), opacity: I(), padding: u(), saturate: I(), scale: I(), sepia: T(), skew: W(), space: u(), translate: u() }, classGroups: { aspect: [ { aspect: [ 'auto', 'square', 'video', i ] } ], container: [ 'container' ], columns: [ { columns: [ C ] } ], 'break-after': [ { 'break-after': ne() } ], 'break-before': [ { 'break-before': ne() } ], 'break-inside': [ { 'break-inside': [ 'auto', 'avoid', 'avoid-page', 'avoid-column' ] } ], 'box-decoration': [ { 'box-decoration': [ 'slice', 'clone' ] } ], box: [ { box: [ 'border', 'content' ] } ], display: [ 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden' ], float: [ { float: [ 'right', 'left', 'none', 'start', 'end' ] } ], clear: [ { clear: [ 'left', 'right', 'both', 'none', 'start', 'end' ] } ], isolation: [ 'isolate', 'isolation-auto' ], 'object-fit': [ { object: [ 'contain', 'cover', 'fill', 'none', 'scale-down' ] } ], 'object-position': [ { object: [ ...te(), i ] } ], overflow: [ { overflow: _() } ], 'overflow-x': [ { 'overflow-x': _() } ], 'overflow-y': [ { 'overflow-y': _() } ], overscroll: [ { overscroll: B() } ], 'overscroll-x': [ { 'overscroll-x': B() } ], 'overscroll-y': [ { 'overscroll-y': B() } ], position: [ 'static', 'fixed', 'absolute', 'relative', 'sticky' ], inset: [ { inset: [ y ] } ], 'inset-x': [ { 'inset-x': [ y ] } ], 'inset-y': [ { 'inset-y': [ y ] } ], start: [ { start: [ y ] } ], end: [ { end: [ y ] } ], top: [ { top: [ y ] } ], right: [ { right: [ y ] } ], bottom: [ { bottom: [ y ] } ], left: [ { left: [ y ] } ], visibility: [ 'visible', 'invisible', 'collapse' ], z: [ { z: [ 'auto', R, i ] } ], basis: [ { basis: $() } ], 'flex-direction': [ { flex: [ 'row', 'row-reverse', 'col', 'col-reverse' ] } ], 'flex-wrap': [ { flex: [ 'wrap', 'wrap-reverse', 'nowrap' ] } ], flex: [ { flex: [ '1', 'auto', 'initial', 'none', i ] } ], grow: [ { grow: T() } ], shrink: [ { shrink: T() } ], order: [ { order: [ 'first', 'last', 'none', R, i ] } ], 'grid-cols': [ { 'grid-cols': [ G ] } ], 'col-start-end': [ { col: [ 'auto', { span: [ 'full', R, i ] }, i ] } ], 'col-start': [ { 'col-start': E() } ], 'col-end': [ { 'col-end': E() } ], 'grid-rows': [ { 'grid-rows': [ G ] } ], 'row-start-end': [ { row: [ 'auto', { span: [ R, i ] }, i ] } ], 'row-start': [ { 'row-start': E() } ], 'row-end': [ { 'row-end': E() } ], 'grid-flow': [ { 'grid-flow': [ 'row', 'col', 'dense', 'row-dense', 'col-dense' ] } ], 'auto-cols': [ { 'auto-cols': [ 'auto', 'min', 'max', 'fr', i ] } ], 'auto-rows': [ { 'auto-rows': [ 'auto', 'min', 'max', 'fr', i ] } ], gap: [ { gap: [ h ] } ], 'gap-x': [ { 'gap-x': [ h ] } ], 'gap-y': [ { 'gap-y': [ h ] } ], 'justify-content': [ { justify: [ 'normal', ...U() ] } ], 'justify-items': [ { 'justify-items': [ 'start', 'end', 'center', 'stretch' ] } ], 'justify-self': [ { 'justify-self': [ 'auto', 'start', 'end', 'center', 'stretch' ] } ], 'align-content': [ { content: [ 'normal', ...U(), 'baseline' ] } ], 'align-items': [ { items: [ 'start', 'end', 'center', 'baseline', 'stretch' ] } ], 'align-self': [ { self: [ 'auto', 'start', 'end', 'center', 'stretch', 'baseline' ] } ], 'place-content': [ { 'place-content': [ ...U(), 'baseline' ] } ], 'place-items': [ { 'place-items': [ 'start', 'end', 'center', 'baseline', 'stretch' ] } ], 'place-self': [ { 'place-self': [ 'auto', 'start', 'end', 'center', 'stretch' ] } ], p: [ { p: [ x ] } ], px: [ { px: [ x ] } ], py: [ { py: [ x ] } ], ps: [ { ps: [ x ] } ], pe: [ { pe: [ x ] } ], pt: [ { pt: [ x ] } ], pr: [ { pr: [ x ] } ], pb: [ { pb: [ x ] } ], pl: [ { pl: [ x ] } ], m: [ { m: [ f ] } ], mx: [ { mx: [ f ] } ], my: [ { my: [ f ] } ], ms: [ { ms: [ f ] } ], me: [ { me: [ f ] } ], mt: [ { mt: [ f ] } ], mr: [ { mr: [ f ] } ], mb: [ { mb: [ f ] } ], ml: [ { ml: [ f ] } ], 'space-x': [ { 'space-x': [ D ] } ], 'space-x-reverse': [ 'space-x-reverse' ], 'space-y': [ { 'space-y': [ D ] } ], 'space-y-reverse': [ 'space-y-reverse' ], w: [ { w: [ 'auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', i, r ] } ], 'min-w': [ { 'min-w': [ i, r, 'min', 'max', 'fit' ] } ], 'max-w': [ { 'max-w': [ i, r, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [ C ] }, C ] } ], h: [ { h: [ i, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ] } ], 'min-h': [ { 'min-h': [ i, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ] } ], 'max-h': [ { 'max-h': [ i, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ] } ], size: [ { size: [ i, r, 'auto', 'min', 'max', 'fit' ] } ], 'font-size': [ { text: [ 'base', C, k ] } ], 'font-smoothing': [ 'antialiased', 'subpixel-antialiased' ], 'font-style': [ 'italic', 'not-italic' ], 'font-weight': [ { font: [ 'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', j ] } ], 'font-family': [ { font: [ G ] } ], 'fvn-normal': [ 'normal-nums' ], 'fvn-ordinal': [ 'ordinal' ], 'fvn-slashed-zero': [ 'slashed-zero' ], 'fvn-figure': [ 'lining-nums', 'oldstyle-nums' ], 'fvn-spacing': [ 'proportional-nums', 'tabular-nums' ], 'fvn-fraction': [ 'diagonal-fractions', 'stacked-fractons' ], tracking: [ { tracking: [ 'tighter', 'tight', 'normal', 'wide', 'wider', 'widest', i ] } ], 'line-clamp': [ { 'line-clamp': [ 'none', A, j ] } ], leading: [ { leading: [ 'none', 'tight', 'snug', 'normal', 'relaxed', 'loose', w, i ] } ], 'list-image': [ { 'list-image': [ 'none', i ] } ], 'list-style-type': [ { list: [ 'none', 'disc', 'decimal', i ] } ], 'list-style-position': [ { list: [ 'inside', 'outside' ] } ], 'placeholder-color': [ { placeholder: [ e ] } ], 'placeholder-opacity': [ { 'placeholder-opacity': [ m ] } ], 'text-alignment': [ { text: [ 'left', 'center', 'right', 'justify', 'start', 'end' ] } ], 'text-color': [ { text: [ e ] } ], 'text-opacity': [ { 'text-opacity': [ m ] } ], 'text-decoration': [ 'underline', 'overline', 'line-through', 'no-underline' ], 'text-decoration-style': [ { decoration: [ ...L(), 'wavy' ] } ], 'text-decoration-thickness': [ { decoration: [ 'auto', 'from-font', w, k ] } ], 'underline-offset': [ { 'underline-offset': [ 'auto', w, i ] } ], 'text-decoration-color': [ { decoration: [ e ] } ], 'text-transform': [ 'uppercase', 'lowercase', 'capitalize', 'normal-case' ], 'text-overflow': [ 'truncate', 'text-ellipsis', 'text-clip' ], 'text-wrap': [ { text: [ 'wrap', 'nowrap', 'balance', 'pretty' ] } ], indent: [ { indent: u() } ], 'vertical-align': [ { align: [ 'baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', i ] } ], whitespace: [ { whitespace: [ 'normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces' ] } ], break: [ { break: [ 'normal', 'words', 'all', 'keep' ] } ], hyphens: [ { hyphens: [ 'none', 'manual', 'auto' ] } ], content: [ { content: [ 'none', i ] } ], 'bg-attachment': [ { bg: [ 'fixed', 'local', 'scroll' ] } ], 'bg-clip': [ { 'bg-clip': [ 'border', 'padding', 'content', 'text' ] } ], 'bg-opacity': [ { 'bg-opacity': [ m ] } ], 'bg-origin': [ { 'bg-origin': [ 'border', 'padding', 'content' ] } ], 'bg-position': [ { bg: [ ...te(), Pe ] } ], 'bg-repeat': [ { bg: [ 'no-repeat', { repeat: [ '', 'x', 'y', 'round', 'space' ] } ] } ], 'bg-size': [ { bg: [ 'auto', 'cover', 'contain', Me ] } ], 'bg-image': [ { bg: [ 'none', { 'gradient-to': [ 't', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl' ] }, Ge ] } ], 'bg-color': [ { bg: [ e ] } ], 'gradient-from-pos': [ { from: [ z ] } ], 'gradient-via-pos': [ { via: [ z ] } ], 'gradient-to-pos': [ { to: [ z ] } ], 'gradient-from': [ { from: [ v ] } ], 'gradient-via': [ { via: [ v ] } ], 'gradient-to': [ { to: [ v ] } ], rounded: [ { rounded: [ n ] } ], 'rounded-s': [ { 'rounded-s': [ n ] } ], 'rounded-e': [ { 'rounded-e': [ n ] } ], 'rounded-t': [ { 'rounded-t': [ n ] } ], 'rounded-r': [ { 'rounded-r': [ n ] } ], 'rounded-b': [ { 'rounded-b': [ n ] } ], 'rounded-l': [ { 'rounded-l': [ n ] } ], 'rounded-ss': [ { 'rounded-ss': [ n ] } ], 'rounded-se': [ { 'rounded-se': [ n ] } ], 'rounded-ee': [ { 'rounded-ee': [ n ] } ], 'rounded-es': [ { 'rounded-es': [ n ] } ], 'rounded-tl': [ { 'rounded-tl': [ n ] } ], 'rounded-tr': [ { 'rounded-tr': [ n ] } ], 'rounded-br': [ { 'rounded-br': [ n ] } ], 'rounded-bl': [ { 'rounded-bl': [ n ] } ], 'border-w': [ { border: [ a ] } ], 'border-w-x': [ { 'border-x': [ a ] } ], 'border-w-y': [ { 'border-y': [ a ] } ], 'border-w-s': [ { 'border-s': [ a ] } ], 'border-w-e': [ { 'border-e': [ a ] } ], 'border-w-t': [ { 'border-t': [ a ] } ], 'border-w-r': [ { 'border-r': [ a ] } ], 'border-w-b': [ { 'border-b': [ a ] } ], 'border-w-l': [ { 'border-l': [ a ] } ], 'border-opacity': [ { 'border-opacity': [ m ] } ], 'border-style': [ { border: [ ...L(), 'hidden' ] } ], 'divide-x': [ { 'divide-x': [ a ] } ], 'divide-x-reverse': [ 'divide-x-reverse' ], 'divide-y': [ { 'divide-y': [ a ] } ], 'divide-y-reverse': [ 'divide-y-reverse' ], 'divide-opacity': [ { 'divide-opacity': [ m ] } ], 'divide-style': [ { divide: L() } ], 'border-color': [ { border: [ l ] } ], 'border-color-x': [ { 'border-x': [ l ] } ], 'border-color-y': [ { 'border-y': [ l ] } ], 'border-color-t': [ { 'border-t': [ l ] } ], 'border-color-r': [ { 'border-r': [ l ] } ], 'border-color-b': [ { 'border-b': [ l ] } ], 'border-color-l': [ { 'border-l': [ l ] } ], 'divide-color': [ { divide: [ l ] } ], 'outline-style': [ { outline: [ '', ...L() ] } ], 'outline-offset': [ { 'outline-offset': [ w, i ] } ], 'outline-w': [ { outline: [ w, k ] } ], 'outline-color': [ { outline: [ e ] } ], 'ring-w': [ { ring: re() } ], 'ring-w-inset': [ 'ring-inset' ], 'ring-color': [ { ring: [ e ] } ], 'ring-opacity': [ { 'ring-opacity': [ m ] } ], 'ring-offset-w': [ { 'ring-offset': [ w, k ] } ], 'ring-offset-color': [ { 'ring-offset': [ e ] } ], shadow: [ { shadow: [ '', 'inner', 'none', C, Te ] } ], 'shadow-color': [ { shadow: [ G ] } ], opacity: [ { opacity: [ m ] } ], 'mix-blend': [ { 'mix-blend': [ ...oe(), 'plus-lighter', 'plus-darker' ] } ], 'bg-blend': [ { 'bg-blend': oe() } ], filter: [ { filter: [ '', 'none' ] } ], blur: [ { blur: [ t ] } ], brightness: [ { brightness: [ o ] } ], contrast: [ { contrast: [ d ] } ], 'drop-shadow': [ { 'drop-shadow': [ '', 'none', C, i ] } ], grayscale: [ { grayscale: [ p ] } ], 'hue-rotate': [ { 'hue-rotate': [ b ] } ], invert: [ { invert: [ g ] } ], saturate: [ { saturate: [ N ] } ], sepia: [ { sepia: [ Q ] } ], 'backdrop-filter': [ { 'backdrop-filter': [ '', 'none' ] } ], 'backdrop-blur': [ { 'backdrop-blur': [ t ] } ], 'backdrop-brightness': [ { 'backdrop-brightness': [ o ] } ], 'backdrop-contrast': [ { 'backdrop-contrast': [ d ] } ], 'backdrop-grayscale': [ { 'backdrop-grayscale': [ p ] } ], 'backdrop-hue-rotate': [ { 'backdrop-hue-rotate': [ b ] } ], 'backdrop-invert': [ { 'backdrop-invert': [ g ] } ], 'backdrop-opacity': [ { 'backdrop-opacity': [ m ] } ], 'backdrop-saturate': [ { 'backdrop-saturate': [ N ] } ], 'backdrop-sepia': [ { 'backdrop-sepia': [ Q ] } ], 'border-collapse': [ { border: [ 'collapse', 'separate' ] } ], 'border-spacing': [ { 'border-spacing': [ s ] } ], 'border-spacing-x': [ { 'border-spacing-x': [ s ] } ], 'border-spacing-y': [ { 'border-spacing-y': [ s ] } ], 'table-layout': [ { table: [ 'auto', 'fixed' ] } ], caption: [ { caption: [ 'top', 'bottom' ] } ], transition: [ { transition: [ 'none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', i ] } ], duration: [ { duration: W() } ], ease: [ { ease: [ 'linear', 'in', 'out', 'in-out', i ] } ], delay: [ { delay: W() } ], animate: [ { animate: [ 'none', 'spin', 'ping', 'pulse', 'bounce', i ] } ], transform: [ { transform: [ '', 'gpu', 'none' ] } ], scale: [ { scale: [ V ] } ], 'scale-x': [ { 'scale-x': [ V ] } ], 'scale-y': [ { 'scale-y': [ V ] } ], rotate: [ { rotate: [ R, i ] } ], 'translate-x': [ { 'translate-x': [ ee ] } ], 'translate-y': [ { 'translate-y': [ ee ] } ], 'skew-x': [ { 'skew-x': [ Y ] } ], 'skew-y': [ { 'skew-y': [ Y ] } ], 'transform-origin': [ { origin: [ 'center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', i ] } ], accent: [ { accent: [ 'auto', e ] } ], appearance: [ { appearance: [ 'none', 'auto' ] } ], cursor: [ { cursor: [ 'auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', i ] } ], 'caret-color': [ { caret: [ e ] } ], 'pointer-events': [ { 'pointer-events': [ 'none', 'auto' ] } ], resize: [ { resize: [ 'none', 'y', 'x', '' ] } ], 'scroll-behavior': [ { scroll: [ 'auto', 'smooth' ] } ], 'scroll-m': [ { 'scroll-m': u() } ], 'scroll-mx': [ { 'scroll-mx': u() } ], 'scroll-my': [ { 'scroll-my': u() } ], 'scroll-ms': [ { 'scroll-ms': u() } ], 'scroll-me': [ { 'scroll-me': u() } ], 'scroll-mt': [ { 'scroll-mt': u() } ], 'scroll-mr': [ { 'scroll-mr': u() } ], 'scroll-mb': [ { 'scroll-mb': u() } ], 'scroll-ml': [ { 'scroll-ml': u() } ], 'scroll-p': [ { 'scroll-p': u() } ], 'scroll-px': [ { 'scroll-px': u() } ], 'scroll-py': [ { 'scroll-py': u() } ], 'scroll-ps': [ { 'scroll-ps': u() } ], 'scroll-pe': [ { 'scroll-pe': u() } ], 'scroll-pt': [ { 'scroll-pt': u() } ], 'scroll-pr': [ { 'scroll-pr': u() } ], 'scroll-pb': [ { 'scroll-pb': u() } ], 'scroll-pl': [ { 'scroll-pl': u() } ], 'snap-align': [ { snap: [ 'start', 'end', 'center', 'align-none' ] } ], 'snap-stop': [ { snap: [ 'normal', 'always' ] } ], 'snap-type': [ { snap: [ 'none', 'x', 'y', 'both' ] } ], 'snap-strictness': [ { snap: [ 'mandatory', 'proximity' ] } ], touch: [ { touch: [ 'auto', 'none', 'manipulation' ] } ], 'touch-x': [ { 'touch-pan': [ 'x', 'left', 'right' ] } ], 'touch-y': [ { 'touch-pan': [ 'y', 'up', 'down' ] } ], 'touch-pz': [ 'touch-pinch-zoom' ], select: [ { select: [ 'none', 'text', 'all', 'auto' ] } ], 'will-change': [ { 'will-change': [ 'auto', 'scroll', 'contents', 'transform', i ] } ], fill: [ { fill: [ e, 'none' ] } ], 'stroke-w': [ { stroke: [ w, k, j ] } ], stroke: [ { stroke: [ e, 'none' ] } ], sr: [ 'sr-only', 'not-sr-only' ], 'forced-color-adjust': [ { 'forced-color-adjust': [ 'auto', 'none' ] } ] }, conflictingClassGroups: { overflow: [ 'overflow-x', 'overflow-y' ], overscroll: [ 'overscroll-x', 'overscroll-y' ], inset: [ 'inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left' ], 'inset-x': [ 'right', 'left' ], 'inset-y': [ 'top', 'bottom' ], flex: [ 'basis', 'grow', 'shrink' ], gap: [ 'gap-x', 'gap-y' ], p: [ 'px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl' ], px: [ 'pr', 'pl' ], py: [ 'pt', 'pb' ], m: [ 'mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml' ], mx: [ 'mr', 'ml' ], my: [ 'mt', 'mb' ], size: [ 'w', 'h' ], 'font-size': [ 'leading' ], 'fvn-normal': [ 'fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction' ], 'fvn-ordinal': [ 'fvn-normal' ], 'fvn-slashed-zero': [ 'fvn-normal' ], 'fvn-figure': [ 'fvn-normal' ], 'fvn-spacing': [ 'fvn-normal' ], 'fvn-fraction': [ 'fvn-normal' ], 'line-clamp': [ 'display', 'overflow' ], rounded: [ 'rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl' ], 'rounded-s': [ 'rounded-ss', 'rounded-es' ], 'rounded-e': [ 'rounded-se', 'rounded-ee' ], 'rounded-t': [ 'rounded-tl', 'rounded-tr' ], 'rounded-r': [ 'rounded-tr', 'rounded-br' ], 'rounded-b': [ 'rounded-br', 'rounded-bl' ], 'rounded-l': [ 'rounded-tl', 'rounded-bl' ], 'border-spacing': [ 'border-spacing-x', 'border-spacing-y' ], 'border-w': [ 'border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l' ], 'border-w-x': [ 'border-w-r', 'border-w-l' ], 'border-w-y': [ 'border-w-t', 'border-w-b' ], 'border-color': [ 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l' ], 'border-color-x': [ 'border-color-r', 'border-color-l' ], 'border-color-y': [ 'border-color-t', 'border-color-b' ], 'scroll-m': [ 'scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml' ], 'scroll-mx': [ 'scroll-mr', 'scroll-ml' ], 'scroll-my': [ 'scroll-mt', 'scroll-mb' ], 'scroll-p': [ 'scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl' ], 'scroll-px': [ 'scroll-pr', 'scroll-pl' ], 'scroll-py': [ 'scroll-pt', 'scroll-pb' ], touch: [ 'touch-x', 'touch-y', 'touch-pz' ], 'touch-x': [ 'touch' ], 'touch-y': [ 'touch' ], 'touch-pz': [ 'touch' ] }, conflictingClassGroupModifiers: { 'font-size': [ 'leading' ] } };
} const Le = he( Ee ),
We = ( e ) => {
const { variant: r = 'primary', size: t = 'm', type: o = 'button', tag: l = 'button', className: n, children: s, disabled: a = ! 1, destructive: d = ! 1, icon: p = null, iconPosition: b = 'left', ...g } = e,
h = 'border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold primary-btn-focus-shadow disabled:text-text-disabled',
v = { primary: 'text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled', secondary: 'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled', outline: 'text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled', ghost: 'text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover', link: 'text-link-primary hover:text-link-primary-hover hover:underline p-0 border-0 leading-none' }[ r ],
z = d && ! a ? { primary: 'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover', outline: 'text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error', ghost: 'text-button-danger hover:bg-field-background-error', link: 'text-button-danger hover:text-button-danger-secondary' }[ r ] : '',
y = { xs: 'p-1 rounded-sm [&>svg]:h-[16px] [&>svg]:w-[16px]', s: 'p-2 rounded-sm [&>svg]:h-[16px] [&>svg]:w-[16px]', m: 'p-2.5 rounded-md text-sm [&>svg]:h-[20px] [&>svg]:w-[20px]', l: 'p-3 rounded-lg text-base [&>svg]:h-[24px] [&>svg]:w-[24px]' }[ t ]; let f,
m = null,
x = ''; p && ( x = 'flex items-center justify-center gap-1', b === 'left' ? f = p : m = p ); const N = l; return React.createElement( N, { type: o, className: Le( x, h, y, v, z, n ), disabled: a, ...g }, f, s, m );
}; M.Button = We, Object.defineProperty( M, Symbol.toStringTag, { value: 'Module' } );
} ) );
//# sourceMappingURL=force-ui.umd.js.map
