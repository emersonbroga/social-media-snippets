const ferrari = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'ferrari');
});

const mclaren = new Promise(function(resolve, reject) {
  setTimeout(resolve, 200, 'mclaren');
});

Promise.race([ferrari, mclaren]).then(function(value) {
  console.log(value);
});

// ferrari
