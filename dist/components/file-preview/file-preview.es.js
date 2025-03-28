import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { cn as a, formatFileSize as o } from "../../utilities/functions.es.js";
import { ImageOff as d, Trash as x, File as p } from "lucide-react";
const r = {
  sm: {
    image: "w-8 h-8",
    name: "text-xs",
    fileIcon: "h-8",
    uploadText: "text-xs"
  },
  md: {
    image: "w-10 h-10",
    name: "text-sm",
    fileIcon: "h-10",
    uploadText: "text-xs"
  },
  lg: {
    image: "w-10 h-10",
    name: "text-sm",
    fileIcon: "h-10",
    uploadText: "text-xs"
  }
}, h = ({
  file: t,
  onRemove: i,
  error: s,
  disabled: m,
  size: l = "sm"
}) => {
  const c = () => /* @__PURE__ */ e(
    "span",
    {
      className: a(
        "inline-flex self-start p-0.5",
        r[l].fileIcon
      ),
      children: /* @__PURE__ */ e(p, { className: "size-5 text-icon-primary" })
    }
  );
  return /* @__PURE__ */ e(
    "div",
    {
      className: a(
        "w-full flex items-start justify-between rounded mt-2 bg-field-primary-background p-2 gap-3",
        s && "border-alert-border-danger bg-alert-background-danger"
      ),
      children: /* @__PURE__ */ n("div", { className: "flex items-center gap-3 w-full", children: [
        t.type.startsWith("image") ? /* @__PURE__ */ e(
          "div",
          {
            className: a(
              "rounded-sm flex items-center justify-center shrink-0",
              s && "bg-gray-200"
            ),
            children: s ? /* @__PURE__ */ e(d, { className: "size-6 text-field-helper" }) : /* @__PURE__ */ e(
              "img",
              {
                src: "url" in t ? t.url : URL.createObjectURL(t),
                alt: "Preview",
                className: a(
                  "w-full object-contain rounded-sm",
                  r[l].image
                )
              }
            )
          }
        ) : c(),
        /* @__PURE__ */ n("div", { className: "text-left flex flex-col gap-0 w-[calc(100%_-_5.5rem)]", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: a(
                r[l].name,
                "font-medium text-field-label truncate"
              ),
              children: t.name
            }
          ),
          t.size && t.size > 0 && /* @__PURE__ */ e(
            "span",
            {
              className: a(
                r[l].uploadText,
                "text-xs text-field-helper",
                s && "text-support-error"
              ),
              children: o(t.size)
            }
          )
        ] }),
        !m && /* @__PURE__ */ e(
          "button",
          {
            onClick: () => i(t),
            className: "inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start",
            "aria-label": "Remove file",
            children: /* @__PURE__ */ e(x, { className: "size-4 text-support-error" })
          }
        )
      ] })
    }
  );
};
export {
  h as FilePreview,
  h as default
};
//# sourceMappingURL=file-preview.es.js.map
