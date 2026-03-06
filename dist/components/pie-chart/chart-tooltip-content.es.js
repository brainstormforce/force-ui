import { jsxs as r, jsx as t } from "react/jsx-runtime";
import C from "react";
import { cn as o } from "../../utilities/functions.es.js";
const y = C.forwardRef(
  ({
    active: u,
    payload: s,
    className: h,
    indicator: l = "dot",
    hideLabel: m = !1,
    hideIndicator: f = !1,
    label: d,
    labelFormatter: a,
    labelClassName: p,
    formatter: c,
    color: g,
    nameKey: x = "name",
    labelKey: v
  }, w) => {
    const N = () => {
      if (m || !s?.length)
        return null;
      const [e] = s, n = a ? a(d || "") : e[v] || d;
      return n ? /* @__PURE__ */ t("div", { className: o("font-medium", p), children: n }) : null;
    };
    if (!u || !s?.length)
      return null;
    const b = s.length === 1 && l !== "dot";
    return /* @__PURE__ */ r(
      "div",
      {
        ref: w,
        className: o(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl",
          h
        ),
        children: [
          b ? null : N(),
          /* @__PURE__ */ t("div", { className: "grid gap-1.5", children: s.map((e, n) => {
            const i = e.color || e.payload?.fill || g || "#000";
            return /* @__PURE__ */ r(
              "div",
              {
                className: o(
                  "flex w-full items-stretch gap-2",
                  l === "dot" && "items-center"
                ),
                children: [
                  !f && /* @__PURE__ */ t(
                    "div",
                    {
                      className: o({
                        "h-2.5 w-2.5 ": l === "dot",
                        "w-1 h-full": l === "line",
                        "w-0 border-[0.5px] border-dashed": l === "dashed"
                      }),
                      style: {
                        backgroundColor: l === "dot" || l === "line" ? i : "",
                        borderColor: l === "dashed" ? i : ""
                      }
                    }
                  ),
                  /* @__PURE__ */ r("div", { className: "flex-1 flex justify-between items-center", children: [
                    /* @__PURE__ */ t("span", { children: e[x] || e.dataKey }),
                    /* @__PURE__ */ t("span", { className: "font-mono font-medium", children: c ? c(e.value ?? "") : e.value ?? "" })
                  ] })
                ]
              },
              e.dataKey || n
            );
          }) })
        ]
      }
    );
  }
);
y.displayName = "ChartTooltipContent";
export {
  y as default
};
//# sourceMappingURL=chart-tooltip-content.es.js.map
