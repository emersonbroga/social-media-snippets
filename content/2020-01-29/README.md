### JSON.stringify()

![JSON.stringify()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-29/1080x1080-json-stringify.png)

#### Código para fácil acesso:

```js
const band = {
  vocals: "Kiedis",
  bass: "Flea",
  drums: "Smith",
  guitar: "frusciante",
};

const selected = ["bass", "guitar"];

const selectedBandMembers = JSON.stringify(band, selected);

// "{\"bass\":\"Flea\",\"guitar\":\"frusciante\"}"
```

JSON.stringify()

Quando você usa o JSON.stringify() você pode passar no segundo parâmetro os campos/propriedades/items que você quer selecionar, sendo assim ele não vai criar uma string de todas as propriedades do objeto, e sim apenas das que você selecionou.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
