import { jsx as o } from "react/jsx-runtime";
import { format as n } from "date-fns";
const m = () => /* @__PURE__ */ o("span", { className: "bg-icon-interactive h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2" }), u = (e) => n(e, "E").slice(0, 1), c = (e, r = 24) => Array.from({ length: r }, (a, t) => e + t), f = (e) => {
  if (e === "multiple")
    return [];
  if (e === "range")
    return { from: void 0, to: void 0 };
};
export {
  m as currentTimeDot,
  u as formatWeekdayName,
  c as generateYearRange,
  f as getDefaultSelectedValue
};
//# sourceMappingURL=utils.es.js.map
