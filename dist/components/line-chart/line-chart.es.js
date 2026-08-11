"use client";
import { jsx as t, jsxs as U } from "react/jsx-runtime";
import { ResponsiveContainer as b, LineChart as j, CartesianGrid as y, XAxis as G, YAxis as k, Tooltip as K, Line as q } from "recharts";
import P from "./chart-tooltip-content.es.js";
import V from "../label/label.es.js";
const l = "#6B7280", W = "#E5E7EB", X = [{ stroke: "#2563EB" }, { stroke: "#38BDF8" }], J = ({
  data: n,
  dataKeys: i = [],
  seriesLabels: g,
  colors: f = [],
  showXAxis: u = !1,
  showYAxis: c = !1,
  showTooltip: C = !0,
  tooltipIndicator: E = "dot",
  // dot, line, dashed
  tooltipLabelKey: x,
  showCartesianGrid: z = !0,
  xAxisTickFormatter: O,
  yAxisTickFormatter: h,
  tickFormatter: S,
  xAxisDataKey: v,
  yAxisDataKey: A,
  xAxisFontSize: I = "sm",
  // sm, md, lg
  xAxisFontColor: _ = l,
  yAxisFontColor: r = l,
  chartWidth: D = 350,
  chartHeight: F = 200,
  withDots: R = !1,
  lineChartWrapperProps: T,
  strokeDasharray: B = "3 3",
  gridColor: M = W,
  biaxial: a = !1,
  noDataComponent: N
}) => {
  const d = f.length > 0 ? f : X, m = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, o = m[I] || m.sm, L = (e = 0) => Array.isArray(r) ? r[e] || r[0] || l : r;
  return !n || n.length === 0 ? N || /* @__PURE__ */ t(V, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t("div", { role: "img", "aria-label": "Line chart", children: /* @__PURE__ */ t(b, { width: D, height: F, children: /* @__PURE__ */ U(j, { ...T, data: n, children: [
    z && /* @__PURE__ */ t(
      y,
      {
        strokeDasharray: B,
        horizontal: !1,
        stroke: M
      }
    ),
    /* @__PURE__ */ t(
      G,
      {
        dataKey: v,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: O || S,
        tick: {
          fontSize: o,
          fill: _
        },
        hide: !u,
        interval: "equidistantPreserveStart"
      }
    ),
    /* @__PURE__ */ t(
      k,
      {
        yAxisId: "left",
        dataKey: a ? i[0] : A,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: h,
        tick: {
          fontSize: o,
          fill: L(0)
        },
        hide: !c,
        orientation: "left"
      }
    ),
    a && i.length > 1 && /* @__PURE__ */ t(
      k,
      {
        yAxisId: "right",
        dataKey: i[1],
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: h,
        tick: {
          fontSize: o,
          fill: L(1)
        },
        orientation: "right",
        hide: !c
      }
    ),
    C && /* @__PURE__ */ t(
      K,
      {
        content: /* @__PURE__ */ t(
          P,
          {
            indicator: E,
            labelKey: x
          }
        )
      }
    ),
    i.map((e, s) => {
      let p = "left";
      return a && s > 0 && (p = "right"), /* @__PURE__ */ t(
        q,
        {
          type: "monotone",
          dataKey: e,
          name: g?.[e],
          stroke: d[s].stroke,
          fill: d[s].stroke,
          strokeWidth: 2,
          dot: R,
          yAxisId: p
        },
        e
      );
    })
  ] }) }) });
};
export {
  J as default
};
//# sourceMappingURL=line-chart.es.js.map
