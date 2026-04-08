import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { cn as d } from "../../utilities/functions.es.js";
import { X as N } from "lucide-react";
const j = C(
  ({
    label: r = "",
    size: s = "sm",
    // xxs, xs, sm, md, lg
    className: c = "",
    type: u = "pill",
    // pill, rounded
    variant: b = "neutral",
    // neutral, red, yellow, green, blue, inverse
    icon: l = null,
    disabled: o = !1,
    onClose: x = () => {
    },
    closable: p = !1,
    onMouseDown: m = () => {
    },
    disableHover: v = !1
  }, y) => {
    const h = "font-medium border-badge-border-gray flex items-center justify-center border border-solid box-border max-w-full transition-colors duration-150 ease-in-out", f = {
      xxs: "py-0.5 px-0.5 text-xs h-4",
      xs: "py-0.5 px-1 text-xs h-5",
      sm: "py-1 px-1.5 text-xs h-6",
      md: "py-1 px-1.5 text-sm h-7",
      lg: "py-1 px-1.5 text-base h-8"
    }, k = {
      pill: "rounded-full",
      rounded: "rounded"
    }, w = {
      neutral: "hover:bg-badge-hover-gray",
      red: "hover:bg-badge-hover-red",
      yellow: "hover:bg-badge-hover-yellow",
      green: "hover:bg-badge-hover-green",
      blue: "hover:bg-badge-hover-sky",
      inverse: "hover:bg-badge-hover-inverse",
      disabled: "hover:bg-badge-hover-disabled"
    }, t = {
      neutral: "bg-badge-background-gray text-badge-color-gray border-badge-border-gray",
      red: "bg-badge-background-red text-badge-color-red border-badge-border-red",
      yellow: "bg-badge-background-yellow text-badge-color-yellow border-badge-border-yellow",
      green: "bg-badge-background-green text-badge-color-green border-badge-border-green",
      blue: "bg-badge-background-sky text-badge-color-sky border-badge-border-sky",
      inverse: "bg-background-inverse text-text-inverse border-background-inverse",
      disabled: "bg-badge-background-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed"
    };
    let a = "", n = "group relative justify-center flex items-center cursor-pointer";
    const g = {
      xxs: "[&>svg]:size-3",
      xs: "[&>svg]:size-3",
      sm: "[&>svg]:size-3",
      md: "[&>svg]:size-4",
      lg: "[&>svg]:size-5"
    };
    return o ? (a = t.disabled, n += " cursor-not-allowed disabled") : a = t[b], r ? /* @__PURE__ */ i(
      "span",
      {
        className: d(
          h,
          f[s],
          k[u],
          "gap-0.5",
          a,
          !v && w[b],
          c
        ),
        ref: y,
        children: [
          l ? /* @__PURE__ */ e(
            "span",
            {
              className: d(
                "justify-center flex items-center",
                g[s]
              ),
              children: l
            }
          ) : null,
          /* @__PURE__ */ e("span", { className: "px-1 truncate inline-block", children: r }),
          p && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: d(n, g[s], "bg-transparent border-none p-0 m-0"),
              onMouseDown: m,
              "aria-label": `Remove ${r}`,
              disabled: o,
              ...!o && {
                onClick: x
              },
              children: [
                /* @__PURE__ */ e(N, { "aria-hidden": "true" }),
                /* @__PURE__ */ e("span", { className: "absolute -inset-1" })
              ]
            }
          )
        ]
      }
    ) : null;
  }
);
j.displayName = "Badge";
export {
  j as default
};
//# sourceMappingURL=badge.es.js.map
