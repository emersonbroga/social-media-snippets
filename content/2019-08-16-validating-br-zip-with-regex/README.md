### Validando CEP com RegEx

![Validando CEP com RegEx](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-16-validating-br-zip-with-regex/2019-08-16-validating-br-zip-with-regex.jpg)

#### Código para fácil acesso:

```js
const isValidBRZip = zip => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(zip);
};

isValidBRZip("30110-002"); // true

isValidBRZip("asdfasdff"); // false
```

Você pode usar expressão regular para validar um número de CEP de forma rápida e fácil.

Uma outra forma de criar essa mesma função usando uma sintaxe mais curta:

```js
const isValidBRZip = zip => /^[0-9]{5}-[0-9]{3}$/.test(zip);
```

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
