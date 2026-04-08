import { isValidElement as i } from "react";
const r = (t) => t === null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? t.toString() : Array.isArray(t) ? t.map(r).join(" ").trim() : i(t) ? t.props && t.props.children ? r(t.props.children) : "" : typeof t == "object" && "textContent" in t ? t.textContent?.toString().toLowerCase() || "" : typeof t == "object" && "children" in t ? r(t.children) : "";
export {
  r as getTextContent
};
//# sourceMappingURL=utils.es.js.map
