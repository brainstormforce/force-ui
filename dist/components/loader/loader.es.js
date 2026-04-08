import { jsx as s } from "react/jsx-runtime";
import { cn as n } from "../../utilities/functions.es.js";
import { LoaderCircle as l } from "lucide-react";
const c = ({
  variant: r = "primary",
  // primary, secondary
  size: e = "md",
  // sm, md, lg, xl,
  icon: a = null,
  className: i = ""
}) => {
  const m = {
    primary: "text-brand-primary-600",
    secondary: "text-background-primary"
  }[r], t = {
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6",
    xl: "[&>svg]:size-8"
  }[e];
  return /* @__PURE__ */ s(
    "span",
    {
      role: "status",
      "aria-label": "Loading",
      className: n("flex", t, m, i),
      children: a || /* @__PURE__ */ s(l, { className: "animate-spin shrink-0", "aria-hidden": "true" })
    }
  );
};
export {
  c as Loader,
  c as default
};
//# sourceMappingURL=loader.es.js.map
