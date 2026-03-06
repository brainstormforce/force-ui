import { cn as n } from "../../utilities/functions.es.js";
const d = (t, r, e, o) => {
  const i = `absolute rounded-full transition-colors duration-500 ${e[o].dot}`;
  return t === "dot" ? n(
    i,
    e[o].dot,
    r ? "bg-brand-primary-600" : "bg-text-tertiary"
  ) : t === "number" ? n(
    i,
    e[o].dot,
    r ? "text-brand-primary-600" : "text-text-tertiary",
    "flex items-center justify-center"
  ) : t === "icon" ? n(
    i,
    r ? "text-brand-primary-600" : "text-text-tertiary",
    "flex items-center justify-center"
  ) : "";
}, u = (t, r, e) => n(
  "relative flex items-center rounded-full justify-center transition-colors z-10 duration-500 ring-1",
  t ? "ring-brand-primary-600" : "ring-border-subtle",
  r[e].ring
), l = (t, r) => n(
  "rounded-full text-brand-primary-600 transition-colors duration-300",
  t[r].dot,
  t[r].ring
);
export {
  l as completedStepCommonClasses,
  d as getVariantClasses,
  u as stepWrapperClasses
};
//# sourceMappingURL=utils.es.js.map
