### Gerando número aleatório

![Gerando número aleatório](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-27-random-int/2019-08-27-random-int.jpg)

#### Código para fácil acesso:

```js
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

rand(1, 5);
```

Com essa função você pode facilmente gerar um numero aleatório inteiro com JavaScript, passando como parâmetros o mínimo (min) e o máximo (max) que irão
definir os limites do números que podem ser gerados.

Vale lembrar que essa é uma função "inclusive" on o mínimo e o máximo podem ser
retornados como valor.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
