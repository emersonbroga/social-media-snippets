### Array.filter();

![Array.filter()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-06/1080x1080-filter.png)

#### Código para fácil acesso:

```js
const movies = [
  { title: "Star Wars", genre: "fiction" },
  { title: "Matrix", genre: "fiction" },
  { title: "Die Hard", genre: "action" },
];

// verifica se é ficção
const checkIsFiction = movie => movie.genre === "fiction";

// quais filmes são ficção?
const fictionMovies = movies.filter(checkIsFiction);
/*
[
  { "title": "Star Wars", "genre": "fiction" },
  { "title": "Matrix", "genre": "fiction" }
]
*/
```

Array.filter()

Como o próprio nome já diz, você pode usar o array filter para filtrar os items de um array. Para isso basta passar a função de filtragem, que será executada com cada um dos items do array, e dentro dessa função você pode fazer qualquer tipo de filtragem que desejar, basta retornar true ou false, que os items serão filtrados ou não.

\#javascript \#nodejs \#react

Espero que tenham gostado!

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
