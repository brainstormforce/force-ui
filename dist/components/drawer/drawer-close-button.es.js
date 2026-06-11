import { jsx as o } from "react/jsx-runtime";
import { Fragment as i, isValidElement as l, cloneElement as a } from "react";
import { useDrawerState as u } from "./drawer.es.js";
import { cn as f } from "../../utilities/functions.es.js";
import { X as m } from "lucide-react";
const s = ({
  className: e,
  ...r
}) => /* @__PURE__ */ o(
  "button",
  {
    className: f(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-border-strong outline-none shadow-none",
      e
    ),
    "aria-label": "Close drawer",
    ...r,
    children: /* @__PURE__ */ o(m, { className: "size-4 text-text-primary shrink-0" })
  }
), c = ({
  children: e,
  as: r = i,
  ...n
}) => {
  const { handleClose: t } = u();
  return e ? r === i ? typeof e == "function" ? e({ close: t }) : l(e) ? a(e, {
    onClick: t
  }) : /* @__PURE__ */ o(s, { onClick: t, ...n }) : /* @__PURE__ */ o(r, { ...n, onClick: t, children: e }) : /* @__PURE__ */ o(s, { onClick: t, ...n });
};
c.displayName = "Drawer.CloseButton";
export {
  c as default
};
//# sourceMappingURL=drawer-close-button.es.js.map
