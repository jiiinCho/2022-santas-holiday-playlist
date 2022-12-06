const easeOutElastic = (x) => {
  const c1 = 1.2;
  const c2 = c1 * 1.525;

  return (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2;
};

const easeInExpo = (x) => {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
};

export const ease = { easeOutElastic, easeInExpo };
