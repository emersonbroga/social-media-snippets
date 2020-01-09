const numbers = [30, 24, 6, 14, 59];

const ascending = numbers.sort((a, b) => a - b);
console.log(ascending); // [6, 14, 24, 30, 59]

const descending = numbers.sort((a, b) => b - a);
console.log(descending); // [59, 30, 24, 14, 6]
