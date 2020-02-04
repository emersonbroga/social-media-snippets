### JSON.parse de forma segura

![JSON.parse](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-04/1080x1080-secure-json-parse.png)

#### Código para fácil acesso:

```js
const parseJson = data => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
};
```

JSON.parse de forma segura

Você pode usar esse snippet para fazer o parse de um json de forma segura, tal que caso o json nao seja válido, você simplesmente retorne null, ao invés de lançar uma exception e eventualmente, caso não esteja tratada, quebrar toda sua aplicação.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
