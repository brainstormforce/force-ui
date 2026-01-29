import { jsxs as k, jsx as i, Fragment as B } from "react/jsx-runtime";
import G, { createContext as I, forwardRef as H, isValidElement as _, useContext as j, useCallback as J } from "react";
import { cn as x } from "../../utilities/functions.es.js";
import { motion as P, LayoutGroup as K } from "framer-motion";
import { nanoid as M } from "nanoid";
const E = I({}), R = () => j(E), V = I(null), O = () => j(V), z = ({
  children: t,
  activeItem: o = null,
  // The currently active item in the group.
  onChange: s,
  // Callback when the active item changes.
  className: C,
  // Additional class names for styling.
  size: e = "sm",
  // Size of the tabs in the group ('xs', 'sm', 'md', 'lg').
  orientation: n = "horizontal",
  // Orientation of the tabs ('horizontal', 'vertical').
  variant: a = "pill",
  // Style variant of the tabs ('pill', 'rounded', 'underline').
  iconPosition: g = "left",
  // Position of the icon in the tab ('left' or 'right').
  width: d = "full"
  // Width of the tabs ('auto' or 'full').
}) => {
  const c = M(), h = R()?.activeItem || o, l = J(
    (m, N) => {
      s && s({ event: m, value: N });
    },
    [s]
  );
  let u = "rounded-full", b = "p-1", r, f = "ring-1 ring-tab-border";
  n === "vertical" ? r = "gap-0.5" : (a === "rounded" || a === "pill") && (e === "xs" || e === "sm" ? r = "gap-0.5" : (e === "md" || e === "lg") && (r = "gap-1")), a === "rounded" || n === "vertical" ? u = "rounded-md" : a === "underline" && (u = "rounded-none", b = "p-0", f = "border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border", e === "xs" ? r = "gap-0" : e === "sm" ? r = "gap-2.5" : (e === "md" || e === "lg") && (r = "gap-3"));
  const p = x(
    `box-border [&>*]:box-border flex items-center ${d === "full" ? "w-full" : ""} ${n === "vertical" ? "flex-col" : ""}`,
    u,
    b,
    r,
    f,
    a !== "underline" ? "bg-tab-background" : "",
    C
  );
  return /* @__PURE__ */ i("div", { className: p, children: /* @__PURE__ */ i(
    V.Provider,
    {
      value: {
        activeItem: h,
        onChange: l,
        size: e,
        variant: a,
        orientation: n,
        iconPosition: g,
        width: d
      },
      children: /* @__PURE__ */ i(K, { id: c, children: G.Children.map(t, (m) => _(m) ? G.cloneElement(m) : null) })
    }
  ) });
};
z.displayName = "Tabs.Group";
const S = H(
  ({
    slug: t,
    text: o,
    icon: s,
    className: C,
    disabled: e = !1,
    badge: n = null,
    ...a
  }, g) => {
    const d = O();
    if (!d)
      throw new Error("Tab should be used inside Tabs Group");
    const {
      activeItem: c,
      onChange: y,
      size: h,
      variant: l,
      orientation: u,
      iconPosition: b,
      width: r
    } = d, f = {
      xs: "px-1.5 py-0.5 text-xs [&_svg]:size-3",
      sm: l === "underline" ? "py-1.5 text-sm [&_svg]:size-4" : "px-3 py-1.5 text-sm [&_svg]:size-4",
      md: l === "underline" ? "py-2 text-base [&_svg]:size-5" : "px-3.5 py-1.5 text-base [&_svg]:size-5",
      lg: l === "underline" ? "p-2.5 text-lg [&_svg]:size-6" : "px-3.5 py-1.5 text-lg [&_svg]:size-6"
    }[h], T = x(
      "relative border-none bg-transparent text-text-secondary cursor-pointer flex items-center justify-center transition-[box-shadow,color,background-color] duration-200",
      r === "full" ? "flex-1" : "",
      u === "vertical" ? "w-full justify-between" : ""
    ), w = "border-none";
    let p = "rounded-full";
    l === "rounded" ? p = "rounded-md" : l === "underline" && (p = "rounded-none");
    const F = x(
      T,
      w,
      p,
      "hover:text-text-primary",
      "focus:outline-none",
      f,
      c === t ? "bg-background-primary text-text-primary shadow-sm" : "",
      e ? "text-text-disabled cursor-not-allowed hover:text-text-disabled" : "",
      C
    ), L = x("flex items-center gap-1"), q = (A) => {
      y(A, { slug: t, text: o });
    };
    return /* @__PURE__ */ k(
      P.button,
      {
        ref: g,
        className: F,
        disabled: e,
        onClick: q,
        ...a,
        layoutRoot: !0,
        children: [
          c === t && l === "underline" && /* @__PURE__ */ i(
            P.span,
            {
              layoutId: "underline",
              layoutDependency: c,
              className: "absolute right-0 left-0 -bottom-px h-px bg-border-interactive"
            }
          ),
          /* @__PURE__ */ k("span", { className: L, children: [
            b === "left" && s && /* @__PURE__ */ i("span", { className: "mr-1 contents center-center transition duration-150", children: s }),
            o,
            b === "right" && s && /* @__PURE__ */ i("span", { className: "ml-1 contents center-center transition duration-150", children: s })
          ] }),
          n && _(n) && n
        ]
      }
    );
  }
);
S.displayName = "Tabs.Tab";
const v = ({ activeItem: t, children: o }) => /* @__PURE__ */ i(E.Provider, { value: { activeItem: t }, children: o }), W = ({ slug: t, children: o }) => {
  const s = R();
  if (!s)
    throw new Error("TabPanel should be used inside Tabs");
  return t === s.activeItem ? /* @__PURE__ */ i(B, { children: o }) : null;
};
W.displayName = "Tabs.Panel";
v.Group = z;
v.Tab = S;
v.Panel = W;
export {
  S as Tab,
  W as TabPanel,
  z as TabsGroup,
  v as default
};
//# sourceMappingURL=tabs.es.js.map
