### getWindowSize

![getWindowSize](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-08/1080x1080-get-window-size)

#### Código para fácil acesso:

```js
export const getWindowSize = () => {
  const body = document.getElementsByTagName("body")[0];
  const x = window.innerWidth || docElem.clientWidth || body.clientWidth;
  const y = window.innerHeight || docElem.clientHeight || body.clientHeight;
  return { x, y };
};
```

Mais um helper bacana pra você usar em seus projetos. Quer pegar o tamanho da tela, use essa função e ela lhe retornará a largura e altura (width and height);

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
