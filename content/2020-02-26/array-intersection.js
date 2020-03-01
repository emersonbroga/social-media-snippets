const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3, 4], [3, 4, 5, 6]);
// [3, 4]
