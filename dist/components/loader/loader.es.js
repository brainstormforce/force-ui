"use client";
import { jsx as a } from "react/jsx-runtime";
import { cn as n } from "../../utilities/functions.es.js";
import { LoaderCircle as l } from "lucide-react";
const p = ({
  variant: r = "primary",
  // primary, secondary
  size: e = "md",
  // sm, md, lg, xl,
  icon: s = null,
  className: i = ""
}) => {
  const t = {
    primary: "text-brand-primary-600",
    secondary: "text-background-primary"
  }[r], m = {
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6",
    xl: "[&>svg]:size-8"
  }[e];
  return /* @__PURE__ */ a(
    "span",
    {
      role: "status",
      "aria-label": "Loading",
      className: n("flex", m, t, i),
      children: s || /* @__PURE__ */ a(l, { className: "animate-spin shrink-0", "aria-hidden": "true" })
    }
  );
};
export {
  p as Loader,
  p as default
};
//# sourceMappingURL=loader.es.js.map
