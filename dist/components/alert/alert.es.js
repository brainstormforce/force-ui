import { jsx as r, jsxs as t, Fragment as x } from "react/jsx-runtime";
import { cn as s } from "../../utilities/functions.es.js";
import { getIcon as p, getTitle as m, getContent as k, getAction as v } from "../toaster/utils.es.js";
import { X as h } from "lucide-react";
const A = ({
  design: y = "inline",
  // stack/inline
  theme: e = "light",
  // light/dark
  variant: l = "neutral",
  className: d = "",
  title: g = "",
  content: u = "",
  icon: f = null,
  onClose: o,
  action: n = {
    label: "",
    onClick: () => {
    },
    type: "link"
  }
}) => {
  const c = () => {
    typeof o == "function" && o();
  }, a = {
    light: {
      neutral: "ring-alert-border-neutral bg-alert-background-neutral",
      custom: "ring-alert-border-neutral bg-alert-background-neutral",
      info: "ring-alert-border-info bg-alert-background-info",
      success: "ring-alert-border-green bg-alert-background-green",
      warning: "ring-alert-border-warning bg-alert-background-warning",
      error: "ring-alert-border-danger bg-alert-background-danger"
    },
    dark: "bg-background-inverse ring-background-inverse"
  }, i = {
    light: "text-icon-secondary",
    dark: "text-icon-inverse"
  }, b = () => {
    n?.onClick?.(c);
  };
  return y === "stack" ? /* @__PURE__ */ r(
    "div",
    {
      className: s(
        "flex items-center justify-start p-4 gap-2 relative ring-1 rounded-md shadow-lg",
        e === "dark" ? a.dark : a.light?.[l],
        d
      ),
      children: /* @__PURE__ */ t(x, { children: [
        /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: p({ variant: l, icon: f, theme: e }) }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-start justify-start gap-0.5 mr-7", children: [
          m({ title: g, theme: e }),
          k({ content: u, theme: e }),
          n?.label && typeof n?.onClick == "function" && /* @__PURE__ */ r("div", { className: "mt-2.5", children: v({
            actionLabel: n?.label,
            actionType: n?.type ?? "button",
            onAction: b,
            theme: e
          }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "absolute right-4 top-4 [&_svg]:size-5", children: /* @__PURE__ */ r(
          "button",
          {
            className: s(
              "bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer",
              i[e] ?? i.light
            ),
            onClick: () => c(),
            "aria-label": "Close alert",
            children: /* @__PURE__ */ r(h, {})
          }
        ) })
      ] })
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      className: s(
        "flex items-center justify-between p-3 gap-2 relative ring-1 rounded-lg shadow-lg",
        e === "dark" ? a.dark : a.light?.[l],
        d
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-start gap-2", children: [
          /* @__PURE__ */ r("div", { className: "self-start flex items-center justify-center [&_svg]:size-5 shrink-0", children: p({ variant: l, icon: f, theme: e }) }),
          /* @__PURE__ */ t("p", { className: "content-start space-x-1 my-0 mr-10 px-1", children: [
            m({ title: g, theme: e, inline: !0 }),
            k({ content: u, theme: e, inline: !0 })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex h-full justify-start gap-4 [&_svg]:size-4", children: [
          n?.label && typeof n?.onClick == "function" && /* @__PURE__ */ r("div", { className: "self-center flex h-5", children: v({
            actionLabel: n?.label,
            actionType: n?.type ?? "button",
            onAction: b,
            theme: e
          }) }),
          typeof o == "function" && /* @__PURE__ */ r(
            "button",
            {
              className: s(
                "self-start bg-transparent m-0 border-none p-0.5 focus:outline-none active:outline-none cursor-pointer size-5",
                i[e] ?? i.light
              ),
              onClick: () => c(),
              "aria-label": "Close alert",
              children: /* @__PURE__ */ r(h, {})
            }
          )
        ] })
      ]
    }
  );
};
export {
  A as default
};
//# sourceMappingURL=alert.es.js.map
