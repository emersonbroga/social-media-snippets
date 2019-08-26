### Validando email com RegEx


![Validando email com RegEx](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-26-email-validation-with-regex/2019-08-26-email-validation-with-regex.jpg)


#### Código para fácil acesso:

```js
const isEmail = (text) => {
  return /^.+@.+$/.test(text);
}

```

Com a quantidade de top-level domains hoje em dia, fica dificil validar emails.
Usando RegEx (Regular Expressions ou Expressões regulares) a única coisa que a gente pode verificar é se o email contém o @ e algum texto antes e depois do @. No mais seria mandar o email de confirmação para validade de verdade.

Outra forma mais curta de escrever essa função seria:

```js
const isEmail = text => /^.+@.+$/.test(text);
```

Espero que tenham gostado!

\#javascript \#nodejs \#react


#### Se ainda não segue, conheça as nossas Redes Sociais

<a href="https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-26"><picture>
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


