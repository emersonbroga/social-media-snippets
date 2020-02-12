### array.every();

![array.every()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-12/1080x1080-every.png)

#### Código para fácil acesso:

```js
const movies = [
  { title: 'Star Wars', genre: 'fiction' },
  { title: 'Matrix', genre: 'fiction' },
  { title: 'The Martian', genre: 'fiction' },
];

// verifica se é ficção
const checkIsFiction = movie => movie.genre === 'fiction';

// verifica se é ação
const checkIsAction = movie => movie.genre === 'action';

// todos os filmes são ficção?
const allFiction = movies.every(checkIsFiction); // true;

// todos os filmes são ação?
const hasAction = movies.every(checkIsAction); // false;
```

array.every()

Usando o array.every() você consegue verificar se todos os items do array atendem a um determinado critério!
Dentro da função de verificação você pode fazer o que for preciso para verificar os critérios necessários e basta apenas retornar true ou false.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
