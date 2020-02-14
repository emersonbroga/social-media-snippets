### Passando parâmetros para o setTimeout

![Passando parâmetros para o setTimeout](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-14/1080x1080-timeout-with-params.png)

#### Código para fácil acesso:

```js
const multiply = (a, b) => a * b;

const delay = 1000;

// usando função
setTimeout(() => {
  multiply(2, 4);
}, delay);

// passando os parâmetros diretamente
setTimeout(multiply, delay, 2, 4);
```

Passando parâmetros para o setTimeout

Quando você usa o setTimeout, você pode passar os parametros diretamente para a função de timeout do terceiro parâmetro em diante, ficando o primeiro parâmetro como a função a ser chamada, o segundo como o delay, e do terceiro em diante os items que seram enviados à função.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
