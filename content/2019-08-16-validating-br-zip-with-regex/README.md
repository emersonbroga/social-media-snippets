### Validando CEP com RegEx


![Validando CEP com RegEx](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-16-validating-br-zip-with-regex/2019-08-16-validating-br-zip-with-regex.jpg)


#### Código para fácil acesso:

```js
const isValidBRZip = (zip) => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(zip);
}

isValidBRZip('30110-002'); // true

isValidBRZip('asdfasdff'); // false

```

Você pode usar expressão regular para validar um número de CEP de forma rápida e fácil. 

Uma outra forma de criar essa mesma função usando uma sintaxe mais curta:

```js
const isValidBRZip = zip => /^[0-9]{5}-[0-9]{3}$/.test(zip);
```

Espero que tenham gostado!

\#javascript \#nodejs \#react


#### Se ainda não segue, conheça as nossas Redes Sociais

<a href="https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-16"><picture>
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


