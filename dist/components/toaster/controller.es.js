let c = 1;
class a {
  #t;
  #s;
  constructor() {
    this.#t = [], this.#s = [];
  }
  // Subscriber pattern.
  subscribe(t) {
    return this.#s.push(t), () => {
      this.#s = this.#s.filter(
        (s) => s !== t
      );
    };
  }
  // Publish a new toast.
  publish(t) {
    this.#s.forEach((s) => s(t));
  }
  // Add a new toast.
  add(t) {
    this.#t.push(t), this.publish(t);
  }
  // Remove a toast.
  remove(t) {
    return this.#t = this.#t.filter((s) => s.id !== t), t;
  }
  // Create a new toast.
  create(t) {
    const {
      id: s = void 0,
      message: e = "",
      jsx: r = void 0,
      ...n
    } = t;
    if (!e && typeof r != "function")
      return;
    const o = typeof s == "number" ? s : c++;
    return this.#t.find((u) => u.id === o) && (this.#t = this.#t.map((u) => u.id === o ? (this.publish({
      ...u,
      title: e,
      jsx: r,
      ...n
    }), { ...u, title: e, jsx: r, ...n }) : u)), this.add({ id: o, title: e, jsx: r, ...n }), o;
  }
  // Update a toast.
  update(t, s) {
    const { render: e = void 0 } = s;
    let r = s;
    switch (typeof e) {
      case "function":
        r = {
          jsx: e,
          ...s
        };
        break;
      case "string":
        r = {
          title: e,
          ...s
        };
        break;
    }
    this.#t = this.#t.map((n) => n.id === t ? (this.publish({ ...n, ...r }), { ...n, ...r }) : n);
  }
  // Dismiss toast.
  dismiss(t) {
    return t || this.#t.forEach(
      (s) => this.#s.forEach(
        (e) => e({ id: s.id, dismiss: !0 })
      )
    ), this.#s.forEach(
      (s) => s({ id: t, dismiss: !0 })
    ), t;
  }
  // History of toasts.
  history() {
    return this.#t;
  }
  // Types of toasts.
  // Default toast.
  default(t = "", s = {}) {
    return this.create({ message: t, type: "neutral", ...s });
  }
  // Success toast.
  success(t = "", s = {}) {
    return this.create({ message: t, type: "success", ...s });
  }
  // Error toast.
  error(t = "", s = {}) {
    return this.create({ message: t, type: "error", ...s });
  }
  // Warning toast.
  warning(t = "", s = {}) {
    return this.create({ message: t, type: "warning", ...s });
  }
  // Info toast
  info(t = "", s = {}) {
    return this.create({ message: t, type: "info", ...s });
  }
  // Custom toast.
  custom(t, s = {}) {
    return this.create({
      jsx: t,
      type: "custom",
      ...s
    });
  }
}
const i = new a(), d = (h, t) => i.default(h, t), p = Object.seal(
  Object.assign(
    d,
    {
      success: i.success.bind(i),
      error: i.error.bind(i),
      warning: i.warning.bind(i),
      info: i.info.bind(i),
      custom: i.custom.bind(i),
      dismiss: i.dismiss.bind(i),
      update: i.update.bind(i)
    },
    {
      getHistory: i.history.bind(i)
    }
  )
);
export {
  i as ToastState,
  p as toast
};
//# sourceMappingURL=controller.es.js.map
