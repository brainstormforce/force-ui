const B = '-';
function ne( e ) {
  const r = ie( e ),
{
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o,
  } = e;
  function l( s ) {
    const a = s.split( B );
    return a[ 0 ] === '' && a.length !== 1 && a.shift(), D( a, r ) || se( s );
  }
  function n( s, a ) {
    const c = t[ s ] || [];
    return a && o[ s ] ? [ ...c, ...o[ s ] ] : c;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: n,
  };
}
function D( e, r ) {
  if ( e.length === 0 ) {
return r.classGroupId;
}
  const t = e[ 0 ],
o = r.nextPart.get( t ),
l = o ? D( e.slice( 1 ), o ) : void 0;
  if ( l ) {
return l;
}
  if ( r.validators.length === 0 ) {
return;
}
  const n = e.join( B );
  return r.validators.find( ( {
    validator: s,
  } ) => s( n ) )?.classGroupId;
}
const Q = /^\[(.+)\]$/;
function se( e ) {
  if ( Q.test( e ) ) {
    const r = Q.exec( e )[ 1 ],
t = r?.substring( 0, r.indexOf( ':' ) );
    if ( t ) {
return 'arbitrary..' + t;
}
  }
}
function ie( e ) {
  const {
    theme: r,
    prefix: t,
  } = e,
o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: [],
  };
  return le( Object.entries( e.classGroups ), t ).forEach( ( [ n, s ] ) => {
    $( s, o, n, r );
  } ), o;
}
function $( e, r, t, o ) {
  e.forEach( ( l ) => {
    if ( typeof l === 'string' ) {
      const n = l === '' ? r : Y( r, l );
      n.classGroupId = t;
      return;
    }
    if ( typeof l === 'function' ) {
      if ( ae( l ) ) {
        $( l( o ), r, t, o );
        return;
      }
      r.validators.push( {
        validator: l,
        classGroupId: t,
      } );
      return;
    }
    Object.entries( l ).forEach( ( [ n, s ] ) => {
      $( s, Y( r, n ), t, o );
    } );
  } );
}
function Y( e, r ) {
  let t = e;
  return r.split( B ).forEach( ( o ) => {
    t.nextPart.has( o ) || t.nextPart.set( o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: [],
    } ), t = t.nextPart.get( o );
  } ), t;
}
function ae( e ) {
  return e.isThemeGetter;
}
function le( e, r ) {
  return r ? e.map( ( [ t, o ] ) => {
    const l = o.map( ( n ) => typeof n === 'string' ? r + n : typeof n === 'object' ? Object.fromEntries( Object.entries( n ).map( ( [ s, a ] ) => [ r + s, a ] ) ) : n );
    return [ t, l ];
  } ) : e;
}
function ce( e ) {
  if ( e < 1 ) {
return {
      get: () => {
      },
      set: () => {
      },
    };
}
  let r = 0,
t = /* @__PURE__ */ new Map(),
o = /* @__PURE__ */ new Map();
  function l( n, s ) {
    t.set( n, s ), r++, r > e && ( r = 0, o = t, t = /* @__PURE__ */ new Map() );
  }
  return {
    get( n ) {
      let s = t.get( n );
      if ( s !== void 0 ) {
return s;
}
      if ( ( s = o.get( n ) ) !== void 0 ) {
return l( n, s ), s;
}
    },
    set( n, s ) {
      t.has( n ) ? t.set( n, s ) : l( n, s );
    },
  };
}
const ee = '!';
function de( e ) {
  const {
    separator: r,
    experimentalParseClassName: t,
  } = e,
o = r.length === 1,
l = r[ 0 ],
n = r.length;
  function s( a ) {
    const c = [];
    let p = 0,
b = 0,
f;
    for ( let g = 0; g < a.length; g++ ) {
      const m = a[ g ];
      if ( p === 0 ) {
        if ( m === l && ( o || a.slice( g, g + n ) === r ) ) {
          c.push( a.slice( b, g ) ), b = g + n;
          continue;
        }
        if ( m === '/' ) {
          f = g;
          continue;
        }
      }
      m === '[' ? p++ : m === ']' && p--;
    }
    const h = c.length === 0 ? a : a.substring( b ),
v = h.startsWith( ee ),
k = v ? h.substring( 1 ) : h,
y = f && f > b ? f - b : void 0;
    return {
      modifiers: c,
      hasImportantModifier: v,
      baseClassName: k,
      maybePostfixModifierPosition: y,
    };
  }
  return t ? function( c ) {
    return t( {
      className: c,
      parseClassName: s,
    } );
  } : s;
}
function ue( e ) {
  if ( e.length <= 1 ) {
return e;
}
  const r = [];
  let t = [];
  return e.forEach( ( o ) => {
    o[ 0 ] === '[' ? ( r.push( ...t.sort(), o ), t = [] ) : t.push( o );
  } ), r.push( ...t.sort() ), r;
}
function pe( e ) {
  return {
    cache: ce( e.cacheSize ),
    parseClassName: de( e ),
    ...ne( e ),
  };
}
const be = /\s+/;
function ge( e, r ) {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: l,
  } = r,
