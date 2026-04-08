import { jsx as o, Fragment as E, jsxs as B } from "react/jsx-runtime";
import L, { useState as R } from "react";
import { ChevronLeft as ce, ChevronRight as ue } from "lucide-react";
import { DayPicker as fe, useDayPicker as be } from "react-day-picker";
import { isBefore as z, isAfter as G, format as i, subMonths as he, isEqual as H } from "date-fns";
import { cn as g } from "../../utilities/functions.es.js";
import { formatWeekdayName as J, generateYearRange as me, currentTimeDot as K } from "./utils.es.js";
import A from "../button/button.es.js";
const Ce = ({
  width: Q,
  className: U,
  // Renamed to avoid shadowing
  classNames: X,
  selectedDates: c,
  setSelectedDates: M,
  showOutsideDays: Z = !0,
  mode: b = "single",
  variant: D = "normal",
  alignment: I = "horizontal",
  numberOfMonths: W,
  disabled: V,
  ..._
}) => {
  const P = L.isValidElement(_.footer) || typeof _.footer == "function", [w, S] = R(!1), [x, j] = R(!1), [m, O] = R((/* @__PURE__ */ new Date()).getFullYear()), [F, q] = R(
    m - m % 24
  );
  c === void 0 && (b === "multiple" ? c = [] : b === "range" ? c = { from: void 0, to: void 0 } : c = void 0);
  function ee(t) {
    const { goToMonth: r, nextMonth: e, previousMonth: a } = be(), d = i(
      t.calendarMonth.date,
      "yyyy"
    ), p = i(t.calendarMonth.date, "MMMM"), l = new Date(t.calendarMonth.date);
    l.setDate(l.getDate() - l.getDay());
    const k = Array.from({ length: 7 }, (n, u) => {
      const Y = new Date(l);
      return Y.setDate(l.getDate() + u), J(Y);
    }), v = () => {
      if (x)
        q(F - 24);
      else if (w) {
        const n = new Date(
          m - 1,
          t.calendarMonth.date.getMonth()
        );
        O(n.getFullYear()), r(n);
      } else
        r(a);
    }, f = () => {
      if (x)
        q(F + 24);
      else if (w) {
        const n = new Date(
          m + 1,
          t.calendarMonth.date.getMonth()
        );
        O(n.getFullYear()), r(n);
      } else
        r(e);
    }, y = (n) => {
      O(n), j(!1), S(!0), r(
        new Date(
          n,
          t.calendarMonth.date.getMonth()
        )
      );
    };
    let h;
    return x ? h = `${F} - ${F + 23}` : w ? h = d : h = `${p} ${d}`, /* @__PURE__ */ B(E, { children: [
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
              W > 1 || (w ? (j(!0), S(!1)) : x ? j(!1) : S(!w));
            },
            children: h
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
          onClick: () => y(n),
          className: g(
            "h-10 w-full text-center font-normal relative",
            n === m && n !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            n === (/* @__PURE__ */ new Date()).getFullYear() && "font-semibold"
          ),
          children: [
            n,
            n === (/* @__PURE__ */ new Date()).getFullYear() && K()
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
              new Date(m, u)
            );
          },
          className: g(
            "px-1.5 py-2 h-10 w-[4.375rem] text-center font-normal relative",
            u === t.calendarMonth.date.getMonth() && u !== (/* @__PURE__ */ new Date()).getMonth() && m === t.calendarMonth.date.getFullYear() && t.calendarMonth.date.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            u === (/* @__PURE__ */ new Date()).getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === m && "font-semibold"
          ),
          children: [
            i(new Date(0, u), "MMM"),
            (/* @__PURE__ */ new Date()).getMonth() === u && (/* @__PURE__ */ new Date()).getFullYear() === m && K()
          ]
        },
        u
      )) }),
      !w && !x && /* @__PURE__ */ o(te, { weekdays: k })
    ] });
  }
  const te = ({ weekdays: t }) => /* @__PURE__ */ o("div", { className: "flex justify-between", children: t.map((r, e) => /* @__PURE__ */ o(
    "button",
    {
      className: "h-10 w-10 px-1.5 py-2 text-center text-text-secondary text-sm font-normal content-center bg-transparent border-none shrink-0",
      children: r
    },
    e
  )) }), re = ({
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
    } = r, y = v || f || k, h = /* @__PURE__ */ new Date(), n = c?.to, u = i(t.displayMonth, "yyyy-MM") === i(h, "yyyy-MM"), Y = n && i(n, "yyyy-MM") === i(t.date, "yyyy-MM"), s = he(h, 1), N = i(t.date, "yyyy-MM") === i(s, "yyyy-MM"), T = u || Y || y, ae = !Z && l, le = g(
      "h-10 w-10 flex items-center justify-center transition text-text-secondary relative text-sm",
      "border-none rounded",
      (a || y) && !l ? "bg-background-brand text-text-on-color" : "bg-transparent hover:bg-button-tertiary-hover",
      k && T && !l ? "bg-brand-background-50 text-text-secondary rounded-none" : "",
      p ? "opacity-50 cursor-not-allowed text-text-disabled" : "cursor-pointer",
      l && !y || !T && l || l && !N || l ? "bg-transparent opacity-50 text-text-disabled cursor-auto" : ""
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
          ae && "opacity-0",
          v && "fui-range-start",
          f && "fui-range-end",
          k && "fui-range-middle",
          {
            "[&:is([data-hover=true])]:bg-brand-background-50 [&:is([data-hover=true])]:rounded-none": !y && !a
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
          e.children,
          d && T && /* @__PURE__ */ o("span", { className: "absolute h-1 w-1 bg-background-brand rounded-full bottom-1" })
        ]
      }
    );
  }, ne = (t) => /* @__PURE__ */ o("div", { className: "flex flex-col bsf-force-ui-month-weeks", children: t.children[1].props.children.map(
    (r, e) => /* @__PURE__ */ o(
      "div",
      {
        className: "flex flex-row justify-between",
        children: r
      },
      e
    )
  ) }), oe = (t, r) => {
    if (b === "range") {
      const e = c;
      if (!e?.from && !e?.to || e?.from && e?.to) {
        if (e.from && H(r, e?.from) || e.to && H(r, e?.to)) {
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
    Q,
    I === "vertical" ? "flex flex-col" : "flex flex-row  gap-3",
    D === "normal" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    D === "presets" ? "rounded-tr-md border border-solid border-border-subtle" : "",
    D === "dualdate" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    P ? "rounded-b-none" : "rounded-bl-md rounded-br-md"
  );
  return /* @__PURE__ */ o(E, { children: /* @__PURE__ */ o(
    fe,
    {
      mode: b,
      selected: c,
      onSelect: oe,
      hideNavigation: !0,
      captionLayout: "label",
      className: g(U),
      formatters: {
        formatWeekdayName: J
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
        ...X
      },
      numberOfMonths: W,
      showOutsideDays: !0,
      components: {
        MonthCaption: ee,
        DayButton: re,
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
        MonthGrid: (t) => !w && !x ? /* @__PURE__ */ o(ne, { ...t }) : /* @__PURE__ */ o(E, {})
      },
      ...b === "range" ? { required: !1 } : {},
      ..._,
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
        ), l = z(
          p,
          a.from
        ), k = G(
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
          (s, N) => G(
            new Date(s.dataset.day),
            new Date(N.dataset.day)
          ) ? -1 : 1
        ), l && f.sort(
          (s, N) => z(
            new Date(s.dataset.day),
            new Date(N.dataset.day)
          ) ? 1 : -1
        );
        const y = f.indexOf(d), h = f.findIndex(
          (s) => s.getAttribute("data-selected") === "true"
        ), n = [], u = Math.min(y, h), Y = Math.max(y, h);
        for (let s = u; s <= Y; s++)
          f[s]?.disabled || n.push(f[s]);
        f.forEach((s) => {
          s.setAttribute(
            "data-hover",
            n.includes(s) ? "true" : "false"
          );
        });
      },
      disabled: V
    }
  ) });
};
export {
  Ce as default
};
//# sourceMappingURL=datepicker-component.es.js.map
