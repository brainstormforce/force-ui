import { useState as C, useRef as w, useEffect as p } from "react";
class M {
  value;
  constructor(e) {
    this.value = e;
  }
}
function L(r, e, s = "name") {
  const [n, t] = C([]), c = w(
    /* @__PURE__ */ new WeakMap()
  ), u = w(/* @__PURE__ */ new Map()), h = w(r);
  return p(() => {
    h.current !== r && (c.current = /* @__PURE__ */ new WeakMap(), u.current.clear(), h.current = r, e !== null && v.search(
      r,
      e,
      (a) => {
        t(a);
      },
      s
    ));
  }, [r, s, e]), p(() => {
    if (e === null) {
      t([]);
      return;
    }
    const a = c.current, l = u.current;
    let f = l.get(e);
    f || (f = new M(e), l.set(e, f));
    const k = a.get(f);
    if (k !== null) {
      if (k !== void 0) {
        t(k);
        return;
      }
      if (a.set(f, null), v.search(
        r,
        e,
        (o) => {
          const y = l.get(e);
          y && (a.set(
            y,
            o
          ), t(o));
        },
        s
      ), l.size > 100) {
        const o = Array.from(l.entries()).slice(-50);
        u.current = new Map(o);
      }
    }
  }, [e, r, s]), n;
}
const v = {
  search(r, e, s, n) {
    setTimeout(() => {
      if (!Array.isArray(r))
        return [];
      const t = r.filter(
        (c) => {
          if (typeof c == "string")
            return c.toLowerCase().includes(e.toLowerCase());
          const u = c?.[n]?.toString();
          return u ? u.toLowerCase().includes(e.toLowerCase()) : !1;
        }
      );
      s(t);
    }, 500);
  }
};
export {
  L as default
};
//# sourceMappingURL=mention-hooks.es.js.map
