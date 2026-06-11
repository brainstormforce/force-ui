import { jsx as C } from "react/jsx-runtime";
import { cn as l } from "../../utilities/functions.es.js";
import { fontColorClassNames as i, letterSpacingClassNames as N, lineHeightClassNames as c, fontSizeClassNames as x, fontWeightClassNames as u } from "./styles.es.js";
import { forwardRef as d } from "react";
const b = d(function({
  as: r,
  children: e,
  weight: o,
  size: s,
  lineHeight: m,
  letterSpacing: t,
  color: a = "primary",
  className: n,
  ...f
}, p) {
  return /* @__PURE__ */ C(
    r || "p",
    {
      ref: p,
      className: l(
        "m-0 p-0",
        o ? u[o] : "",
        s ? x[s] : "",
        m ? c[m] : "",
        t ? N[t] : "",
        a ? i[a] : "",
        n
      ),
      ...f,
      children: e
    }
  );
});
export {
  b as Text,
  b as default
};
//# sourceMappingURL=text.es.js.map
