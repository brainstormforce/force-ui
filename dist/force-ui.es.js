import de, { forwardRef as $e, createElement as he } from "react";
const Ce = "-";
function Ve(e) {
  const t = Je(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function l(i) {
    const a = i.split(Ce);
    return a[0] === "" && a.length !== 1 && a.shift(), Ne(a, t) || Xe(i);
  }
  function r(i, a) {
    const p = n[i] || [];
    return a && o[i] ? [...p, ...o[i]] : p;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: r
  };
}
function Ne(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), l = o ? Ne(e.slice(1), o) : void 0;
  if (l)
    return l;
  if (t.validators.length === 0)
    return;
  const r = e.join(Ce);
  return t.validators.find(({
    validator: i
  }) => i(r))?.classGroupId;
}
const Se = /^\[(.+)\]$/;
function Xe(e) {
  if (Se.test(e)) {
    const t = Se.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Je(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ze(Object.entries(e.classGroups), n).forEach(([r, i]) => {
    xe(i, o, r, t);
  }), o;
}
function xe(e, t, n, o) {
  e.forEach((l) => {
    if (typeof l == "string") {
      const r = l === "" ? t : Re(t, l);
      r.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (He(l)) {
        xe(l(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: l,
        classGroupId: n
      });
      return;
    }
    Object.entries(l).forEach(([r, i]) => {
      xe(i, Re(t, r), n, o);
    });
  });
}
function Re(e, t) {
  let n = e;
  return t.split(Ce).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function He(e) {
  return e.isThemeGetter;
}
function Ze(e, t) {
  return t ? e.map(([n, o]) => {
    const l = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([i, a]) => [t + i, a])) : r);
    return [n, l];
  }) : e;
}
function Ke(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function l(r, i) {
    n.set(r, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(r) {
      let i = n.get(r);
      if (i !== void 0)
        return i;
      if ((i = o.get(r)) !== void 0)
        return l(r, i), i;
    },
    set(r, i) {
      n.has(r) ? n.set(r, i) : l(r, i);
    }
  };
}
const Le = "!";
function Qe(e) {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, l = t[0], r = t.length;
  function i(a) {
    const p = [];
    let b = 0, f = 0, g;
    for (let y = 0; y < a.length; y++) {
      let R = a[y];
      if (b === 0) {
        if (R === l && (o || a.slice(y, y + r) === t)) {
          p.push(a.slice(f, y)), f = y + r;
          continue;
        }
        if (R === "/") {
          g = y;
          continue;
        }
      }
      R === "[" ? b++ : R === "]" && b--;
    }
    const h = p.length === 0 ? a : a.substring(f), C = h.startsWith(Le), A = C ? h.substring(1) : h, m = g && g > f ? g - f : void 0;
    return {
      modifiers: p,
      hasImportantModifier: C,
      baseClassName: A,
      maybePostfixModifierPosition: m
    };
  }
  return n ? function(p) {
    return n({
      className: p,
      parseClassName: i
    });
  } : i;
}
function er(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function rr(e) {
  return {
    cache: Ke(e.cacheSize),
    parseClassName: Qe(e),
    ...Ve(e)
  };
}
const tr = /\s+/;
function or(e, t) {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  } = t, r = /* @__PURE__ */ new Set();
  return e.trim().split(tr).map((i) => {
    const {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: f
    } = n(i);
    let g = !!f, h = o(g ? b.substring(0, f) : b);
    if (!h) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (h = o(b), !h)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      g = !1;
    }
    const C = er(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: p ? C + Le : C,
      classGroupId: h,
      originalClassName: i,
      hasPostfixModifier: g
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: p,
      hasPostfixModifier: b
    } = i, f = a + p;
    return r.has(f) ? !1 : (r.add(f), l(p, b).forEach((g) => r.add(a + g)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function nr() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = qe(t)) && (o && (o += " "), o += n);
  return o;
}
function qe(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = qe(e[o])) && (n && (n += " "), n += t);
  return n;
}
function sr(e, ...t) {
  let n, o, l, r = i;
  function i(p) {
    const b = t.reduce((f, g) => g(f), e());
    return n = rr(b), o = n.cache.get, l = n.cache.set, r = a, a(p);
  }
  function a(p) {
    const b = o(p);
    if (b)
      return b;
    const f = or(p, n);
    return l(p, f), f;
  }
  return function() {
    return r(nr.apply(null, arguments));
  };
}
function N(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const We = /^\[(?:([a-z-]+):)?(.+)\]$/i, ar = /^\d+\/\d+$/, ir = /* @__PURE__ */ new Set(["px", "full", "screen"]), lr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ur = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function X(e) {
  return te(e) || ir.has(e) || ar.test(e);
}
function Q(e) {
  return se(e, "length", xr);
}
function te(e) {
  return !!e && !Number.isNaN(Number(e));
}
function ue(e) {
  return se(e, "number", te);
}
function ae(e) {
  return !!e && Number.isInteger(Number(e));
}
function pr(e) {
  return e.endsWith("%") && te(e.slice(0, -1));
}
function v(e) {
  return We.test(e);
}
function ee(e) {
  return lr.test(e);
}
const br = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function gr(e) {
  return se(e, br, Ye);
}
function yr(e) {
  return se(e, "position", Ye);
}
const mr = /* @__PURE__ */ new Set(["image", "url"]);
function vr(e) {
  return se(e, mr, Cr);
}
function hr(e) {
  return se(e, "", wr);
}
function ie() {
  return !0;
}
function se(e, t, n) {
  const o = We.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function xr(e) {
  return cr.test(e) && !dr.test(e);
}
function Ye() {
  return !1;
}
function wr(e) {
  return ur.test(e);
}
function Cr(e) {
  return fr.test(e);
}
function Er() {
  const e = N("colors"), t = N("spacing"), n = N("blur"), o = N("brightness"), l = N("borderColor"), r = N("borderRadius"), i = N("borderSpacing"), a = N("borderWidth"), p = N("contrast"), b = N("grayscale"), f = N("hueRotate"), g = N("invert"), h = N("gap"), C = N("gradientColorStops"), A = N("gradientColorStopPositions"), m = N("inset"), y = N("margin"), R = N("opacity"), L = N("padding"), z = N("saturate"), $ = N("scale"), c = N("sepia"), G = N("skew"), J = N("space"), H = N("translate"), D = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", v, t], j = () => [v, t], oe = () => ["", X, Q], B = () => ["auto", te, v], ne = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", v], s = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], d = () => [te, ue], x = () => [te, v];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ie],
      spacing: [X, Q],
      blur: ["none", "", ee, v],
      brightness: d(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ee, v],
      borderSpacing: j(),
      borderWidth: oe(),
      contrast: d(),
      grayscale: V(),
      hueRotate: x(),
      invert: V(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [pr, Q],
      inset: Z(),
      margin: Z(),
      opacity: d(),
      padding: j(),
      saturate: d(),
      scale: d(),
      sepia: V(),
      skew: x(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", v]
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
        columns: [ee]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": s()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": s()
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
        object: [...ne(), v]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", ae, v]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Z()
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
        flex: ["1", "auto", "initial", "none", v]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ae, v]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ie]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ae, v]
        }, v]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ie]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ae, v]
        }, v]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
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
        p: [L]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [L]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [L]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [L]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [L]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [L]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [L]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [L]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [L]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [J]
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
        "space-y": [J]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", v, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [v, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [v, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ee]
        }, ee]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [v, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [v, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [v, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [v, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ee, Q]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ie]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", v]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", te, ue]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", X, v]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", v]
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
        "placeholder-opacity": [R]
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
        "text-opacity": [R]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", X, Q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", X, v]
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
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v]
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
        content: ["none", v]
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
        "bg-opacity": [R]
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
        bg: [...ne(), yr]
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
        bg: ["auto", "cover", "contain", gr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vr]
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
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [R]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        "divide-opacity": [R]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: q()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, v]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [X, Q]
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
        "ring-opacity": [R]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [X, Q]
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
        shadow: ["", "inner", "none", ee, hr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ie]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        blur: [n]
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
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ee, v]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [c]
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
        "backdrop-blur": [n]
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
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [c]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", v]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", v]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", v]
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
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ae, v]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [H]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [H]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [G]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [G]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", v]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        "will-change": ["auto", "scroll", "contents", "transform", v]
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
        stroke: [X, Q, ue]
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
const le = /* @__PURE__ */ sr(Er), Yr = (e) => {
  const {
    variant: t = "primary",
    // primary, secondary, outline, ghost, link
    size: n = "md",
    // xs, sm, md, lg
    type: o = "button",
    tag: l = "button",
    className: r,
    children: i,
    disabled: a = !1,
    destructive: p = !1,
    // true, false
    icon: b = null,
    // icon component
    iconPosition: f = "left",
    // left, right
    ...g
  } = e, h = "border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled", C = {
    primary: "text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    secondary: "text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",
    outline: "text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",
    ghost: "text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",
    link: "text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"
  }[t], A = p && !a ? {
    primary: "bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",
    outline: "text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",
    ghost: "text-button-danger hover:bg-field-background-error",
    link: "text-button-danger hover:text-button-danger-secondary"
  }[t] : "", m = {
    xs: "p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    sm: "p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
    md: "p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",
    lg: "p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"
  }[n];
  let y, R = null, L = "";
  b && (L = "flex items-center justify-center gap-1", f === "left" ? y = b : R = b);
  const z = l;
  return /* @__PURE__ */ React.createElement(z, { type: o, className: le(L, h, m, C, A, r), disabled: a, ...g }, y, i, R);
}, Gr = (e) => {
  const {
    value: t = "",
    size: n = "sm",
    // sm, md, lg
    className: o = "",
    disabled: l = !1,
    inputProps: r,
    onChange: i = () => {
    },
    error: a = !1,
    onError: p = () => {
    }
  } = e;
  let b = "rounded py-2 border bg-field-primary-background font-normal border-field-border";
  const f = {
    sm: "px-3 rounded text-xs",
    md: "px-3 rounded-md text-sm",
    lg: "px-4 rounded-lg text-base"
  }, g = "hover:border-strong", h = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", C = a ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "", A = l ? "border-field-border-disabled bg-field-background-disabled cursor-not-allowed" : "";
  return /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: le(b, A, f[n], h, g, C, o),
      ...r,
      disabled: l,
      onChange: i,
      onInvalid: p,
      value: t
    }
  );
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ge = (...e) => e.filter((t, n, o) => !!t && o.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sr = {
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
const Rr = $e(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: r,
    iconNode: i,
    ...a
  }, p) => he(
    "svg",
    {
      ref: p,
      ...Sr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Ge("lucide", l),
      ...a
    },
    [
      ...i.map(([b, f]) => he(b, f)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = (e, t) => {
  const n = $e(
    ({ className: o, ...l }, r) => he(Rr, {
      ref: r,
      iconNode: t,
      className: Ge(`lucide-${Tr(e)}`, o),
      ...l
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = Be("Info", [
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
const kr = Be("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Br = (e) => {
  const {
    label: t = "",
    size: n = "sm",
    // xs, sm, md, lg
    className: o = "",
    type: l = "pill",
    // pill, rounded
    variant: r = "neutral",
    // neutral, red, yellow, green, blue, inverse
    icon: i = /* @__PURE__ */ React.createElement(Pr, null),
    disabled: a = !1,
    onClose: p = () => {
    },
    closable: b = !0
  } = e, f = "font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid", g = {
    xs: "py-0.5 px-1 text-xs",
    sm: "py-1 px-1.5 text-xs",
    md: "py-1 px-1.5 text-sm",
    lg: "py-1 px-1.5 text-base"
  }, h = {
    pill: "rounded-full",
    rounded: "rounded"
  }, C = {
    neutral: "bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray",
    red: "bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red",
    yellow: "bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow",
    green: "bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green",
    blue: "bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky",
    inverse: "bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse",
    disabled: "bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"
  };
  let A = "", m = "group relative justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer";
  return a ? (A = C.disabled, m += " cursor-not-allowed disabled") : A = C[r], t ? /* @__PURE__ */ React.createElement("span", { className: le(f, g[n], h[l], A, o) }, i ? /* @__PURE__ */ React.createElement("span", { className: "justify-center flex align-center [&>svg]:h-4 [&>svg]:w-4" }, i) : null, t, b && /* @__PURE__ */ React.createElement("span", { className: m, onClick: a ? null : p }, /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, `Remove ${t}`), /* @__PURE__ */ React.createElement(kr, null), /* @__PURE__ */ React.createElement("span", { className: "absolute -inset-1" }))) : null;
};
function Or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we = { exports: {} }, fe = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Ar() {
  if (Pe) return _;
  Pe = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function z(c) {
    if (typeof c == "object" && c !== null) {
      var G = c.$$typeof;
      switch (G) {
        case t:
          switch (c = c.type, c) {
            case p:
            case b:
            case o:
            case r:
            case l:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case f:
                case A:
                case C:
                case i:
                  return c;
                default:
                  return G;
              }
          }
        case n:
          return G;
      }
    }
  }
  function $(c) {
    return z(c) === b;
  }
  return _.AsyncMode = p, _.ConcurrentMode = b, _.ContextConsumer = a, _.ContextProvider = i, _.Element = t, _.ForwardRef = f, _.Fragment = o, _.Lazy = A, _.Memo = C, _.Portal = n, _.Profiler = r, _.StrictMode = l, _.Suspense = g, _.isAsyncMode = function(c) {
    return $(c) || z(c) === p;
  }, _.isConcurrentMode = $, _.isContextConsumer = function(c) {
    return z(c) === a;
  }, _.isContextProvider = function(c) {
    return z(c) === i;
  }, _.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, _.isForwardRef = function(c) {
    return z(c) === f;
  }, _.isFragment = function(c) {
    return z(c) === o;
  }, _.isLazy = function(c) {
    return z(c) === A;
  }, _.isMemo = function(c) {
    return z(c) === C;
  }, _.isPortal = function(c) {
    return z(c) === n;
  }, _.isProfiler = function(c) {
    return z(c) === r;
  }, _.isStrictMode = function(c) {
    return z(c) === l;
  }, _.isSuspense = function(c) {
    return z(c) === g;
  }, _.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === o || c === b || c === r || c === l || c === g || c === h || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === C || c.$$typeof === i || c.$$typeof === a || c.$$typeof === f || c.$$typeof === y || c.$$typeof === R || c.$$typeof === L || c.$$typeof === m);
  }, _.typeOf = z, _;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function _r() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function z(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === o || u === b || u === r || u === l || u === g || u === h || typeof u == "object" && u !== null && (u.$$typeof === A || u.$$typeof === C || u.$$typeof === i || u.$$typeof === a || u.$$typeof === f || u.$$typeof === y || u.$$typeof === R || u.$$typeof === L || u.$$typeof === m);
    }
    function $(u) {
      if (typeof u == "object" && u !== null) {
        var U = u.$$typeof;
        switch (U) {
          case t:
            var ce = u.type;
            switch (ce) {
              case p:
              case b:
              case o:
              case r:
              case l:
              case g:
                return ce;
              default:
                var Te = ce && ce.$$typeof;
                switch (Te) {
                  case a:
                  case f:
                  case A:
                  case C:
                  case i:
                    return Te;
                  default:
                    return U;
                }
            }
          case n:
            return U;
        }
      }
    }
    var c = p, G = b, J = a, H = i, D = t, re = f, Z = o, j = A, oe = C, B = n, ne = r, q = l, F = g, K = !1;
    function V(u) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(u) || $(u) === p;
    }
    function s(u) {
      return $(u) === b;
    }
    function d(u) {
      return $(u) === a;
    }
    function x(u) {
      return $(u) === i;
    }
    function T(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function w(u) {
      return $(u) === f;
    }
    function P(u) {
      return $(u) === o;
    }
    function E(u) {
      return $(u) === A;
    }
    function S(u) {
      return $(u) === C;
    }
    function k(u) {
      return $(u) === n;
    }
    function M(u) {
      return $(u) === r;
    }
    function O(u) {
      return $(u) === l;
    }
    function W(u) {
      return $(u) === g;
    }
    I.AsyncMode = c, I.ConcurrentMode = G, I.ContextConsumer = J, I.ContextProvider = H, I.Element = D, I.ForwardRef = re, I.Fragment = Z, I.Lazy = j, I.Memo = oe, I.Portal = B, I.Profiler = ne, I.StrictMode = q, I.Suspense = F, I.isAsyncMode = V, I.isConcurrentMode = s, I.isContextConsumer = d, I.isContextProvider = x, I.isElement = T, I.isForwardRef = w, I.isFragment = P, I.isLazy = E, I.isMemo = S, I.isPortal = k, I.isProfiler = M, I.isStrictMode = O, I.isSuspense = W, I.isValidElementType = z, I.typeOf = $;
  }()), I;
}
var Oe;
function Fe() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? fe.exports = Ar() : fe.exports = _r()), fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pe, Ae;
function Ir() {
  if (Ae) return pe;
  Ae = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(r) {
    if (r == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var r = new String("abc");
      if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var p = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        b[f] = f;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pe = l() ? Object.assign : function(r, i) {
    for (var a, p = o(r), b, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var g in a)
        t.call(a, g) && (p[g] = a[g]);
      if (e) {
        b = e(a);
        for (var h = 0; h < b.length; h++)
          n.call(a, b[h]) && (p[b[h]] = a[b[h]]);
      }
    }
    return p;
  }, pe;
}
var be, _e;
function Ee() {
  if (_e) return be;
  _e = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return be = e, be;
}
var ge, Ie;
function Ue() {
  return Ie || (Ie = 1, ge = Function.call.bind(Object.prototype.hasOwnProperty)), ge;
}
var ye, Me;
function Mr() {
  if (Me) return ye;
  Me = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ee(), n = {}, o = Ue();
    e = function(r) {
      var i = "Warning: " + r;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function l(r, i, a, p, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in r)
        if (o(r, f)) {
          var g;
          try {
            if (typeof r[f] != "function") {
              var h = Error(
                (p || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = r[f](i, f, p, a, null, t);
          } catch (A) {
            g = A;
          }
          if (g && !(g instanceof Error) && e(
            (p || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in n)) {
            n[g.message] = !0;
            var C = b ? b() : "";
            e(
              "Failed " + a + " type: " + g.message + (C ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ye = l, ye;
}
var me, je;
function jr() {
  if (je) return me;
  je = 1;
  var e = Fe(), t = Ir(), n = Ee(), o = Ue(), l = Mr(), r = function() {
  };
  process.env.NODE_ENV !== "production" && (r = function(a) {
    var p = "Warning: " + a;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return me = function(a, p) {
    var b = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(s) {
      var d = s && (b && s[b] || s[f]);
      if (typeof d == "function")
        return d;
    }
    var h = "<<anonymous>>", C = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: L(),
      arrayOf: z,
      element: $(),
      elementType: c(),
      instanceOf: G,
      node: re(),
      objectOf: H,
      oneOf: J,
      oneOfType: D,
      shape: j,
      exact: oe
    };
    function A(s, d) {
      return s === d ? s !== 0 || 1 / s === 1 / d : s !== s && d !== d;
    }
    function m(s, d) {
      this.message = s, this.data = d && typeof d == "object" ? d : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(s) {
      if (process.env.NODE_ENV !== "production")
        var d = {}, x = 0;
      function T(P, E, S, k, M, O, W) {
        if (k = k || h, O = O || S, W !== n) {
          if (p) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var U = k + ":" + S;
            !d[U] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (r(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), d[U] = !0, x++);
          }
        }
        return E[S] == null ? P ? E[S] === null ? new m("The " + M + " `" + O + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new m("The " + M + " `" + O + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : s(E, S, k, M, O);
      }
      var w = T.bind(null, !1);
      return w.isRequired = T.bind(null, !0), w;
    }
    function R(s) {
      function d(x, T, w, P, E, S) {
        var k = x[T], M = q(k);
        if (M !== s) {
          var O = F(k);
          return new m(
            "Invalid " + P + " `" + E + "` of type " + ("`" + O + "` supplied to `" + w + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return y(d);
    }
    function L() {
      return y(i);
    }
    function z(s) {
      function d(x, T, w, P, E) {
        if (typeof s != "function")
          return new m("Property `" + E + "` of component `" + w + "` has invalid PropType notation inside arrayOf.");
        var S = x[T];
        if (!Array.isArray(S)) {
          var k = q(S);
          return new m("Invalid " + P + " `" + E + "` of type " + ("`" + k + "` supplied to `" + w + "`, expected an array."));
        }
        for (var M = 0; M < S.length; M++) {
          var O = s(S, M, w, P, E + "[" + M + "]", n);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return y(d);
    }
    function $() {
      function s(d, x, T, w, P) {
        var E = d[x];
        if (!a(E)) {
          var S = q(E);
          return new m("Invalid " + w + " `" + P + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(s);
    }
    function c() {
      function s(d, x, T, w, P) {
        var E = d[x];
        if (!e.isValidElementType(E)) {
          var S = q(E);
          return new m("Invalid " + w + " `" + P + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(s);
    }
    function G(s) {
      function d(x, T, w, P, E) {
        if (!(x[T] instanceof s)) {
          var S = s.name || h, k = V(x[T]);
          return new m("Invalid " + P + " `" + E + "` of type " + ("`" + k + "` supplied to `" + w + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return y(d);
    }
    function J(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? r(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : r("Invalid argument supplied to oneOf, expected an array.")), i;
      function d(x, T, w, P, E) {
        for (var S = x[T], k = 0; k < s.length; k++)
          if (A(S, s[k]))
            return null;
        var M = JSON.stringify(s, function(W, u) {
          var U = F(u);
          return U === "symbol" ? String(u) : u;
        });
        return new m("Invalid " + P + " `" + E + "` of value `" + String(S) + "` " + ("supplied to `" + w + "`, expected one of " + M + "."));
      }
      return y(d);
    }
    function H(s) {
      function d(x, T, w, P, E) {
        if (typeof s != "function")
          return new m("Property `" + E + "` of component `" + w + "` has invalid PropType notation inside objectOf.");
        var S = x[T], k = q(S);
        if (k !== "object")
          return new m("Invalid " + P + " `" + E + "` of type " + ("`" + k + "` supplied to `" + w + "`, expected an object."));
        for (var M in S)
          if (o(S, M)) {
            var O = s(S, M, w, P, E + "." + M, n);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return y(d);
    }
    function D(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && r("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var d = 0; d < s.length; d++) {
        var x = s[d];
        if (typeof x != "function")
          return r(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(x) + " at index " + d + "."
          ), i;
      }
      function T(w, P, E, S, k) {
        for (var M = [], O = 0; O < s.length; O++) {
          var W = s[O], u = W(w, P, E, S, k, n);
          if (u == null)
            return null;
          u.data && o(u.data, "expectedType") && M.push(u.data.expectedType);
        }
        var U = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new m("Invalid " + S + " `" + k + "` supplied to " + ("`" + E + "`" + U + "."));
      }
      return y(T);
    }
    function re() {
      function s(d, x, T, w, P) {
        return B(d[x]) ? null : new m("Invalid " + w + " `" + P + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return y(s);
    }
    function Z(s, d, x, T, w) {
      return new m(
        (s || "React class") + ": " + d + " type `" + x + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + w + "`."
      );
    }
    function j(s) {
      function d(x, T, w, P, E) {
        var S = x[T], k = q(S);
        if (k !== "object")
          return new m("Invalid " + P + " `" + E + "` of type `" + k + "` " + ("supplied to `" + w + "`, expected `object`."));
        for (var M in s) {
          var O = s[M];
          if (typeof O != "function")
            return Z(w, P, E, M, F(O));
          var W = O(S, M, w, P, E + "." + M, n);
          if (W)
            return W;
        }
        return null;
      }
      return y(d);
    }
    function oe(s) {
      function d(x, T, w, P, E) {
        var S = x[T], k = q(S);
        if (k !== "object")
          return new m("Invalid " + P + " `" + E + "` of type `" + k + "` " + ("supplied to `" + w + "`, expected `object`."));
        var M = t({}, x[T], s);
        for (var O in M) {
          var W = s[O];
          if (o(s, O) && typeof W != "function")
            return Z(w, P, E, O, F(W));
          if (!W)
            return new m(
              "Invalid " + P + " `" + E + "` key `" + O + "` supplied to `" + w + "`.\nBad object: " + JSON.stringify(x[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var u = W(S, O, w, P, E + "." + O, n);
          if (u)
            return u;
        }
        return null;
      }
      return y(d);
    }
    function B(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(B);
          if (s === null || a(s))
            return !0;
          var d = g(s);
          if (d) {
            var x = d.call(s), T;
            if (d !== s.entries) {
              for (; !(T = x.next()).done; )
                if (!B(T.value))
                  return !1;
            } else
              for (; !(T = x.next()).done; ) {
                var w = T.value;
                if (w && !B(w[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(s, d) {
      return s === "symbol" ? !0 : d ? d["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && d instanceof Symbol : !1;
    }
    function q(s) {
      var d = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : ne(d, s) ? "symbol" : d;
    }
    function F(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var d = q(s);
      if (d === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return d;
    }
    function K(s) {
      var d = F(s);
      switch (d) {
        case "array":
        case "object":
          return "an " + d;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + d;
        default:
          return d;
      }
    }
    function V(s) {
      return !s.constructor || !s.constructor.name ? h : s.constructor.name;
    }
    return C.checkPropTypes = l, C.resetWarningCache = l.resetWarningCache, C.PropTypes = C, C;
  }, me;
}
var ve, ze;
function zr() {
  if (ze) return ve;
  ze = 1;
  var e = Ee();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ve = function() {
    function o(i, a, p, b, f, g) {
      if (g !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    o.isRequired = o;
    function l() {
      return o;
    }
    var r = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: l,
      element: o,
      elementType: o,
      instanceOf: l,
      node: o,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return r.PropTypes = r, r;
  }, ve;
}
if (process.env.NODE_ENV !== "production") {
  var $r = Fe(), Nr = !0;
  we.exports = jr()($r.isElement, Nr);
} else
  we.exports = zr()();
var Lr = we.exports;
const Y = /* @__PURE__ */ Or(Lr), qr = {
  xs: "py-1 px-1 text-sm gap-0.5 [&>svg]:h-4 [&>svg]:w-4",
  sm: "py-2 px-2 text-base gap-1 [&>svg]:h-4 [&>svg]:w-4",
  md: "py-2.5 px-2.5 text-base gap-1 [&>svg]:h-5 [&>svg]:w-5"
}, De = (e) => {
  const { buttons: t, size: n = "md", iconPosition: o, activeItem: l, onButtonClick: r, className: i } = e, a = qr[n], p = (m, y) => {
    r && r({ event: m, value: y });
  }, f = le(
    "box-border flex border border-border-subtle border-solid rounded",
    "[&>*]:box-border",
    i
  ), g = "bg-background-primary text-secondary cursor-pointer flex items-center justify-center hover:bg-button-tertiary-hover", h = "rounded-tl rounded-bl border-0 border-r border-border-subtle", C = "rounded-tr rounded-br border-0", A = "border-0 border-r border-border-subtle border-solid";
  return /* @__PURE__ */ de.createElement("div", { className: f }, t.map((m, y) => {
    const { text: R, icon: L, id: z, props: $, state: c } = m, J = l === z ? "bg-gray-300" : "", H = $?.className || "";
    return /* @__PURE__ */ de.createElement(
      "button",
      {
        key: z || y,
        id: z,
        className: le(
          g,
          a,
          // buttonStateClass,
          J,
          H,
          A,
          y === 0 ? h : "",
          t.length - 1 === y ? C : ""
        ),
        disabled: c === "disabled",
        onClick: (D) => p(D, { id: z, text: R }),
        ...$
      },
      o === "left" && L && /* @__PURE__ */ de.createElement("span", { className: "mr-1" }, L),
      R,
      o === "right" && L && /* @__PURE__ */ de.createElement("span", { className: "ml-1" }, L)
    );
  }));
};
De.propTypes = {
  buttons: Y.arrayOf(
    Y.shape({
      text: Y.string.isRequired,
      icon: Y.node,
      id: Y.string,
      props: Y.object,
      state: Y.oneOf(["normal", "hover", "active", "disabled"])
    })
  ).isRequired,
  size: Y.oneOf(["xs", "s", "m"]),
  iconPosition: Y.oneOf(["left", "right"]),
  activeItem: Y.string,
  onButtonClick: Y.func,
  className: Y.string
};
De.defaultProps = {
  size: "m",
  iconPosition: "left",
  activeItem: "",
  onButtonClick: null,
  className: ""
};
export {
  Br as Badge,
  Yr as Button,
  De as ButtonGroup,
  Gr as TextArea
};
//# sourceMappingURL=force-ui.es.js.map
