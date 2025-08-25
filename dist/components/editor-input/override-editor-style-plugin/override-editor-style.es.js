import { useLexicalComposerContext as i } from "@lexical/react/LexicalComposerContext";
import { useLayoutEffect as n } from "react";
const c = ({ style: e }) => {
  const [t] = i();
  return n(() => {
    t && t.registerRootListener((r) => {
      if (!r || !e || Object.keys(e).length === 0)
        return;
      const o = r.style;
      Object.assign(o, e);
    });
  }, [t]), null;
};
export {
  c as default
};
//# sourceMappingURL=override-editor-style.es.js.map
