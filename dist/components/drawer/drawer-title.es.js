"use client";
import { jsx as m } from "react/jsx-runtime";
import { useEffect as o } from "react";
import { cn as f } from "../../utilities/functions.es.js";
import { useDrawerState as l } from "./drawer.es.js";
const n = ({
  children: t,
  as: r = "h3",
  className: a,
  ...i
}) => {
  const { titleId: s, hasTitleRef: e } = l();
  return o(() => (e && (e.current = !0), () => {
    e && (e.current = !1);
  }), [e]), /* @__PURE__ */ m(
    r,
    {
      id: s,
      className: f(
        "text-base font-semibold text-text-primary m-0 p-0",
        a
      ),
      ...i,
      children: t
    }
  );
};
n.displayName = "Drawer.Title";
export {
  n as default
};
//# sourceMappingURL=drawer-title.es.js.map
