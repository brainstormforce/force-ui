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
  size: a = "sm",
  disabled: t = !1,
  children: n,
  className: r,
  ...l
}) => /* @__PURE__ */ e(x.Provider, { value: { size: a, disabled: t }, children: /* @__PURE__ */ e(
  "nav",
  {
    role: "navigation",
    className: s(
      "flex w-full justify-center box-border m-0",
      r
    ),
    ...l,
    children: n
  }
) });
o.displayName = "Pagination";
const N = p(({ className: a, ...t }, n) => /* @__PURE__ */ e(
  "ul",
  {
    ref: n,
    className: s(
      "m-0 p-0 w-full flex justify-center flex-row items-center gap-1",
      "list-none",
      a
    ),
    ...t
  }
));
N.displayName = "Pagination.Content";
const b = p(
  ({ isActive: a = !1, className: t, children: n, ...r }, l) => {
    const { disabled: c } = m();
    return /* @__PURE__ */ e(
      "li",
      {
        ref: l,
        className: s("flex", c && i.general),
        children: /* @__PURE__ */ e(
          g,
          {
            isActive: a,
            disabled: c,
            className: t,
            ...r,
            children: n
          }
        )
      }
    );
  }
);
b.displayName = "Pagination.Item";
const g = ({
  isActive: a = !1,
  tag: t = "a",
  children: n,
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
        !d && a && "text-button-primary active:text-button-primary bg-brand-background-50",
        d && [
          i.general,
          i.text,
          "focus:ring-transparent cursor-not-allowed"
        ],
        r
      ),
      disabled: d,
      ...l,
      "aria-current": a ? "page" : void 0,
      onClick: (f) => j(
        l.onClick || (() => {
        }),
        d ? y : () => {
        }
      )(f),
      children: /* @__PURE__ */ e("span", { className: "px-1 flex", children: n })
    }
  );
}, P = (a) => {
  const { size: t, disabled: n } = m();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", n && i.general),
      "aria-label": "Go to previous page",
      children: /* @__PURE__ */ e(
        g,
        {
          className: s("[&>span]:flex [&>span]:items-center"),
          ...a,
          children: /* @__PURE__ */ e(w, { className: s(u[t].icon) })
        }
      )
    }
  );
};
P.displayName = "Pagination.Previous";
const h = (a) => {
  const { size: t, disabled: n } = m();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", n && i.general),
      "aria-label": "Go to next page",
      children: /* @__PURE__ */ e(
        g,
        {
          className: s("[&>span]:flex [&>span]:items-center"),
          ...a,
          children: /* @__PURE__ */ e(k, { className: s(u[t].icon) })
        }
      )
    }
  );
};
h.displayName = "Pagination.Next";
const v = (a) => {
  const { size: t, disabled: n } = m();
  return /* @__PURE__ */ e("li", { className: s("flex", n && i.general), children: /* @__PURE__ */ e(
    "span",
    {
      className: s(
        "flex justify-center",
        u[t].ellipse,
        n && i.general
      ),
      "aria-hidden": "true",
      ...a,
      children: "•••"
    }
  ) });
};
v.displayName = "Pagination.Ellipsis";
o.Content = N;
o.Item = b;
o.Previous = P;
o.Next = h;
o.Ellipsis = v;
export {
  o as Pagination,
  g as PaginationButton,
  N as PaginationContent,
  v as PaginationEllipsis,
  b as PaginationItem,
  h as PaginationNext,
  P as PaginationPrevious,
  o as default
};
//# sourceMappingURL=pagination.es.js.map
