import { twMerge as n } from "tailwind-merge";
import { clsx as l } from "clsx";
const i = (...r) => n(l(...r)), a = (...r) => (...o) => r.filter(Boolean).forEach((t) => t?.(...o)), d = (r) => {
  const o = {
    0: "gap-0",
    xxs: "gap-1",
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-5",
    xl: "gap-6",
    "2xl": "gap-8"
  };
  return o[r] || o.md;
}, g = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12"
}, f = () => {
  if (typeof window > "u")
    return "null";
  const r = window.navigator?.userAgentData?.platform || window.navigator.platform, o = [
    "macOS",
    "Macintosh",
    "MacIntel",
    "MacPPC",
    "Mac68K"
  ], t = ["Win32", "Win64", "Windows", "WinCE"];
  let e = "null";
  return o.includes(r) ? e = "Mac OS" : t.includes(r) && (e = "Windows"), e;
}, u = (r) => r < 1024 ? `${r} bytes` : r < 1024 * 1024 ? `${(r / 1024).toFixed(2)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(2)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`, m = {
  set: (r, o) => {
    if (!(typeof window > "u"))
      try {
        localStorage.setItem(r, JSON.stringify(o));
      } catch (t) {
        console.error(t);
      }
  },
  get: (r) => {
    if (typeof window > "u")
      return null;
    try {
      const o = localStorage.getItem(r);
      return o ? JSON.parse(o) : null;
    } catch (o) {
      return console.error(o), null;
    }
  },
  remove: (r) => {
    if (!(typeof window > "u"))
      try {
        localStorage.removeItem(r);
      } catch (o) {
        console.error(o);
      }
  }
}, p = (r, o) => Object.fromEntries(Object.entries(r).filter(([t]) => !o.includes(t)));
export {
  a as callAll,
  i as cn,
  g as columnClasses,
  u as formatFileSize,
  d as getGapClass,
  f as getOperatingSystem,
  p as omit,
  m as safeLocalStorage
};
//# sourceMappingURL=functions.es.js.map
