### Range de números com ES6

![ Range de números com ES6](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-17/1080x1080-range.png)

#### Código para fácil acesso:

```js
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
};

console.log([...3]);
// [0, 1, 2, 3]

console.log([...6]);
//  [0, 1, 2, 3, 4, 5, 6]
```

Quando você precisa de gerar uma faixa de números ou em ingles (range of numbers), você pode fazer isso de forma bem fácil, usando ES6 no JavaScript.

Com a introdução dos Generators e Iterators, você pode criar um generator que faz isso pra você.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
