import { jsx as n } from "react/jsx-runtime";
import { cn as s } from "../../utilities/functions.es.js";
import { useDrawerState as a } from "./drawer.es.js";
const f = ({ children: r, className: o }) => {
  const { design: e, handleClose: t } = a(), d = () => r ? typeof r == "function" ? r({ close: t }) : r : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: s(
        "px-5 py-4 flex justify-end gap-3 mt-auto",
        {
          "bg-background-secondary": e === "footer-divided",
          "border-t border-b-0 border-x-0 border-solid border-border-subtle": e === "footer-bordered"
        },
        o
      ),
      children: d()
    }
  );
};
f.displayName = "Drawer.Footer";
export {
  f as default
};
//# sourceMappingURL=drawer-footer.es.js.map
