import { jsxs as t, jsx as n } from "react/jsx-runtime";
import { cn as a } from "../../utilities/functions.es.js";
const C = ({
  title: x = "",
  description: g = "",
  icon: e = null,
  iconPosition: r = "right",
  // left, right
  tag: c = "h2",
  // h1, h2, h3, h4, h5, h6
  size: s = "sm",
  // xs, sm, md, lg
  className: d = ""
}) => {
  const m = {
    xs: "gap-1 [&>svg]:size-3.5",
    sm: "gap-1 [&>svg]:size-4",
    md: "gap-1.5 [&>svg]:size-5",
    lg: "gap-1.5 [&>svg]:size-5"
  };
  if (!x)
    return null;
  const l = () => /* @__PURE__ */ n(c, { className: a("font-semibold p-0 m-0", {
    xs: "text-base [&>*]:text-base gap-1",
    sm: "text-lg [&>*]:text-lg gap-1",
    md: "text-xl [&>*]:text-xl gap-1.5",
    lg: "text-2xl [&>*]:text-2xl gap-1.5"
  }[s]), children: x }), i = () => /* @__PURE__ */ n(
    "p",
    {
      className: a(
        "text-text-secondary font-normal my-0",
        {
          xs: "text-sm",
          sm: "text-sm",
          md: "text-base",
          lg: "text-base"
        }[s]
      ),
      children: g
    }
  );
  return g ? /* @__PURE__ */ t("div", { className: d, children: [
    /* @__PURE__ */ t("div", { children: [
      e && r === "left" && /* @__PURE__ */ t("div", { className: a("flex items-center", m[s]), children: [
        e,
        l()
      ] }),
      e && r === "right" && /* @__PURE__ */ t("div", { className: a("flex items-center", m[s]), children: [
        l(),
        e
      ] }),
      !e && l()
    ] }),
    i()
  ] }) : /* @__PURE__ */ t("div", { className: d, children: [
    e && r === "left" && /* @__PURE__ */ t("div", { className: a("flex items-center", m[s]), children: [
      e,
      l()
    ] }),
    e && r === "right" && /* @__PURE__ */ t("div", { className: a("flex items-center", m[s]), children: [
      l(),
      e
    ] }),
    !e && l()
  ] });
};
export {
  C as Title,
  C as default
};
//# sourceMappingURL=title.es.js.map
