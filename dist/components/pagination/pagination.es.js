import { jsx as e, jsxs as v } from "react/jsx-runtime";
import { createContext as j, forwardRef as g, useContext as z } from "react";
import { cn as s, callAll as w } from "../../utilities/functions.es.js";
import { ChevronLeft as k, ChevronRight as E } from "lucide-react";
import { disabledClassNames as l, sizeClassNames as u } from "./component-style.es.js";
import I from "../button/button.es.js";
const x = j({
  size: "sm",
  disabled: !1
}), d = () => z(x), c = ({
  size: a = "sm",
  disabled: t = !1,
  ariaLabel: n = "Pagination",
  children: m,
  className: r,
  ...o
}) => /* @__PURE__ */ e(x.Provider, { value: { size: a, disabled: t }, children: /* @__PURE__ */ e(
  "nav",
  {
    "aria-label": n,
    className: s(
      "flex w-full justify-center box-border m-0",
      r
    ),
    ...o,
    children: m
  }
) });
c.displayName = "Pagination";
const b = g(({ className: a, ...t }, n) => /* @__PURE__ */ e(
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
b.displayName = "Pagination.Content";
const N = g(
  ({ isActive: a = !1, ariaLabel: t, className: n, children: m, ...r }, o) => {
    const { disabled: i } = d();
    return /* @__PURE__ */ e(
      "li",
      {
        ref: o,
        className: s("flex", i && l.general),
        children: /* @__PURE__ */ e(
          p,
          {
            isActive: a,
            disabled: i,
            "aria-label": t,
            className: n,
            ...r,
            children: m
          }
        )
      }
    );
  }
);
N.displayName = "Pagination.Item";
const p = ({
  isActive: a = !1,
  tag: t = "button",
  children: n,
  className: m,
  ...r
}) => {
  const { size: o, disabled: i } = d(), C = (f) => f.preventDefault();
  return /* @__PURE__ */ e(
    I,
    {
      tag: t,
      size: o,
      variant: "ghost",
      className: s(
        "no-underline bg-transparent p-0 m-0 border-none",
        "flex justify-center items-center rounded text-button-secondary",
        "focus:outline focus:outline-1 focus:outline-border-subtle focus:bg-button-tertiary-hover",
        u[o].general,
        !i && a && "text-button-primary active:text-button-primary bg-brand-background-50",
        i && [
          l.general,
          l.text,
          "focus:ring-transparent cursor-not-allowed"
        ],
        m
      ),
      disabled: i,
      ...r,
      "aria-current": a ? "page" : void 0,
      onClick: (f) => w(
        r.onClick || (() => {
        }),
        i ? C : () => {
        }
      )(f),
      children: /* @__PURE__ */ e("span", { className: "px-1 flex", children: n })
    }
  );
}, P = (a) => {
  const { size: t, disabled: n } = d();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", n && l.general),
      children: /* @__PURE__ */ e(
        p,
        {
          "aria-label": "Go to previous page",
          className: s("[&>span]:flex [&>span]:items-center"),
          ...a,
          children: /* @__PURE__ */ e(k, { className: s(u[t].icon) })
        }
      )
    }
  );
};
P.displayName = "Pagination.Previous";
const h = (a) => {
  const { size: t, disabled: n } = d();
  return /* @__PURE__ */ e(
    "li",
    {
      className: s("flex", n && l.general),
      children: /* @__PURE__ */ e(
        p,
        {
          "aria-label": "Go to next page",
          className: s("[&>span]:flex [&>span]:items-center"),
          ...a,
          children: /* @__PURE__ */ e(E, { className: s(u[t].icon) })
        }
      )
    }
  );
};
h.displayName = "Pagination.Next";
const y = (a) => {
  const { size: t, disabled: n } = d();
  return /* @__PURE__ */ v("li", { className: s("flex", n && l.general), children: [
    /* @__PURE__ */ e(
      "span",
      {
        className: s(
          "flex justify-center",
          u[t].ellipse,
          n && l.general
        ),
        "aria-hidden": "true",
        ...a,
        children: "•••"
      }
    ),
    /* @__PURE__ */ e("span", { className: "sr-only", children: "More pages" })
  ] });
};
y.displayName = "Pagination.Ellipsis";
c.Content = b;
c.Item = N;
c.Previous = P;
c.Next = h;
c.Ellipsis = y;
export {
  c as Pagination,
  p as PaginationButton,
  b as PaginationContent,
  y as PaginationEllipsis,
  N as PaginationItem,
  h as PaginationNext,
  P as PaginationPrevious,
  c as default
};
//# sourceMappingURL=pagination.es.js.map
