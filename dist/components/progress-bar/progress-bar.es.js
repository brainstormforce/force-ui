import { jsx as e } from "react/jsx-runtime";
import { cn as s } from "../../utilities/functions.es.js";
const u = ({
  progress: a = 0,
  // 0-100
  speed: o = 200,
  className: t = ""
}) => {
  let r = a;
  a < 0 && (r = 0), a > 100 && (r = 100);
  const l = `translateX(-${100 - r}%)`, n = `h-2 rounded-full bg-background-brand absolute left-0 top-0 w-full bottom-0 origin-left transition-transform duration-${o} ease-linear`;
  return /* @__PURE__ */ e(
    "div",
    {
      className: s(
        "h-2 rounded-full bg-misc-progress-background overflow-hidden relative",
        t
      ),
      role: "progressbar",
      "aria-valuenow": r,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": "Progress Bar",
      children: /* @__PURE__ */ e(
        "div",
        {
          className: n,
          style: {
            transform: l
          }
        }
      )
    }
  );
};
export {
  u as ProgressBar,
  u as default
};
//# sourceMappingURL=progress-bar.es.js.map
