### Ternário e Short-Circuit Evaluation

![Ternário e Short-Circuit Evaluation](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-12-ternary-and-short-circuit-evaluation/2019-08-12-ternary-and-short-circuit-evaluation.jpg)


#### Código para fácil acesso:

```jsx
// Ternário
const Band = (props) => {
  const { isPlaying } = props;
  return isPlaying ? <h1>Hell YEAH!</h1> : null;
}

// Short-Circuit Evaluation
const Band = (props) => {
  const { isPlaying } = props;
  return isPlaying && <h1>Hell YEAH!</h1>;
}

```

Nos nossos componentes muitas pessoas preferem usar ternários e outras perferem usar o short-circuit evaluation, o resultado apresentado é o mesmo porém a forma de escrever e a clareza do código se diferem.

Além de deixar aqui a dica de que as duas formas são válidas, vou deixar também a seguinte pergunta:

Quais dos dois você prefere usar?

#javascript #nodejs #react


#### Se ainda não segue, conheça as nossas Redes Sociais

[➜ Participe da nossa lista de desenvolvedores](https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-12)

[➜ Aprenda ES6](https://amzn.to/2J4XnLg)

[➜ Veja as dicas no Instagram](https://www.instagram.com/emersonbrogadev/)

[➜ Assita nosso canal no YouTube](https://www.youtube.com/c/emersonbroga/)

[➜ Curta nossa página no Facebook](https://www.facebook.com/emersonbrogadev/)

[➜ Não perca as atualizações no Twitter](https://www.twitter.com/emersonbrogadev/)

[➜ Veja os repositórios no Github](https://www.github.com/emersonbrogadev/)
