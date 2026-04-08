import { jsx as a } from "react/jsx-runtime";
import { cn as m } from "../../utilities/functions.es.js";
import { useEffect as n } from "react";
import { useDrawerState as c } from "./drawer.es.js";
const f = ({
  children: t,
  as: e = "p",
  className: o,
  ...s
}) => {
  const { descriptionId: i, hasDescriptionRef: r } = c();
  return n(() => (r && (r.current = !0), () => {
    r && (r.current = !1);
  }), [r]), /* @__PURE__ */ a(
    e,
    {
      id: i,
      className: m(
        "text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0",
        o
      ),
      ...s,
      children: t
    }
  );
};
f.displayName = "Drawer.Description";
export {
  f as default
};
//# sourceMappingURL=drawer-description.es.js.map
