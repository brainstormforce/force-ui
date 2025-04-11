import { jsx as t, jsxs as z, Fragment as $ } from "react/jsx-runtime";
import { ResponsiveContainer as q, BarChart as w, CartesianGrid as H, XAxis as L, YAxis as o, Tooltip as J, Legend as O, Bar as Q } from "recharts";
import U from "./chart-legend-content.es.js";
import W from "./chart-tooltip-content.es.js";
import Y from "../label/label.es.js";
const P = ({
  data: a,
  dataKeys: f = [],
  colors: s = [],
  layout: i = "horizontal",
  // horizontal, vertical
  stacked: c = !1,
  showXAxis: B = !0,
  showYAxis: m = !0,
  showTooltip: v = !0,
  tooltipIndicator: S = "dot",
  // dot, line, dashed
  tooltipLabelKey: b,
  showLegend: M = !1,
  showCartesianGrid: F = !0,
  xTickFormatter: h,
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
  const V = [{ fill: "#7DD3FC" }, { fill: "#2563EB" }], X = s.length > 0 ? s : V, k = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, r = k[j] || k.sm;
  return !a || a.length === 0 ? /* @__PURE__ */ t(Y, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t(q, { width: G, height: I, children: /* @__PURE__ */ z(
    w,
    {
      data: a,
      margin: { left: 14, right: 14 },
      layout: i,
      children: [
        F && /* @__PURE__ */ t(H, { vertical: !1 }),
        i === "horizontal" && B && /* @__PURE__ */ t(
          L,
          {
            ...g,
            dataKey: d,
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: h,
            tick: {
              fontSize: r,
              fill: E
            }
          }
        ),
        i === "horizontal" && m && /* @__PURE__ */ t(
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
          /* @__PURE__ */ t(
            L,
            {
              ...g,
              type: "number",
              dataKey: d,
              hide: !0
            }
          ),
          /* @__PURE__ */ t(
            o,
            {
              ...C,
              dataKey: l,
              type: "category",
              tickLine: !1,
              tickMargin: 10,
              axisLine: !1,
              tickFormatter: h,
              tick: {
                fontSize: r,
                fill: p
              }
            }
          )
        ] }),
        m && /* @__PURE__ */ t(o, { dataKey: l }),
        v && /* @__PURE__ */ t(
          J,
          {
            ...R,
            content: /* @__PURE__ */ t(
              W,
              {
                indicator: S,
                labelKey: b
              }
            )
          }
        ),
        M && /* @__PURE__ */ t(
          O,
          {
            content: /* @__PURE__ */ t(
              U,
              {
                fontSizeVariant: r
              }
            )
          }
        ),
        f.map((u, n) => {
          let e;
          return c ? n === 0 ? e = [0, 0, 4, 4] : n === f.length - 1 ? e = [4, 4, 0, 0] : e = 0 : e = N, /* @__PURE__ */ t(
            Q,
            {
              dataKey: u,
              fill: X[n]?.fill,
              radius: e,
              stackId: c ? "a" : void 0,
              activeBar: T
            },
            u
          );
        })
      ]
    }
  ) });
};
export {
  P as default
};
//# sourceMappingURL=bar-chart.es.js.map
