import { isValidElement as i } from "react";
const e = (r) => Array.isArray(r) ? r : r === null || typeof r > "u" || r === "" ? [] : [r], t = (r) => r === null || typeof r == "boolean" ? "" : typeof r == "string" || typeof r == "number" ? r.toString() : Array.isArray(r) ? r.map(t).join(" ").trim() : i(r) ? r.props && r.props.children ? t(r.props.children) : "" : typeof r == "object" && "textContent" in r ? r.textContent?.toString().toLowerCase() || "" : typeof r == "object" && "children" in r ? t(r.children) : "";
export {
  t as getTextContent,
  e as toValuesArray
};
//# sourceMappingURL=utils.es.js.map
