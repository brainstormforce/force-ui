import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { useState as m, useEffect as F } from "react";
import { ResponsiveContainer as G, AreaChart as M, CartesianGrid as j, XAxis as O, YAxis as T, Tooltip as w, Legend as I, Area as N } from "recharts";
import R from "./chart-legend-content.es.js";
import V from "./chart-tooltip-content.es.js";
import X from "../label/label.es.js";
const Z = ({
  data: o,
  dataKeys: g,
  colors: a = [],
  variant: f = "solid",
  showXAxis: h = !0,
  showYAxis: u = !0,
  showTooltip: C = !0,
  tooltipIndicator: k = "dot",
  // dot, line, dashed
  tooltipLabelKey: y,
  showLegend: x = !0,
  showCartesianGrid: L = !0,
  tickFormatter: A,
  xAxisDataKey: B,
  yAxisDataKey: z,
  xAxisFontSize: S = "sm",
  // sm, md, lg
  xAxisFontColor: p = "#6B7280",
  chartWidth: l = 350,
  chartHeight: n = 200
}) => {
  const [E, K] = m(l), [$, b] = m(n), v = [
    { stroke: "#2563EB", fill: "#BFDBFE" },
    { stroke: "#38BDF8", fill: "#BAE6FD" }
  ], i = a.length > 0 ? a : v;
  F(() => {
    K(l), b(n);
  }, [l, n]);
  const d = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, s = d[S] || d.sm, D = () => /* @__PURE__ */ t("defs", { children: i.map((r, e) => /* @__PURE__ */ c(
    "linearGradient",
    {
      id: `fill${e}`,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1",
      children: [
        /* @__PURE__ */ t(
          "stop",
          {
            offset: "5%",
            stopColor: r.fill,
            stopOpacity: 0.8
          }
        ),
        /* @__PURE__ */ t(
          "stop",
          {
            offset: "95%",
            stopColor: r.fill,
            stopOpacity: 0.1
          }
        )
      ]
    },
    `gradient${e}`
  )) });
  return !o || o.length === 0 ? /* @__PURE__ */ t(X, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t(G, { width: E, height: $, children: /* @__PURE__ */ c(M, { data: o, margin: { left: 14, right: 14 }, children: [
    L && /* @__PURE__ */ t(j, { vertical: !1 }),
    h && /* @__PURE__ */ t(
      O,
      {
        dataKey: B,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: A,
        tick: {
          fontSize: s,
          fill: p
        }
      }
    ),
    u && /* @__PURE__ */ t(
      T,
      {
        dataKey: z,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tick: {
          fontSize: s,
          fill: p
        }
      }
    ),
    C && /* @__PURE__ */ t(
      w,
      {
        content: /* @__PURE__ */ t(
          V,
          {
            indicator: k,
            labelKey: y
          }
        )
      }
    ),
    x && /* @__PURE__ */ t(
      I,
      {
        content: /* @__PURE__ */ t(
          R,
          {
            fontSizeVariant: s
          }
        )
      }
    ),
    f === "gradient" && D(),
    g.map((r, e) => /* @__PURE__ */ t(
      N,
      {
        type: "monotone",
        dataKey: r,
        stroke: i[e % i.length].stroke,
        fill: f === "gradient" ? `url(#fill${e})` : i[e % i.length].fill,
        stackId: "1"
      },
      r
    ))
  ] }) });
};
export {
  Z as default
};
//# sourceMappingURL=area-chart.es.js.map
