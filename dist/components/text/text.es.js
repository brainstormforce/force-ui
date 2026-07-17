"use client";
import { jsx as l } from "react/jsx-runtime";
import { cn as C } from "../../utilities/functions.es.js";
import { fontColorClassNames as i, letterSpacingClassNames as N, lineHeightClassNames as c, fontSizeClassNames as u, fontWeightClassNames as x } from "./styles.es.js";
import { forwardRef as d } from "react";
const b = d(function({
  as: e,
  children: r,
  weight: s,
  size: o,
  lineHeight: m,
  letterSpacing: t,
  color: a = "primary",
  className: n,
  ...f
}, p) {
  return /* @__PURE__ */ l(
    e || "p",
    {
      ref: p,
      className: C(
        "m-0 p-0",
        s ? x[s] : "",
        o ? u[o] : "",
        m ? c[m] : "",
        t ? N[t] : "",
        a ? i[a] : "",
        n
      ),
      ...f,
      children: r
    }
  );
});
export {
  b as Text,
  b as default
};
//# sourceMappingURL=text.es.js.map
