import { jsx as o, jsxs as v, Fragment as B } from "react/jsx-runtime";
import z, { useState as D } from "react";
import { ChevronLeft as ye, ChevronRight as xe } from "lucide-react";
import { DayPicker as Me, useDayPicker as pe } from "react-day-picker";
import { isBefore as O, isAfter as G, format as u, subMonths as we, startOfDay as ve, setMinutes as X, setHours as Z, isSameDay as ke, isEqual as Ne } from "date-fns";
import { cn as M } from "../../utilities/functions.es.js";
import { formatWeekdayName as I, generateYearRange as Ce, currentTimeDot as V, mergeDateTime as j } from "./utils.es.js";
import T from "../button/button.es.js";
const De = ({
  width: P,
  className: ee,
  // Renamed to avoid shadowing
  classNames: te,
  selectedDates: i,
  setSelectedDates: g,
  showOutsideDays: re = !0,
  mode: h = "single",
  variant: F = "normal",
  alignment: oe = "horizontal",
  numberOfMonths: J,
  enableTimeSelection: E = !1,
  disabled: ne,
  ...R
}) => {
  const K = z.isValidElement(R.footer) || typeof R.footer == "function", L = E && h !== "multiple", [k, _] = D(!1), [N, W] = D(!1), [w, q] = D((/* @__PURE__ */ new Date()).getFullYear()), [S, Q] = D(
    w - w % 24
  );
  i === void 0 && (h === "multiple" ? i = [] : h === "range" ? i = { from: void 0, to: void 0 } : i = void 0);
  function ae(t) {
    const { goToMonth: r, nextMonth: e, previousMonth: n } = pe(), l = u(
      t.calendarMonth.date,
      "yyyy"
    ), d = u(t.calendarMonth.date, "MMMM"), a = new Date(t.calendarMonth.date);
    a.setDate(a.getDate() - a.getDay());
    const f = Array.from({ length: 7 }, (s, b) => {
      const A = new Date(a);
      return A.setDate(a.getDate() + b), I(A);
    }), y = () => {
      if (N)
        Q(S - 24);
      else if (k) {
        const s = new Date(
          w - 1,
          t.calendarMonth.date.getMonth()
        );
        q(s.getFullYear()), r(s);
      } else
        r(n);
    }, m = () => {
      if (N)
        Q(S + 24);
      else if (k) {
        const s = new Date(
          w + 1,
          t.calendarMonth.date.getMonth()
        );
        q(s.getFullYear()), r(s);
      } else
        r(e);
    }, x = (s) => {
      q(s), W(!1), _(!0), r(
        new Date(
          s,
          t.calendarMonth.date.getMonth()
        )
      );
    };
    let p;
    return N ? p = `${S} - ${S + 23}` : k ? p = l : p = `${d} ${l}`, /* @__PURE__ */ v(B, { children: [
      /* @__PURE__ */ v("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ o(
          T,
          {
            variant: "ghost",
            onClick: y,
            className: "bg-background-primary border-none cursor-pointer",
            "aria-label": "Previous Button",
            icon: /* @__PURE__ */ o(ye, { className: "h-4 w-4 text-button-tertiary-color" })
          }
        ),
        /* @__PURE__ */ o(
          T,
          {
            variant: "ghost",
            onClick: () => {
              J > 1 || (k ? (W(!0), _(!1)) : N ? W(!1) : _(!k));
            },
            children: p
          }
        ),
        /* @__PURE__ */ o(
          T,
          {
            variant: "ghost",
            onClick: m,
            className: "bg-background-primary border-none cursor-pointer",
            "aria-label": "Next Button",
            icon: /* @__PURE__ */ o(xe, { className: "h-4 w-4 text-button-tertiary-color" })
          }
        )
      ] }),
      N && /* @__PURE__ */ o("div", { className: "grid grid-cols-4 w-full", children: Ce(S).map((s) => /* @__PURE__ */ v(
        T,
        {
          variant: "ghost",
          onClick: () => x(s),
          className: M(
            "h-10 w-full text-center font-normal relative",
            s === w && s !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            s === (/* @__PURE__ */ new Date()).getFullYear() && "font-semibold"
          ),
          children: [
            s,
            s === (/* @__PURE__ */ new Date()).getFullYear() && V()
          ]
        },
        s
      )) }),
      k && !N && /* @__PURE__ */ o("div", { className: "grid grid-cols-4 gap-2 my-12", children: Array.from({ length: 12 }, (s, b) => /* @__PURE__ */ v(
        T,
        {
          variant: "ghost",
          onClick: () => {
            _(!1), r(
              new Date(w, b)
            );
          },
          className: M(
            "px-1.5 py-2 h-10 w-[4.375rem] text-center font-normal relative",
            b === t.calendarMonth.date.getMonth() && b !== (/* @__PURE__ */ new Date()).getMonth() && w === t.calendarMonth.date.getFullYear() && t.calendarMonth.date.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() && "bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black",
            b === (/* @__PURE__ */ new Date()).getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === w && "font-semibold"
          ),
          children: [
            u(new Date(0, b), "MMM"),
            (/* @__PURE__ */ new Date()).getMonth() === b && (/* @__PURE__ */ new Date()).getFullYear() === w && V()
          ]
        },
        b
      )) }),
      !k && !N && /* @__PURE__ */ o(se, { weekdays: f })
    ] });
  }
  const se = ({ weekdays: t }) => /* @__PURE__ */ o("div", { className: "flex justify-between", children: t.map((r, e) => /* @__PURE__ */ o(
    "button",
    {
      className: "h-10 w-10 px-1.5 py-2 text-center text-text-secondary text-sm font-normal content-center bg-transparent border-none shrink-0",
      children: r
    },
    e
  )) }), ie = ({
    day: t,
    modifiers: r,
    ...e
  }) => {
    const {
      selected: n,
      today: l,
      disabled: d,
      outside: a,
      range_middle: f,
      range_start: y,
      range_end: m
    } = r, x = y || m || f, p = /* @__PURE__ */ new Date(), s = i?.to, b = u(t.displayMonth, "yyyy-MM") === u(p, "yyyy-MM"), A = s && u(s, "yyyy-MM") === u(t.date, "yyyy-MM"), c = we(p, 1), C = u(t.date, "yyyy-MM") === u(c, "yyyy-MM"), $ = b || A || x, fe = !re && a, me = M(
      "h-10 w-10 flex items-center justify-center transition text-text-secondary relative text-sm",
      "border-none rounded",
      (n || x) && !a ? "bg-background-brand text-text-on-color" : "bg-transparent hover:bg-button-tertiary-hover",
      f && $ && !a ? "bg-brand-background-50 text-text-secondary rounded-none" : "",
      d ? "opacity-50 cursor-not-allowed text-text-disabled" : "cursor-pointer",
      a && !x || !$ && a || a && !C || a ? "bg-transparent opacity-50 text-text-disabled cursor-auto" : ""
    ), be = (Y) => {
      typeof e.onMouseEnter == "function" && e.onMouseEnter(Y), Y.currentTarget.setAttribute("data-hover", "true");
    }, he = (Y) => {
      typeof e.onMouseLeave == "function" && e.onMouseLeave(Y), Y.currentTarget.setAttribute("data-hover", "false");
    }, ge = (Y) => {
      typeof e.onClick == "function" && e.onClick(Y);
    };
    return /* @__PURE__ */ v(
      "button",
      {
        className: M(
          me,
          l && "font-semibold",
          fe && "opacity-0",
          y && "fui-range-start",
          m && "fui-range-end",
          f && "fui-range-middle",
          {
            "[&:is([data-hover=true])]:bg-brand-background-50 [&:is([data-hover=true])]:rounded-none": !x && !n
          }
        ),
        disabled: d || a,
        onClick: ge,
        onMouseEnter: be,
        onMouseLeave: he,
        "aria-label": u(t.date, "EEEE, MMMM do, yyyy"),
        "data-selected": n,
        "data-day": u(t.date, "yyyy-MM-dd"),
        children: [
          e.children,
          l && $ && /* @__PURE__ */ o("span", { className: "absolute h-1 w-1 bg-background-brand rounded-full bottom-1" })
        ]
      }
    );
  }, le = (t) => /* @__PURE__ */ o("div", { className: "flex flex-col bsf-force-ui-month-weeks", children: t.children[1].props.children.map(
    (r, e) => /* @__PURE__ */ o(
      "div",
      {
        className: "flex flex-row justify-between",
        children: r
      },
      e
    )
  ) }), de = (t, r) => {
    if (h === "range") {
      const e = i, n = (d) => !!d && (E ? ke(r, d) : Ne(r, d)), l = (d, a) => E ? j(d, a) : d;
      if (!e?.from && !e?.to || e?.from && e?.to) {
        if (n(e?.from) || n(e?.to)) {
          g({ from: void 0, to: void 0 });
          return;
        }
        g({
          from: l(
            r,
            e?.from
          ),
          to: void 0
        });
        return;
      }
      if (e?.from && !e?.to) {
        if (E ? O(r, ve(e.from)) : r < e.from) {
          g({
            from: l(
              r,
              e.from
            ),
            to: e.from
          });
          return;
        }
        let a = l(
          r,
          e.to
        );
        E && O(a, e.from) && (a = j(
          a,
          e.from
        )), g({
          from: e.from,
          to: a
        });
        return;
      }
      g(t);
    } else if (h === "multiple")
      i.some(
        (e) => u(e, "yyyy-MM-dd") === u(r, "yyyy-MM-dd")
      ) ? g(
        i.filter(
          (e) => u(e, "yyyy-MM-dd") !== u(r, "yyyy-MM-dd")
        )
      ) : g([...i, r]);
    else if (h === "single") {
      if (E && t instanceof Date && i instanceof Date) {
        g(j(t, i));
        return;
      }
      g(t);
    }
  }, ce = (t, r) => {
    const { value: e } = t.target;
    if (!e)
      return;
    if (r === "single") {
      if (!(i instanceof Date))
        return;
      const [m, x] = e.split(":").map(Number);
      g(
        X(Z(i, m), x)
      );
      return;
    }
    const n = i;
    if (!n?.[r])
      return;
    const [l, d] = e.split(":").map(Number), a = X(
      Z(n[r], l),
      d
    ), f = {
      ...n,
      [r]: a
    }, y = r === "from" ? "to" : "from";
    f.from && f.to && G(f.from, f.to) && (f[y] = j(
      f[y],
      a
    )), g(f);
  }, H = (t, r, e) => /* @__PURE__ */ v("div", { className: "flex flex-col items-start gap-1 flex-1", children: [
    /* @__PURE__ */ o("span", { className: "text-xs font-medium text-text-secondary", children: e }),
    /* @__PURE__ */ o(
      "input",
      {
        type: "time",
        className: M(
          "w-full px-2 py-1 rounded text-sm font-normal text-text-primary bg-field-secondary-background outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200",
          "focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",
          !r && "outline-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled"
        ),
        value: r ? u(r, "HH:mm") : "",
        disabled: !r,
        onChange: (n) => ce(n, t),
        "aria-label": e
      }
    )
  ] }), ue = L ? /* @__PURE__ */ o(
    "div",
    {
      className: M(
        "flex items-end gap-3 p-2 bg-background-primary border-solid border-border-subtle",
        F === "presets" ? "border-l border-r border-t-0 border-b" : "border border-t-0",
        !K && (F === "presets" ? "rounded-br-md" : "rounded-bl-md rounded-br-md")
      ),
      children: h === "single" ? H(
        "single",
        i,
        "Time"
      ) : /* @__PURE__ */ v(B, { children: [
        H(
          "from",
          i?.from,
          "Start time"
        ),
        H(
          "to",
          i?.to,
          "End time"
        )
      ] })
    }
  ) : null, U = M(
    "relative bg-background-primary shadow-datepicker-wrapper",
    P,
    oe === "vertical" ? "flex flex-col" : "flex flex-row  gap-3",
    F === "normal" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    F === "presets" ? "rounded-tr-md border border-solid border-border-subtle" : "",
    F === "dualdate" ? "rounded-tr-md rounded-tl-md border border-solid border-border-subtle" : "",
    K || L ? "rounded-b-none" : "rounded-bl-md rounded-br-md"
  );
  return /* @__PURE__ */ o(B, { children: /* @__PURE__ */ o(
    Me,
    {
      mode: h,
      selected: i,
      onSelect: de,
      hideNavigation: !0,
      captionLayout: "label",
      className: M(ee),
      formatters: {
        formatWeekdayName: I
      },
      classNames: {
        months: U,
        month: "flex flex-col p-2 gap-1 text-center w-full",
        caption: "relative flex justify-center items-center",
        table: "w-full border-separate border-spacing-0",
        head_row: "flex mb-1",
        head_cell: "text-muted-foreground rounded-md w-10 font-normal text-sm",
        row: "flex w-full mt-2",
        cell: "h-10 w-10 text-center text-sm p-0 relative",
        ...te
      },
      numberOfMonths: J,
      showOutsideDays: !0,
      components: {
        MonthCaption: ae,
        DayButton: ie,
        Day: (t) => {
          const r = Object.entries(
            t
          ).reduce(
            (e, [n, l]) => (n.startsWith("data-") && (e[n] = l), e),
            {}
          );
          return /* @__PURE__ */ o(
            "div",
            {
              ...r,
              className: M(
                t.className,
                "inline-flex"
              ),
              children: t.children
            }
          );
        },
        Weekdays: () => /* @__PURE__ */ o(B, {}),
        Week: (t) => /* @__PURE__ */ o(
          "div",
          {
            className: M(
              "bsf-force-ui-month-week flex flex-row",
              t.className
            ),
            children: t.children
          }
        ),
        Months: (t) => /* @__PURE__ */ o(B, { children: /* @__PURE__ */ o(
          "div",
          {
            className: M(
              "bsf-force-ui-date-picker-month",
              U
            ),
            children: t?.children?.map((r, e) => r ? /* @__PURE__ */ o(z.Fragment, { children: r.map((n, l) => /* @__PURE__ */ v(
              z.Fragment,
              {
                children: [
                  l > 0 && /* @__PURE__ */ o("div", { className: "border border-solid border-border-subtle border-l-0" }),
                  n
                ]
              },
              l
            )) }, e) : null)
          }
        ) }),
        MonthGrid: (t) => !k && !N ? /* @__PURE__ */ o(le, { ...t }) : /* @__PURE__ */ o(B, {})
      },
      ...h === "range" ? { required: !1 } : {},
      ...R,
      footer: L ? /* @__PURE__ */ v(B, { children: [
        ue,
        R.footer
      ] }) : R.footer,
      onDayMouseEnter: (t, r, e) => {
        if (h !== "range")
          return;
        const n = i;
        if (n?.from && n?.to || !n?.from && !n?.to) {
          Array.from(
            document.querySelectorAll("[data-hover]")
          ).forEach((C) => {
            C.setAttribute("data-hover", "false");
          });
          return;
        }
        const l = e.target, d = new Date(
          l.dataset.day
        ), a = O(
          d,
          n.from
        ), f = G(
          d,
          n.to
        );
        let y;
        switch (F) {
          case "dualdate":
          case "presets":
            y = l.closest(
              ".bsf-force-ui-date-picker-month"
            );
            break;
          case "normal":
          default:
            y = l.closest(
              ".bsf-force-ui-month-weeks"
            );
            break;
        }
        const m = Array.from(
          y.querySelectorAll("button")
        );
        f && m.sort(
          (c, C) => G(
            new Date(c.dataset.day),
            new Date(C.dataset.day)
          ) ? -1 : 1
        ), a && m.sort(
          (c, C) => O(
            new Date(c.dataset.day),
            new Date(C.dataset.day)
          ) ? 1 : -1
        );
        const x = m.indexOf(l), p = m.findIndex(
          (c) => c.getAttribute("data-selected") === "true"
        ), s = [], b = Math.min(x, p), A = Math.max(x, p);
        for (let c = b; c <= A; c++)
          m[c]?.disabled || s.push(m[c]);
        m.forEach((c) => {
          c.setAttribute(
            "data-hover",
            s.includes(c) ? "true" : "false"
          );
        });
      },
      disabled: ne
    }
  ) });
};
export {
  De as default
};
//# sourceMappingURL=datepicker-component.es.js.map
