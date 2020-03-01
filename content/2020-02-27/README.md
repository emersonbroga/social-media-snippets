### URLSearchParams();

![URLSearchParams()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-27/1080x1080-urlsearchparams.png)

#### Código para fácil acesso:

```js
// https://emersonbroga.com/?s=javascript&action=learn'
const urlParams = new URLSearchParams(window.location.search);

urlParams.has('s');
// true

urlParams.get('s');
// javascript

urlParams.getAll('action');
// [learn]

urlParams.toString();
// s=javascript&action=learn

urlParams.append('follow', 'emersonbrogadev');
// https://emersonbroga.com/?s=javascript&action=learn&follow=emersonbrogadev
```

URLSearchParams()

Usando o URLSearchParams(); você consegue ter acesso a várias funções relativas ao objeto URL.
Essas funções permitem verificar, buscar e manipular dados de um objeto URL.

OBS: Para transformar uma string em url, use uma instancia de URL (new URL());

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
