import { jsx as b, jsxs as $ } from "react/jsx-runtime";
import R, { createContext as z, forwardRef as J, isValidElement as H, useContext as K, useMemo as O, useCallback as Q } from "react";
import { cn as T } from "../../utilities/functions.es.js";
import { motion as j, LayoutGroup as X } from "framer-motion";
import { nanoid as Y } from "nanoid";
const V = z({}), S = () => K(V), W = z(null), Z = () => K(W), q = ({
  children: s,
  activeItem: a = null,
  // The currently active item in the group.
  onChange: r,
  // Callback when the active item changes.
  className: k,
  // Additional class names for styling.
  size: t = "sm",
  // Size of the tabs in the group ('xs', 'sm', 'md', 'lg').
  orientation: o = "horizontal",
  // Orientation of the tabs ('horizontal', 'vertical').
  variant: l = "pill",
  // Style variant of the tabs ('pill', 'rounded', 'underline').
  iconPosition: I = "left",
  // Position of the icon in the tab ('left' or 'right').
  width: p = "full",
  // Width of the tabs ('auto' or 'full').
  "aria-label": i
}) => {
  const N = O(() => Y(), []), x = S(), d = "activeItem" in x, P = x?.activeItem || a, g = Q(
    (e, c) => {
      r && r({ event: e, value: c });
    },
    [r]
  );
  let f = "rounded-full", h = "p-1", n, G = "ring-1 ring-tab-border";
  o === "vertical" ? n = "gap-0.5" : (l === "rounded" || l === "pill") && (t === "xs" || t === "sm" ? n = "gap-0.5" : (t === "md" || t === "lg") && (n = "gap-1")), l === "rounded" || o === "vertical" ? f = "rounded-md" : l === "underline" && (f = "rounded-none", h = "p-0", G = "border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border", t === "xs" ? n = "gap-0" : t === "sm" ? n = "gap-2.5" : (t === "md" || t === "lg") && (n = "gap-3"));
  const A = T(
    `box-border [&>*]:box-border flex items-center ${p === "full" ? "w-full" : ""} ${o === "vertical" ? "flex-col" : ""}`,
    f,
    h,
    n,
    G,
    l !== "underline" ? "bg-tab-background" : "",
    k
  );
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus -- tablist uses roving tabindex on child tabs; the container itself should not be in the tab order per WAI-ARIA tabs pattern
    /* @__PURE__ */ b(
      "div",
      {
        className: A,
        role: "tablist",
        "aria-orientation": o,
        ...i && { "aria-label": i },
        onKeyDown: (e) => {
          const c = Array.from(
            e.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')
          ), u = c.findIndex((F) => F === e.currentTarget.ownerDocument.activeElement);
          if (u === -1)
            return;
          const y = o !== "vertical", v = y ? e.key === "ArrowLeft" : e.key === "ArrowUp", w = y ? e.key === "ArrowRight" : e.key === "ArrowDown";
          if (!v && !w && e.key !== "Home" && e.key !== "End")
            return;
          e.preventDefault();
          let m = u;
          v ? m = u <= 0 ? c.length - 1 : u - 1 : w ? m = u >= c.length - 1 ? 0 : u + 1 : e.key === "Home" ? m = 0 : e.key === "End" && (m = c.length - 1), c[m].focus();
        },
        children: /* @__PURE__ */ b(
          W.Provider,
          {
            value: {
              activeItem: P,
              onChange: g,
              size: t,
              variant: l,
              orientation: o,
              iconPosition: I,
              width: p,
              hasPanels: d
            },
            children: /* @__PURE__ */ b(X, { id: N, children: R.Children.map(s, (e) => H(e) ? R.cloneElement(e) : null) })
          }
        )
      }
    )
  );
};
q.displayName = "Tabs.Group";
const L = J(
  ({
    slug: s,
    text: a,
    icon: r,
    className: k,
    disabled: t = !1,
    badge: o = null,
    ...l
  }, I) => {
    const p = Z();
    if (!p)
      throw new Error("Tab should be used inside Tabs Group");
    const {
      activeItem: i,
      onChange: N,
      size: x,
      variant: d,
      orientation: P,
      iconPosition: g,
      width: f,
      hasPanels: h
    } = p, n = {
      xs: "px-1.5 py-0.5 text-xs [&_svg]:size-3",
      sm: d === "underline" ? "py-1.5 text-sm [&_svg]:size-4" : "px-3 py-1.5 text-sm [&_svg]:size-4",
      md: d === "underline" ? "py-2 text-base [&_svg]:size-5" : "px-3.5 py-1.5 text-base [&_svg]:size-5",
      lg: d === "underline" ? "p-2.5 text-lg [&_svg]:size-6" : "px-3.5 py-1.5 text-lg [&_svg]:size-6"
    }[x], E = T(
      "relative border-none bg-transparent text-text-secondary cursor-pointer flex items-center justify-center transition-[box-shadow,color,background-color] duration-200",
      f === "full" ? "flex-1" : "",
      P === "vertical" ? "w-full justify-between" : ""
    ), _ = "border-none";
    let C = "rounded-full";
    d === "rounded" ? C = "rounded-md" : d === "underline" && (C = "rounded-none");
    const u = T(
      E,
      _,
      C,
      "hover:text-text-primary",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-strong",
      n,
      i === s ? "bg-background-primary text-text-primary shadow-sm" : "",
      t ? "text-text-disabled cursor-not-allowed hover:text-text-disabled" : "",
      k
    ), y = T("flex items-center gap-1"), v = (w) => {
      N(w, { slug: s, text: a });
    };
    return /* @__PURE__ */ $(
      j.button,
      {
        ref: I,
        className: u,
        disabled: t,
        onClick: v,
        layoutRoot: !0,
        role: "tab",
        "aria-selected": i === s,
        ...h && { "aria-controls": `panel-${s}` },
        id: `tab-${s}`,
        tabIndex: i === s ? 0 : -1,
        ...l,
        children: [
          i === s && d === "underline" && /* @__PURE__ */ b(
            j.span,
            {
              layoutId: "underline",
              layoutDependency: i,
              className: "absolute right-0 left-0 -bottom-px h-px bg-border-interactive"
            }
          ),
          /* @__PURE__ */ $("span", { className: y, children: [
            g === "left" && r && /* @__PURE__ */ b("span", { className: "mr-1 contents center-center transition duration-150", children: r }),
            a,
            g === "right" && r && /* @__PURE__ */ b("span", { className: "ml-1 contents center-center transition duration-150", children: r })
          ] }),
          o && H(o) && o
        ]
      }
    );
  }
);
L.displayName = "Tabs.Tab";
const D = ({ activeItem: s, children: a }) => /* @__PURE__ */ b(V.Provider, { value: { activeItem: s }, children: a }), M = ({ slug: s, children: a }) => {
  const r = S();
  if (!r)
    throw new Error("TabPanel should be used inside Tabs");
  return s !== r.activeItem ? null : /* @__PURE__ */ b(
    "div",
    {
      role: "tabpanel",
      id: `panel-${s}`,
      "aria-labelledby": `tab-${s}`,
      tabIndex: 0,
      children: a
    }
  );
};
M.displayName = "Tabs.Panel";
D.Group = q;
D.Tab = L;
D.Panel = M;
export {
  L as Tab,
  M as TabPanel,
  q as TabsGroup,
  D as default
};
//# sourceMappingURL=tabs.es.js.map
