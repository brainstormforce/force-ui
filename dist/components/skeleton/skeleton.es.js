import { jsx as c } from "react/jsx-runtime";
import { cn as n } from "../../utilities/functions.es.js";
const o = ({
  variant: r = "rectangular",
  // rectangular, circular
  className: a,
  ...e
}) => {
  const t = {
    circular: "rounded-full bg-gray-200 ",
    rectangular: "rounded-md bg-gray-200"
  }[r], l = {
    circular: "size-10",
    rectangular: "w-96 h-3"
  }[r];
  return /* @__PURE__ */ c(
    "div",
    {
      className: n(
        t,
        "animate-pulse",
        l,
        a
      ),
      ...e
    }
  );
};
export {
  o as default
};
//# sourceMappingURL=skeleton.es.js.map
