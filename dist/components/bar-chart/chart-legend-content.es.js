import { jsx as t, jsxs as c } from "react/jsx-runtime";
import m from "react";
import { cn as d } from "../../utilities/functions.es.js";
const f = m.forwardRef(
  ({
    className: a,
    hideIcon: s = !1,
    payload: r = [],
    // array of objects that represents the data for each legend item
    verticalAlign: n = "bottom",
    // top | bottom
    nameKey: l = "value",
    fontSizeVariant: o
  }, i) => r.length ? /* @__PURE__ */ t(
    "div",
    {
      ref: i,
      className: d(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        a
      ),
      children: r.map((e) => /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
        !s && /* @__PURE__ */ t(
          "div",
          {
            className: "size-2 shrink-0 rounded-sm",
            style: {
              backgroundColor: e.color
            }
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: "capitalize",
            style: { fontSize: o },
            children: e[l]
          }
        )
      ] }, e.value))
    }
  ) : null
);
f.displayName = "ChartLegendContent";
export {
  f as default
};
//# sourceMappingURL=chart-legend-content.es.js.map
