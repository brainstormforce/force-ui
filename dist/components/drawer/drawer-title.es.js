import { jsx as m } from "react/jsx-runtime";
import { useEffect as o } from "react";
import { cn as f } from "../../utilities/functions.es.js";
import { useDrawerState as l } from "./drawer.es.js";
const n = ({
  children: e,
  as: r = "h3",
  className: a,
  ...i
}) => {
  const { titleId: s, hasTitleRef: t } = l();
  return o(() => (t && (t.current = !0), () => {
    t && (t.current = !1);
  }), [t]), /* @__PURE__ */ m(
    r,
    {
      id: s,
      className: f(
        "text-base font-semibold text-text-primary m-0 p-0",
        a
      ),
      ...i,
      children: e
    }
  );
};
n.displayName = "Drawer.Title";
export {
  n as default
};
//# sourceMappingURL=drawer-title.es.js.map
