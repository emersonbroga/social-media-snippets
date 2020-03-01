### Validaçao de CEP Brasileiro com REGEX

![Validaçao de CEP Brasileiro com REGEX](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-24/1080x1080-br-zip-code.png)

#### Código para fácil acesso:

```js
const isValidBRZip = zip => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(zip);
};

isValidBRZip('30160-041'); // true

isValidBRZip('asdfasdff'); // false
```

Validaçao de CEP Brasileiro com REGEX

Dessa vez um snippet de validação de CEP.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
