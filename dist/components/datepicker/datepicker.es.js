import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as W } from "react";
import p from "./datepicker-component.es.js";
import { startOfToday as v, startOfYesterday as y, endOfWeek as L, startOfWeek as Y, startOfDay as i, subDays as M, endOfMonth as z, startOfMonth as R } from "date-fns";
import { getDefaultSelectedValue as N } from "./utils.es.js";
import { cn as q } from "../../utilities/functions.es.js";
import n from "../button/button.es.js";
const Q = ({
  selectionType: t = "single",
  variant: d = "normal",
  presets: C = [],
  onCancel: S,
  onApply: x,
  onDateSelect: O,
  applyButtonText: s = "Apply",
  cancelButtonText: m = "Cancel",
  showOutsideDays: f = !0,
  isFooter: j = !0,
  selected: a,
  disabled: b,
  ...u
}) => {
  const [o, c] = W(() => {
    if (!a)
      return N(t);
    const r = t === "multiple" && Array.isArray(a), w = t === "range" && "from" in a && "to" in a, D = t === "single" && a instanceof Date;
    return r || w || D ? a : N(t);
  }), g = (r) => {
    c(r), O && O(r);
  }, V = [
    {
      label: "Today",
      range: { from: v(), to: v() }
    },
    {
      label: "Yesterday",
      range: { from: y(), to: y() }
    },
    {
      label: "This Week",
      range: {
        from: Y(/* @__PURE__ */ new Date(), { weekStartsOn: 1 }),
        to: L(/* @__PURE__ */ new Date(), { weekStartsOn: 1 })
      }
    },
    {
      label: "Last 7 Days",
      range: {
        from: i(M(/* @__PURE__ */ new Date(), 6)),
        to: i(/* @__PURE__ */ new Date())
      }
    },
    {
      label: "This Month",
      range: {
        from: R(/* @__PURE__ */ new Date()),
        to: z(/* @__PURE__ */ new Date())
      }
    },
    {
      label: "Last 30 Days",
      range: {
        from: i(M(/* @__PURE__ */ new Date(), 29)),
        to: i(/* @__PURE__ */ new Date())
      }
    }
  ], A = C.length > 0 ? C : V, P = (r) => {
    c(r);
  }, h = () => {
    c(
      t === "multiple" ? [] : { from: void 0, to: void 0 }
    ), S && S();
  }, k = () => {
    x && x(o);
  };
  if (d === "normal")
    return /* @__PURE__ */ e(
      p,
      {
        ...u,
        mode: t,
        variant: d,
        width: "w-[18.5rem]",
        selectedDates: o,
        showOutsideDays: f,
        setSelectedDates: g,
        footer: j && /* @__PURE__ */ l("div", { className: "flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none", children: [
          /* @__PURE__ */ e(
            n,
            {
              variant: "outline",
              onClick: h,
              children: m
            }
          ),
          /* @__PURE__ */ e(n, { onClick: k, children: s })
        ] }),
        disabled: b
      }
    );
  if (d === "dualdate")
    return /* @__PURE__ */ e(
      p,
      {
        mode: t,
        numberOfMonths: 2,
        alignment: "horizontal",
        selectedDates: o,
        setSelectedDates: g,
        showOutsideDays: f,
        variant: d,
        width: "w-auto",
        footer: /* @__PURE__ */ l("div", { className: "flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none", children: [
          /* @__PURE__ */ e(n, { variant: "outline", onClick: h, children: m }),
          /* @__PURE__ */ e(n, { onClick: k, children: s })
        ] }),
        disabled: b,
        ...u
      }
    );
  if (d === "presets")
    return /* @__PURE__ */ l("div", { className: "flex flex-row shadow-datepicker-wrapper", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 p-3 items-start border border-solid border-border-subtle border-r-0 rounded-tl-md rounded-bl-md bg-background-primary", children: A.map((r, w) => {
        const D = o && "from" in o && "to" in o && o.from?.getTime() === r.range.from.getTime() && o.to?.getTime() === r.range.to.getTime();
        return /* @__PURE__ */ e(
          n,
          {
            onClick: () => P(r.range),
            variant: "ghost",
            className: q(
              "text-left font-medium text-sm text-nowrap w-full",
              D && "bg-brand-background-50"
            ),
            children: r.label
          },
          w
        );
      }) }),
      /* @__PURE__ */ e(
        p,
        {
          ...u,
          mode: t,
          selectedDates: o,
          setSelectedDates: g,
          variant: d,
          showOutsideDays: f,
          width: "w-auto",
          numberOfMonths: 2,
          footer: /* @__PURE__ */ l("div", { className: "flex justify-end p-2 gap-3 border-l border-r border-t-0 border-b border-solid border-border-subtle bg-background-primary rounded-br-md", children: [
            /* @__PURE__ */ e(
              n,
              {
                variant: "outline",
                onClick: h,
                children: m
              }
            ),
            /* @__PURE__ */ e(n, { onClick: k, children: s })
          ] }),
          disabled: b
        }
      )
    ] });
};
export {
  Q as default
};
//# sourceMappingURL=datepicker.es.js.map
