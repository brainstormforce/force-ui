const e = (t) => typeof t == "string" ? t : typeof t == "object" && "textContent" in t ? t.textContent?.toString().toLowerCase() || "" : typeof t == "object" && "children" in t ? e(t.children) : "";
export {
  e as getTextContent
};
//# sourceMappingURL=utils.es.js.map
