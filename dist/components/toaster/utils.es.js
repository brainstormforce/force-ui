import { jsx as i } from "react/jsx-runtime";
import { isValidElement as m, cloneElement as x } from "react";
import { Info as c, Check as g, AlertTriangle as f, Trash2 as d } from "lucide-react";
import { cn as n } from "../../utilities/functions.es.js";
import u from "../button/button.es.js";
const l = "light", p = "neutral", v = "button", h = ({
  theme: t = l,
  variant: s = p
}) => {
  let e = t === "light" ? "text-icon-secondary" : "text-icon-inverse";
  return e = {
    info: t === "light" ? "text-support-info" : "text-support-info-inverse",
    success: t === "light" ? "text-support-success" : "text-support-success-inverse",
    warning: t === "light" ? "text-support-warning" : "text-support-warning-inverse",
    error: t === "light" ? "text-support-error" : "text-support-error-inverse"
  }[s] || e, e;
}, w = ({
  icon: t,
  theme: s = l,
  variant: e = p
}) => {
  const r = "[&>svg]:h-5 [&>svg]:w-5", o = h({ theme: s, variant: e });
  if (t && m(t))
    return x(t, {
      className: n(
        r,
        o,
        t?.props?.className ?? ""
      )
    });
  const a = {
    neutral: /* @__PURE__ */ i(c, { className: n(r, o) }),
    info: /* @__PURE__ */ i(c, { className: n(r, o) }),
    success: /* @__PURE__ */ i(g, { className: n(r, o) }),
    warning: /* @__PURE__ */ i(f, { className: n(r, o) }),
    error: /* @__PURE__ */ i(d, { className: n(r, o) })
  };
  return a[e] || a.neutral;
}, y = ({
  actionType: t = v,
  onAction: s = () => {
  },
  actionLabel: e = "",
  theme: r = l
}) => {
  const o = "focus:ring-0 focus:ring-offset-0 ring-offset-0 focus:outline-none";
  let a = "text-button-primary border-button-primary hover:border-button-primary hover:text-button-primary-hover";
  switch (r === "dark" && (a = "text-text-inverse border-text-inverse hover:border-text-inverse hover:text-text-inverse"), t) {
    case "button":
      return /* @__PURE__ */ i(
        u,
        {
          variant: "outline",
          size: "xs",
          onClick: s,
          className: n(
            "rounded",
            o,
            a,
            r === "dark" ? "bg-transparent hover:bg-transparent" : "bg-white hover:bg-white"
          ),
          children: e
        }
      );
    case "link":
      return /* @__PURE__ */ i(
        u,
        {
          variant: "link",
          size: "xs",
          onClick: s,
          className: n(o, a),
          children: e
        }
      );
    default:
      return null;
  }
}, A = ({
  theme: t = l,
  title: s = "",
  inline: e = !1
}) => s ? /* @__PURE__ */ i(
  "span",
  {
    className: n(
      "block",
      {
        light: "text-text-primary",
        dark: "text-text-inverse"
      }[t],
      "text-sm leading-5 font-semibold",
      e ? "inline" : "block"
    ),
    children: s
  }
) : null, I = ({
  theme: t = l,
  content: s = "",
  inline: e = !1
}) => s ? /* @__PURE__ */ i(
  "span",
  {
    className: n(
      {
        light: "text-text-primary",
        dark: "text-text-inverse"
      }[t],
      "block text-sm [&_*]:text-sm leading-5 [&_*]:leading-5 font-normal",
      e ? "inline" : "block"
    ),
    children: s
  }
) : null, _ = (...t) => (s) => {
  t.forEach((e) => {
    typeof e == "function" ? e(s) : e && (e.current = s);
  });
};
export {
  y as getAction,
  I as getContent,
  w as getIcon,
  h as getIconColor,
  A as getTitle,
  _ as mergeRefs
};
//# sourceMappingURL=utils.es.js.map
