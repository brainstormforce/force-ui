import { jsxs as z, jsx as o } from "react/jsx-runtime";
import { forwardRef as j, Fragment as l } from "react";
import { cn as B } from "../../utilities/functions.es.js";
const R = j(
  (u, b) => {
    const {
      variant: n = "primary",
      // primary, secondary, outline, ghost, link
      size: g = "md",
      // xs, sm, md, lg
      type: c = "button",
      tag: h = "button",
      className: m,
      children: r,
      disabled: t = !1,
      destructive: s = !1,
      // true, false
      icon: e = null,
      // icon component
      iconPosition: v = "left",
      // left, right,
      loading: f = !1,
      ...p
    } = u, x = "outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled", y = s && "focus:ring-focus-error", w = f ? "opacity-50 disabled:cursor-not-allowed" : "", N = {
      primary: "text-text-on-color bg-button-primary hover:bg-button-primary-hover outline-button-primary hover:outline-button-primary-hover shadow-xs disabled:shadow-none focus:shadow-none disabled:bg-button-disabled disabled:outline-button-disabled",
      secondary: "text-text-on-color bg-button-secondary hover:bg-button-secondary-hover outline-button-secondary hover:outline-button-secondary-hover shadow-xs focus:shadow-none disabled:shadow-none disabled:bg-button-disabled disabled:outline-button-disabled",
      outline: "text-button-tertiary-color outline-border-subtle bg-button-tertiary shadow-sm focus:shadow-none hover:bg-button-tertiary-hover hover:outline-border-subtle disabled:bg-button-tertiary disabled:outline-border-disabled",
      ghost: "text-text-primary bg-transparent outline-transparent hover:bg-button-tertiary-hover",
      link: "outline-none text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"
    }[n], C = s && !t ? {
      primary: "bg-button-danger hover:bg-button-danger-hover outline-button-danger hover:outline-button-danger-hover",
      secondary: "bg-button-danger hover:bg-button-danger-hover outline-button-danger hover:outline-button-danger-hover",
      outline: "text-button-danger outline outline-1 outline-button-danger hover:outline-button-danger bg-button-tertiary hover:bg-field-background-error",
      ghost: "text-button-danger hover:bg-field-background-error",
      link: "text-button-danger hover:text-button-danger-secondary"
    }[n] : "", k = {
      xs: "p-1 rounded [&>svg]:size-4",
      sm: "p-2 rounded [&>svg]:size-4 gap-0.5",
      md: "p-2.5 rounded-md text-sm [&>svg]:size-5 gap-1",
      lg: "p-3 rounded-lg text-base [&>svg]:size-6 gap-1"
    }[g];
    let a, i = null, d = "";
    return e && (d = "flex items-center justify-center", v === "left" ? a = e : i = e), /* @__PURE__ */ z(
      h,
      {
        ref: b,
        type: c,
        className: B(
          d,
          x,
          k,
          N,
          C,
          y,
          w,
          {
            "cursor-default": t
          },
          m
        ),
        disabled: t,
        "aria-disabled": t,
        ...p,
        children: [
          /* @__PURE__ */ o(l, { children: a }, "left-icon"),
          r ? /* @__PURE__ */ o("span", { className: "px-1", children: r }) : null,
          /* @__PURE__ */ o(l, { children: i }, "right-icon")
        ]
      }
    );
  }
);
R.displayName = "Button";
export {
  R as default
};
//# sourceMappingURL=button.es.js.map
