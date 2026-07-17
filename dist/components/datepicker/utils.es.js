import { jsx as n } from "react/jsx-runtime";
import { format as o, setMinutes as i, setHours as s, getHours as u, getMinutes as a } from "date-fns";
const c = () => /* @__PURE__ */ n("span", { className: "bg-icon-interactive h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2" }), g = (e) => o(e, "E").slice(0, 1), d = (e, t = 24) => Array.from({ length: t }, (l, r) => e + r), b = (e, t) => t ? i(
  s(e, u(t)),
  a(t)
) : e, p = (e) => {
  if (e === "multiple")
    return [];
  if (e === "range")
    return { from: void 0, to: void 0 };
};
export {
  c as currentTimeDot,
  g as formatWeekdayName,
  d as generateYearRange,
  p as getDefaultSelectedValue,
  b as mergeDateTime
};
//# sourceMappingURL=utils.es.js.map
