### Array.some();

![Array.some()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-08/1080x1080-some.png)

#### Código para fácil acesso:

```js
const movies = [
  { title: "Matrix", genre: "fiction" },
  { title: "Borat", genre: "comedy" },
  { title: "Gladiator", genre: "drama" },
];

// verifica se é comédia
const checkIsComedy = movie => movie.genre === "comedy";

// verifica se é ação
const checkIsAction = movie => movie.genre === "action";

// tem algum filme de comédia?
const hasComedy = movies.some(checkIsComedy); // true;

// tem algum filme de açao?
const hasAction = movies.some(checkIsAction); // false;
```

Array.some()

Se você quiser verificar se pelo menos um item do array atende a algum critério, você pode usar o array.some() passsando sua função de verificação. Ela precisa apenas de retornar true ou false.

O interessante é que a array.some() irá sair do loop quando o critério for atendido, ajudando na performace.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
