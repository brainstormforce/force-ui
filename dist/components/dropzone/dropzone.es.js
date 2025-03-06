import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { createContext as k, useState as x, useRef as T, useMemo as O, useContext as P } from "react";
import { CloudUpload as R, File as U, ImageOff as S, Trash as _ } from "lucide-react";
import { cn as a, formatFileSize as $ } from "../../utilities/functions.es.js";
import { nanoid as H } from "nanoid";
import { Loader as I } from "../loader/loader.es.js";
const b = k(null), M = () => P(b), W = () => {
  const { file: t, removeFile: l, isLoading: s, error: o, errorText: n } = M(), r = O(() => /* @__PURE__ */ e("span", { className: "inline-flex self-start p-0.5", children: /* @__PURE__ */ e(U, { className: "size-5 text-icon-primary" }) }), [t]);
  return t ? /* @__PURE__ */ e(
    "div",
    {
      className: a(
        "border border-solid border-transparent flex items-start justify-between rounded mt-2 bg-field-primary-background p-3 gap-3",
        o && "border-alert-border-danger bg-alert-background-danger"
      ),
      children: /* @__PURE__ */ c("div", { className: "flex items-center gap-3 w-full", children: [
        s && r,
        !s && (t.type.startsWith("image/") ? /* @__PURE__ */ e(
          "div",
          {
            className: a(
              "size-10 rounded-sm flex items-center justify-center shrink-0",
              o && "bg-gray-200 "
            ),
            children: o ? /* @__PURE__ */ e(S, { className: "size-6 text-field-helper" }) : /* @__PURE__ */ e(
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
              className: a(
                "text-xs text-field-helper",
                o && "text-support-error"
              ),
              children: o ? n : $(t.size)
            }
          )
        ] }),
        s ? /* @__PURE__ */ e("span", { className: "inline-flex ml-auto p-0.5", children: /* @__PURE__ */ e(I, { className: "inline-flex" }) }) : /* @__PURE__ */ e(
          "button",
          {
            onClick: l,
            className: "inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start",
            children: /* @__PURE__ */ e(_, { className: "size-4 text-support-error" })
          }
        )
      ] })
    }
  ) : null;
}, q = ({
  onFileUpload: t,
  inlineIcon: l = !1,
  label: s = "Drag and drop or browse files",
  helpText: o = "Help Text",
  size: n = "sm",
  disabled: r = !1,
  error: v = !1,
  errorText: N = "Upload failed, please try again."
}) => {
  const [z, p] = x(!1), [D, m] = x(null), [y, u] = x(!1), w = (i) => {
    if (r)
      return;
    p(!0), i.preventDefault(), i.stopPropagation(), u(!1);
    const d = i.dataTransfer.files[0];
    d && (m(d), t && t(d)), p(!1);
  }, F = (i) => {
    r || (i.preventDefault(), u(!0));
  }, C = () => {
    r || u(!1);
  }, L = (i) => {
    if (r)
      return;
    p(!0);
    const d = i.target.files;
    if (!d)
      return;
    const g = d[0];
    g && (m(g), t && t(g)), p(!1);
  }, j = () => {
    m(null);
  }, f = {
    sm: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: l ? "p-3" : "p-5",
      gap: "gap-2.5"
    },
    md: {
      label: "text-sm",
      helpText: "text-xs",
      icon: "size-5",
      padding: l ? "p-4" : "p-6",
      gap: "gap-3"
    },
    lg: {
      label: "text-base",
      helpText: "text-sm",
      icon: "size-6",
      padding: l ? "p-4" : "p-6",
      gap: "gap-3"
    }
  }, h = T(`fui-file-upload-${H()}`);
  return /* @__PURE__ */ e(
    b.Provider,
    {
      value: { file: D, removeFile: j, isLoading: z, error: v, errorText: N },
      children: /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("label", { htmlFor: h.current, children: /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "min-w-80 cursor-pointer mx-auto border-dashed border rounded-md text-center hover:border-field-dropzone-color hover:bg-field-dropzone-background-hover focus:outline-none focus:ring focus:ring-toggle-on focus:ring-offset-2 transition duration-200 ease-in-out",
              y ? "border-field-dropzone-color bg-field-dropzone-background-hover" : "border-field-border",
              r && "border-field-border bg-field-background-disabled cursor-not-allowed hover:border-field-border",
              f[n].padding
            ),
            onDragOver: F,
            onDragLeave: C,
            onDrop: w,
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: a(
                    "flex flex-col items-center justify-center",
                    l && `flex-row items-start ${f[n].gap}`
                  ),
                  children: [
                    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                      R,
                      {
                        className: a(
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
                          className: a(
                            "mt-1 text-center font-medium text-field-label",
                            l && "text-left mt-0",
                            f[n].label,
                            r && "text-field-color-disabled"
                          ),
                          children: s
                        }
                      ),
                      o && /* @__PURE__ */ e(
                        "span",
                        {
                          className: a(
                            "mt-1 text-center font-medium text-field-helper",
                            l && "text-left",
                            f[n].helpText,
                            r && "text-field-color-disabled"
                          ),
                          children: o
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
                  onChange: L,
                  disabled: r
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(W, {})
      ] })
    }
  );
};
q.displayName = "Dropzone";
export {
  q as Dropzone,
  W as FilePreview,
  q as default
};
//# sourceMappingURL=dropzone.es.js.map
