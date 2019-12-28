### Redirecionamento em JavaScript mantendo os parâmetros da URL

![Redirecionamento em JavaScript mantendo os parâmetros da URL](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-23-javascript-redirect-keeping-the-url-params/2019-08-23-javascript-redirect-keeping-the-url-params.jpg)

#### Código para fácil acesso:

```js
const redirectWithParams = destination => {
  const query = window.location.search || "";
  const result = `${destination}${query}`;
  window.location = result;
};
redirectWithParams("https://emersonbroga.com");
```

Se você quiser fazer um redirecionamento usando JavaScript e quiser manter os mesmo parâmetros da url (querystring) que a página está recebendo, você consegue facilmente, basta pegar o `document.location.search` e concatená-lo com sua url de destino.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
