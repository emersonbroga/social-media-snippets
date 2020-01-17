Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

console.log([...3]);
// [0, 1, 2, 3]

console.log([...6]);
//  [0, 1, 2, 3, 4, 5, 6]

