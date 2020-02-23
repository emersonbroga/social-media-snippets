function* fibonacci(max) {
  let pre = 0;
  let curr = 1;
  for (let i = 0; i < max; i++) {
    if (i <= 1) yield i;
    [pre, curr] = [curr, pre + curr];
    yield curr;
  }
}

const fib = fibonacci(100);
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8
console.log(fib.next().value); // 13
console.log(fib.next().value); // 21
console.log(fib.next().value); // 34
// ...
