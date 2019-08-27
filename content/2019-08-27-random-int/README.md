### Gerando número aleatório


![Gerando número aleatório](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-27-random-int/2019-08-27-random-int.jpg)


#### Código para fácil acesso:

```js
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
rand(1, 5)

```

Com essa função você pode facilmente gerar um numero aleatório inteiro com JavaScript, passando como parâmetros o mínimo (min) e o máximo (max) que irão
definir os limites do números que podem ser gerados.

Vale lembrar que essa é uma função "inclusive" on o mínimo e o máximo podem ser
retornados como valor.

Espero que tenham gostado!

\#javascript \#nodejs \#react


#### Se ainda não segue, conheça as nossas Redes Sociais

<a href="https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-27"><picture>
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