n = /* @__PURE__ */ new Set();
  return e.trim().split( be ).map( ( s ) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: p,
      maybePostfixModifierPosition: b,
    } = t( s );
    let f = !! b,
h = o( f ? p.substring( 0, b ) : p );
    if ( ! h ) {
      if ( ! f ) {
return {
          isTailwindClass: ! 1,
          originalClassName: s,
        };
}
      if ( h = o( p ), ! h ) {
return {
          isTailwindClass: ! 1,
          originalClassName: s,
        };
}
      f = ! 1;
    }
    const v = ue( a ).join( ':' );
    return {
      isTailwindClass: ! 0,
      modifierId: c ? v + ee : v,
      classGroupId: h,
      originalClassName: s,
      hasPostfixModifier: f,
    };
  } ).reverse().filter( ( s ) => {
    if ( ! s.isTailwindClass ) {
return ! 0;
}
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: p,
    } = s,
b = a + c;
    return n.has( b ) ? ! 1 : ( n.add( b ), l( c, p ).forEach( ( f ) => n.add( a + f ) ), ! 0 );
  } ).reverse().map( ( s ) => s.originalClassName ).join( ' ' );
}
function fe() {
  let e = 0,
r, t,
o = '';
  for ( ; e < arguments.length; ) {
( r = arguments[ e++ ] ) && ( t = re( r ) ) && ( o && ( o += ' ' ), o += t );
}
  return o;
}
function re( e ) {
  if ( typeof e === 'string' ) {
return e;
}
  let r,
t = '';
  for ( let o = 0; o < e.length; o++ ) {
e[ o ] && ( r = re( e[ o ] ) ) && ( t && ( t += ' ' ), t += r );
}
  return t;
}
function me( e, ...r ) {
  let t, o, l,
n = s;
  function s( c ) {
    const p = r.reduce( ( b, f ) => f( b ), e() );
    return t = pe( p ), o = t.cache.get, l = t.cache.set, n = a, a( c );
  }
  function a( c ) {
    const p = o( c );
    if ( p ) {
return p;
}
    const b = ge( c, t );
    return l( c, b ), b;
  }
  return function() {
    return n( fe.apply( null, arguments ) );
  };
}
function d( e ) {
  const r = ( t ) => t[ e ] || [];
  return r.isThemeGetter = ! 0, r;
}
const te = /^\[(?:([a-z-]+):)?(.+)\]$/i,
he = /^\d+\/\d+$/,
ye = /* @__PURE__ */ new Set( [ 'px', 'full', 'screen' ] ),
xe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
ve = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
we = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
ke = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
Ce = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function w( e ) {
  return S( e ) || ye.has( e ) || he.test( e );
}
function C( e ) {
  return A( e, 'length', Ie );
}
function S( e ) {
  return !! e && ! Number.isNaN( Number( e ) );
}
function j( e ) {
  return A( e, 'number', S );
}
function P( e ) {
  return !! e && Number.isInteger( Number( e ) );
}
function ze( e ) {
  return e.endsWith( '%' ) && S( e.slice( 0, -1 ) );
}
function i( e ) {
  return te.test( e );
}
function z( e ) {
  return xe.test( e );
}
const Se = /* @__PURE__ */ new Set( [ 'length', 'size', 'percentage' ] );
function Ae( e ) {
  return A( e, Se, oe );
}
function Me( e ) {
  return A( e, 'position', oe );
}
const Re = /* @__PURE__ */ new Set( [ 'image', 'url' ] );
function Pe( e ) {
  return A( e, Re, Te );
}
function Ge( e ) {
  return A( e, '', Ne );
}
function G() {
  return ! 0;
}
function A( e, r, t ) {
  const o = te.exec( e );
  return o ? o[ 1 ] ? typeof r === 'string' ? o[ 1 ] === r : r.has( o[ 1 ] ) : t( o[ 2 ] ) : ! 1;
}
function Ie( e ) {
  return ve.test( e ) && ! we.test( e );
}
function oe() {
  return ! 1;
}
function Ne( e ) {
  return ke.test( e );
}
function Te( e ) {
  return Ce.test( e );
}
function Ee() {
  const e = d( 'colors' ),
r = d( 'spacing' ),
t = d( 'blur' ),
o = d( 'brightness' ),
l = d( 'borderColor' ),
n = d( 'borderRadius' ),
s = d( 'borderSpacing' ),
a = d( 'borderWidth' ),
c = d( 'contrast' ),
p = d( 'grayscale' ),
b = d( 'hueRotate' ),
f = d( 'invert' ),
h = d( 'gap' ),
v = d( 'gradientColorStops' ),
k = d( 'gradientColorStopPositions' ),
y = d( 'inset' ),
g = d( 'margin' ),
m = d( 'opacity' ),
x = d( 'padding' ),
I = d( 'saturate' ),
L = d( 'scale' ),
U = d( 'sepia' ),
F = d( 'skew' ),
q = d( 'space' ),
J = d( 'translate' ),
W = () => [ 'auto', 'contain', 'none' ],
V = () => [ 'auto', 'hidden', 'clip', 'visible', 'scroll' ],
O = () => [ 'auto', i, r ],
u = () => [ i, r ],
X = () => [ '', w, C ],
N = () => [ 'auto', S, i ],
Z = () => [ 'bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top' ],
T = () => [ 'solid', 'dashed', 'dotted', 'double', 'none' ],
H = () => [ 'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity' ],
_ = () => [ 'start', 'end', 'center', 'between', 'around', 'evenly', 'stretch' ],
M = () => [ '', '0', i ],
K = () => [ 'auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column' ],
R = () => [ S, j ],
E = () => [ S, i ];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [ G ],
      spacing: [ w, C ],
      blur: [ 'none', '', z, i ],
      brightness: R(),
      borderColor: [ e ],
      borderRadius: [ 'none', '', 'full', z, i ],
      borderSpacing: u(),
      borderWidth: X(),
      contrast: R(),
      grayscale: M(),
      hueRotate: E(),
      invert: M(),
      gap: u(),
      gradientColorStops: [ e ],
      gradientColorStopPositions: [ ze, C ],
      inset: O(),
      margin: O(),
      opacity: R(),
      padding: u(),
      saturate: R(),
      scale: R(),
      sepia: M(),
      skew: E(),
      space: u(),
      translate: u(),
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [ {
        aspect: [ 'auto', 'square', 'video', i ],
      } ],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: [ 'container' ],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [ {
        columns: [ z ],
      } ],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [ {
        'break-after': K(),
      } ],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [ {
        'break-before': K(),
      } ],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [ {
        'break-inside': [ 'auto', 'avoid', 'avoid-page', 'avoid-column' ],
      } ],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [ {
        'box-decoration': [ 'slice', 'clone' ],
      } ],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [ {
        box: [ 'border', 'content' ],
      } ],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: [ 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden' ],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [ {
        float: [ 'right', 'left', 'none', 'start', 'end' ],
      } ],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [ {
        clear: [ 'left', 'right', 'both', 'none', 'start', 'end' ],
      } ],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: [ 'isolate', 'isolation-auto' ],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [ {
        object: [ 'contain', 'cover', 'fill', 'none', 'scale-down' ],
      } ],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [ {
        object: [ ...Z(), i ],
      } ],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [ {
        overflow: V(),
      } ],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [ {
        'overflow-x': V(),
      } ],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [ {
        'overflow-y': V(),
      } ],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [ {
        overscroll: W(),
      } ],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [ {
        'overscroll-x': W(),
      } ],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [ {
        'overscroll-y': W(),
      } ],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: [ 'static', 'fixed', 'absolute', 'relative', 'sticky' ],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [ {
        inset: [ y ],
      } ],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [ {
        'inset-x': [ y ],
      } ],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [ {
        'inset-y': [ y ],
      } ],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [ {
        start: [ y ],
      } ],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [ {
        end: [ y ],
      } ],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [ {
        top: [ y ],
      } ],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [ {
        right: [ y ],
      } ],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [ {
        bottom: [ y ],
      } ],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [ {
        left: [ y ],
      } ],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: [ 'visible', 'invisible', 'collapse' ],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [ {
        z: [ 'auto', P, i ],
      } ],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [ {
        basis: O(),
      } ],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [ {
        flex: [ 'row', 'row-reverse', 'col', 'col-reverse' ],
      } ],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [ {
        flex: [ 'wrap', 'wrap-reverse', 'nowrap' ],
      } ],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [ {
        flex: [ '1', 'auto', 'initial', 'none', i ],
      } ],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [ {
        grow: M(),
      } ],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [ {
        shrink: M(),
      } ],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [ {
        order: [ 'first', 'last', 'none', P, i ],
      } ],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [ {
        'grid-cols': [ G ],
      } ],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [ {
        col: [ 'auto', {
          span: [ 'full', P, i ],
        }, i ],
      } ],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [ {
        'col-start': N(),
      } ],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [ {
        'col-end': N(),
      } ],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [ {
        'grid-rows': [ G ],
      } ],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [ {
        row: [ 'auto', {
          span: [ P, i ],
        }, i ],
      } ],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [ {
        'row-start': N(),
      } ],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [ {
        'row-end': N(),
      } ],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [ {
        'grid-flow': [ 'row', 'col', 'dense', 'row-dense', 'col-dense' ],
      } ],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [ {
        'auto-cols': [ 'auto', 'min', 'max', 'fr', i ],
      } ],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [ {
        'auto-rows': [ 'auto', 'min', 'max', 'fr', i ],
      } ],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [ {
        gap: [ h ],
      } ],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [ {
        'gap-x': [ h ],
      } ],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [ {
        'gap-y': [ h ],
      } ],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [ {
        justify: [ 'normal', ..._() ],
      } ],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [ {
        'justify-items': [ 'start', 'end', 'center', 'stretch' ],
      } ],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [ {
        'justify-self': [ 'auto', 'start', 'end', 'center', 'stretch' ],
      } ],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [ {
        content: [ 'normal', ..._(), 'baseline' ],
      } ],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [ {
        items: [ 'start', 'end', 'center', 'baseline', 'stretch' ],
      } ],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [ {
        self: [ 'auto', 'start', 'end', 'center', 'stretch', 'baseline' ],
      } ],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [ {
        'place-content': [ ..._(), 'baseline' ],
      } ],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [ {
        'place-items': [ 'start', 'end', 'center', 'baseline', 'stretch' ],
      } ],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [ {
        'place-self': [ 'auto', 'start', 'end', 'center', 'stretch' ],
      } ],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [ {
        p: [ x ],
      } ],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [ {
        px: [ x ],
      } ],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [ {
        py: [ x ],
      } ],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [ {
        ps: [ x ],
      } ],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [ {
        pe: [ x ],
      } ],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [ {
        pt: [ x ],
      } ],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [ {
        pr: [ x ],
      } ],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [ {
        pb: [ x ],
      } ],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [ {
        pl: [ x ],
      } ],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [ {
        m: [ g ],
      } ],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [ {
        mx: [ g ],
      } ],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [ {
        my: [ g ],
      } ],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [ {
        ms: [ g ],
      } ],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [ {
        me: [ g ],
      } ],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [ {
        mt: [ g ],
      } ],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [ {
        mr: [ g ],
      } ],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [ {
        mb: [ g ],
      } ],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [ {
        ml: [ g ],
      } ],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [ {
        'space-x': [ q ],
      } ],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': [ 'space-x-reverse' ],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [ {
        'space-y': [ q ],
      } ],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': [ 'space-y-reverse' ],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [ {
        w: [ 'auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', i, r ],
      } ],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [ {
        'min-w': [ i, r, 'min', 'max', 'fit' ],
      } ],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [ {
        'max-w': [ i, r, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [ z ],
        }, z ],
      } ],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [ {
        h: [ i, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ],
      } ],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [ {
        'min-h': [ i, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ],
      } ],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [ {
        'max-h': [ i, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh' ],
      } ],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [ {
        size: [ i, r, 'auto', 'min', 'max', 'fit' ],
      } ],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [ {
        text: [ 'base', z, C ],
      } ],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': [ 'antialiased', 'subpixel-antialiased' ],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': [ 'italic', 'not-italic' ],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [ {
        font: [ 'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', j ],
      } ],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [ {
        font: [ G ],
      } ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': [ 'normal-nums' ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': [ 'ordinal' ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': [ 'slashed-zero' ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': [ 'lining-nums', 'oldstyle-nums' ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': [ 'proportional-nums', 'tabular-nums' ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': [ 'diagonal-fractions', 'stacked-fractons' ],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [ {
        tracking: [ 'tighter', 'tight', 'normal', 'wide', 'wider', 'widest', i ],
      } ],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [ {
        'line-clamp': [ 'none', S, j ],
      } ],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [ {
        leading: [ 'none', 'tight', 'snug', 'normal', 'relaxed', 'loose', w, i ],
      } ],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [ {
        'list-image': [ 'none', i ],
      } ],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [ {
        list: [ 'none', 'disc', 'decimal', i ],
      } ],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [ {
        list: [ 'inside', 'outside' ],
      } ],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [ {
        placeholder: [ e ],
      } ],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [ {
        'placeholder-opacity': [ m ],
      } ],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [ {
        text: [ 'left', 'center', 'right', 'justify', 'start', 'end' ],
      } ],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [ {
        text: [ e ],
      } ],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [ {
        'text-opacity': [ m ],
      } ],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': [ 'underline', 'overline', 'line-through', 'no-underline' ],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [ {
        decoration: [ ...T(), 'wavy' ],
      } ],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [ {
        decoration: [ 'auto', 'from-font', w, C ],
      } ],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [ {
        'underline-offset': [ 'auto', w, i ],
      } ],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [ {
        decoration: [ e ],
      } ],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': [ 'uppercase', 'lowercase', 'capitalize', 'normal-case' ],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': [ 'truncate', 'text-ellipsis', 'text-clip' ],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [ {
        text: [ 'wrap', 'nowrap', 'balance', 'pretty' ],
      } ],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [ {
        indent: u(),
      } ],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [ {
        align: [ 'baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', i ],
      } ],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [ {
        whitespace: [ 'normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces' ],
      } ],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [ {
        break: [ 'normal', 'words', 'all', 'keep' ],
      } ],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [ {
        hyphens: [ 'none', 'manual', 'auto' ],
      } ],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [ {
        content: [ 'none', i ],
      } ],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [ {
        bg: [ 'fixed', 'local', 'scroll' ],
      } ],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [ {
        'bg-clip': [ 'border', 'padding', 'content', 'text' ],
      } ],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [ {
        'bg-opacity': [ m ],
      } ],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [ {
        'bg-origin': [ 'border', 'padding', 'content' ],
      } ],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [ {
        bg: [ ...Z(), Me ],
      } ],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [ {
        bg: [ 'no-repeat', {
          repeat: [ '', 'x', 'y', 'round', 'space' ],
        } ],
      } ],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [ {
        bg: [ 'auto', 'cover', 'contain', Ae ],
      } ],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [ {
        bg: [ 'none', {
          'gradient-to': [ 't', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl' ],
        }, Pe ],
      } ],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [ {
        bg: [ e ],
      } ],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [ {
        from: [ k ],
      } ],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [ {
        via: [ k ],
      } ],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [ {
        to: [ k ],
      } ],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [ {
        from: [ v ],
      } ],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [ {
        via: [ v ],
      } ],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [ {
        to: [ v ],
      } ],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [ {
        rounded: [ n ],
      } ],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [ {
        'rounded-s': [ n ],
      } ],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [ {
        'rounded-e': [ n ],
      } ],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [ {
        'rounded-t': [ n ],
      } ],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [ {
        'rounded-r': [ n ],
      } ],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [ {
        'rounded-b': [ n ],
      } ],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [ {
        'rounded-l': [ n ],
      } ],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [ {
        'rounded-ss': [ n ],
      } ],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [ {
        'rounded-se': [ n ],
      } ],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [ {
        'rounded-ee': [ n ],
      } ],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [ {
        'rounded-es': [ n ],
      } ],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [ {
        'rounded-tl': [ n ],
      } ],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [ {
        'rounded-tr': [ n ],
      } ],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [ {
        'rounded-br': [ n ],
      } ],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [ {
        'rounded-bl': [ n ],
      } ],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [ {
        border: [ a ],
      } ],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [ {
        'border-x': [ a ],
      } ],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [ {
        'border-y': [ a ],
      } ],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [ {
        'border-s': [ a ],
      } ],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [ {
        'border-e': [ a ],
      } ],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [ {
        'border-t': [ a ],
      } ],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [ {
        'border-r': [ a ],
      } ],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [ {
        'border-b': [ a ],
      } ],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [ {
        'border-l': [ a ],
      } ],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [ {
        'border-opacity': [ m ],
      } ],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [ {
        border: [ ...T(), 'hidden' ],
      } ],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [ {
        'divide-x': [ a ],
      } ],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': [ 'divide-x-reverse' ],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [ {
        'divide-y': [ a ],
      } ],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': [ 'divide-y-reverse' ],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [ {
        'divide-opacity': [ m ],
      } ],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [ {
        divide: T(),
      } ],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [ {
        border: [ l ],
      } ],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [ {
        'border-x': [ l ],
      } ],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [ {
        'border-y': [ l ],
      } ],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [ {
        'border-t': [ l ],
      } ],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [ {
        'border-r': [ l ],
      } ],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [ {
        'border-b': [ l ],
      } ],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [ {
        'border-l': [ l ],
      } ],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [ {
        divide: [ l ],
      } ],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [ {
        outline: [ '', ...T() ],
      } ],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [ {
        'outline-offset': [ w, i ],
      } ],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [ {
        outline: [ w, C ],
      } ],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [ {
        outline: [ e ],
      } ],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [ {
        ring: X(),
      } ],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': [ 'ring-inset' ],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [ {
        ring: [ e ],
      } ],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [ {
        'ring-opacity': [ m ],
      } ],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [ {
        'ring-offset': [ w, C ],
      } ],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [ {
        'ring-offset': [ e ],
      } ],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [ {
        shadow: [ '', 'inner', 'none', z, Ge ],
      } ],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [ {
        shadow: [ G ],
      } ],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [ {
        opacity: [ m ],
      } ],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [ {
        'mix-blend': [ ...H(), 'plus-lighter', 'plus-darker' ],
      } ],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [ {
        'bg-blend': H(),
      } ],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [ {
        filter: [ '', 'none' ],
      } ],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [ {
        blur: [ t ],
      } ],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [ {
        brightness: [ o ],
      } ],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [ {
        contrast: [ c ],
      } ],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [ {
        'drop-shadow': [ '', 'none', z, i ],
      } ],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [ {
        grayscale: [ p ],
      } ],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [ {
        'hue-rotate': [ b ],
      } ],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [ {
        invert: [ f ],
      } ],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [ {
        saturate: [ I ],
      } ],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [ {
        sepia: [ U ],
      } ],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [ {
        'backdrop-filter': [ '', 'none' ],
      } ],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [ {
        'backdrop-blur': [ t ],
      } ],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [ {
        'backdrop-brightness': [ o ],
      } ],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [ {
        'backdrop-contrast': [ c ],
      } ],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [ {
        'backdrop-grayscale': [ p ],
      } ],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [ {
        'backdrop-hue-rotate': [ b ],
      } ],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [ {
        'backdrop-invert': [ f ],
      } ],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [ {
        'backdrop-opacity': [ m ],
      } ],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [ {
        'backdrop-saturate': [ I ],
      } ],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [ {
        'backdrop-sepia': [ U ],
      } ],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [ {
        border: [ 'collapse', 'separate' ],
      } ],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [ {
        'border-spacing': [ s ],
      } ],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [ {
        'border-spacing-x': [ s ],
      } ],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [ {
        'border-spacing-y': [ s ],
      } ],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [ {
        table: [ 'auto', 'fixed' ],
      } ],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [ {
        caption: [ 'top', 'bottom' ],
      } ],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [ {
        transition: [ 'none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', i ],
      } ],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [ {
        duration: E(),
      } ],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [ {
        ease: [ 'linear', 'in', 'out', 'in-out', i ],
      } ],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [ {
        delay: E(),
      } ],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [ {
        animate: [ 'none', 'spin', 'ping', 'pulse', 'bounce', i ],
      } ],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [ {
        transform: [ '', 'gpu', 'none' ],
      } ],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [ {
        scale: [ L ],
      } ],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [ {
        'scale-x': [ L ],
      } ],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [ {
        'scale-y': [ L ],
      } ],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [ {
        rotate: [ P, i ],
      } ],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [ {
        'translate-x': [ J ],
      } ],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [ {
        'translate-y': [ J ],
      } ],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [ {
        'skew-x': [ F ],
      } ],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [ {
        'skew-y': [ F ],
      } ],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [ {
        origin: [ 'center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', i ],
      } ],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [ {
        accent: [ 'auto', e ],
      } ],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [ {
        appearance: [ 'none', 'auto' ],
      } ],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [ {
        cursor: [ 'auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', i ],
      } ],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [ {
        caret: [ e ],
      } ],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [ {
        'pointer-events': [ 'none', 'auto' ],
      } ],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [ {
        resize: [ 'none', 'y', 'x', '' ],
      } ],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [ {
        scroll: [ 'auto', 'smooth' ],
      } ],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [ {
        'scroll-m': u(),
      } ],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [ {
        'scroll-mx': u(),
      } ],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [ {
        'scroll-my': u(),
      } ],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [ {
        'scroll-ms': u(),
      } ],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [ {
        'scroll-me': u(),
      } ],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [ {
        'scroll-mt': u(),
      } ],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [ {
        'scroll-mr': u(),
      } ],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [ {
        'scroll-mb': u(),
      } ],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [ {
        'scroll-ml': u(),
      } ],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [ {
        'scroll-p': u(),
      } ],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [ {
        'scroll-px': u(),
      } ],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [ {
        'scroll-py': u(),
      } ],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [ {
        'scroll-ps': u(),
      } ],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [ {
        'scroll-pe': u(),
      } ],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [ {
        'scroll-pt': u(),
      } ],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [ {
        'scroll-pr': u(),
      } ],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [ {
        'scroll-pb': u(),
      } ],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [ {
        'scroll-pl': u(),
      } ],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [ {
        snap: [ 'start', 'end', 'center', 'align-none' ],
      } ],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [ {
        snap: [ 'normal', 'always' ],
      } ],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [ {
        snap: [ 'none', 'x', 'y', 'both' ],
      } ],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [ {
        snap: [ 'mandatory', 'proximity' ],
      } ],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [ {
        touch: [ 'auto', 'none', 'manipulation' ],
      } ],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [ {
        'touch-pan': [ 'x', 'left', 'right' ],
      } ],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [ {
        'touch-pan': [ 'y', 'up', 'down' ],
      } ],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': [ 'touch-pinch-zoom' ],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [ {
        select: [ 'none', 'text', 'all', 'auto' ],
      } ],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [ {
        'will-change': [ 'auto', 'scroll', 'contents', 'transform', i ],
      } ],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [ {
        fill: [ e, 'none' ],
      } ],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [ {
        stroke: [ w, C, j ],
      } ],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [ {
        stroke: [ e, 'none' ],
      } ],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: [ 'sr-only', 'not-sr-only' ],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [ {
        'forced-color-adjust': [ 'auto', 'none' ],
      } ],
    },
    conflictingClassGroups: {
      overflow: [ 'overflow-x', 'overflow-y' ],
      overscroll: [ 'overscroll-x', 'overscroll-y' ],
      inset: [ 'inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left' ],
      'inset-x': [ 'right', 'left' ],
      'inset-y': [ 'top', 'bottom' ],
      flex: [ 'basis', 'grow', 'shrink' ],
      gap: [ 'gap-x', 'gap-y' ],
      p: [ 'px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl' ],
      px: [ 'pr', 'pl' ],
      py: [ 'pt', 'pb' ],
      m: [ 'mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml' ],
      mx: [ 'mr', 'ml' ],
      my: [ 'mt', 'mb' ],
      size: [ 'w', 'h' ],
      'font-size': [ 'leading' ],
      'fvn-normal': [ 'fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction' ],
      'fvn-ordinal': [ 'fvn-normal' ],
      'fvn-slashed-zero': [ 'fvn-normal' ],
      'fvn-figure': [ 'fvn-normal' ],
      'fvn-spacing': [ 'fvn-normal' ],
      'fvn-fraction': [ 'fvn-normal' ],
      'line-clamp': [ 'display', 'overflow' ],
      rounded: [ 'rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl' ],
      'rounded-s': [ 'rounded-ss', 'rounded-es' ],
      'rounded-e': [ 'rounded-se', 'rounded-ee' ],
      'rounded-t': [ 'rounded-tl', 'rounded-tr' ],
      'rounded-r': [ 'rounded-tr', 'rounded-br' ],
      'rounded-b': [ 'rounded-br', 'rounded-bl' ],
      'rounded-l': [ 'rounded-tl', 'rounded-bl' ],
      'border-spacing': [ 'border-spacing-x', 'border-spacing-y' ],
      'border-w': [ 'border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l' ],
      'border-w-x': [ 'border-w-r', 'border-w-l' ],
      'border-w-y': [ 'border-w-t', 'border-w-b' ],
      'border-color': [ 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l' ],
      'border-color-x': [ 'border-color-r', 'border-color-l' ],
      'border-color-y': [ 'border-color-t', 'border-color-b' ],
      'scroll-m': [ 'scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml' ],
      'scroll-mx': [ 'scroll-mr', 'scroll-ml' ],
      'scroll-my': [ 'scroll-mt', 'scroll-mb' ],
      'scroll-p': [ 'scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl' ],
      'scroll-px': [ 'scroll-pr', 'scroll-pl' ],
      'scroll-py': [ 'scroll-pt', 'scroll-pb' ],
      touch: [ 'touch-x', 'touch-y', 'touch-pz' ],
      'touch-x': [ 'touch' ],
      'touch-y': [ 'touch' ],
      'touch-pz': [ 'touch' ],
    },
    conflictingClassGroupModifiers: {
      'font-size': [ 'leading' ],
    },
  };
}
const je = /* @__PURE__ */ me( Ee ),
Le = ( e ) => {
  const {
    variant: r = 'primary',
    // primary, secondary, outline, ghost, link
    size: t = 'm',
    // xs, s, m, l
    type: o = 'button',
    tag: l = 'button',
    className: n,
    children: s,
    disabled: a = ! 1,
    destructive: c = ! 1,
    // true, false
    icon: p = null,
    // icon component
    iconPosition: b = 'left',
    // left, right
    ...f
  } = e,
h = 'border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold primary-btn-focus-shadow disabled:text-text-disabled',
v = {
    primary: 'text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled',
    secondary: 'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled',
    outline: 'text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled',
    ghost: 'text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover',
    link: 'text-link-primary hover:text-link-primary-hover hover:underline p-0 border-0 leading-none',
  }[ r ],
k = c && ! a ? {
    primary: 'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover',
    outline: 'text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error',
    ghost: 'text-button-danger hover:bg-field-background-error',
    link: 'text-button-danger hover:text-button-danger-secondary',
  }[ r ] : '',
y = {
    xs: 'p-1 rounded-sm [&>svg]:h-[16px] [&>svg]:w-[16px]',
    s: 'p-2 rounded-sm [&>svg]:h-[16px] [&>svg]:w-[16px]',
    m: 'p-2.5 rounded-md text-sm [&>svg]:h-[20px] [&>svg]:w-[20px]',
    l: 'p-3 rounded-lg text-base [&>svg]:h-[24px] [&>svg]:w-[24px]',
  }[ t ];
  let g,
m = null,
x = '';
  p && ( x = 'flex items-center justify-center gap-1', b === 'left' ? g = p : m = p );
  const I = l;
  return /* @__PURE__ */ React.createElement(
    I,
    {
      type: o,
      className: je(
        x,
        h,
        y,
        v,
        k,
        n
      ),
      disabled: a,
      ...f,
    },
    g,
    s,
    m
  );
};
export {
  Le as Button,
};
//# sourceMappingURL=force-ui.es.js.map
