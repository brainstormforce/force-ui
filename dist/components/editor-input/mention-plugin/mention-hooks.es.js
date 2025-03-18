import { useState as l, useEffect as f } from "react";
const c = /* @__PURE__ */ new Map();
function d(u, e, o = "name") {
  const [a, r] = l([]);
  return f(() => {
    if (e === null) {
      r([]);
      return;
    }
    const s = c.get(e);
    if (s !== null) {
      if (s !== void 0) {
        r(s);
        return;
      }
      c.set(e, null), n.search(
        u,
        e,
        (t) => {
          c.set(e, t), r(t);
        },
        o
      );
    }
  }, [e]), a;
}
const n = {
  search(u, e, o, a) {
    setTimeout(() => {
      if (!Array.isArray(u))
        return [];
      const r = u.filter(
        (s) => {
          if (typeof s == "string")
            return s.toLowerCase().includes(e.toLowerCase());
          const t = s?.[a]?.toString();
          return t ? t.toLowerCase().includes(e.toLowerCase()) : !1;
        }
      );
      o(r);
    }, 500);
  }
};
export {
  d as default
};
//# sourceMappingURL=mention-hooks.es.js.map
