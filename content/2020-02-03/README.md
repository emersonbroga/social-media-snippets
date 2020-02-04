### Remover objetos duplicados de um array

![Remover objetos duplicados de um array](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-03/1080x1080-remove-duplicated-objects.png)

#### Código para fácil acesso:

```js
const a = { name: "Broga" };
const b = { name: "Emerson" };
const c = { name: "Broga", language: "JavaScript" };

const objects = [a, b, a, c, c];

const unique = [...new Set(objects)];

/*
[ { name: 'Broga' },
  { name: 'Emerson' },
  { name: 'Broga', language: 'JavaScript' } ]
*/
```

Remover objetos duplicados de um array

Usando o spread e o set, você consegue facilmente remover os objetos duplicados de um array.
Uma forma muito mais limpa e que deixa seu código mais legivel graças ao ES6.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
