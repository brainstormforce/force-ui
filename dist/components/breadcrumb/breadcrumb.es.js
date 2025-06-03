import { jsx as r, Fragment as N } from "react/jsx-runtime";
import { createContext as y, useContext as n } from "react";
import { cn as m } from "../../utilities/functions.es.js";
import { ChevronRight as z, Ellipsis as h } from "lucide-react";
const o = {
  sm: {
    text: "text-sm",
    separator: "text-sm",
    separatorIconSize: 16
  },
  md: {
    text: "text-base",
    separator: "text-base",
    separatorIconSize: 18
  }
}, i = y({ sizes: o.sm }), a = ({ children: e, size: t = "sm" }) => {
  const s = o[t] || o.sm;
  return /* @__PURE__ */ r(i.Provider, { value: { sizes: s }, children: /* @__PURE__ */ r("nav", { className: "flex m-0", "aria-label": "Breadcrumb", children: /* @__PURE__ */ r("ul", { className: "m-0 inline-flex items-center space-x-1 md:space-x-1", children: e }) }) });
};
a.displayName = "Breadcrumb";
const c = ({ children: e }) => /* @__PURE__ */ r(N, { children: e });
c.displayName = "Breadcrumb.List";
const l = ({ children: e }) => /* @__PURE__ */ r("li", { className: "m-0 inline-flex items-center gap-2", children: e });
l.displayName = "Breadcrumb.Item";
const d = ({
  href: e,
  children: t,
  className: s,
  as: b = "a",
  ...f
}) => {
  const { sizes: B } = n(i);
  return /* @__PURE__ */ r(
    b,
    {
      href: e,
      className: m(
        B.text,
        "px-1 font-medium no-underline text-text-tertiary hover:text-text-primary hover:underline",
        "focus:outline-none focus:ring-1 focus:ring-border-interactive focus:border-border-interactive focus:rounded-sm",
        "transition-all duration-200",
        s
      ),
      ...f,
      children: t
    }
  );
};
d.displayName = "Breadcrumb.Link";
const u = ({ type: e }) => {
  const { sizes: t } = n(i), s = {
    slash: /* @__PURE__ */ r("span", { className: m("mx-1", t.separator), children: "/" }),
    arrow: /* @__PURE__ */ r(z, { size: t.separatorIconSize })
  };
  return /* @__PURE__ */ r(
    "li",
    {
      role: "separator",
      className: "flex items-center text-text-tertiary mx-2 p-0 list-none",
      "aria-hidden": "true",
      children: s[e] || s.arrow
    }
  );
};
u.displayName = "Breadcrumb.Separator";
const p = () => {
  const { sizes: e } = n(i);
  return /* @__PURE__ */ r(
    h,
    {
      className: "mt-[2px] cursor-pointer text-text-tertiary hover:text-text-primary",
      size: e.separatorIconSize + 4
    }
  );
};
p.displayName = "Breadcrumb.Ellipsis";
const x = ({ children: e }) => {
  const { sizes: t } = n(i);
  return /* @__PURE__ */ r("span", { className: m(t.text, "font-medium text-text-primary"), children: e });
};
x.displayName = "Breadcrumb.Page";
a.List = c;
a.Item = l;
a.Link = d;
a.Separator = u;
a.Ellipsis = p;
a.Page = x;
export {
  p as BreadcrumbEllipsis,
  l as BreadcrumbItem,
  d as BreadcrumbLink,
  c as BreadcrumbList,
  x as BreadcrumbPage,
  u as BreadcrumbSeparator,
  a as default
};
//# sourceMappingURL=breadcrumb.es.js.map
