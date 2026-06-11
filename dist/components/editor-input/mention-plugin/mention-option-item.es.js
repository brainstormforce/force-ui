import { MenuOption as r } from "@lexical/react/LexicalTypeaheadMenuPlugin";
class c extends r {
  data;
  constructor(o, s = "name", t) {
    const e = typeof o == "string" ? o : String(o?.[s] ?? "");
    super(t === void 0 ? e : `${e}-${t}`), this.data = o;
  }
}
export {
  c as default
};
//# sourceMappingURL=mention-option-item.es.js.map
