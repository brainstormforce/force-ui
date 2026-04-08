import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { cn as s, formatFileSize as c } from "../../utilities/functions.es.js";
import { ImageOff as d, Trash as x, File as u } from "lucide-react";
const l = {
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
  onRemove: n,
  error: a,
  disabled: o,
  size: r = "sm"
}) => {
  const m = () => /* @__PURE__ */ e(
    "span",
    {
      className: s(
        "inline-flex self-start p-0.5",
        l[r].fileIcon
      ),
      children: /* @__PURE__ */ e(u, { className: "size-5 text-icon-primary" })
    }
  );
  return /* @__PURE__ */ e(
    "div",
    {
      className: s(
        "w-full flex items-start justify-between rounded mt-2 bg-field-primary-background p-2 gap-3",
        a && "border-alert-border-danger bg-alert-background-danger"
      ),
      children: /* @__PURE__ */ i("div", { className: "flex items-center gap-3 w-full", children: [
        t.type.startsWith("image") ? /* @__PURE__ */ e(
          "div",
          {
            className: s(
              "rounded-sm flex items-center justify-center shrink-0",
              a && "bg-gray-200"
            ),
            children: a ? /* @__PURE__ */ e(d, { className: "size-6 text-field-helper" }) : /* @__PURE__ */ e(
              "img",
              {
                src: "url" in t ? t.url : URL.createObjectURL(t),
                alt: "Preview",
                className: s(
                  "w-full object-contain rounded-sm",
                  l[r].image
                )
              }
            )
          }
        ) : m(),
        /* @__PURE__ */ i("div", { className: "text-left flex flex-col gap-0 w-[calc(100%_-_5.5rem)]", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: s(
                l[r].name,
                "font-medium text-field-label truncate"
              ),
              children: t.name
            }
          ),
          t.size && t.size > 0 && /* @__PURE__ */ e(
            "span",
            {
              className: s(
                l[r].uploadText,
                "text-xs text-field-helper",
                a && "text-support-error"
              ),
              children: c(t.size)
            }
          )
        ] }),
        !o && /* @__PURE__ */ e(
          "button",
          {
            onClick: () => n(t),
            className: "inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-support-error focus-visible:ring-offset-1 rounded self-start shadow-none",
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
