import { jsx as c } from "react/jsx-runtime";
import { cn as g } from "../../utilities/functions.es.js";
import { gridColumnClassNames as x, gapClassNames as F, gapXClassNames as G, gapYClassNames as I, alignClassNames as X, justifyClassNames as Y, gridFlowClassNames as h, gridColSpanClassNames as k, gridColStartClassNames as q, alignSelfClassNames as z, justifySelfClassNames as A } from "./container-styles.es.js";
import { getClassNames as s } from "./container-utils.es.js";
const B = ({
  className: a,
  cols: l,
  gap: e,
  gapX: o,
  gapY: m,
  align: t,
  justify: r,
  gridFlow: i,
  colsSubGrid: C = !1,
  rowsSubGrid: n = !1,
  autoRows: N = !1,
  autoCols: f = !1,
  children: d,
  ...u
}) => {
  const p = s(l, x, 1), S = s(e, F, "sm"), j = s(o, G, ""), w = s(m, I, ""), y = s(t, X, ""), b = s(r, Y, ""), v = s(i, h, "");
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        "grid",
        {
          "grid-cols-subgrid": C,
          "grid-rows-subgrid": n,
          "auto-cols-auto": f,
          "auto-rows-auto": N
        },
        p,
        S,
        j,
        w,
        y,
        b,
        v,
        a
      ),
      ...u,
      children: d
    }
  );
}, D = ({
  className: a,
  children: l,
  colSpan: e,
  colStart: o,
  alignSelf: m,
  justifySelf: t,
  ...r
}) => {
  const i = s(e, k, 0), C = s(
    o,
    q,
    0
  ), n = s(
    m,
    z,
    ""
  ), N = s(
    t,
    A,
    ""
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: g(
        i,
        C,
        n,
        N,
        a
      ),
      ...r,
      children: l
    }
  );
};
B.Item = D;
export {
  D as GridItem,
  B as default
};
//# sourceMappingURL=grid-container.es.js.map
