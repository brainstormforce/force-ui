import { jsx as e } from "react/jsx-runtime";
import { createContext as O, useContext as h } from "react";
import { cn as I } from "../../utilities/functions.es.js";
import v from "./grid-container.es.js";
import { getClassNames as s } from "./container-utils.es.js";
import { flexWrapClassNames as B, gapClassNames as D, gapXClassNames as P, gapYClassNames as W, flexDirectionClassNames as q, justifyClassNames as z, alignClassNames as A, alignSelfClassNames as E, justifySelfClassNames as F, flexGrowClassNames as H, flexShrinkClassNames as J, flexOrderClassNames as K, flexColumnClassNames as L } from "./container-styles.es.js";
const g = O({}), M = () => h(g), S = ({
  containerType: a = "flex",
  // flex, (grid - functionality not implemented)
  gap: r = "sm",
  // xs, sm, md, lg, xl, 2xl
  gapX: m,
  gapY: t,
  direction: N,
  // row, row-reverse, column, column reverse
  justify: o,
  // justify-content (normal, start, end, center, between, around, evenly, stretch)
  align: n,
  // align-items (start, end, center, baseline, stretch)
  wrap: c,
  // nowrap, wrap, wrap-reverse
  cols: l,
  className: C,
  children: i,
  ...f
}) => {
  if (a === "grid")
    return /* @__PURE__ */ e(
      g.Provider,
      {
        value: {
          containerType: a
        },
        children: /* @__PURE__ */ e(
          v,
          {
            className: C,
            gap: r,
            gapX: m,
            gapY: t,
            cols: l,
            children: i,
            align: n,
            justify: o,
            ...f
          }
        )
      }
    );
  const d = s(c, B, ""), u = s(r, D, "sm"), x = s(m, P, ""), p = s(t, W, ""), w = s(
    N,
    q,
    ""
  ), j = s(
    o,
    z,
    ""
  ), k = s(n, A, ""), y = I(
    "flex",
    d,
    u,
    x,
    p,
    w,
    j,
    k,
    C
  ), G = () => a === "flex" ? /* @__PURE__ */ e("div", { className: y, children: i }) : /* @__PURE__ */ e(
    v,
    {
      className: C,
      gap: r,
      gapX: m,
      gapY: t,
      cols: l,
      children: i,
      align: n,
      justify: o,
      ...f
    }
  );
  return /* @__PURE__ */ e(
    g.Provider,
    {
      value: {
        containerType: a,
        cols: l
      },
      children: G()
    }
  );
}, b = ({
  grow: a,
  shrink: r,
  order: m,
  alignSelf: t,
  justifySelf: N,
  className: o,
  children: n,
  ...c
}) => {
  const { containerType: l, cols: C } = M();
  if (l === "grid")
    return /* @__PURE__ */ e(
      v.Item,
      {
        className: o,
        alignSelf: t,
        justifySelf: N,
        children: n,
        ...c
      }
    );
  const i = s(
    t,
    E,
    ""
  ), f = s(
    N,
    F,
    ""
  ), d = s(a, H, 0), u = s(r, J, 0), x = s(m, K, 0), p = s(C, L, 1);
  return /* @__PURE__ */ e(
    "div",
    {
      className: I(
        "box-border",
        d,
        u,
        x,
        i,
        f,
        p,
        o
      ),
      children: n
    }
  );
};
S.Item = b;
S.displayName = "Container";
b.displayName = "Container.Item";
export {
  S as Container,
  b as Item,
  S as default
};
//# sourceMappingURL=container.es.js.map
