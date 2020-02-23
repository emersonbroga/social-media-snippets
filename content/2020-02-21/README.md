### Fibonacci com Generators

![Fibonacci com Generators](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-21/1080x1080-fibonacci-generator.png)

![Fibonacci com Generators](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-21/1080x1080-fibonacci-generator-1.png)

#### Código para fácil acesso:

```js
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
```

Fibonacci com Generators

Mais uma forma de gerar a sequencia de Fibonacci, e dessa vez usando generators e destructuring.
Não estou dizendo que é o mais rapido ou o mais performatico, mas é uma forma de utilizar os generators do JavaScript para conseguir o mesmo resultado.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
