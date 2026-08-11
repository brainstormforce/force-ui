const s = (n) => {
  if (!n)
    return { error: "Element not found." };
  const t = n.getBoundingClientRect(), i = window.innerWidth, e = i / 2, r = t.right < e, o = t.left > e;
  return {
    isLeft: r,
    isRight: o,
    isCenter: !r && !o,
    elementRect: {
      left: t.left,
      right: t.right,
      width: t.width
    },
    viewport: {
      width: i,
      center: e
    }
  };
};
export {
  s as getElementPositionRelativeToScreen
};
//# sourceMappingURL=utils.es.js.map
