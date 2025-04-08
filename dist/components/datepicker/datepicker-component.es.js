import { jsx as o, Fragment as E, jsxs as B } from "react/jsx-runtime";
import L, { useState as _ } from "react";
import { ChevronLeft as ce, ChevronRight as ue } from "lucide-react";
import { DayPicker as fe, useDayPicker as be } from "react-day-picker";
import { isBefore as G, isAfter as H, format as i, subMonths as he, isEqual as J } from "date-fns";
import { cn as g } from "../../utilities/functions.es.js";
import { formatWeekdayName as K, generateYearRange as me, currentTimeDot as Q } from "./utils.es.js";
import A from "../button/button.es.js";
const Ce = ({
  width: U,
  className: X,
  // Renamed to avoid shadowing
  classNames: Z,
  selectedDates: c,
  setSelectedDates: M,
  showOutsideDays: I = !0,
  mode: b = "single",
  variant: D = "normal",
  alignment: V = "horizontal",
  numberOfMonths: W,
  disabled: P,
  ...j
}) => {
  const ee = L.isValidElement(j.footer) || typeof j.footer == "function", [w, S] = _(!1), [x, O] = _(!1), [y, T] = _((/* @__PURE__ */ new Date()).getFullYear()), [F, q] = _(
    y - y % 24
  );
  c === void 0 && (b === "multiple" ? c = [] : b === "range" ? c = { from: void 0, to: void 0 } : c = void 0);
  function te(t) {
    const { goToMonth: r, nextMonth: e, previousMonth: a } = be(), d = i(
      t.calendarMonth.date,
      "yyyy"
    ), p = i(t.calendarMonth.date, "MMMM"), l = new Date(t.calendarMonth.date);
    l.setDate(l.getDate() - l.getDay());
    const k = Array.from({ length: 7 }, (n, u) => {
      const Y = new Date(l);
      return Y.setDate(l.getDate() + u), K(Y);
    }), v = () => {
      if (x)
        q(F - 24);
      else if (w) {
        const n = new Date(
          y - 1,
          t.calendarMonth.date.getMonth()
        );
        T(n.getFullYear()), r(n);
      } else
        r(a);
    }, f = () => {
      if (x)
        q(F + 24);
      else if (w) {
        const n = new Date(
          y + 1,
          t.calendarMonth.date.getMonth()
        );
        T(n.getFullYear()), r(n);
      } else
        r(e);
    }, h = (n) => {
      T(n), O(!1), S(!0), r(
        new Date(
          n,
          t.calendarMonth.date.getMonth()
        )
      );
    };
    let m;
    return x ? m = `${F} - ${F + 23}` : w ? m = d : m = `${p} ${d}`, /* @__PURE__ */ B(E, { children: [
      /* @__PURE__ */ B("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ o(
          A,
          {
            variant: "ghost",
            onClick: v,
            className: "bg-background-primary border-none cursor-pointer",
            "aria-label": "Previous Button",
            icon: /* @__PURE__ */ o(ce, { className: "h-4 w-4 text-button-tertiary-color" })
          }
        ),
        /* @__PURE__ */ o(
          A,
          {
            variant: "ghost",
            onClick: () => {
              W > 1 || (w ? (O(!0), S(!1)) : x ? O(!1) : S(!w));
            },
            children: m
          }
        ),
        /* @__PURE__ */ o(
          A,
          {
            variant: "ghost",
            onClick: f,
            className: "bg-background-primary border-none cursor-pointer",
            "aria-label": "Next Button",
            icon: /* @__PURE__ */ o(ue, { className: "h-4 w-4 text-button-tertiary-color" })
          }
        )
      ] }),
      x && /* @__PURE__ */ o("div", { className: "grid grid-cols-4 w-full", children: me(F).map((n) => /* @__PURE__ */ B(
        A,
        {
          variant: "ghost",
          onClick: () => h(n),
          className: g(
            "h-10 w-full text-center font-normal relative",
            n === y && n !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            n === (/* @__PURE__ */ new Date()).getFullYear() && "font-semibold"
          ),
          children: [
            n,
            n === (/* @__PURE__ */ new Date()).getFullYear() && Q()
          ]
        },
        n
      )) }),
      w && !x && /* @__PURE__ */ o("div", { className: "grid grid-cols-4 gap-2 my-12", children: Array.from({ length: 12 }, (n, u) => /* @__PURE__ */ B(
        A,
        {
          variant: "ghost",
          onClick: () => {
            S(!1), r(
              new Date(y, u)
            );
          },
          className: g(
            "px-1.5 py-2 h-10 w-[4.375rem] text-center font-normal relative",
            u === t.calendarMonth.date.getMonth() && u !== (/* @__PURE__ */ new Date()).getMonth() && y === t.calendarMonth.date.getFullYear() && t.calendarMonth.date.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            u === (/* @__PURE__ */ new Date()).getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === y && "font-semibold"
          ),
          children: [
            i(new Date(0, u), "MMM"),
            (/* @__PURE__ */ new Date()).getMonth() === u && (/* @__PURE__ */ new Date()).getFullYear() === y && Q()
          ]
        },
        u
      )) }),
      !w && !x && /* @__PURE__ */ o(re, { weekdays: k })
    ] });
  }
  const re = ({ weekdays: t }) => /* @__PURE__ */ o("div", { className: "flex justify-between", children: t.map((r, e) => /* @__PURE__ */ o(
    "button",
    {
      className: "h-10 w-10 px-1.5 py-2 text-center text-text-secondary text-sm font-normal content-center bg-transparent border-none shrink-0",
      children: r
    },
    e
  )) }), ne = ({
    day: t,
    modifiers: r,
    ...e
  }) => {
    const {
      selected: a,
      today: d,
      disabled: p,
      outside: l,
      range_middle: k,
      range_start: v,
      range_end: f
    } = r, h = v || f || k, m = /* @__PURE__ */ new Date(), n = c?.to, u = i(t.displayMonth, "yyyy-MM") === i(m, "yyyy-MM"), Y = n && i(n, "yyyy-MM") === i(t.date, "yyyy-MM"), s = he(m, 1), N = i(t.date, "yyyy-MM") === i(s, "yyyy-MM"), R = u || Y || h, z = !I && l, le = g(
      "h-10 w-10 flex items-center justify-center transition text-text-secondary relative text-sm",
      "border-none rounded",
      (a || h) && !l ? "bg-background-brand text-text-on-color" : "bg-transparent hover:bg-button-tertiary-hover",
      k && R && !l ? "bg-brand-background-50 text-text-secondary rounded-none" : "",
      p ? "opacity-50 cursor-not-allowed text-text-disabled" : "cursor-pointer",
      l && !h || !R && l || l && !N || l ? "bg-transparent opacity-50 text-text-disabled cursor-auto" : ""
    ), se = (C) => {
      typeof e.onMouseEnter == "function" && e.onMouseEnter(C), C.currentTarget.setAttribute("data-hover", "true");
    }, de = (C) => {
      typeof e.onMouseLeave == "function" && e.onMouseLeave(C), C.currentTarget.setAttribute("data-hover", "false");
    }, ie = (C) => {
      typeof e.onClick == "function" && e.onClick(C);
    };
    return /* @__PURE__ */ B(
      "button",
      {
        className: g(
          le,
          d && "font-semibold",
          z && "opacity-0",
          v && "fui-range-start",
          f && "fui-range-end",
          k && "fui-range-middle",
          {
            "[&:is([data-hover=true])]:bg-brand-background-50 [&:is([data-hover=true])]:rounded-none": !h && !a
          }
        ),
        disabled: p || l,
        onClick: ie,
        onMouseEnter: se,
        onMouseLeave: de,
        "aria-label": i(t.date, "EEEE, MMMM do, yyyy"),
        "data-selected": a,
        "data-day": i(t.date, "yyyy-MM-dd"),
        children: [
          (!z || h && R) && e.children,
          d && R && /* @__PURE__ */ o("span", { className: "absolute h-1 w-1 bg-background-brand rounded-full bottom-1" })
        ]
      }
    );
  }, oe = (t) => /* @__PURE__ */ o("div", { className: "flex flex-col bsf-force-ui-month-weeks", children: t.children[1].props.children.map(
    (r, e) => /* @__PURE__ */ o(
      "div",
      {
        className: "flex flex-row justify-between",
        children: r
      },
      e
    )
  ) }), ae = (t, r) => {
    if (b === "range") {
      const e = c;
      if (!e?.from && !e?.to || e?.from && e?.to) {
        if (e.from && J(r, e?.from) || e.to && J(r, e?.to)) {
          M({ from: void 0, to: void 0 });
          return;
        }
        M({ from: r, to: void 0 });
        return;
      }
      if (e?.from && !e?.to) {
        if (r < e.from) {
          M({
            from: r,
            to: e.from
          });
          return;
        }
        M({
          from: e.from,
          to: r
        });
        return;
      }
      M(t);
    } else b === "multiple" ? c.some(
      (e) => i(e, "yyyy-MM-dd") === i(r, "yyyy-MM-dd")
    ) ? M(
      c.filter(
        (e) => i(e, "yyyy-MM-dd") !== i(r, "yyyy-MM-dd")
      )
    ) : M([...c, r]) : b === "single" && M(t);
  }, $ = g(
    "relative bg-background-primary shadow-datepicker-wrapper",
    U,
    V === "vertical" ? "flex flex-col" : "flex flex-row  gap-3",
    D === "normal" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    D === "presets" ? "rounded-tr-md border border-solid border-border-subtle" : "",
    D === "dualdate" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    ee ? "rounded-b-none" : "rounded-bl-md rounded-br-md"
  );
  return /* @__PURE__ */ o(E, { children: /* @__PURE__ */ o(
    fe,
    {
      mode: b,
      selected: c,
      onSelect: ae,
      hideNavigation: !0,
      captionLayout: "label",
      className: g(X),
      formatters: {
        formatWeekdayName: K
      },
      classNames: {
        months: $,
        month: "flex flex-col p-2 gap-1 text-center w-full",
        caption: "relative flex justify-center items-center",
        table: "w-full border-separate border-spacing-0",
        head_row: "flex mb-1",
        head_cell: "text-muted-foreground rounded-md w-10 font-normal text-sm",
        row: "flex w-full mt-2",
        cell: "h-10 w-10 text-center text-sm p-0 relative",
        ...Z
      },
      numberOfMonths: W,
      components: {
        MonthCaption: te,
        DayButton: ne,
        Day: (t) => {
          const r = Object.entries(
            t
          ).reduce(
            (e, [a, d]) => (a.startsWith("data-") && (e[a] = d), e),
            {}
          );
          return /* @__PURE__ */ o(
            "div",
            {
              ...r,
              className: g(
                t.className,
                "inline-flex"
              ),
              children: t.children
            }
          );
        },
        Weekdays: () => /* @__PURE__ */ o(E, {}),
        Week: (t) => /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "bsf-force-ui-month-week flex flex-row",
              t.className
            ),
            children: t.children
          }
        ),
        Months: (t) => /* @__PURE__ */ o(E, { children: /* @__PURE__ */ o(
          "div",
          {
            className: g(
              "bsf-force-ui-date-picker-month",
              $
            ),
            children: t?.children?.map((r, e) => r ? /* @__PURE__ */ o(L.Fragment, { children: r.map((a, d) => /* @__PURE__ */ B(
              L.Fragment,
              {
                children: [
                  d > 0 && /* @__PURE__ */ o("div", { className: "border border-solid border-border-subtle border-l-0" }),
                  a
                ]
              },
              d
            )) }, e) : null)
          }
        ) }),
        MonthGrid: (t) => !w && !x ? /* @__PURE__ */ o(oe, { ...t }) : /* @__PURE__ */ o(E, {})
      },
      ...b === "range" ? { required: !1 } : {},
      ...j,
      onDayMouseEnter: (t, r, e) => {
        if (b !== "range")
          return;
        const a = c;
        if (a?.from && a?.to || !a?.from && !a?.to) {
          Array.from(
            document.querySelectorAll("[data-hover]")
          ).forEach((N) => {
            N.setAttribute("data-hover", "false");
          });
          return;
        }
        const d = e.target, p = new Date(
          d.dataset.day
        ), l = G(
          p,
          a.from
        ), k = H(
          p,
          a.to
        );
        let v;
        switch (D) {
          case "dualdate":
          case "presets":
            v = d.closest(
              ".bsf-force-ui-date-picker-month"
            );
            break;
          case "normal":
          default:
            v = d.closest(
              ".bsf-force-ui-month-weeks"
            );
            break;
        }
        const f = Array.from(
          v.querySelectorAll("button")
        );
        k && f.sort(
          (s, N) => H(
            new Date(s.dataset.day),
            new Date(N.dataset.day)
          ) ? -1 : 1
        ), l && f.sort(
          (s, N) => G(
            new Date(s.dataset.day),
            new Date(N.dataset.day)
          ) ? 1 : -1
        );
        const h = f.indexOf(d), m = f.findIndex(
          (s) => s.getAttribute("data-selected") === "true"
        ), n = [], u = Math.min(h, m), Y = Math.max(h, m);
        for (let s = u; s <= Y; s++)
          f[s]?.disabled || n.push(f[s]);
        f.forEach((s) => {
          s.setAttribute(
            "data-hover",
            n.includes(s) ? "true" : "false"
          );
        });
      },
      disabled: P
    }
  ) });
};
export {
  Ce as default
};
//# sourceMappingURL=datepicker-component.es.js.map
