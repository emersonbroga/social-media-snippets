const items = ['a', 'b', 'c'];

for (let key in items) {
  console.log(key);
}
// 0 1 2

for (let value of items) {
  console.log(value);
}
// a b c
