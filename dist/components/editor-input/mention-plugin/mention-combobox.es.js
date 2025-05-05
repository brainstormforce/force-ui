import { jsx as e } from "react/jsx-runtime";
import { cn as a } from "../../../utilities/functions.es.js";
import { comboboxDropdownClassNames as c, comboboxDropdownCommonClassNames as d, comboboxSelectedItemClassNames as x, comboboxItemClassNames as C, comboboxItemCommonClassNames as p } from "../editor-input-style.es.js";
import { forwardRef as n } from "react";
const t = ({ size: o, className: m, children: s }) => /* @__PURE__ */ e(
  "ul",
  {
    role: "menu",
    className: a(
      d,
      c[o],
      m
    ),
    children: s
  }
);
t.displayName = "EditorCombobox";
const r = n(
  ({ size: o, children: m, selected: s = !1, className: b, ...l }, i) => /* @__PURE__ */ e(
    "li",
    {
      role: "option",
      ref: i,
      className: a(
        p,
        C[o],
        s && x,
        b
      ),
      ...l,
      children: m
    }
  )
);
r.displayName = "EditorCombobox.Item";
t.Item = r;
export {
  t as default
};
//# sourceMappingURL=mention-combobox.es.js.map
