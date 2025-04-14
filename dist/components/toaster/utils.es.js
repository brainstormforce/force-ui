import { jsx as a } from "react/jsx-runtime";
import { isValidElement as m, cloneElement as x } from "react";
import { Info as c, Check as g, AlertTriangle as f, Trash2 as d } from "lucide-react";
import { cn as n } from "../../utilities/functions.es.js";
import u from "../button/button.es.js";
const l = "light", p = "neutral", v = "button", h = ({
  theme: t = l,
  variant: r = p
}) => {
  let e = t === "light" ? "text-icon-secondary" : "text-icon-inverse";
  return e = {
    info: t === "light" ? "text-support-info" : "text-support-info-inverse",
    success: t === "light" ? "text-support-success" : "text-support-success-inverse",
    warning: t === "light" ? "text-support-warning" : "text-support-warning-inverse",
    error: t === "light" ? "text-support-error" : "text-support-error-inverse"
  }[r] || e, e;
}, E = ({
  icon: t,
  theme: r = l,
  variant: e = p
}) => {
  const s = "[&>svg]:h-5 [&>svg]:w-5", o = h({ theme: r, variant: e });
  if (t && m(t))
    return x(t, {
      className: n(
        s,
        o,
        t?.props?.className ?? ""
      )
    });
  const i = {
    neutral: /* @__PURE__ */ a(c, { className: n(s, o) }),
    info: /* @__PURE__ */ a(c, { className: n(s, o) }),
    success: /* @__PURE__ */ a(g, { className: n(s, o) }),
    warning: /* @__PURE__ */ a(f, { className: n(s, o) }),
    error: /* @__PURE__ */ a(d, { className: n(s, o) })
  };
  return i[e] || i.neutral;
}, y = ({
  actionType: t = v,
  onAction: r = () => {
  },
  actionLabel: e = "",
  theme: s = l
}) => {
  const o = "focus:ring-0 focus:ring-offset-0 ring-offset-0 focus:outline-none";
  let i = "text-button-primary border-button-primary hover:border-button-primary hover:text-button-primary-hover";
  switch (s === "dark" && (i = "text-text-inverse border-text-inverse hover:border-text-inverse hover:text-text-inverse"), t) {
    case "button":
      return /* @__PURE__ */ a(
        u,
        {
          variant: "outline",
          size: "xs",
          onClick: r,
          className: n(
            "rounded",
            o,
            i,
            s === "dark" ? "bg-transparent hover:bg-transparent" : "bg-white hover:bg-white"
          ),
          children: e
        }
      );
    case "link":
      return /* @__PURE__ */ a(
        u,
        {
          variant: "link",
          size: "xs",
          onClick: r,
          className: n(o, i),
          children: e
        }
      );
    default:
      return null;
  }
}, A = ({
  theme: t = l,
  title: r = "",
  inline: e = !1
}) => r ? /* @__PURE__ */ a(
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
    children: r
  }
) : null, I = ({
  theme: t = l,
  content: r = "",
  inline: e = !1
}) => r ? /* @__PURE__ */ a(
  "span",
  {
    className: n(
      {
        light: "text-text-primary",
        dark: "text-text-inverse"
      }[t],
      "block text-sm [&_*]:text-sm leading-5 [&_*]:leading-5 font-normal [word-break:break-word]",
      e ? "inline" : "block"
    ),
    children: r
  }
) : null, _ = (...t) => (r) => {
  t.forEach((e) => {
    typeof e == "function" ? e(r) : e && (e.current = r);
  });
};
export {
  y as getAction,
  I as getContent,
  E as getIcon,
  h as getIconColor,
  A as getTitle,
  _ as mergeRefs
};
//# sourceMappingURL=utils.es.js.map
