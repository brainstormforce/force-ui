import { jsx as t, jsxs as y } from "react/jsx-runtime";
import { ResponsiveContainer as N, LineChart as U, CartesianGrid as j, XAxis as G, YAxis as p, Tooltip as K, Line as b } from "recharts";
import q from "./chart-tooltip-content.es.js";
import P from "../label/label.es.js";
const l = "#6B7280", V = "#E5E7EB", W = [{ stroke: "#2563EB" }, { stroke: "#38BDF8" }], H = ({
  data: n,
  dataKeys: e = [],
  colors: f = [],
  showXAxis: g = !1,
  showYAxis: c = !1,
  showTooltip: u = !0,
  tooltipIndicator: C = "dot",
  // dot, line, dashed
  tooltipLabelKey: E,
  showCartesianGrid: x = !0,
  xAxisTickFormatter: z,
  yAxisTickFormatter: h,
  tickFormatter: O,
  xAxisDataKey: S,
  yAxisDataKey: A,
  xAxisFontSize: I = "sm",
  // sm, md, lg
  xAxisFontColor: _ = l,
  yAxisFontColor: i = l,
  chartWidth: v = 350,
  chartHeight: D = 200,
  withDots: F = !1,
  lineChartWrapperProps: R,
  strokeDasharray: T = "3 3",
  gridColor: B = V,
  biaxial: a = !1,
  noDataComponent: M
}) => {
  const d = f.length > 0 ? f : W, L = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, o = L[I] || L.sm, k = (r = 0) => Array.isArray(i) ? i[r] || i[0] || l : i;
  return !n || n.length === 0 ? M || /* @__PURE__ */ t(P, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t(N, { width: v, height: D, children: /* @__PURE__ */ y(U, { ...R, data: n, children: [
    x && /* @__PURE__ */ t(
      j,
      {
        strokeDasharray: T,
        horizontal: !1,
        stroke: B
      }
    ),
    /* @__PURE__ */ t(
      G,
      {
        dataKey: S,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: z || O,
        tick: {
          fontSize: o,
          fill: _
        },
        hide: !g,
        interval: "equidistantPreserveStart"
      }
    ),
    /* @__PURE__ */ t(
      p,
      {
        yAxisId: "left",
        dataKey: a ? e[0] : A,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: h,
        tick: {
          fontSize: o,
          fill: k(0)
        },
        hide: !c,
        orientation: "left"
      }
    ),
    a && e.length > 1 && /* @__PURE__ */ t(
      p,
      {
        yAxisId: "right",
        dataKey: e[1],
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: h,
        tick: {
          fontSize: o,
          fill: k(1)
        },
        orientation: "right",
        hide: !c
      }
    ),
    u && /* @__PURE__ */ t(
      K,
      {
        content: /* @__PURE__ */ t(
          q,
          {
            indicator: C,
            labelKey: E
          }
        )
      }
    ),
    e.map((r, s) => {
      let m = "left";
      return a && s > 0 && (m = "right"), /* @__PURE__ */ t(
        b,
        {
          type: "monotone",
          dataKey: r,
          stroke: d[s].stroke,
          fill: d[s].stroke,
          strokeWidth: 2,
          dot: F,
          yAxisId: m
        },
        r
      );
    })
  ] }) });
};
export {
  H as default
};
//# sourceMappingURL=line-chart.es.js.map
