import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { forwardRef as G, useRef as H, useMemo as x, useState as J, useEffect as O } from "react";
import { nanoid as Q } from "nanoid";
import { cn as o } from "../../utilities/functions.es.js";
import { X as T, Upload as V } from "lucide-react";
import { mergeRefs as W } from "../toaster/utils.es.js";
import Y from "../label/label.es.js";
const Z = ({
  id: b,
  value: e,
  size: n = "sm",
  // sm, md, lg
  className: N = "",
  disabled: t = !1,
  onChange: c = () => {
  },
  error: h = !1,
  label: f = "",
  required: u = !1,
  clearable: k = !1,
  "aria-label": w,
  "aria-labelledby": F,
  ...R
}, I) => {
  const l = H(null), d = x(() => b || `file-picker-${Q()}`, [b]), [y, i] = J(
    void 0
  );
  O(() => {
    i(void 0);
  }, [e]);
  const j = x(() => e == null ? null : typeof e == "string" ? e || null : Array.isArray(e) ? e.map((s) => s.name).join(", ") || null : e.name, [e]), m = y !== void 0 ? y : j, S = (s) => {
    if (t)
      return;
    const a = s.target.files;
    a && a.length > 0 ? i(
      Array.from(a).map((B) => B.name).join(", ")
    ) : i(null), typeof c == "function" && c(a);
  }, g = () => {
    i(null), l.current && (l.current.value = ""), c(null);
  }, A = () => {
    l.current?.click();
  }, D = "bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200", P = {
    sm: "p-3 py-2 rounded",
    md: "p-3.5 py-2.5 rounded-md",
    lg: "p-4 py-3 rounded-lg"
  }, z = {
    sm: "text-sm font-medium",
    md: "text-sm font-medium",
    lg: "text-base font-medium"
  }, E = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, L = t ? "hover:outline-border-disabled" : "hover:outline-border-strong", U = "focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2", K = h ? "focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border" : "", M = t ? "outline-border-disabled cursor-not-allowed text-text-disabled" : "", C = t ? "font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center" : "font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center", v = {
    sm: "[&>svg]:size-4",
    md: "[&>svg]:size-5",
    lg: "[&>svg]:size-6"
  }, X = "pr-10", _ = x(() => f ? /* @__PURE__ */ r(
    Y,
    {
      className: o(z[n]),
      htmlFor: d,
      ...u && { required: !0 },
      children: f
    }
  ) : null, [f, n, d, u]), $ = () => k && m && !t ? /* @__PURE__ */ r(
    "div",
    {
      className: o(
        C,
        "right-0 pr-3 cursor-pointer z-20 pointer-events-auto",
        v[n]
      ),
      onClick: g,
      role: "button",
      tabIndex: 0,
      "aria-label": "Remove file",
      onKeyDown: (s) => {
        (s.key === "Enter" || s.key === " ") && g();
      },
      children: /* @__PURE__ */ r(T, { "aria-hidden": "true" })
    }
  ) : /* @__PURE__ */ r(
    "div",
    {
      className: o(
        C,
        "right-0 pr-3",
        v[n]
      ),
      "aria-hidden": "true",
      children: /* @__PURE__ */ r(V, {})
    }
  );
  return /* @__PURE__ */ p("div", { className: "flex flex-col items-start gap-1.5 [&_*]:box-border box-border", children: [
    _,
    /* @__PURE__ */ p(
      "div",
      {
        className: o(
          "w-full relative flex focus-within:z-10",
          N
        ),
        children: [
          /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              id: d,
              className: o(
                D,
                M,
                P[n],
                E[n],
                U,
                L,
                K,
                X,
                "flex items-center gap-2 text-left cursor-pointer",
                t && "cursor-not-allowed"
              ),
              disabled: t,
              onClick: A,
              "aria-label": w,
              "aria-labelledby": F,
              ...h && { "aria-invalid": !0 },
              children: [
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: o(
                      "shrink-0",
                      t && "text-text-tertiary"
                    ),
                    children: "Choose File"
                  }
                ),
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: o(
                      "truncate",
                      !m && "text-text-tertiary"
                    ),
                    children: m ?? "No file chosen"
                  }
                )
              ]
            }
          ),
          $(),
          /* @__PURE__ */ r(
            "input",
            {
              ref: W(l, I),
              type: "file",
              className: "sr-only",
              tabIndex: -1,
              "aria-hidden": "true",
              disabled: t,
              required: u,
              onChange: S,
              ...R
            }
          )
        ]
      }
    )
  ] });
}, q = G(Z);
q.displayName = "FilePicker";
export {
  Z as FilePickerComponent,
  q as default
};
//# sourceMappingURL=file-picker.es.js.map
