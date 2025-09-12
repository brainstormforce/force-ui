import { jsx as i } from "react/jsx-runtime";
import { forwardRef as N, useState as k, useEffect as E } from "react";
import { cn as j } from "../../utilities/functions.es.js";
import { User as U } from "lucide-react";
const R = N(
  ({
    variant: g = "primary",
    size: m = "md",
    border: o = "subtle",
    src: t,
    alt: r,
    children: e,
    className: c,
    ...f
  }, b) => {
    const [n, a] = k(!1), x = t && o === "none" ? "subtle" : o, p = "rounded-full overflow-hidden flex items-center justify-center", u = {
      white: "text-text-primary bg-background-primary",
      gray: "text-text-primary bg-background-secondary",
      primary: "text-text-on-color bg-background-brand",
      "primary-light": "text-text-primary bg-brand-background-50",
      dark: "text-text-on-color bg-button-secondary"
    }[g], d = {
      xxs: "size-5 [&>svg]:size-3 text-xs",
      xs: "size-6 [&>svg]:size-4 text-sm",
      sm: "size-8 [&>svg]:size-5 text-base",
      md: "size-10 [&>svg]:size-6 text-lg",
      lg: "size-12 [&>svg]:size-12 text-lg"
    }[m], l = {
      none: "",
      subtle: "ring-1 ring-border-transparent-subtle",
      ring: "ring ring-border-subtle"
    }[x], y = t ? "object-cover object-center" : "", v = () => {
      if (t && n) {
        if (r && typeof r == "string")
          return r?.[0]?.toUpperCase();
        if (e && typeof e == "string")
          return e?.[0]?.toUpperCase();
        if (!e && !r)
          return /* @__PURE__ */ i(U, {});
      }
      return e ? typeof e == "string" ? e?.[0]?.toUpperCase() : e : null;
    }, z = () => {
      a(!0);
    }, s = !t || n, C = s ? "div" : "img";
    return E(() => {
      a(!1);
    }, [t]), /* @__PURE__ */ i(
      C,
      {
        ref: b,
        className: j(
          p,
          s && u,
          d,
          l,
          y,
          c
        ),
        ...s ? { children: v() } : { src: t, alt: r, onError: z },
        ...f
      }
    );
  }
);
export {
  R as default
};
//# sourceMappingURL=avatar.es.js.map
