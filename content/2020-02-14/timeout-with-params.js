const multiply = (a, b) => a * b;

const delay = 1000;

// usando função
setTimeout(() => {
  multiply(2, 4);
}, delay);

// passando os parametros diretamente
setTimeout(multiply, delay, 2, 4);
