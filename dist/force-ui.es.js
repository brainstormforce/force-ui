import { forwardRef as $, createElement as Q, useMemo as z, useState as ee, useCallback as I, isValidElement as q, createContext as ye, Fragment as ie, useContext as xe } from "react";
const re = "-";
function ve(e) {
  const r = ke(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  function s(a) {
    const i = a.split(re);
    return i[0] === "" && i.length !== 1 && i.shift(), de(i, r) || we(a);
  }
  function n(a, i) {
    const l = t[a] || [];
    return i && o[a] ? [...l, ...o[a]] : l;
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
  const n = e.join(re);
  return r.validators.find(({
    validator: a
  }) => a(n))?.classGroupId;
}
const le = /^\[(.+)\]$/;
function we(e) {
  if (le.test(e)) {
    const r = le.exec(e)[1], t = r?.substring(0, r.indexOf(":"));
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
    Y(a, o, n, r);
  }), o;
}
function Y(e, r, t, o) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const n = s === "" ? r : ce(r, s);
      n.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (Ce(s)) {
        Y(s(o), r, t, o);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([n, a]) => {
      Y(a, ce(r, n), t, o);
    });
  });
}
function ce(e, r) {
  let t = e;
  return r.split(re).forEach((o) => {
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
    const s = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [r + a, i])) : n);
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
  function a(i) {
    const l = [];
    let c = 0, d = 0, b;
    for (let p = 0; p < i.length; p++) {
      let v = i[p];
      if (c === 0) {
        if (v === s && (o || i.slice(p, p + n) === r)) {
          l.push(i.slice(d, p)), d = p + n;
          continue;
        }
        if (v === "/") {
          b = p;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const g = l.length === 0 ? i : i.substring(d), f = g.startsWith(ue), m = f ? g.substring(1) : g, h = b && b > d ? b - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  }
  return t ? function(l) {
    return t({
      className: l,
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
      modifiers: i,
      hasImportantModifier: l,
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
    const f = ze(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? f + ue : f,
      classGroupId: g,
      originalClassName: a,
      hasPostfixModifier: b
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = a, d = i + l;
    return n.has(d) ? !1 : (n.add(d), s(l, c).forEach((b) => n.add(i + b)), !0);
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
function Ge(e, ...r) {
  let t, o, s, n = a;
  function a(l) {
    const c = r.reduce((d, b) => b(d), e());
    return t = Ae(c), o = t.cache.get, s = t.cache.set, n = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const d = Me(l, t);
    return s(l, d), d;
  }
  return function() {
    return n(Ie.apply(null, arguments));
  };
}
function y(e) {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}
const ge = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pe = /^\d+\/\d+$/, je = /* @__PURE__ */ new Set(["px", "full", "screen"]), Le = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Te = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Be = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function E(e) {
  return M(e) || je.has(e) || Pe.test(e);
}
function A(e) {
  return G(e, "length", Ze);
}
function M(e) {
  return !!e && !Number.isNaN(Number(e));
}
function X(e) {
  return G(e, "number", M);
}
function V(e) {
  return !!e && Number.isInteger(Number(e));
}
function Fe(e) {
  return e.endsWith("%") && M(e.slice(0, -1));
}
function u(e) {
  return ge.test(e);
}
function S(e) {
  return Le.test(e);
}
const We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Ue(e) {
  return G(e, We, pe);
}
function _e(e) {
  return G(e, "position", pe);
}
const Oe = /* @__PURE__ */ new Set(["image", "url"]);
function Xe(e) {
  return G(e, Oe, He);
}
function qe(e) {
  return G(e, "", De);
}
function B() {
  return !0;
}
function G(e, r, t) {
  const o = ge.exec(e);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : !1;
}
function Ze(e) {
  return Te.test(e) && !Ve.test(e);
}
function pe() {
  return !1;
}
function De(e) {
  return Be.test(e);
}
function He(e) {
  return $e.test(e);
}
function Je() {
  const e = y("colors"), r = y("spacing"), t = y("blur"), o = y("brightness"), s = y("borderColor"), n = y("borderRadius"), a = y("borderSpacing"), i = y("borderWidth"), l = y("contrast"), c = y("grayscale"), d = y("hueRotate"), b = y("invert"), g = y("gap"), f = y("gradientColorStops"), m = y("gradientColorStopPositions"), h = y("inset"), p = y("margin"), v = y("opacity"), w = y("padding"), R = y("saturate"), C = y("scale"), N = y("sepia"), W = y("skew"), j = y("space"), te = y("translate"), D = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", u, r], x = () => [u, r], oe = () => ["", E, A], U = () => ["auto", M, u], ne = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", u], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [M, X], O = () => [M, u];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [B],
      spacing: [E, A],
      blur: ["none", "", S, u],
      brightness: T(),
      borderColor: [e],
      borderRadius: ["none", "", "full", S, u],
      borderSpacing: x(),
      borderWidth: oe(),
      contrast: T(),
      grayscale: L(),
      hueRotate: O(),
      invert: L(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fe, A],
      inset: J(),
      margin: J(),
      opacity: T(),
      padding: x(),
      saturate: T(),
      scale: T(),
      sepia: L(),
      skew: O(),
      space: x(),
      translate: x()
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
        columns: [S]
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
        object: [...ne(), u]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", V, u]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: J()
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
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", V, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [B]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", V, u]
        }, u]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [B]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [V, u]
        }, u]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        "space-x": [j]
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
        "space-y": [j]
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
          screen: [S]
        }, S]
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
        text: ["base", S, A]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", X]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [B]
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
        "line-clamp": ["none", M, X]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, u]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", E, A]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", E, u]
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
        indent: x()
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
        "bg-opacity": [v]
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
        bg: [...ne(), _e]
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
        bg: ["auto", "cover", "contain", Ue]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: _()
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
        outline: ["", ..._()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [E, A]
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
        ring: oe()
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [E, A]
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
        shadow: ["", "inner", "none", S, qe]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [B]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", S, u]
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
        saturate: [R]
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
        "backdrop-contrast": [l]
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
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R]
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
        duration: O()
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
        delay: O()
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
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [V, u]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [te]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [te]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [W]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [W]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        stroke: [E, A, X]
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
const F = /* @__PURE__ */ Ge(Je);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fe = (...e) => e.filter((r, t, o) => !!r && o.indexOf(r) === t).join(" ");
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
const Ye = $(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: n,
    iconNode: a,
    ...i
  }, l) => Q(
    "svg",
    {
      ref: l,
      ...Qe,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(t) * 24 / Number(r) : t,
      className: fe("lucide", s),
      ...i
    },
    [
      ...a.map(([c, d]) => Q(c, d)),
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
const P = (e, r) => {
  const t = $(
    ({ className: o, ...s }, n) => Q(Ye, {
      ref: n,
      iconNode: r,
      className: fe(`lucide-${Ke(e)}`, o),
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
const er = P("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = P("Info", [
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
const tr = P("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = P("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = P("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = P("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), pr = (e) => {
  const {
    variant: r = "primary",
    // primary, secondary, outline, ghost, link
    size: t = "md",
    // xs, sm, md, lg
    type: o = "button",
    tag: s = "button",
    className: n,
    children: a,
    disabled: i = !1,
    destructive: l = !1,
    // true, false
    icon: c = null,
    // icon component
    iconPosition: d = "left",
    // left, right
    loading: b = !1,
    // true, false
    loaderIcon: g = /* @__PURE__ */ React.createElement(tr, { className: "animate-spin" }),
    // loader icon component
    ...f
  } = e, m = "border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled", h = {
    primary: "text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    secondary: "text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    outline: "text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",
    ghost: "text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",
    link: "text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"
  }[r], p = l && !i ? {
    primary: "bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",
    outline: "text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",
    ghost: "text-button-danger hover:bg-field-background-error",
    link: "text-button-danger hover:text-button-danger-secondary"
  }[r] : "", v = {
    xs: "p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    sm: "p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    md: "p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",
    lg: "p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"
  }[t];
  let w, R = null, C = "";
  c && (C = "flex items-center justify-center gap-1", d === "left" ? w = c : R = c), b && !i && ["primary", "secondary", "outline", "ghost"].includes(r) && (C = C ? C + " opacity-50" : "flex items-center justify-center gap-1 opacity-50", d === "right" ? R = g : w = g, ["outline", "ghost"].includes(r) && (C += " [&>svg]:text-brand-primary-600"));
  const N = s;
  return /* @__PURE__ */ React.createElement(N, { type: o, className: F(C, m, v, h, p, n), disabled: i, ...f }, w, a, R);
};
let Z = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((r, t) => (t &= 63, t < 36 ? r += t.toString(36) : t < 62 ? r += (t - 26).toString(36).toUpperCase() : t > 62 ? r += "-" : r += "_", r), "");
function me(e) {
  var r, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (t = me(e[r])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function ar() {
  for (var e, r, t = 0, o = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (r = me(e)) && (o && (o += " "), o += r);
  return o;
}
const k = (...e) => F(ar(...e)), ir = ({ label: e, switchId: r, disabled: t = !1, children: o }) => {
  const s = !e?.heading || !e?.description;
  if (s)
    return o;
  const n = q(e), a = I(() => {
    if (n)
      return e;
    const { heading: i = "", description: l = "" } = e;
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, i && /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, i), l && /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, l));
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
  name: i,
  ...l
}, c) => {
  const d = z(() => typeof t < "u", [t]), b = z(() => e || `switch-${Z()}`, []), [g, f] = ee(o), m = "primary", h = I(
    () => d ? t : g,
    [d, t, g]
  ), p = (C) => {
    if (n) return;
    const N = C.target.checked;
    d || f(N), typeof r == "function" && r(N);
  }, v = {
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
  }, R = {
    input: "bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed",
    toggleDial: "peer-disabled:cursor-not-allowed"
  };
  return /* @__PURE__ */ React.createElement(ir, { label: a, switchId: b, disabled: n }, /* @__PURE__ */ React.createElement(
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
          v[m].input,
          n && R.input
        ),
        checked: h(),
        onChange: p,
        disabled: n,
        name: i,
        ...l
      }
    ),
    /* @__PURE__ */ React.createElement(
      "label",
      {
        htmlFor: b,
        className: k(
          "bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300",
          w[s].toggleDial,
          v[m].toggleDial,
          n && R.toggleDial
        )
      }
    )
  ));
}, fr = $(lr), cr = ({
  id: e,
  label: r,
  defaultChecked: t = !1,
  checked: o,
  onChange: s,
  value: n,
  indeterminate: a,
  disabled: i,
  size: l = "md",
  ...c
}, d) => {
  const b = z(() => e || `checkbox-${Z()}`, [e]), g = z(
    () => typeof o < "u",
    [o]
  ), [f, m] = ee(t || !1), h = "primary", p = {
    sm: {
      checkbox: "size-4 rounded-sm",
      icon: "size-3"
    },
    md: {
      checkbox: "size-5 rounded",
      icon: "size-4"
    }
  }, v = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",
      icon: "text-white"
    }
  }, w = {
    checkbox: "disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "peer-disabled:text-border-disabled"
  }, R = I(
    () => g ? o : f,
    [g, o, f]
  ), C = (W) => {
    if (i) return;
    const j = W.target.checked;
    g || m(j), typeof s == "function" && s(j);
  }, N = I(() => q(r) ? r : !r.heading || !r.description ? null : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, r.heading), /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, r.description)), [r]);
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
          !i && "cursor-pointer"
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
            v[h].checkbox,
            p[l].checkbox,
            i && w.checkbox
          ),
          checked: R(),
          onChange: C,
          disabled: i,
          ...c
        }
      ),
      /* @__PURE__ */ React.createElement("span", { className: k(
        "pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
        v[h].icon,
        i && w.icon
      ) }, a ? /* @__PURE__ */ React.createElement(
        or,
        {
          className: k(
            p[l]?.icon
          )
        }
      ) : /* @__PURE__ */ React.createElement(
        er,
        {
          className: k(
            p[l]?.icon
          )
        }
      ))
    ),
    !!r && /* @__PURE__ */ React.createElement(
      "label",
      {
        className: k("ml-3", !i && "cursor-pointer"),
        htmlFor: b
      },
      N()
    )
  );
}, mr = $(cr), he = ye(), dr = () => xe(he), ur = ({
  children: e,
  name: r,
  value: t,
  defaultValue: o,
  by: s = "id",
  as: n = ie,
  onChange: a,
  className: i,
  disabled: l = !1
}) => {
  const c = z(() => typeof t < "u", [t]), d = z(
    () => r || `radio-button-group-${Z()}`,
    [r]
  ), [b, g] = ee(c ? t : o), f = I(
    (m) => {
      const h = m.target.value;
      c || g(h), typeof a == "function" && a(h);
    },
    [a]
  );
  return /* @__PURE__ */ React.createElement(n, { ...n === ie ? {} : { className: i } }, /* @__PURE__ */ React.createElement(
    he.Provider,
    {
      value: {
        name: d,
        value: c ? t : b,
        by: s,
        onChange: f,
        isControlled: c,
        disableAll: l
      }
    },
    React.Children.map(e, (m) => q(m) ? m : null)
  ));
}, br = ({ id: e, label: r, value: t, disabled: o, size: s = "md", ...n }, a) => {
  const i = dr();
  if (!i)
    throw new Error("RadioButton should be used inside RadioButton Group");
  const {
    name: l,
    value: c,
    by: d,
    onChange: b,
    disableAll: g,
    checked: f
  } = i, m = "primary", h = z(() => e || `radio-button-${Z()}`, [e]), p = z(() => g || o, [g, o]), v = z(() => typeof f !== void 0 ? f : typeof c != typeof t ? !1 : typeof c == "string" ? c === t : Array.isArray(c) ? c.includes(t) : c[d] === t[d], [c, t, f]), w = {
    sm: {
      checkbox: "size-4",
      icon: "size-1.5"
    },
    md: {
      checkbox: "size-5",
      icon: "size-2"
    }
  }, R = {
    primary: {
      checkbox: "border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus",
      icon: "text-white"
    }
  }, C = {
    checkbox: "disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled",
    icon: "peer-disabled:text-border-disabled"
  }, N = I(() => q(r) ? r : !r.heading || !r.description ? null : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-base font-medium leading-4 m-0" }, r.heading), /* @__PURE__ */ React.createElement("p", { className: "text-text-secondary text-sm font-normal leading-5 m-0" }, r.description)), [r]);
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
        htmlFor: h
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ref: a,
          id: h,
          type: "radio",
          className: k(
            "peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid rounded-full",
            R[m].checkbox,
            w[s].checkbox,
            p && C.checkbox
          ),
          name: l,
          value: t,
          onChange: b,
          checked: v,
          disabled: p,
          ...n
        }
      ),
      /* @__PURE__ */ React.createElement(
        "span",
        {
          className: k(
            "pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
            R[m].icon,
            p && C.icon
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
        htmlFor: h
      },
      N()
    )
  );
}, hr = {
  Group: ur,
  Button: $(br)
}, yr = (e) => {
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
    disabled: i = !1,
    onClose: l = () => {
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
  }, f = {
    neutral: "bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray",
    red: "bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red",
    yellow: "bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow",
    green: "bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green",
    blue: "bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky",
    inverse: "bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse",
    disabled: "bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"
  };
  let m = "", h = "group relative justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer";
  return i ? (m = f.disabled, h += " cursor-not-allowed disabled") : m = f[n], r ? /* @__PURE__ */ React.createElement("span", { className: F(d, b[t], g[s], m, o) }, a ? /* @__PURE__ */ React.createElement("span", { className: "justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4" }, a) : null, r, c && /* @__PURE__ */ React.createElement("span", { className: h, onClick: i ? null : l }, /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, `Remove ${r}`), /* @__PURE__ */ React.createElement(sr, null), /* @__PURE__ */ React.createElement("span", { className: "absolute -inset-1" }))) : null;
}, xr = (e) => {
  const {
    value: r = "",
    size: t = "sm",
    // sm, md, lg
    className: o = "",
    disabled: s = !1,
    inputProps: n,
    onChange: a = () => {
    },
    error: i = !1,
    onError: l = () => {
    }
  } = e;
  let c = "rounded py-2 border bg-field-primary-background font-normal border-field-border";
  const d = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, b = "hover:border-strong", g = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", f = i ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "", m = s ? "border-field-border-disabled bg-field-background-disabled cursor-not-allowed" : "";
  return /* @__PURE__ */ React.createElement("textarea", { className: F(c, m, d[t], g, b, f, o), ...n, disabled: s, onChange: a, onInvalid: l, value: r });
}, vr = (e) => {
  const {
    variant: r = "primary",
    size: t = "md",
    border: o = "subtle",
    type: s = "icon",
    icon: n = /* @__PURE__ */ React.createElement(nr, null),
    text: a,
    imageUrl: i,
    className: l
  } = e, c = s === "image" && o === "none" ? "subtle" : o, d = "rounded-full overflow-hidden flex items-center justify-center", b = {
    white: "text-text-primary bg-background-primary",
    gray: "text-text-primary bg-background-secondary",
    primary: "text-text-on-color bg-background-brand",
    primaryLight: "text-text-primary bg-brand-background-50",
    dark: "text-text-on-color bg-button-secondary"
  }[r], g = {
    xs: "w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs",
    sm: "w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm",
    md: "w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base",
    lg: "w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg"
  }[t], f = {
    none: "",
    subtle: "border border-solid border-border-transparent-subtle",
    ring: "border-4 border-solid border-border-white"
  }[c], m = s === "image" ? "bg-cover bg-center bg-no-repeat" : "";
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: F(
        d,
        s !== "image" && b,
        g,
        f,
        m,
        l
      ),
      style: s === "image" ? { backgroundImage: `url(${i})` } : {}
    },
    s === "text" && /* @__PURE__ */ React.createElement("span", null, a),
    s === "icon" && n
  );
};
export {
  vr as Avatar,
  yr as Badge,
  pr as Button,
  mr as Checkbox,
  hr as RadioButton,
  fr as Switch,
  xr as TextArea
};
//# sourceMappingURL=force-ui.es.js.map
