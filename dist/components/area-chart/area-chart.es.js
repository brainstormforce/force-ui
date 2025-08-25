import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { useState as m, useEffect as _ } from "react";
import { ResponsiveContainer as $, AreaChart as G, CartesianGrid as M, XAxis as j, YAxis as N, Tooltip as U, Legend as w, Area as I } from "recharts";
import V from "./chart-legend-content.es.js";
import X from "./chart-tooltip-content.es.js";
import Y from "../label/label.es.js";
const q = "#6B7280", J = [
  { stroke: "#2563EB", fill: "#BFDBFE" },
  { stroke: "#38BDF8", fill: "#BAE6FD" }
], et = ({
  data: o,
  dataKeys: h,
  colors: s = [],
  variant: f = "solid",
  showXAxis: g = !0,
  showYAxis: C = !0,
  showTooltip: k = !0,
  tooltipIndicator: u = "dot",
  // dot, line, dashed
  tooltipLabelKey: L,
  showLegend: A = !0,
  showCartesianGrid: y = !0,
  xAxisTickFormatter: E,
  tickFormatter: F,
  yAxisTickFormatter: x,
  xAxisDataKey: O,
  yAxisDataKey: S,
  xAxisFontSize: B = "sm",
  // sm, md, lg
  xAxisFontColor: p = q,
  chartWidth: n = 350,
  chartHeight: a = 200,
  areaChartWrapperProps: v = {
    margin: {
      left: 14,
      right: 14,
      top: 6,
      bottom: 6
    }
  },
  noDataComponent: z
}) => {
  const [D, T] = m(n), [b, K] = m(a), i = s.length > 0 ? s : J;
  _(() => {
    T(n), K(a);
  }, [n, a]);
  const d = {
    sm: "12px",
    md: "14px",
    lg: "16px"
  }, l = d[B] || d.sm, R = () => /* @__PURE__ */ t("defs", { children: i.map((r, e) => /* @__PURE__ */ c(
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
  return !o || o.length === 0 ? z || /* @__PURE__ */ t(Y, { size: "sm", variant: "help", children: "No data available" }) : /* @__PURE__ */ t($, { width: D, height: b, children: /* @__PURE__ */ c(G, { ...v, data: o, children: [
    y && /* @__PURE__ */ t(M, { vertical: !1 }),
    /* @__PURE__ */ t(
      j,
      {
        dataKey: O,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: E || F,
        tick: {
          fontSize: l,
          fill: p
        },
        hide: !g,
        interval: "preserveStartEnd"
      }
    ),
    /* @__PURE__ */ t(
      N,
      {
        dataKey: S,
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: x,
        tick: {
          fontSize: l,
          fill: p
        },
        hide: !C
      }
    ),
    k && /* @__PURE__ */ t(
      U,
      {
        content: /* @__PURE__ */ t(
          X,
          {
            indicator: u,
            labelKey: L
          }
        )
      }
    ),
    A && /* @__PURE__ */ t(
      w,
      {
        content: /* @__PURE__ */ t(
          V,
          {
            fontSizeVariant: l
          }
        )
      }
    ),
    f === "gradient" && R(),
    h.map((r, e) => /* @__PURE__ */ t(
      I,
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
  et as default
};
//# sourceMappingURL=area-chart.es.js.map
