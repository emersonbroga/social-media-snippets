### Filtrando valores "Falsos"

![Filtrando valores Falsos](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-15/1080x1080-filter-falsy-values.png.png)

#### Código para fácil acesso:

```js
const data = [1, null, 3, undefined, 5, false, 7, '', 9];

const filteredData = data.filter(Boolean);

// [1, 3, 5, 7, 9]
```

Filtrando valores "Falsos"

Você pode filtrar os valores "falsos" de um array, usando a função filter e apenas passando o Boolean.
Eu estou chamando de "falsos" entre aspas, pois não me refiro a falso como a tradução do boolean false, e sim aos "falsy" values em inglês. Eles são valores como "", null, undefined, 0, etc.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
