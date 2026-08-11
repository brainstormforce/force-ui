import { jsx as a } from "react/jsx-runtime";
import { cn as b } from "../../../utilities/functions.es.js";
import { comboboxSelectedItemClassNames as d, comboboxItemClassNames as n, comboboxItemCommonClassNames as x, comboboxDropdownClassNames as C, comboboxDropdownCommonClassNames as p } from "../editor-input-style.es.js";
import { forwardRef as r } from "react";
const f = ({ size: o, className: m, children: s, ...e }, t) => /* @__PURE__ */ a(
  "ul",
  {
    role: "menu",
    ref: t,
    className: b(
      p,
      C[o],
      m
    ),
    ...e,
    children: s
  }
), i = r(
  f
);
i.displayName = "EditorCombobox";
const l = r(
  ({ size: o, children: m, selected: s = !1, className: e, ...t }, c) => /* @__PURE__ */ a(
    "li",
    {
      role: "option",
      ref: c,
      className: b(
        x,
        n[o],
        s && d,
        e
      ),
      ...t,
      children: m
    }
  )
);
l.displayName = "EditorCombobox.Item";
const w = Object.assign(i, {
  Item: l
});
export {
  w as default
};
//# sourceMappingURL=mention-combobox.es.js.map
