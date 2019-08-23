### Redirecionamento em JavaScript mantendo os parâmetros da URL


![Redirecionamento em JavaScript mantendo os parâmetros da URL](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-23-javascript-redirect-keeping-the-url-params/2019-08-23-javascript-redirect-keeping-the-url-params.jpg)


#### Código para fácil acesso:

```js
const redirectWithParams = (destination) => {
  const query = window.location.search || '';
  const result = `${destination}${query}`;
  window.location = result;
}
redirectWithParams('https://emersonbroga.com');

```

Se você quiser fazer um redirecionamento usando JavaScript e quiser manter os mesmo parâmetros da url (querystring) que a página está recebendo, você consegue facilmente, basta pegar o `document.location.search` e concatená-lo com sua url de destino.

Espero que tenham gostado!

\#javascript \#nodejs \#react


#### Se ainda não segue, conheça as nossas Redes Sociais

<a href="https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-23"><picture>
<source type="image/webp" srcset="https://emersonbroga.com/wp-content/uploads/2019/08/subscription_banner.jpg.webp">
<img src="https://emersonbroga.com/wp-content/uploads/2019/08/subscription_banner.jpg">
</picture>
</a>

[➜ Aprenda ES6](https://amzn.to/2J4XnLg)

[➜ Veja as dicas no Instagram](https://www.instagram.com/emersonbrogadev/)

[➜ Assita nosso canal no YouTube](https://www.youtube.com/c/emersonbroga/)

[➜ Curta nossa página no Facebook](https://www.facebook.com/emersonbrogadev/)

[➜ Não perca as atualizações no Twitter](https://www.twitter.com/emersonbrogadev/)

[➜ Veja os repositórios no Github](https://www.github.com/emersonbrogadev/)


