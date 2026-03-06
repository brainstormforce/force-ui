import { jsx as r } from "react/jsx-runtime";
import { cn as n } from "../../utilities/functions.es.js";
import { LoaderCircle as o } from "lucide-react";
const d = ({
  variant: a = "primary",
  // primary, secondary
  size: e = "md",
  // sm, md, lg, xl,
  icon: s = null,
  className: m = ""
}) => {
  const i = {
    primary: "text-brand-primary-600",
    secondary: "text-background-primary"
  }[a], t = {
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6",
    xl: "[&>svg]:size-8"
  }[e];
  return /* @__PURE__ */ r(
    "span",
    {
      className: n("flex", t, i, m),
      children: s || /* @__PURE__ */ r(o, { className: "animate-spin shrink-0" })
    }
  );
};
export {
  d as Loader,
  d as default
};
//# sourceMappingURL=loader.es.js.map
