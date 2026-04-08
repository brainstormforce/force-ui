import { jsx as t, jsxs as i } from "react/jsx-runtime";
import { PieChart as P, Tooltip as $, Legend as N, Pie as j, Label as D } from "recharts";
import R from "./chart-tooltip-content.es.js";
import T from "./chart-legend-content.es.js";
import z from "../label/label.es.js";
const F = ({
  data: a,
  dataKey: n,
  type: s = "simple",
  // simple, donut
  showTooltip: c = !0,
  tooltipIndicator: o = "dot",
  // dot, line, dashed
  tooltipLabelKey: d,
  label: m = !1,
  labelName: h = "",
  labelNameColor: f = "#6B7280",
  labelValue: p,
  showLegend: u = !1,
  chartWidth: l = 300,
  pieOuterRadius: b = 90,
  pieInnerRadius: x = 60
}) => {
  const r = s === "donut", y = b, g = r ? x : 0;
  if (!a || a.length === 0)
    return /* @__PURE__ */ t(z, { size: "sm", variant: "help", children: "No data available" });
  const C = a.map((e, L) => ({
    ...e,
    "aria-label": `${e.name ?? `Segment ${L + 1}`}: ${e[n]}`
  }));
  return /* @__PURE__ */ t("div", { role: "img", "aria-label": "Pie chart", children: /* @__PURE__ */ i(
    P,
    {
      width: l,
      height: l,
      accessibilityLayer: !1,
      children: [
        c && /* @__PURE__ */ t(
          $,
          {
            content: /* @__PURE__ */ t(
              R,
              {
                indicator: o,
                labelKey: d
              }
            )
          }
        ),
        u && /* @__PURE__ */ t(N, { content: /* @__PURE__ */ t(T, {}) }),
        /* @__PURE__ */ t(
          j,
          {
            data: C,
            cx: "50%",
            cy: "50%",
            innerRadius: g,
            outerRadius: y,
            dataKey: n,
            children: r && m && /* @__PURE__ */ t(
              D,
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
      ]
    }
  ) });
};
export {
  F as default
};
//# sourceMappingURL=pie-chart.es.js.map
