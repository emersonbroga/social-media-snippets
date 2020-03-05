### Size

![Size](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-03/1080x1080-size.png)

#### Código para fácil acesso:

```js
const size = val => {
  if (!val) return 0;
  return val.size || val.length || Object.keys(val).length;
};

size([1, 2, 3, 4, 5]); // 5
size('paçoca'); // 6
size({ bass: 'Lee', guitar: 'Lifeson', drums: 'Peart' }); // 3
```

Size

Snippet bem simples, usando vários ternarios aninhados para retornar o tamanho (size) de valores de arrays, strins e objetos.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
