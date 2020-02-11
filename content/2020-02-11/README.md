### Passando array como argumentos

![Passando array como argumentos](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-11/1080x1080-array-as-function-arguments.png)

#### Código para fácil acesso:

```js
function band(guitar, bass, drums) {
  return { guitar, bass, drums };
}

const rush = ['Lifeson', 'Lee', 'Peart'];

// antes do ES6
band.apply(rush);

// depois do ES6 com destructuring
band(...rush);
```

Passando array como argumentos

Podem ocorrer casos onde você tem um array que corresponde aos parametros que você quer passar para uma função e uma das formas de passar um array como argumentos para uma função é usando o .apply(). Com o ES6,
você pode fazer isso tambem usando o destructuring.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
