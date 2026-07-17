"use client";
import { jsx as e, jsxs as z, Fragment as $ } from "react/jsx-runtime";
import { ResponsiveContainer as q, BarChart as w, CartesianGrid as H, XAxis as L, YAxis as o, Tooltip as J, Legend as O, Bar as Q } from "recharts";
import U from "./chart-legend-content.es.js";
import W from "./chart-tooltip-content.es.js";
import Y from "../label/label.es.js";
const P = ({
  data: a,
  dataKeys: f = [],
  colors: c = [],
  layout: i = "horizontal",
  // horizontal, vertical
  stacked: s = !1,
  showXAxis: B = !0,
  showYAxis: h = !0,
  showTooltip: v = !0,
  tooltipIndicator: b = "dot",
  // dot, line, dashed
  tooltipLabelKey: S,
  showLegend: M = !1,
  showCartesianGrid: F = !0,
  xTickFormatter: m,
  yTickFormatter: K,
  xAxisDataKey: d,
  yAxisDataKey: l,
  xAxisFontSize: j = "sm",
  // sm, md, lg
  xAxisFontColor: E = "#6B7280",
  yAxisFontColor: p = "#6B7280",
  chartWidth: G = 350,
  chartHeight: I = 200,
  borderRadius: N = 8,
  xAxisProps: g,
  yAxisProps: C,
  tooltipProps: R,
  activeBar: T
}) => {
  const V = [{ fill: "#7DD3FC" }, { fill: "#2563EB" }], X = c.length > 0 ? c : V, k = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, r = k[j] || k.sm;
  return !a || a.length === 0 ? /* @__PURE__ */ e(Y, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ e("div", { role: "img", "aria-label": "Bar chart", children: /* @__PURE__ */ e(q, { width: G, height: I, children: /* @__PURE__ */ z(
    w,
    {
      data: a,
      margin: { left: 14, right: 14 },
      layout: i,
      children: [
        F && /* @__PURE__ */ e(H, { vertical: !1 }),
        i === "horizontal" && B && /* @__PURE__ */ e(
          L,
          {
            ...g,
            dataKey: d,
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: m,
            tick: {
              fontSize: r,
              fill: E
            }
          }
        ),
        i === "horizontal" && h && /* @__PURE__ */ e(
          o,
          {
            ...C,
            dataKey: l,
            tickLine: !1,
            tickMargin: 10,
            axisLine: !1,
            tickFormatter: K,
            tick: {
              fontSize: r,
              fill: p
            }
          }
        ),
        i === "vertical" && /* @__PURE__ */ z($, { children: [
          /* @__PURE__ */ e(
            L,
            {
              ...g,
              type: "number",
              dataKey: d,
              hide: !0
            }
          ),
          /* @__PURE__ */ e(
            o,
            {
              ...C,
              dataKey: l,
              type: "category",
              tickLine: !1,
              tickMargin: 10,
              axisLine: !1,
              tickFormatter: m,
              tick: {
                fontSize: r,
                fill: p
              }
            }
          )
        ] }),
        h && /* @__PURE__ */ e(o, { dataKey: l }),
        v && /* @__PURE__ */ e(
          J,
          {
            ...R,
            content: /* @__PURE__ */ e(
              W,
              {
                indicator: b,
                labelKey: S
              }
            )
          }
        ),
        M && /* @__PURE__ */ e(
          O,
          {
            content: /* @__PURE__ */ e(
              U,
              {
                fontSizeVariant: r
              }
            )
          }
        ),
        f.map((u, n) => {
          let t;
          return s ? n === 0 ? t = [0, 0, 4, 4] : n === f.length - 1 ? t = [4, 4, 0, 0] : t = 0 : t = N, /* @__PURE__ */ e(
            Q,
            {
              dataKey: u,
              fill: X[n]?.fill,
              radius: t,
              stackId: s ? "a" : void 0,
              activeBar: T
            },
            u
          );
        })
      ]
    }
  ) }) });
};
export {
  P as default
};
//# sourceMappingURL=bar-chart.es.js.map
