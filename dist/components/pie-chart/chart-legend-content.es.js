import { jsx as r, jsxs as c } from "react/jsx-runtime";
import i from "react";
import { cn as m } from "../../utilities/functions.es.js";
const d = i.forwardRef(
  ({
    className: a,
    hideIcon: n = !1,
    payload: t = [],
    // array of objects that represents the data for each legend item
    verticalAlign: s = "bottom",
    // top | bottom
    nameKey: l = "value"
  }, o) => t.length ? /* @__PURE__ */ r(
    "div",
    {
      ref: o,
      className: m(
        "flex items-center justify-center gap-4",
        s === "top" ? "pb-3" : "pt-3",
        a
      ),
      children: t.map((e) => /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
        !n && /* @__PURE__ */ r(
          "div",
          {
            className: "h-2 w-2 shrink-0 rounded-sm",
            style: {
              backgroundColor: e.color
            }
          }
        ),
        /* @__PURE__ */ r("span", { className: "capitalize", children: e[l] })
      ] }, e.value))
    }
  ) : null
);
d.displayName = "ChartLegendContent";
export {
  d as default
};
//# sourceMappingURL=chart-legend-content.es.js.map
