import { jsx as r } from "react/jsx-runtime";
import { cn as a, getGapClass as l } from "../../utilities/functions.es.js";
const i = ({
  children: e,
  gap: t = "lg",
  className: s,
  ...m
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "w-full box-border flex items-center justify-between bg-background-primary p-5 min-h-16",
      l(t),
      s
    ),
    ...m,
    children: e
  }
);
i.displayName = "Topbar";
const n = ({ gap: e = "sm", children: t, className: s }) => /* @__PURE__ */ r("div", { className: a("flex items-center", l(e), s), children: t });
n.displayName = "Topbar.Left";
const c = ({
  gap: e = "md",
  children: t,
  align: s = "center",
  className: m
}) => {
  const f = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }[s];
  return /* @__PURE__ */ r(
    "div",
    {
      className: a(
        "flex items-center grow",
        l(e),
        f,
        m
      ),
      children: t
    }
  );
};
c.displayName = "Topbar.Middle";
const o = ({ gap: e = "sm", children: t, className: s }) => /* @__PURE__ */ r("div", { className: a("flex items-center", l(e), s), children: t });
o.displayName = "Topbar.Right";
const d = ({ children: e, className: t }) => /* @__PURE__ */ r(
  "div",
  {
    className: a("flex items-center [&>svg]:block h-full", t),
    children: e
  }
);
d.displayName = "Topbar.Item";
i.Left = n;
i.Middle = c;
i.Right = o;
i.Item = d;
export {
  d as Item,
  n as Left,
  c as Middle,
  o as Right,
  i as Topbar,
  i as default
};
//# sourceMappingURL=topbar.es.js.map
