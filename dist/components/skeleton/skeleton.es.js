import { jsx as s } from "react/jsx-runtime";
import { cn as n } from "../../utilities/functions.es.js";
const c = ({
  variant: a = "rectangular",
  // rectangular, circular
  className: r,
  ...e
}) => {
  const t = {
    circular: "rounded-full bg-gray-200 ",
    rectangular: "rounded-md bg-gray-200"
  }[a], l = {
    circular: "size-10",
    rectangular: "w-96 h-3"
  }[a];
  return /* @__PURE__ */ s(
    "div",
    {
      role: "status",
      "aria-label": "Loading",
      className: n(
        t,
        "animate-pulse",
        l,
        r
      ),
      ...e
    }
  );
};
export {
  c as default
};
//# sourceMappingURL=skeleton.es.js.map
