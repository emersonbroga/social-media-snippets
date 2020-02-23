### Promise.race();

![Promise.race()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-20/1080x1080-promise-race.png)

#### Código para fácil acesso:

```js
const ferrari = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'ferrari');
});

const mclaren = new Promise(function(resolve, reject) {
  setTimeout(resolve, 200, 'mclaren');
});

Promise.race([ferrari, mclaren]).then(function(value) {
  console.log(value);
});

// ferrari
```

Promise.race();

Usando o Promise.race(), você pode passar um array de promises a serem executadas.
Todas elas serão executadas, porém ele vai retornar assim que a primeira promise se resolver ou se rejeitar.
Muito bacana o conceito!

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
