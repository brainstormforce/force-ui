import { jsx as e } from "react/jsx-runtime";
import { createContext as C, forwardRef as p, useContext as z } from "react";
import { cn as s, callAll as j } from "../../utilities/functions.es.js";
import { ChevronLeft as w, ChevronRight as k } from "lucide-react";
import { disabledClassNames as i, sizeClassNames as u } from "./component-style.es.js";
import E from "../button/button.es.js";
const x = C({
  size: "sm",
  disabled: !1
}), m = () => z(x), o = ({
  size: n = "sm",
  disabled: t = !1,
  children: a,
  className: r,
  ...l
}) => /* @__PURE__ */ e(x.Provider, { value: { size: n, disabled: t }, children: /* @__PURE__ */ e(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s(
      "flex w-full justify-center box-border m-0",
      r
    ),
    ...l,
    children: a
  }
) });
o.displayName = "Pagination";
const b = p(({ className: n, ...t }, a) => /* @__PURE__ */ e(
  "ul",
  {
    ref: a,
    className: s(
      "m-0 p-0 w-full flex justify-center flex-row items-center gap-1",
      "list-none",
      n
    ),
    ...t
  }
));
b.displayName = "Pagination.Content";
const N = p(
  ({ isActive: n = !1, className: t, children: a, ...r }, l) => {
    const { disabled: c } = m();
    return /* @__PURE__ */ e(
      "li",
      {
        ref: l,
        className: s("flex", c && i.general),
        children: /* @__PURE__ */ e(
          g,
          {
            isActive: n,
            disabled: c,
            className: t,
            ...r,
            children: a
          }
        )
      }
    );
  }
);
N.displayName = "Pagination.Item";
const g = ({
  isActive: n = !1,
  tag: t = "a",
  children: a,
  className: r,
  ...l
}) => {
  const { size: c, disabled: d } = m(), y = (f) => f.preventDefault();
  return /* @__PURE__ */ e(
    E,
    {
      tag: t,
      size: c,
      variant: "ghost",
      className: s(
        "no-underline bg-transparent p-0 m-0 border-none",
        "flex justify-center items-center rounded text-button-secondary",
        "focus:outline focus:outline-1 focus:outline-border-subtle focus:bg-button-tertiary-hover",
        u[c].general,
        !d && n && "text-button-primary active:text-button-primary bg-brand-background-50",
        d && [
          i.general,
          i.text,
          "focus:ring-transparent cursor-not-allowed"
        ],
        r
      ),
      disabled: d,
      ...l,
      onClick: (f) => j(
        l.onClick || (() => {
        }),
        d ? y : () => {
        }
      )(f),
      children: /* @__PURE__ */ e("span", { className: "px-1 flex", children: a })
    }
  );
}, P = (n) => {
  const { size: t, disabled: a } = m();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", a && i.general),
      "aria-label": "Go to previous page",
      children: /* @__PURE__ */ e(
        g,
        {
          className: s("[&>span]:flex [&>span]:items-center"),
          ...n,
          children: /* @__PURE__ */ e(w, { className: s(u[t].icon) })
        }
      )
    }
  );
};
P.displayName = "Pagination.Previous";
const h = (n) => {
  const { size: t, disabled: a } = m();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", a && i.general),
      "aria-label": "Go to next page",
      children: /* @__PURE__ */ e(
        g,
        {
          className: s("[&>span]:flex [&>span]:items-center"),
          ...n,
          children: /* @__PURE__ */ e(k, { className: s(u[t].icon) })
        }
      )
    }
  );
};
h.displayName = "Pagination.Next";
const v = (n) => {
  const { size: t, disabled: a } = m();
  return /* @__PURE__ */ e("li", { className: s("flex", a && i.general), children: /* @__PURE__ */ e(
    "span",
    {
      className: s(
        "flex justify-center",
        u[t].ellipse,
        a && i.general
      ),
      ...n,
      children: "•••"
    }
  ) });
};
v.displayName = "Pagination.Ellipsis";
o.Content = b;
o.Item = N;
o.Previous = P;
o.Next = h;
o.Ellipsis = v;
export {
  o as Pagination,
  g as PaginationButton,
  b as PaginationContent,
  v as PaginationEllipsis,
  N as PaginationItem,
  h as PaginationNext,
  P as PaginationPrevious,
  o as default
};
//# sourceMappingURL=pagination.es.js.map
