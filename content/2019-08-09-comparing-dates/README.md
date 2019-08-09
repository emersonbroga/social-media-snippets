### Comparando datas no JavaScript

![Comparando datas no JavaScript](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-09-comparing-dates/2019-08-09-comparing-dates.jpg)


Código para fácil acesso:

```js
const isSameTime = (a, b) => {
  return a.getTime() === b.getTime();
}

const a = new Date(2019, 0, 1) 
// 2019-01-01T00:00:00.000Z
const b = new Date(2019, 0, 1) 
// 2019-01-01T00:00:00.000Z
isSameTime(a, b); 
// true
```

Ao comparar datas, use o timestamp do objeto data e faça a comparação dos timestamps.

Obs: nesse exemplo repare que o mês de Janeiro é 0.

Obs2: repare que o timezonezone pode variar de acorcom com o timezone que você estiver.

#javascript #nodejs #react


#### Se ainda não segue, conheça as nossas Redes Sociais

[➜ Participe da nossa lista de desenvolvedores](https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-09)

[➜ Aprenda ES6](https://amzn.to/2J4XnLg)

[➜ Veja as dicas no Instagram](https://www.instagram.com/emersonbrogadev/)

[➜ Assita nosso canal no YouTube](https://www.youtube.com/c/emersonbroga/)

[➜ Curta nossa página no Facebook](https://www.facebook.com/emersonbrogadev/)

[➜ Não perca as atualizações no Twitter](https://www.twitter.com/emersonbrogadev/)

[➜ Veja os repositórios no Github](https://www.twitter.com/emersonbrogadev/)
