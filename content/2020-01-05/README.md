### Valor padrão nos parâmetros com ES6

![Valor padrão nos parâmetros com ES6](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-05/1080x1080-default-param-value.png)

#### Código para fácil acesso:

```js
// OLD JS
function getGuitarist(value) {
  const currentGuitarist = value || "John Frusciante";
  return currentGuitarist;
}

// ES6
const getGuitarist = (value = "John Frusciante") => value;

getGuitarist(); // 'John Frusciante'
getGuitarist("Josh Klinghoffer"); // Josh Klinghoffer
```

Esses dois exemplos têm exatamente o mesmo efeito/resultado.
No primeiro exemplo temos um javascript antigo, onde verificamos se o "value" foi passado e caso contrário retornamos o valor padrão.

Já no segundo exemplo, temos um código bem mais enxuto, escrito em JavaScript Moderno, usando arrow functions e o default param value.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
