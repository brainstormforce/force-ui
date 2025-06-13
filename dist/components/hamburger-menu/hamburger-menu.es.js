import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { cn as u } from "../../utilities/functions.es.js";
import { useCycle as M, motion as d } from "framer-motion";
import { createContext as O, useState as h, useRef as b, useEffect as R, isValidElement as T, cloneElement as C, useContext as H, startTransition as L } from "react";
import { getElementPositionRelativeToScreen as B } from "../topbar/utils.es.js";
import E from "../button/button.es.js";
const y = O({}), P = y.Provider, x = () => H(y), $ = (e) => {
  const t = b({ width: 0, height: 0 });
  return R(() => {
    e.current && (t.current.width = e.current.offsetWidth, t.current.height = e.current.offsetHeight);
  }, []), t.current;
}, z = (e, t, n) => {
  if (!e || !t)
    return {
      open: () => ({}),
      closed: () => ({})
    };
  const r = e?.getBoundingClientRect(), s = t?.getBoundingClientRect(), i = n ? r?.x - s?.x + r?.width / 2 : s?.width - (s?.right - r?.x) + r?.width / 2, a = r?.y - s?.y + r?.height / 2, l = r?.width / 2;
  return {
    open: (c = 1e3) => ({
      clipPath: `circle(${c * 2 + 200}px at ${i}px ${a}px)`,
      background: "rgb(255, 255, 255, 1)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        background: {
          duration: 0
        }
      }
    }),
    closed: {
      clipPath: `circle(${l}px at ${i}px ${a}px)`,
      background: "rgb(255, 255, 255, 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
        background: {
          duration: 0,
          delay: 1e3
        }
      }
    }
  };
}, m = (e) => (
  // @ts-expect-error Framer Motion types are not compatible with SVGPathElement
  /* @__PURE__ */ o(
    d.path,
    {
      className: "stroke-icon-primary",
      fill: "transparent",
      strokeWidth: "3",
      strokeLinecap: "round",
      ...e
    }
  )
), v = ({ className: e }) => {
  const { toggleOpen: t, setTriggerRef: n } = x();
  return /* @__PURE__ */ o(
    E,
    {
      ref: n,
      className: u(
        "relative z-[1] rounded-full hover:shadow-sm focus:[box-shadow:none] pointer-events-auto bg-background-primary",
        e
      ),
      variant: "ghost",
      size: "xs",
      onClick: t,
      "aria-label": "Toggle menu",
      icon: /* @__PURE__ */ f(
        d.svg,
        {
          className: "shrink-0 stroke-icon-primary",
          width: "23",
          height: "23",
          variants: {
            open: {
              viewBox: "0 0 20 20"
            },
            closed: {
              viewBox: "0 0 23 18"
            }
          },
          children: [
            /* @__PURE__ */ o(
              m,
              {
                variants: {
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" }
                }
              }
            ),
            /* @__PURE__ */ o(
              m,
              {
                d: "M 2 9.423 L 20 9.423",
                variants: {
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                },
                transition: { duration: 0.1 }
              }
            ),
            /* @__PURE__ */ o(
              m,
              {
                variants: {
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" }
                }
              }
            )
          ]
        }
      )
    }
  );
}, D = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}, w = ({
  tag: e = "a",
  active: t,
  icon: n,
  iconPosition: r = "left",
  className: s,
  children: i,
  ...a
}) => {
  let l = null, c = null;
  const g = n && T(n) ? C(n, {
    key: "left-icon",
    className: u(
      "size-5",
      t ? "text-brand-800" : "text-icon-secondary",
      n.props?.className ?? ""
    )
  }) : null;
  switch (r) {
    case "left":
      l = g;
      break;
    case "right":
      c = g;
      break;
    default:
      l = null, c = null;
      break;
  }
  return /* @__PURE__ */ o(V, { children: /* @__PURE__ */ f(
    e,
    {
      className: u(
        "w-full no-underline hover:no-underline text-text-primary text-lg font-medium flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-background-secondary hover:text-text-primary focus:outline-none focus:shadow-none transition ease-in-out duration-150",
        t ? "text-text-primary bg-background-secondary" : "text-text-secondary",
        s
      ),
      ...a,
      children: [
        !!l && l,
        /* @__PURE__ */ o("span", { className: "contents", children: i }),
        !!c && c
      ]
    }
  ) });
}, I = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1e3, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1e3 }
    }
  }
}, V = ({ children: e }) => /* @__PURE__ */ o(
  d.li,
  {
    className: "m-0 p-0 flex items-center justify-start w-full",
    variants: I,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    children: e
  }
), k = ({ children: e, className: t }) => {
  const { triggerRef: n, triggerOnRight: r, triggerOnLeft: s } = x(), [i, a] = h(null);
  return n ? /* @__PURE__ */ f(
    d.div,
    {
      ref: a,
      className: u(
        "absolute top-0 bottom-0 w-80 h-screen",
        r ? "right-0" : "left-0",
        t
      ),
      children: [
        i && /* @__PURE__ */ o(
          d.div,
          {
            className: u(
              "bg-background-primary shadow-lg absolute top-0 bottom-0 w-80 border-y-0 border-l-0 border-r border-solid border-border-subtle",
              r ? "right-0" : "left-0"
            ),
            variants: z(
              n,
              i,
              s ?? !1
            )
          }
        ),
        /* @__PURE__ */ o(
          d.ul,
          {
            variants: D,
            className: u(
              "relative mt-14 mb-0 w-full px-5 pb-5 pt-2 flex flex-col items-start justify-start gap-0.5",
              t
            ),
            children: e
          }
        )
      ]
    }
  ) : null;
}, p = ({ className: e, children: t }) => {
  const [n, r] = M(!1, !0), [s, i] = h(null), a = b(null), { height: l } = $(a), { isRight: c = !1, isLeft: g = !0 } = B(s);
  return /* @__PURE__ */ o(P, { value: {
    isOpen: n,
    toggleOpen: r,
    setTriggerRef: (N) => {
      L(() => {
        i(N);
      });
    },
    triggerRef: s,
    triggerOnRight: c,
    triggerOnLeft: g
  }, children: /* @__PURE__ */ o("div", { className: u("size-6 z-[1]", e), children: /* @__PURE__ */ o(
    d.nav,
    {
      className: "h-full",
      initial: !1,
      animate: n ? "open" : "closed",
      custom: l,
      variants: {
        open: {
          pointerEvents: "auto"
        },
        closed: {
          pointerEvents: "none"
        }
      },
      ref: a,
      children: t
    }
  ) }) });
};
p.displayName = "HamburgerMenu";
v.displayName = "HamburgerMenu.Toggle";
k.displayName = "HamburgerMenu.Options";
w.displayName = "HamburgerMenu.Option";
p.Options = k;
p.Option = w;
p.Toggle = v;
export {
  p as HamburgerMenu,
  V as MenuItem,
  w as MenuOption,
  k as MenuOptions,
  v as MenuToggle,
  p as default,
  $ as useDimensions
};
//# sourceMappingURL=hamburger-menu.es.js.map
