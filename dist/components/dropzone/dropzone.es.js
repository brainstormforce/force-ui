import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useState as x, useRef as O, createContext as P, useMemo as R, useContext as U } from "react";
import { CloudUpload as S, File as _, ImageOff as $, Trash as H } from "lucide-react";
import { cn as l, formatFileSize as I } from "../../utilities/functions.es.js";
import { nanoid as M } from "nanoid";
import { Loader as W } from "../loader/loader.es.js";
const b = P(null), q = () => U(b), A = () => {
  const { file: t, removeFile: o, isLoading: s, error: a, errorText: n } = q(), r = R(() => /* @__PURE__ */ e("span", { className: "inline-flex self-start p-0.5", children: /* @__PURE__ */ e(_, { className: "size-5 text-icon-primary" }) }), [t]);
  return t ? /* @__PURE__ */ e(
    "div",
    {
      className: l(
        "border border-solid border-transparent flex items-start justify-between rounded mt-2 bg-field-primary-background p-3 gap-3",
        a && "border-alert-border-danger bg-alert-background-danger"
      ),
      children: /* @__PURE__ */ c("div", { className: "flex items-center gap-3 w-full", children: [
        s && r,
        !s && (t.type.startsWith("image/") ? /* @__PURE__ */ e(
          "div",
          {
            className: l(
              "size-10 rounded-sm flex items-center justify-center shrink-0",
              a && "bg-gray-200 "
            ),
            children: a ? /* @__PURE__ */ e($, { className: "size-6 text-field-helper" }) : /* @__PURE__ */ e(
              "img",
              {
                src: URL.createObjectURL(t),
                alt: "Preview",
                className: "w-full h-10 object-contain"
              }
            )
          }
        ) : r),
        /* @__PURE__ */ c("div", { className: "text-left flex flex-col gap-1 w-[calc(100%_-_5.5rem)]", children: [
          /* @__PURE__ */ e("span", { className: "text-sm font-medium text-field-label truncate", children: s ? "Loading..." : t.name }),
          !s && /* @__PURE__ */ e(
            "span",
            {
              className: l(
                "text-xs text-field-helper",
                a && "text-support-error"
              ),
              children: a ? n : I(t.size)
            }
          )
        ] }),
        s ? /* @__PURE__ */ e("span", { className: "inline-flex ml-auto p-0.5", children: /* @__PURE__ */ e(W, { className: "inline-flex" }) }) : /* @__PURE__ */ e(
          "button",
          {
            onClick: o,
            className: "inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start",
            children: /* @__PURE__ */ e(H, { className: "size-4 text-support-error" })
          }
        )
      ] })
    }
  ) : null;
}, B = ({
  onFileUpload: t,
  inlineIcon: o = !1,
  label: s = "Drag and drop or browse files",
  helpText: a = "Help Text",
  size: n = "sm",
  disabled: r = !1,
  error: v = !1,
  errorText: N = "Upload failed, please try again.",
  className: z = "",
  wrapperClassName: D = ""
}) => {
  const [y, p] = x(!1), [w, m] = x(null), [F, u] = x(!1), C = (i) => {
    if (r)
      return;
    p(!0), i.preventDefault(), i.stopPropagation(), u(!1);
    const d = i.dataTransfer.files[0];
    d && (m(d), t && t(d)), p(!1);
  }, L = (i) => {
    r || (i.preventDefault(), u(!0));
  }, j = () => {
    r || u(!1);
  }, k = (i) => {
    if (r)
      return;
    p(!0);
    const d = i.target.files;
    if (!d)
      return;
    const g = d[0];
    g && (m(g), t && t(g)), p(!1);
  }, T = () => {
    m(null);
  }, f = {
    sm: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: o ? "p-3" : "p-5",
      gap: "gap-2.5"
    },
    md: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: o ? "p-4" : "p-6",
      gap: "gap-3"
    },
    lg: {
      label: "text-base",
      helpText: "text-sm",
      icon: "size-6",
      padding: o ? "p-4" : "p-6",
      gap: "gap-3"
    }
  }, h = O(`fui-file-upload-${M()}`);
  return /* @__PURE__ */ e(
    b.Provider,
    {
      value: { file: w, removeFile: T, isLoading: y, error: v, errorText: N },
      children: /* @__PURE__ */ c("div", { className: l(D), children: [
        /* @__PURE__ */ e("label", { htmlFor: h.current, children: /* @__PURE__ */ c(
          "div",
          {
            className: l(
              "min-w-80 cursor-pointer mx-auto border-dashed border rounded-md text-center hover:border-field-dropzone-color hover:bg-field-dropzone-background-hover focus:outline-none focus:ring focus:ring-toggle-on focus:ring-offset-2 transition duration-200 ease-in-out",
              F ? "border-field-dropzone-color bg-field-dropzone-background-hover" : "border-field-border",
              r && "border-field-border bg-field-background-disabled cursor-not-allowed hover:border-field-border",
              f[n].padding,
              z
            ),
            onDragOver: L,
            onDragLeave: j,
            onDrop: C,
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: l(
                    "flex flex-col items-center justify-center",
                    o && `flex-row items-start ${f[n].gap}`
                  ),
                  children: [
                    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                      S,
                      {
                        className: l(
                          "text-field-dropzone-color size-6",
                          f[n].icon,
                          r && "text-field-color-disabled"
                        )
                      }
                    ) }),
                    /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: l(
                            "mt-1 text-center font-medium text-field-label",
                            o && "text-left mt-0",
                            f[n].label,
                            r && "text-field-color-disabled"
                          ),
                          children: s
                        }
                      ),
                      a && /* @__PURE__ */ e(
                        "span",
                        {
                          className: l(
                            "mt-1 text-center font-medium text-field-helper",
                            o && "text-left",
                            f[n].helpText,
                            r && "text-field-color-disabled"
                          ),
                          children: a
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  id: h.current,
                  type: "file",
                  className: "sr-only",
                  onChange: k,
                  disabled: r
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(A, {})
      ] })
    }
  );
};
B.displayName = "Dropzone";
export {
  B as Dropzone,
  A as FilePreview,
  B as default
};
//# sourceMappingURL=dropzone.es.js.map
