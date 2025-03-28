import { jsx as t, jsxs as v } from "react/jsx-runtime";
import { ResponsiveContainer as M, LineChart as j, CartesianGrid as A, XAxis as T, YAxis as w, Tooltip as D, Line as F } from "recharts";
import G from "./chart-tooltip-content.es.js";
import N from "../label/label.es.js";
const Y = ({
  data: e,
  dataKeys: l = [],
  colors: i = [],
  showXAxis: f = !1,
  showYAxis: h = !1,
  showTooltip: p = !0,
  tooltipIndicator: d = "dot",
  // dot, line, dashed
  tooltipLabelKey: c,
  showCartesianGrid: m = !0,
  tickFormatter: k,
  xAxisDataKey: x,
  yAxisDataKey: C,
  xAxisFontSize: L = "sm",
  // sm, md, lg
  xAxisFontColor: u = "#6B7280",
  yAxisFontColor: g = "#6B7280",
  chartWidth: z = 350,
  chartHeight: B = 200,
  withDots: y = !1,
  lineChartWrapperProps: E,
  strokeDasharray: K = "3 3",
  gridColor: S = "#E5E7EB"
}) => {
  const b = [{ stroke: "#2563EB" }, { stroke: "#38BDF8" }], a = i.length > 0 ? i : b, o = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, r = o[L] || o.sm;
  return !e || e.length === 0 ? /* @__PURE__ */ t(N, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t(M, { width: z, height: B, children: /* @__PURE__ */ v(j, { ...E, data: e, children: [
    m && /* @__PURE__ */ t(
      A,
      {
        strokeDasharray: K,
        horizontal: !1,
        stroke: S
      }
    ),
    /* @__PURE__ */ t(
      T,
      {
        dataKey: x,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: k,
        tick: {
          fontSize: r,
          fill: u
        },
        hide: !f
      }
    ),
    /* @__PURE__ */ t(
      w,
      {
        dataKey: C,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tick: {
          fontSize: r,
          fill: g
        },
        hide: !h
      }
    ),
    p && /* @__PURE__ */ t(
      D,
      {
        content: /* @__PURE__ */ t(
          G,
          {
            indicator: d,
            labelKey: c
          }
        )
      }
    ),
    l.map((n, s) => /* @__PURE__ */ t(
      F,
      {
        type: "natural",
        dataKey: n,
        stroke: a[s].stroke,
        fill: a[s].stroke,
        strokeWidth: 2,
        dot: y
      },
      n
    ))
  ] }) });
};
export {
  Y as default
};
//# sourceMappingURL=line-chart.es.js.map
