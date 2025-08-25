import { jsx as o, jsxs as p } from "react/jsx-runtime";
import { cn as d } from "../../utilities/functions.es.js";
import h, { createContext as k, Children as x, useContext as H } from "react";
import f from "../checkbox/checkbox.es.js";
const y = k(
  void 0
), u = () => {
  const e = H(y);
  if (!e)
    throw new Error("Table components must be used within Table component");
  return e;
}, n = ({
  children: e,
  className: r,
  checkboxSelection: l = !1,
  ...a
}) => {
  const s = {
    checkboxSelection: l
  }, i = x.toArray(e).find(
    (t) => h.isValidElement(t) && t.type === b
  ), c = x.toArray(e).filter(
    (t) => h.isValidElement(t) && t.type !== b
  );
  return /* @__PURE__ */ o(
    y.Provider,
    {
      value: s,
      children: /* @__PURE__ */ p("div", { className: "flow-root border-0.5 border-solid border-border-subtle rounded-md divide-y-0.5 divide-x-0 divide-solid divide-border-subtle overflow-hidden", children: [
        /* @__PURE__ */ o("div", { className: "overflow-x-auto w-full", children: /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ o(
          "table",
          {
            className: d(
              "table-fixed min-w-full border-collapse border-spacing-0",
              r
            ),
            ...a,
            children: c
          }
        ) }) }),
        i
      ] })
    }
  );
}, v = ({
  children: e,
  className: r,
  selected: l,
  onChangeSelection: a,
  indeterminate: s,
  disabled: i,
  ...c
}) => {
  const { checkboxSelection: t } = u(), m = (w) => {
    typeof a == "function" && a(w);
  };
  return /* @__PURE__ */ o(
    "thead",
    {
      className: d(
        "bg-background-secondary border-x-0 border-t-0 border-b-0.5 border-solid border-border-subtle",
        r
      ),
      ...c,
      children: /* @__PURE__ */ p("tr", { children: [
        t && /* @__PURE__ */ o(
          "th",
          {
            scope: "col",
            className: "relative px-5.5 w-11 overflow-hidden",
            children: /* @__PURE__ */ o("div", { className: "absolute inset-0 grid grid-cols-1 place-content-center", children: /* @__PURE__ */ o(
              f,
              {
                size: "sm",
                checked: l,
                indeterminate: s,
                disabled: i,
                onChange: m,
                "aria-label": l ? "Deselect all" : "Select all"
              }
            ) })
          }
        ),
        e
      ] })
    }
  );
}, N = ({
  children: e,
  className: r,
  ...l
}) => /* @__PURE__ */ o(
  "th",
  {
    scope: "col",
    className: d(
      "p-3 text-left text-sm font-medium leading-5 text-text-primary",
      r
    ),
    ...l,
    children: e
  }
), T = ({
  children: e,
  className: r,
  ...l
}) => /* @__PURE__ */ o(
  "tbody",
  {
    className: d(
      "bg-background-primary divide-y-0.5 divide-x-0 divide-solid divide-border-subtle",
      r
    ),
    ...l,
    children: e
  }
), g = ({
  children: e,
  selected: r,
  value: l,
  className: a,
  onChangeSelection: s,
  ...i
}) => {
  const { checkboxSelection: c } = u(), t = (m) => {
    typeof s == "function" && s(m, l);
  };
  return /* @__PURE__ */ p(
    "tr",
    {
      className: d(
        "hover:bg-background-secondary",
        r && "bg-background-secondary",
        a
      ),
      ...i,
      children: [
        c && /* @__PURE__ */ o("td", { className: "relative px-5.5 w-11 overflow-hidden", children: /* @__PURE__ */ o("div", { className: "absolute inset-0 grid grid-cols-1 place-content-center", children: /* @__PURE__ */ o(
          f,
          {
            size: "sm",
            checked: r,
            onChange: t,
            "aria-label": "Select row"
          }
        ) }) }),
        e
      ]
    }
  );
}, C = ({
  children: e,
  className: r,
  ...l
}) => /* @__PURE__ */ o(
  "td",
  {
    className: d(
      "px-3 py-3.5 text-sm font-normal leading-5 text-text-secondary",
      r
    ),
    ...l,
    children: e
  }
), b = ({
  children: e,
  className: r,
  ...l
}) => {
  const { checkboxSelection: a } = u();
  return /* @__PURE__ */ o(
    "div",
    {
      className: d("px-3 py-3", a && "px-4", r),
      ...l,
      children: e
    }
  );
};
n.displayName = "Table";
v.displayName = "Table.Head";
N.displayName = "Table.HeadCell";
T.displayName = "Table.Body";
g.displayName = "Table.Row";
C.displayName = "Table.Cell";
b.displayName = "Table.Footer";
n.Head = v;
n.HeadCell = N;
n.Body = T;
n.Row = g;
n.Cell = C;
n.Footer = b;
export {
  n as Table,
  T as TableBody,
  C as TableCell,
  b as TableFooter,
  v as TableHead,
  N as TableHeadCell,
  g as TableRow,
  n as default
};
//# sourceMappingURL=table.es.js.map
