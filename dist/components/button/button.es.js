import { jsxs as z, jsx as o } from "react/jsx-runtime";
import { forwardRef as j, Fragment as u } from "react";
import { cn as B } from "../../utilities/functions.es.js";
const R = j(
  (b, g) => {
    const {
      variant: n = "primary",
      // primary, secondary, outline, ghost, link
      size: c = "md",
      // xs, sm, md, lg
      type: h = "button",
      tag: m = "button",
      className: v,
      children: r,
      disabled: t = !1,
      destructive: s = !1,
      // true, false
      icon: e = null,
      // icon component
      iconPosition: f = "left",
      // left, right,
      loading: a = !1,
      ...p
    } = b, y = "outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled", x = s && "focus:ring-focus-error", w = a ? "opacity-50 disabled:cursor-not-allowed" : "", N = {
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
    }[c];
    let i, d = null, l = "";
    return e && (l = "flex items-center justify-center", f === "left" ? i = e : d = e), /* @__PURE__ */ z(
      m,
      {
        ref: g,
        type: h,
        className: B(
          l,
          y,
          k,
          N,
          C,
          x,
          w,
          {
            "cursor-default": t
          },
          v
        ),
        disabled: t,
        "aria-disabled": t,
        ...a && { "aria-busy": !0 },
        ...p,
        children: [
          /* @__PURE__ */ o(u, { children: i }, "left-icon"),
          r ? /* @__PURE__ */ o("span", { className: "px-1", children: r }) : null,
          /* @__PURE__ */ o(u, { children: d }, "right-icon")
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
