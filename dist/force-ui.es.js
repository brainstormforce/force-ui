import { forwardRef as L, createElement as oe, useMemo as E, useState as Q, useCallback as G, isValidElement as Y, createContext as xe, Fragment as le, useContext as ye } from "react";
const se = "-";
function ve(e) {
  const r = ke(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  function s(a) {
    const l = a.split(se);
    return l[0] === "" && l.length !== 1 && l.shift(), de(l, r) || we(a);
  }
  function n(a, l) {
    const i = t[a] || [];
    return l && o[a] ? [...i, ...o[a]] : i;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: n
  };
}
function de(e, r) {
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], o = r.nextPart.get(t), s = o ? de(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const n = e.join(se);
  return r.validators.find(({
    validator: a
  }) => a(n))?.classGroupId;
}
const ie = /^\[(.+)\]$/;
function we(e) {
  if (ie.test(e)) {
    const r = ie.exec(e)[1], t = r?.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function ke(e) {
  const {
    theme: r,
    prefix: t
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Re(Object.entries(e.classGroups), t).forEach(([n, a]) => {
    ne(a, o, n, r);
  }), o;
}
function ne(e, r, t, o) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const n = s === "" ? r : ce(r, s);
      n.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (Ce(s)) {
        ne(s(o), r, t, o);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([n, a]) => {
      ne(a, ce(r, n), t, o);
    });
  });
}
function ce(e, r) {
  let t = e;
  return r.split(se).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}
function Ce(e) {
  return e.isThemeGetter;
}
function Re(e, r) {
  return r ? e.map(([t, o]) => {
    const s = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, l]) => [r + a, l])) : n);
    return [t, s];
  }) : e;
}
function Ne(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(n, a) {
    t.set(n, a), r++, r > e && (r = 0, o = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(n) {
      let a = t.get(n);
      if (a !== void 0)
        return a;
      if ((a = o.get(n)) !== void 0)
        return s(n, a), a;
    },
    set(n, a) {
      t.has(n) ? t.set(n, a) : s(n, a);
    }
  };
}
const ue = "!";
function Ee(e) {
  const {
    separator: r,
    experimentalParseClassName: t
  } = e, o = r.length === 1, s = r[0], n = r.length;
  function a(l) {
    const i = [];
    let c = 0, d = 0, b;
    for (let p = 0; p < l.length; p++) {
      let x = l[p];
      if (c === 0) {
        if (x === s && (o || l.slice(p, p + n) === r)) {
          i.push(l.slice(d, p)), d = p + n;
          continue;
        }
        if (x === "/") {
          b = p;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const g = i.length === 0 ? l : l.substring(d), m = g.startsWith(ue), h = m ? g.substring(1) : g, f = b && b > d ? b - d : void 0;
    return {
      modifiers: i,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: f
    };
  }
  return t ? function(i) {
    return t({
      className: i,
      parseClassName: a
    });
  } : a;
}
function ze(e) {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((o) => {
    o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
  }), r.push(...t.sort()), r;
}
function Ae(e) {
  return {
    cache: Ne(e.cacheSize),
    parseClassName: Ee(e),
    ...ve(e)
  };
}
const Se = /\s+/;
function Me(e, r) {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = r, n = /* @__PURE__ */ new Set();
  return e.trim().split(Se).map((a) => {
    const {
      modifiers: l,
      hasImportantModifier: i,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = t(a);
    let b = !!d, g = o(b ? c.substring(0, d) : c);
    if (!g) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (g = o(c), !g)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      b = !1;
    }
    const m = ze(l).join(":");
    return {
      isTailwindClass: !0,
      modifierId: i ? m + ue : m,
      classGroupId: g,
      originalClassName: a,
      hasPostfixModifier: b
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: l,
      classGroupId: i,
      hasPostfixModifier: c
    } = a, d = l + i;
    return n.has(d) ? !1 : (n.add(d), s(i, c).forEach((b) => n.add(l + b)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Ie() {
  let e = 0, r, t, o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = be(r)) && (o && (o += " "), o += t);
  return o;
}
function be(e) {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = be(e[o])) && (t && (t += " "), t += r);
  return t;
}
function Pe(e, ...r) {
  let t, o, s, n = a;
  function a(i) {
    const c = r.reduce((d, b) => b(d), e());
    return t = Ae(c), o = t.cache.get, s = t.cache.set, n = l, l(i);
  }
  function l(i) {
    const c = o(i);
    if (c)
      return c;
    const d = Me(i, t);
    return s(i, d), d;
  }
  return function() {
    return n(Ie.apply(null, arguments));
  };
}
function v(e) {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}
const pe = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ge = /^\d+\/\d+$/, je = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ve = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Te = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Be = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function z(e) {
  return P(e) || je.has(e) || Ge.test(e);
}
function S(e) {
  return T(e, "length", Ze);
}
function P(e) {
  return !!e && !Number.isNaN(Number(e));
}
function H(e) {
  return T(e, "number", P);
}
function X(e) {
  return !!e && Number.isInteger(Number(e));
}
function We(e) {
  return e.endsWith("%") && P(e.slice(0, -1));
}
function u(e) {
  return pe.test(e);
}
function M(e) {
  return Ve.test(e);
}
const Fe = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Oe(e) {
  return T(e, Fe, ge);
}
function _e(e) {
  return T(e, "position", ge);
}
const Ue = /* @__PURE__ */ new Set(["image", "url"]);
function Xe(e) {
  return T(e, Ue, Je);
}
function qe(e) {
  return T(e, "", De);
}
function q() {
  return !0;
}
function T(e, r, t) {
  const o = pe.exec(e);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : !1;
}
function Ze(e) {
  return Le.test(e) && !Te.test(e);
}
function ge() {
  return !1;
}
function De(e) {
  return Be.test(e);
}
function Je(e) {
  return $e.test(e);
}
function Ke() {
  const e = v("colors"), r = v("spacing"), t = v("blur"), o = v("brightness"), s = v("borderColor"), n = v("borderRadius"), a = v("borderSpacing"), l = v("borderWidth"), i = v("contrast"), c = v("grayscale"), d = v("hueRotate"), b = v("invert"), g = v("gap"), m = v("gradientColorStops"), h = v("gradientColorStopPositions"), f = v("inset"), p = v("margin"), x = v("opacity"), w = v("padding"), C = v("saturate"), R = v("scale"), N = v("sepia"), A = v("skew"), I = v("space"), D = v("translate"), B = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", u, r], y = () => [u, r], F = () => ["", z, S], j = () => ["auto", P, u], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", u], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [P, H], K = () => [P, u];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [q],
      spacing: [z, S],
      blur: ["none", "", M, u],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", M, u],
      borderSpacing: y(),
      borderWidth: F(),
      contrast: U(),
      grayscale: _(),
      hueRotate: K(),
      invert: _(),
      gap: y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [We, S],
      inset: W(),
      margin: W(),
      opacity: U(),
      padding: y(),
      saturate: U(),
      scale: U(),
      sepia: _(),
      skew: K(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", u]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [M]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...J(), u]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", X, u]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", u]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", X, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [q]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", X, u]
        }, u]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [q]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [X, u]
        }, u]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", u]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", u]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...te()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...te(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...te(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [I]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [I]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", u, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [u, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [u, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [M]
        }, M]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [u, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [u, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [u, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [u, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", M, S]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", H]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [q]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", u]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", P, H]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, u]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", u]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", u]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", z, S]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", z, u]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", u]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", u]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...J(), _e]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Oe]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xe]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...V(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: V()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [z, S]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: F()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [z, S]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", M, qe]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [q]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...O(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": O()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", M, u]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", u]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", u]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", u]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [R]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [R]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [R]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [X, u]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", u]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", u]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", u]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, S, H]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const ee = /* @__PURE__ */ Pe(Ke);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fe = (...e) => e.filter((r, t, o) => !!r && o.indexOf(r) === t).join(" ");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = L(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: n,
    iconNode: a,
    ...l
  }, i) => oe(
    "svg",
    {
      ref: i,
      ...Qe,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(t) * 24 / Number(r) : t,
      className: fe("lucide", s),
      ...l
    },
    [
      ...a.map(([c, d]) => oe(c, d)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = (e, r) => {
  const t = L(
    ({ className: o, ...s }, n) => oe(Ye, {
      ref: n,
      iconNode: r,
      className: fe(`lucide-${He(e)}`, o),
      ...s
    })
  );
  return t.displayName = `${e}`, t;
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = re("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = re("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), gr = (e) => {
  const {
    variant: r = "primary",
    // primary, secondary, outline, ghost, link
    size: t = "md",
    // xs, sm, md, lg
    type: o = "button",
    tag: s = "button",
    className: n,
    children: a,
    disabled: l = !1,
    destructive: i = !1,
    // true, false
    icon: c = null,
    // icon component
    iconPosition: d = "left",
    // left, right
    ...b
  } = e, g = "border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled", m = {
    primary: "text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    secondary: "text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    outline: "text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",
    ghost: "text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",
    link: "text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"
  }[r], h = i && !l ? {
    primary: "bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",
    outline: "text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",
    ghost: "text-button-danger hover:bg-field-background-error",
    link: "text-button-danger hover:text-button-danger-secondary"
  }[r] : "", f = {
    xs: "p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    sm: "p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    md: "p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",
    lg: "p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"
  }[t];
  let p, x = null, w = "";
  c && (w = "flex items-center justify-center gap-1", d === "left" ? p = c : x = c);
  const C = s;
  return /* @__PURE__ */ React.createElement(C, { type: o, className: ee(w, g, f, m, h, n), disabled: l, ...b }, p, a, x);
}, nr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Z = (e = 21) => {
  let r = "", t = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    r += nr[t[e] & 63];
  return r;
};
function me(e) {
  var r, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (t = me(e[r])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function sr() {
  for (var e, r, t = 0, o = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (r = me(e)) && (o && (o += " "), o += r);
  return o;
}
const k = (...e) => ee(sr(...e)), ar = ({ label: e, switchId: r, disabled: t = !1, children: o }) => {
  const s = !e?.heading || !e?.description;
  if (s)
    return o;
  const n = Y(e), a = G(() => {
    if (n)
      return e;
    const { heading: l = "", description: i = "" } = e;
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, l && /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, l), i && /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, i));
  }, [e]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: k(
        "inline-flex items-center",
        !s && "items-start"
      )
    },
    o,
    /* @__PURE__ */ React.createElement(
      "label",
      {
        htmlFor: r,
        className: k("ml-3", !t && "cursor-pointer")
      },
      a()
    )
  );
}, lr = ({
  id: e,
  onChange: r,
  value: t,
  defaultValue: o = !1,
  size: s = "lg",
  disabled: n = !1,
  label: a = { heading: "", description: "" },
  name: l,
  ...i
}, c) => {
  const d = E(() => typeof t < "u", [t]), b = E(() => e || `switch-${Z()}`, []), [g, m] = Q(o), h = "primary", f = G(
    () => d ? t : g,
    [d, t, g]
  ), p = (R) => {
    if (n) return;
    const N = R.target.checked;
    d || m(N), typeof r == "function" && r(N);
  }, x = {
    primary: {
      input: "bg-toggle-off hover:bg-toggle-off-hover checked:bg-toggle-on checked:hover:bg-toggle-on-hover focus:ring focus:ring-toggle-on focus:ring-offset-4 border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border",
      toggleDial: "bg-toggle-dial-background shadow-toggleDial"
    }
  }, w = {
    lg: {
      container: "w-11 h-6",
      toggleDial: "size-4 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-5 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4"
    },
    sm: {
      container: "w-9 h-5",
      toggleDial: "size-3 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4"
    }
  }, C = {
    input: "bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed",
    toggleDial: "peer-disabled:cursor-not-allowed"
  };
  return /* @__PURE__ */ React.createElement(ar, { label: a, switchId: b, disabled: n }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: k(
        "relative inline-block cursor-pointer rounded-full shrink-0",
        w[s].container
      )
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: c,
        id: b,
        type: "checkbox",
        className: k(
          "peer appearance-none absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0",
          x[h].input,
          n && C.input
        ),
        checked: f(),
        onChange: p,
        disabled: n,
        name: l,
        ...i
      }
    ),
    /* @__PURE__ */ React.createElement(
      "label",
      {
        htmlFor: b,
        className: k(
          "bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300",
          w[s].toggleDial,
          x[h].toggleDial,
          n && C.toggleDial
        )
      }
    )
  ));
}, fr = L(lr), ir = ({
  id: e,
  label: r,
  defaultChecked: t = !1,
  checked: o,
  onChange: s,
  value: n,
  indeterminate: a,
  disabled: l,
  size: i = "md",
  ...c
}, d) => {
  const b = E(() => e || `checkbox-${Z()}`, [e]), g = E(
    () => typeof o < "u",
    [o]
  ), [m, h] = Q(t || !1), f = "primary", p = {
    sm: {
      checkbox: "size-4 rounded-sm",
      icon: "size-3"
    },
    md: {
      checkbox: "size-5 rounded",
      icon: "size-4"
    }
  }, x = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",
      icon: "text-white"
    }
  }, w = {
    checkbox: "disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "peer-disabled:text-border-disabled"
  }, C = G(
    () => g ? o : m,
    [g, o, m]
  ), R = (A) => {
    if (l) return;
    const I = A.target.checked;
    g || h(I), typeof s == "function" && s(I);
  }, N = G(() => Y(r) ? r : !r.heading || !r.description ? null : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, r.heading), /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, r.description)), [r]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: k("inline-flex items-center", !!r && "items-start")
    },
    /* @__PURE__ */ React.createElement(
      "label",
      {
        className: k(
          "relative flex items-center rounded-full",
          !l && "cursor-pointer"
        ),
        htmlFor: b
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ref: d,
          id: b,
          type: "checkbox",
          className: k(
            "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",
            x[f].checkbox,
            p[i].checkbox,
            l && w.checkbox
          ),
          checked: C(),
          onChange: R,
          disabled: l,
          ...c
        }
      ),
      /* @__PURE__ */ React.createElement("span", { className: k(
        "pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
        x[f].icon,
        l && w.icon
      ) }, a ? /* @__PURE__ */ React.createElement(
        tr,
        {
          className: k(
            p[i]?.icon
          )
        }
      ) : /* @__PURE__ */ React.createElement(
        er,
        {
          className: k(
            p[i]?.icon
          )
        }
      ))
    ),
    !!r && /* @__PURE__ */ React.createElement(
      "label",
      {
        className: k("ml-3", !l && "cursor-pointer"),
        htmlFor: b
      },
      N()
    )
  );
}, mr = L(ir), he = xe(), cr = () => ye(he), dr = ({
  children: e,
  name: r,
  value: t,
  defaultValue: o,
  by: s = "id",
  as: n = le,
  onChange: a,
  className: l,
  disabled: i = !1
}) => {
  const c = E(() => typeof t < "u", [t]), d = E(
    () => r || `radio-button-group-${Z()}`,
    [r]
  ), [b, g] = Q(c ? t : o), m = G(
    (h) => {
      const f = h.target.value;
      c || g(f), typeof a == "function" && a(f);
    },
    [a]
  );
  return /* @__PURE__ */ React.createElement(n, { ...n === le ? {} : { className: l } }, /* @__PURE__ */ React.createElement(
    he.Provider,
    {
      value: {
        name: d,
        value: c ? t : b,
        by: s,
        onChange: m,
        isControlled: c,
        disableAll: i
      }
    },
    React.Children.map(e, (h) => Y(h) ? h : null)
  ));
}, ur = ({ id: e, label: r, value: t, disabled: o, size: s = "md", ...n }, a) => {
  const l = cr();
  if (!l)
    throw new Error("RadioButton should be used inside RadioButton Group");
  const {
    name: i,
    value: c,
    by: d,
    onChange: b,
    disableAll: g,
    checked: m
  } = l, h = "primary", f = E(() => e || `radio-button-${Z()}`, [e]), p = E(() => g || o, [g, o]), x = E(() => typeof m !== void 0 ? m : typeof c != typeof t ? !1 : typeof c == "string" ? c === t : Array.isArray(c) ? c.includes(t) : c[d] === t[d], [c, t, m]), w = {
    sm: {
      checkbox: "size-4",
      icon: "size-1.5"
    },
    md: {
      checkbox: "size-5",
      icon: "size-2"
    }
  }, C = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",
      icon: "text-white"
    }
  }, R = {
    checkbox: "disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "peer-disabled:text-border-disabled"
  }, N = G(() => Y(r) ? r : !r.heading || !r.description ? null : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, r.heading), /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, r.description)), [r]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: k("inline-flex items-center", !!r && "items-start")
    },
    /* @__PURE__ */ React.createElement(
      "label",
      {
        className: k(
          "relative flex items-center rounded-full",
          !p && "cursor-pointer"
        ),
        htmlFor: f
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ref: a,
          id: f,
          type: "radio",
          className: k(
            "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid rounded-full",
            C[h].checkbox,
            w[s].checkbox,
            p && R.checkbox
          ),
          name: i,
          value: t,
          onChange: b,
          checked: x,
          disabled: p,
          ...n
        }
      ),
      /* @__PURE__ */ React.createElement(
        "span",
        {
          className: k(
            "pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
            C[h].icon,
            p && R.icon
          )
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: k(
              "rounded-full bg-current",
              w[s]?.icon
            )
          }
        )
      )
    ),
    !!r && /* @__PURE__ */ React.createElement(
      "label",
      {
        className: k("ml-3", !p && "cursor-pointer"),
        htmlFor: f
      },
      N()
    )
  );
}, hr = {
  Group: dr,
  Button: L(ur)
}, xr = (e) => {
  const {
    label: r = "",
    size: t = "sm",
    // xs, sm, md, lg
    className: o = "",
    type: s = "pill",
    // pill, rounded
    variant: n = "neutral",
    // neutral, red, yellow, green, blue, inverse
    icon: a = /* @__PURE__ */ React.createElement(rr, null),
    disabled: l = !1,
    onClose: i = () => {
    },
    closable: c = !0
  } = e, d = "font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid", b = {
    xs: "py-0.5 px-1 text-xs",
    sm: "py-1 px-1.5 text-xs",
    md: "py-1 px-1.5 text-sm",
    lg: "py-1 px-1.5 text-base"
  }, g = {
    pill: "rounded-full",
    rounded: "rounded"
  }, m = {
    neutral: "bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray",
    red: "bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red",
    yellow: "bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow",
    green: "bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green",
    blue: "bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky",
    inverse: "bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse",
    disabled: "bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"
  };
  let h = "", f = "group relative justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer";
  return l ? (h = m.disabled, f += " cursor-not-allowed disabled") : h = m[n], r ? /* @__PURE__ */ React.createElement("span", { className: ee(d, b[t], g[s], h, o) }, a ? /* @__PURE__ */ React.createElement("span", { className: "justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4" }, a) : null, r, c && /* @__PURE__ */ React.createElement("span", { className: f, onClick: l ? null : i }, /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, `Remove ${r}`), /* @__PURE__ */ React.createElement(or, null), /* @__PURE__ */ React.createElement("span", { className: "absolute -inset-1" }))) : null;
}, yr = (e) => {
  const {
    value: r = "",
    size: t = "sm",
    // sm, md, lg
    className: o = "",
    disabled: s = !1,
    inputProps: n,
    onChange: a = () => {
    },
    error: l = !1,
    onError: i = () => {
    }
  } = e;
  let c = "py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";
  const d = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, b = s ? "hover:border-border-disabled" : "hover:border-border-strong", g = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", m = l ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "", h = s ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "";
  return /* @__PURE__ */ React.createElement("textarea", { className: ee(c, h, d[t], g, b, m, o), ...n, disabled: s, onChange: a, onInvalid: i, value: r });
}, br = ({
  id: e,
  type: r = "text",
  defaultValue: t = "",
  value: o,
  size: s = "sm",
  // sm, md, lg
  className: n = "",
  disabled: a = !1,
  onChange: l = () => {
  },
  error: i = !1,
  onError: c = () => {
  },
  prefix: d = null,
  suffix: b = null,
  ...g
}, m) => {
  const h = E(() => e || `input-${r}-${Z()}`, [e]), f = E(
    () => typeof o < "u",
    [o]
  ), [p, x] = Q(t), w = G(
    () => f ? o : p,
    [f, o, p]
  ), C = (V) => {
    if (a) return;
    const O = V.target.value;
    f || x(O), typeof l == "function" && l(O);
  };
  let R = "border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";
  const N = {
    sm: "px-2 py-2 rounded",
    md: "px-2.5 py-2.5 rounded-md",
    lg: "px-3 py-3 rounded-lg"
  }, A = {
    sm: "text-xs",
    md: "text-base",
    lg: "text-base"
  }, I = {
    sm: d ? "pl-8" : "",
    md: d ? "pl-9" : "",
    lg: d ? "pl-10" : ""
  }, D = {
    sm: b ? "pr-8" : "",
    md: b ? "pr-9" : "",
    lg: b ? "pr-10" : ""
  }, B = a ? "hover:border-border-disabled" : "hover:border-border-strong", $ = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", W = i ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "", y = a ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "", F = "font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4", j = () => d ? /* @__PURE__ */ React.createElement("div", { className: k(F, "left-0 pl-3", A[s]) }, d) : null, J = () => b ? /* @__PURE__ */ React.createElement("div", { className: k(F, "right-0 pr-3", A[s]) }, b) : null;
  return /* @__PURE__ */ React.createElement("div", { className: k("relative flex focus-within:z-10", n) }, j(), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: m,
      id: h,
      type: r,
      className: k(
        R,
        y,
        N[s],
        A[s],
        I[s],
        D[s],
        $,
        B,
        W
      ),
      disabled: a,
      onChange: C,
      onInvalid: c,
      value: w(),
      ...g
    }
  ), J());
}, vr = L(br);
export {
  xr as Badge,
  gr as Button,
  mr as Checkbox,
  vr as Input,
  hr as RadioButton,
  fr as Switch,
  yr as TextArea
};
//# sourceMappingURL=force-ui.es.js.map
