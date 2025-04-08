import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { useState as c, useEffect as G } from "react";
import { ResponsiveContainer as M, AreaChart as j, CartesianGrid as O, XAxis as T, YAxis as w, Tooltip as I, Legend as N, Area as R } from "recharts";
import V from "./chart-legend-content.es.js";
import X from "./chart-tooltip-content.es.js";
import Y from "../label/label.es.js";
const _ = ({
  data: r,
  dataKeys: h,
  colors: a = [],
  variant: f = "solid",
  showXAxis: g = !0,
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
  chartHeight: n = 200,
  areaChartWrapperProps: b = {
    margin: {
      left: 14,
      right: 14,
      top: 6,
      bottom: 6
    }
  }
}) => {
  const [E, K] = c(l), [$, v] = c(n), D = [
    { stroke: "#2563EB", fill: "#BFDBFE" },
    { stroke: "#38BDF8", fill: "#BAE6FD" }
  ], i = a.length > 0 ? a : D;
  G(() => {
    K(l), v(n);
  }, [l, n]);
  const d = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, s = d[S] || d.sm, F = () => /* @__PURE__ */ t("defs", { children: i.map((o, e) => /* @__PURE__ */ m(
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
            stopColor: o.fill,
            stopOpacity: 0.8
          }
        ),
        /* @__PURE__ */ t(
          "stop",
          {
            offset: "95%",
            stopColor: o.fill,
            stopOpacity: 0.1
          }
        )
      ]
    },
    `gradient${e}`
  )) });
  return !r || r.length === 0 ? /* @__PURE__ */ t(Y, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t(M, { width: E, height: $, children: /* @__PURE__ */ m(j, { ...b, data: r, children: [
    L && /* @__PURE__ */ t(O, { vertical: !1 }),
    /* @__PURE__ */ t(
      T,
      {
        dataKey: B,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: A,
        tick: {
          fontSize: s,
          fill: p
        },
        hide: !g
      }
    ),
    /* @__PURE__ */ t(
      w,
      {
        dataKey: z,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tick: {
          fontSize: s,
          fill: p
        },
        hide: !u
      }
    ),
    C && /* @__PURE__ */ t(
      I,
      {
        content: /* @__PURE__ */ t(
          X,
          {
            indicator: k,
            labelKey: y
          }
        )
      }
    ),
    x && /* @__PURE__ */ t(
      N,
      {
        content: /* @__PURE__ */ t(
          V,
          {
            fontSizeVariant: s
          }
        )
      }
    ),
    f === "gradient" && F(),
    h.map((o, e) => /* @__PURE__ */ t(
      R,
      {
        type: "monotone",
        dataKey: o,
        stroke: i[e % i.length].stroke,
        fill: f === "gradient" ? `url(#fill${e})` : i[e % i.length].fill,
        stackId: "1"
      },
      o
    ))
  ] }) });
};
export {
  _ as default
};
//# sourceMappingURL=area-chart.es.js.map
