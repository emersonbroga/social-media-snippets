### array.find();

![array.find()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-13/1080x1080-find.png)

#### Código para fácil acesso:

```js
const movies = [
  { title: 'Star Wars', genre: 'fiction' },
  { title: 'Die Hard', genre: 'action' },
  { title: 'Matrix', genre: 'fiction' },
];

// verifica se é ação
const checkIsAction = movie => movie.genre === 'action';

// encontre o filme de ação
const actionMovie = movies.find(checkIsAction);

// { title: "Die Hard", genre: "action" }
```

array.find()

Como o próprio nome ja diz, usando o find, você consegue encontrar algo dentro de um array.
Basta você passar a função de verificação e dentro dela fazer a verificação necessária retornando true ou false.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
