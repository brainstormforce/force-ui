import { jsxs as o, jsx as t } from "react/jsx-runtime";
import C from "react";
import { cn as r } from "../../utilities/functions.es.js";
const j = C.forwardRef(
  ({
    active: m,
    payload: s,
    className: u,
    indicator: e = "dot",
    //dot, line, dashed
    hideLabel: h = !1,
    hideIndicator: f = !1,
    label: d,
    labelFormatter: a,
    labelClassName: g,
    formatter: i,
    color: p,
    nameKey: x = "name",
    labelKey: v
  }, N) => {
    const b = () => {
      if (h || !s?.length)
        return null;
      const [l] = s, n = a ? a(d || "") : l[v] || d;
      return n ? /* @__PURE__ */ t("div", { className: r("font-medium", g), children: n }) : null;
    };
    if (!m || !s?.length)
      return null;
    const w = s.length === 1 && e !== "dot";
    return /* @__PURE__ */ o(
      "div",
      {
        ref: N,
        className: r(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-tooltip-background-light px-3 py-2 text-xs shadow-xl",
          u
        ),
        children: [
          w ? null : b(),
          /* @__PURE__ */ t("div", { className: "grid gap-1.5", children: s.map((l, n) => {
            const c = p || l.color || "#000";
            return /* @__PURE__ */ o(
              "div",
              {
                className: r(
                  "flex w-full items-stretch gap-2",
                  e === "dot" && "items-center"
                ),
                children: [
                  !f && /* @__PURE__ */ t(
                    "div",
                    {
                      className: r({
                        "size-2.5": e === "dot",
                        "w-1 h-full": e === "line",
                        "w-0 border-[0.5px] border-dashed": e === "dashed"
                      }),
                      style: {
                        backgroundColor: e === "dot" || e === "line" ? c : "",
                        borderColor: e === "dashed" ? c : ""
                      }
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex-1 flex justify-between items-center", children: [
                    /* @__PURE__ */ t("span", { children: l[x] || l.dataKey }),
                    /* @__PURE__ */ t("span", { className: "font-mono font-medium", children: i ? i(l.value ?? "") : l.value ?? "" })
                  ] })
                ]
              },
              l.dataKey || n
            );
          }) })
        ]
      }
    );
  }
);
j.displayName = "ChartTooltipContent";
export {
  j as default
};
//# sourceMappingURL=chart-tooltip-content.es.js.map
