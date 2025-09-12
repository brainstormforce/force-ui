import { twMerge as n } from "tailwind-merge";
import { clsx as l } from "clsx";
const c = (...r) => n(l(...r)), i = (...r) => (...o) => r.filter(Boolean).forEach((t) => t?.(...o)), g = (r) => {
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
}, d = {
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
};
export {
  i as callAll,
  c as cn,
  d as columnClasses,
  u as formatFileSize,
  g as getGapClass,
  f as getOperatingSystem,
  m as safeLocalStorage
};
//# sourceMappingURL=functions.es.js.map
