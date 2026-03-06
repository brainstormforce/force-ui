import { useRef as o, useCallback as c } from "react";
const l = (t, r = 500) => {
  const e = o(null);
  return c(
    (...u) => {
      e.current && clearTimeout(e.current), e.current = setTimeout(
        () => t(...u),
        r
      );
    },
    [t, r]
  );
};
export {
  l as useDebouncedCallback
};
//# sourceMappingURL=hooks.es.js.map
