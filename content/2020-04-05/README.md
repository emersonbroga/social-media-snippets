### JSON.stringify()

![JSON.stringify()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-04/1080x1080-remove.png)

#### Código para fácil acesso:

```js
const band = { bass: 'Lee', guitar: 'Lifeson', drums: 'Peart' };

const result = JSON.stringify(band, (key, value) => {
  if (key === 'drums') return `RIP Mr ${value}`;
  return value;
});

console.log(result);
// "{\"bass\":\"Lee\",\"guitar\":\"Lifeson\",\"drums\":\"RIP Mr Peart\"}"
```

JSON.stringify()

Você sabia que você pode passar uma função como segundo parâmetro do JSON.stringify() para alterar o resultado da conversão do objeto para string JSON?
Essa função será executada para cada item do objeto, e receberá a chave (key) e o valor (value) e dentro dessa função você pode simplesmente alterar o resultado a ser gerado da forma que desejar.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
