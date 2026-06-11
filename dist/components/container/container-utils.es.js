const p = (o, r, i, c = "sm") => {
  const t = [];
  switch (typeof o) {
    case "object":
      for (const [n, e] of Object.entries(o))
        r[n] && t.push(
          r?.[n]?.[e] ?? r?.[n]?.[i?.[n]] ?? ""
        );
      break;
    case "string":
    case "number":
      const b = c;
      t.push(
        r?.[b]?.[o] ?? r?.[b]?.[i?.[b]] ?? ""
      );
      break;
    default:
      if (o === void 0)
        break;
      t.push(
        r?.[c]?.[i] ?? ""
      );
      break;
  }
  return t.join(" ");
};
export {
  p as getClassNames
};
//# sourceMappingURL=container-utils.es.js.map
