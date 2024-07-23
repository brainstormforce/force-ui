const p = ({
  variant: o = "primary",
  isSmall: r = !1,
  hasSuffixIcon: i = !1,
  hasPrefixIcon: u = !1,
  type: t = "button",
  className: m,
  onClick: a,
  children: n,
  disabled: s = !1,
  id: e = "",
  ...f
}) => {
  const l = (c) => {
    a && typeof a == "function" && a(c);
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: t,
      className: "px-4 py-3 h-11",
      onClick: l,
      disabled: s,
      ...e && { id: e },
      ...f
    },
    n
  );
};
export {
  p as Button
};
//# sourceMappingURL=force-ui.es.js.map
