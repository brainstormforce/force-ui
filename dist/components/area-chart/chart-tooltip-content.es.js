import { jsx as t, jsxs as i } from "react/jsx-runtime";
import { forwardRef as j, useMemo as b } from "react";
import { cn as l } from "../../utilities/functions.es.js";
const k = j(
  ({
    active: h,
    payload: n,
    className: g,
    indicator: e,
    // dot, line, dashed
    hideLabel: u = !1,
    hideIndicator: p = !1,
    label: o,
    labelFormatter: d,
    labelClassName: c,
    formatter: a,
    color: x,
    nameKey: v = "name",
    labelKey: m
  }, w) => {
    const N = b(() => {
      if (u || !n?.length)
        return null;
      const [s] = n, r = d ? d(o || "") : s[m] || o;
      return r ? /* @__PURE__ */ t("div", { className: l("font-medium", c), children: r }) : null;
    }, [
      o,
      d,
      n,
      u,
      c,
      m
    ]);
    if (!h || !n?.length)
      return null;
    const C = n.length === 1 && e !== "dot";
    return /* @__PURE__ */ i(
      "div",
      {
        ref: w,
        className: l(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl",
          g
        ),
        children: [
          C ? null : N,
          /* @__PURE__ */ t("div", { className: "grid gap-1.5", children: n.map((s, r) => {
            const f = x || s.color || "#000";
            return /* @__PURE__ */ i(
              "div",
              {
                className: l(
                  "flex w-full items-stretch gap-2",
                  e === "dot" && "items-center"
                ),
                children: [
                  !p && /* @__PURE__ */ t(
                    "div",
                    {
                      className: l({
                        "size-2.5": e === "dot",
                        "w-1 h-full": e === "line",
                        "w-0 border-[0.5px] border-dashed": e === "dashed"
                      }),
                      style: {
                        backgroundColor: e === "dot" || e === "line" ? f : "",
                        borderColor: e === "dashed" ? f : ""
                      }
                    }
                  ),
                  /* @__PURE__ */ i("div", { className: "flex-1 flex justify-between items-center gap-2", children: [
                    /* @__PURE__ */ t("span", { children: s[v] || s.dataKey }),
                    /* @__PURE__ */ t("span", { className: "font-mono font-medium", children: a ? a(s.value ?? "") : s.value ?? "" })
                  ] })
                ]
              },
              s.dataKey || r
            );
          }) })
        ]
      }
    );
  }
);
k.displayName = "ChartTooltipContent";
export {
  k as default
};
//# sourceMappingURL=chart-tooltip-content.es.js.map
