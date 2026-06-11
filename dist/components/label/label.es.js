import { jsx as b } from "react/jsx-runtime";
import { cn as p } from "../../utilities/functions.es.js";
import { forwardRef as u } from "react";
const c = u(
  ({
    children: e = null,
    tag: l = "label",
    size: r = "sm",
    // xs, sm, md
    className: a = "",
    variant: t = "neutral",
    // neutral, help, error, disabled
    required: o = !1,
    ...d
  }, f) => {
    const i = "font-medium text-field-label flex items-center gap-0.5", n = {
      xs: "text-xs [&>*]:text-xs [&>svg]:h-3 [&>svg]:w-3",
      sm: "text-sm [&>*]:text-sm [&>svg]:h-4 [&>svg]:w-4",
      md: "text-base [&>*]:text-base [&>svg]:h-5 [&>svg]:w-5"
    }, x = {
      neutral: "text-field-label [&>*]:text-field-label",
      help: "text-field-helper [&>*]:text-field-helper",
      error: "text-support-error [&>*]:text-support-error",
      disabled: "text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled"
    }, m = {
      neutral: "",
      help: "font-normal",
      error: "font-normal",
      disabled: ""
    };
    if (!e)
      return null;
    let s = "";
    return o && (s = "after:content-['*'] after:text-field-required after:ml-0.5"), /* @__PURE__ */ b(
      l,
      {
        ref: f,
        className: p(
          i,
          n[r],
          x[t],
          s,
          m?.[t],
          a
        ),
        ...d,
        children: e
      }
    );
  }
);
c.displayName = "Label";
export {
  c as default
};
//# sourceMappingURL=label.es.js.map
