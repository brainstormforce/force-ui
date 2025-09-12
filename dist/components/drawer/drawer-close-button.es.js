import { jsx as o } from "react/jsx-runtime";
import { Fragment as s, isValidElement as i, cloneElement as l } from "react";
import { useDrawerState as m } from "./drawer.es.js";
import { cn as u } from "../../utilities/functions.es.js";
import { X as f } from "lucide-react";
const a = ({
  className: e,
  ...r
}) => /* @__PURE__ */ o(
  "button",
  {
    className: u(
      "bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none",
      e
    ),
    "aria-label": "Close drawer",
    ...r,
    children: /* @__PURE__ */ o(f, { className: "size-4 text-text-primary shrink-0" })
  }
), c = ({
  children: e,
  as: r = s,
  ...n
}) => {
  const { handleClose: t } = m();
  return e ? r === s ? typeof e == "function" ? e({ close: t }) : i(e) ? l(e, {
    onClick: t
  }) : /* @__PURE__ */ o(a, { onClick: t, ...n }) : /* @__PURE__ */ o(r, { ...n, onClick: t, children: e }) : /* @__PURE__ */ o(a, { onClick: t, ...n });
};
c.displayName = "Drawer.CloseButton";
export {
  c as default
};
//# sourceMappingURL=drawer-close-button.es.js.map
