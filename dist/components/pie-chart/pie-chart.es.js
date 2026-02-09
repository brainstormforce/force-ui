import { jsx as t, jsxs as i } from "react/jsx-runtime";
import { PieChart as g, Tooltip as L, Legend as N, Pie as P, Label as j } from "recharts";
import R from "./chart-tooltip-content.es.js";
import T from "./chart-legend-content.es.js";
import $ from "../label/label.es.js";
const q = ({
  data: n,
  dataKey: a,
  type: o = "simple",
  // simple, donut
  showTooltip: s = !0,
  tooltipIndicator: c = "dot",
  // dot, line, dashed
  tooltipLabelKey: d,
  label: m = !1,
  labelName: h = "",
  labelNameColor: f = "#6B7280",
  labelValue: p,
  showLegend: u = !1,
  chartWidth: r = 300,
  pieOuterRadius: x = 90,
  pieInnerRadius: y = 60
}) => {
  const l = o === "donut", C = x, b = l ? y : 0;
  return !n || n.length === 0 ? /* @__PURE__ */ t($, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ i(g, { width: r, height: r, children: [
    s && /* @__PURE__ */ t(
      L,
      {
        content: /* @__PURE__ */ t(
          R,
          {
            indicator: c,
            labelKey: d
          }
        )
      }
    ),
    u && /* @__PURE__ */ t(N, { content: /* @__PURE__ */ t(T, {}) }),
    /* @__PURE__ */ t(
      P,
      {
        data: n,
        cx: "50%",
        cy: "50%",
        innerRadius: b,
        outerRadius: C,
        dataKey: a,
        children: l && m && /* @__PURE__ */ t(
          j,
          {
            content: ({ viewBox: e }) => {
              if (e && "cx" in e && "cy" in e)
                return /* @__PURE__ */ i(
                  "text",
                  {
                    x: e.cx,
                    y: e.cy,
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ t(
                        "tspan",
                        {
                          x: e.cx,
                          dy: "-4",
                          className: "fill-foreground text-xl font-bold",
                          children: p
                        }
                      ),
                      /* @__PURE__ */ t(
                        "tspan",
                        {
                          x: e.cx,
                          dy: "24",
                          className: "text-sm",
                          style: { fill: f },
                          children: h
                        }
                      )
                    ]
                  }
                );
            }
          }
        )
      }
    )
  ] });
};
export {
  q as default
};
//# sourceMappingURL=pie-chart.es.js.map
