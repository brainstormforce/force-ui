import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useState as v, useRef as N, createContext as R, useMemo as U, useContext as S } from "react";
import { CloudUpload as _, File as B, ImageOff as H, Trash as M } from "lucide-react";
import { cn as i, formatFileSize as W } from "../../utilities/functions.es.js";
import { nanoid as y } from "nanoid";
import { Loader as q } from "../loader/loader.es.js";
const C = R(null), A = () => S(C), E = () => {
  const { file: r, removeFile: a, isLoading: s, error: l, errorText: n, errorTextId: t } = A(), o = U(() => /* @__PURE__ */ e("span", { className: "inline-flex self-start p-0.5", children: /* @__PURE__ */ e(B, { className: "size-5 text-icon-primary" }) }), [r]);
  return r ? /* @__PURE__ */ e(
    "div",
    {
      className: i(
        "border border-solid border-transparent flex items-start justify-between rounded mt-2 bg-field-primary-background p-3 gap-3",
        l && "border-alert-border-danger bg-alert-background-danger"
      ),
      children: /* @__PURE__ */ c("div", { className: "flex items-center gap-3 w-full", children: [
        s && o,
        !s && (r.type.startsWith("image/") ? /* @__PURE__ */ e(
          "div",
          {
            className: i(
              "size-10 rounded-sm flex items-center justify-center shrink-0",
              l && "bg-gray-200 "
            ),
            children: l ? /* @__PURE__ */ e(H, { className: "size-6 text-field-helper" }) : /* @__PURE__ */ e(
              "img",
              {
                src: URL.createObjectURL(r),
                alt: `Preview of ${r.name}`,
                className: "w-full h-10 object-contain"
              }
            )
          }
        ) : o),
        /* @__PURE__ */ c("div", { className: "text-left flex flex-col gap-1 w-[calc(100%_-_5.5rem)]", children: [
          /* @__PURE__ */ e("span", { className: "text-sm font-medium text-field-label truncate", children: s ? "Loading..." : r.name }),
          !s && /* @__PURE__ */ e(
            "span",
            {
              id: l ? t : void 0,
              className: i(
                "text-xs text-field-helper",
                l && "text-support-error"
              ),
              children: l ? n : W(r.size)
            }
          )
        ] }),
        s ? /* @__PURE__ */ e("span", { className: "inline-flex ml-auto p-0.5", children: /* @__PURE__ */ e(q, { className: "inline-flex" }) }) : /* @__PURE__ */ e(
          "button",
          {
            onClick: a,
            "aria-label": "Remove file",
            className: "inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 rounded self-start",
            children: /* @__PURE__ */ e(M, { className: "size-4 text-support-error", "aria-hidden": "true" })
          }
        )
      ] })
    }
  ) : null;
}, G = ({
  onFileUpload: r,
  inlineIcon: a = !1,
  label: s = "Drag and drop or browse files",
  helpText: l = "Help Text",
  size: n = "sm",
  disabled: t = !1,
  error: o = !1,
  errorText: w = "Upload failed, please try again.",
  className: L = "",
  wrapperClassName: T = ""
}) => {
  const [u, m] = v(!1), [g, x] = v(null), [j, h] = v(!1), k = (d) => {
    if (t)
      return;
    m(!0), d.preventDefault(), d.stopPropagation(), h(!1);
    const f = d.dataTransfer.files[0];
    f && (x(f), r && r(f)), m(!1);
  }, $ = (d) => {
    t || (d.preventDefault(), h(!0));
  }, I = () => {
    t || h(!1);
  }, O = (d) => {
    if (t)
      return;
    m(!0);
    const f = d.target.files;
    if (!f)
      return;
    const b = f[0];
    b && (x(b), r && r(b)), m(!1);
  }, P = () => {
    x(null);
  }, p = {
    sm: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: a ? "p-3" : "p-5",
      gap: "gap-2.5"
    },
    md: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: a ? "p-4" : "p-6",
      gap: "gap-3"
    },
    lg: {
      label: "text-base",
      helpText: "text-sm",
      icon: "size-6",
      padding: a ? "p-4" : "p-6",
      gap: "gap-3"
    }
  }, z = N(`fui-file-upload-${y()}`), D = N(`fui-file-upload-help-${y()}`), F = N(`fui-file-upload-error-${y()}`);
  return /* @__PURE__ */ e(
    C.Provider,
    {
      value: { file: g, removeFile: P, isLoading: u, error: o, errorText: w, errorTextId: F.current },
      children: /* @__PURE__ */ c("div", { className: i(T), "aria-busy": u || void 0, children: [
        /* @__PURE__ */ e("label", { htmlFor: z.current, children: /* @__PURE__ */ c(
          "div",
          {
            className: i(
              "min-w-80 cursor-pointer mx-auto border-dashed border rounded-md text-center hover:border-field-dropzone-color hover:bg-field-dropzone-background-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-toggle-on focus-within:ring-offset-2 transition duration-200 ease-in-out",
              j ? "border-field-dropzone-color bg-field-dropzone-background-hover" : "border-field-border",
              t && "border-field-border bg-field-background-disabled cursor-not-allowed hover:border-field-border",
              p[n].padding,
              L
            ),
            onDragOver: $,
            onDragLeave: I,
            onDrop: k,
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: i(
                    "flex flex-col items-center justify-center",
                    a && `flex-row items-start ${p[n].gap}`
                  ),
                  children: [
                    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                      _,
                      {
                        "aria-hidden": "true",
                        className: i(
                          "text-field-dropzone-color size-6",
                          p[n].icon,
                          t && "text-field-color-disabled"
                        )
                      }
                    ) }),
                    /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: i(
                            "mt-1 text-center font-medium text-field-label",
                            a && "text-left mt-0",
                            p[n].label,
                            t && "text-field-color-disabled"
                          ),
                          children: s
                        }
                      ),
                      l && /* @__PURE__ */ e(
                        "span",
                        {
                          id: D.current,
                          className: i(
                            "mt-1 text-center font-medium text-field-helper",
                            a && "text-left",
                            p[n].helpText,
                            t && "text-field-color-disabled"
                          ),
                          children: l
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  id: z.current,
                  type: "file",
                  className: "sr-only",
                  onChange: O,
                  disabled: t,
                  "aria-invalid": o || void 0,
                  "aria-describedby": [l ? D.current : "", o ? F.current : ""].filter(Boolean).join(" ") || void 0
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(E, {}),
        /* @__PURE__ */ c("div", { className: "sr-only", "aria-live": "polite", "aria-atomic": "true", children: [
          u ? "Uploading file..." : "",
          !u && g && !o ? `File ${g.name} uploaded successfully` : "",
          !u && o ? w : ""
        ] })
      ] })
    }
  );
};
G.displayName = "Dropzone";
export {
  G as Dropzone,
  E as FilePreview,
  G as default
};
//# sourceMappingURL=dropzone.es.js.map
