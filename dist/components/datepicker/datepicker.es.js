import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as L } from "react";
import C from "./datepicker-component.es.js";
import { startOfToday as y, startOfYesterday as M, endOfWeek as Y, startOfWeek as z, startOfDay as i, subDays as N, endOfMonth as R, startOfMonth as q } from "date-fns";
import { getDefaultSelectedValue as j } from "./utils.es.js";
import { cn as E } from "../../utilities/functions.es.js";
import n from "../button/button.es.js";
const U = ({
  selectionType: t = "single",
  variant: d = "normal",
  presets: x = [],
  onCancel: O,
  onApply: S,
  onDateSelect: v,
  applyButtonText: s = "Apply",
  cancelButtonText: m = "Cancel",
  showOutsideDays: f = !0,
  isFooter: V = !0,
  enableTimeSelection: b = !1,
  selected: a,
  disabled: u,
  ...c
}) => {
  const [o, g] = L(() => {
    if (!a)
      return j(t);
    const r = t === "multiple" && Array.isArray(a), D = t === "range" && "from" in a && "to" in a, p = t === "single" && a instanceof Date;
    return r || D || p ? a : j(t);
  }), h = (r) => {
    g(r), v && v(r);
  }, A = [
    {
      label: "Today",
      range: { from: y(), to: y() }
    },
    {
      label: "Yesterday",
      range: { from: M(), to: M() }
    },
    {
      label: "This Week",
      range: {
        from: z(/* @__PURE__ */ new Date(), { weekStartsOn: 1 }),
        to: Y(/* @__PURE__ */ new Date(), { weekStartsOn: 1 })
      }
    },
    {
      label: "Last 7 Days",
      range: {
        from: i(N(/* @__PURE__ */ new Date(), 6)),
        to: i(/* @__PURE__ */ new Date())
      }
    },
    {
      label: "This Month",
      range: {
        from: q(/* @__PURE__ */ new Date()),
        to: R(/* @__PURE__ */ new Date())
      }
    },
    {
      label: "Last 30 Days",
      range: {
        from: i(N(/* @__PURE__ */ new Date(), 29)),
        to: i(/* @__PURE__ */ new Date())
      }
    }
  ], P = x.length > 0 ? x : A, W = (r) => {
    g(r);
  }, k = () => {
    g(
      t === "multiple" ? [] : { from: void 0, to: void 0 }
    ), O && O();
  }, w = () => {
    S && S(o);
  };
  if (d === "normal")
    return /* @__PURE__ */ e(
      C,
      {
        ...c,
        mode: t,
        variant: d,
        width: "w-[18.5rem]",
        enableTimeSelection: b,
        selectedDates: o,
        showOutsideDays: f,
        setSelectedDates: h,
        footer: V && /* @__PURE__ */ l("div", { className: "flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none", children: [
          /* @__PURE__ */ e(
            n,
            {
              variant: "outline",
              onClick: k,
              children: m
            }
          ),
          /* @__PURE__ */ e(n, { onClick: w, children: s })
        ] }),
        disabled: u
      }
    );
  if (d === "dualdate")
    return /* @__PURE__ */ e(
      C,
      {
        mode: t,
        numberOfMonths: 2,
        alignment: "horizontal",
        enableTimeSelection: b,
        selectedDates: o,
        setSelectedDates: h,
        showOutsideDays: f,
        variant: d,
        width: "w-auto",
        footer: /* @__PURE__ */ l("div", { className: "flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none", children: [
          /* @__PURE__ */ e(n, { variant: "outline", onClick: k, children: m }),
          /* @__PURE__ */ e(n, { onClick: w, children: s })
        ] }),
        disabled: u,
        ...c
      }
    );
  if (d === "presets")
    return /* @__PURE__ */ l("div", { className: "flex flex-row shadow-datepicker-wrapper", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 p-3 items-start border border-solid border-border-subtle border-r-0 rounded-tl-md rounded-bl-md bg-background-primary", children: P.map((r, D) => {
        const p = o && "from" in o && "to" in o && o.from?.getTime() === r.range.from.getTime() && o.to?.getTime() === r.range.to.getTime();
        return /* @__PURE__ */ e(
          n,
          {
            onClick: () => W(r.range),
            variant: "ghost",
            className: E(
              "text-left font-medium text-sm text-nowrap w-full",
              p && "bg-brand-background-50"
            ),
            children: r.label
          },
          D
        );
      }) }),
      /* @__PURE__ */ e(
        C,
        {
          ...c,
          mode: t,
          enableTimeSelection: b,
          selectedDates: o,
          setSelectedDates: h,
          variant: d,
          showOutsideDays: f,
          width: "w-auto",
          numberOfMonths: 2,
          footer: /* @__PURE__ */ l("div", { className: "flex justify-end p-2 gap-3 border-l border-r border-t-0 border-b border-solid border-border-subtle bg-background-primary rounded-br-md", children: [
            /* @__PURE__ */ e(
              n,
              {
                variant: "outline",
                onClick: k,
                children: m
              }
            ),
            /* @__PURE__ */ e(n, { onClick: w, children: s })
          ] }),
          disabled: u
        }
      )
    ] });
};
export {
  U as default
};
//# sourceMappingURL=datepicker.es.js.map
