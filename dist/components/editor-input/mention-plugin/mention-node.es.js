import { jsx as a } from "react/jsx-runtime";
import { DecoratorNode as o } from "lexical";
import i from "./mention-component.es.js";
class e extends o {
  __data;
  __by;
  __size;
  constructor(t, n, r, _) {
    super(_), this.__data = t, this.__by = n, this.__size = r;
  }
  static getType() {
    return "mention";
  }
  static clone(t) {
    return new e(t.__data, t.__by, t.__size, t.__key);
  }
  static importJSON(t) {
    return c(
      t.data,
      t.by,
      t.size
    );
  }
  createDOM() {
    return document.createElement("span");
  }
  updateDOM() {
    return !1;
  }
  exportDOM() {
    return { element: document.createElement("span") };
  }
  exportJSON() {
    return {
      type: e.getType(),
      data: this.__data,
      by: this.__by,
      size: this.__size,
      version: 1
    };
  }
  decorate() {
    return /* @__PURE__ */ a(
      i,
      {
        data: this.__data,
        by: this.__by,
        size: this.__size,
        nodeKey: this.__key
      }
    );
  }
}
const c = (s, t, n) => new e(s, t, n), u = (s) => s instanceof e;
export {
  c as $createMentionNode,
  u as $isMentionNode,
  e as default
};
//# sourceMappingURL=mention-node.es.js.map
