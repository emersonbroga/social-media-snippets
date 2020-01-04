### Ternário e Short-Circuit Evaluation

![Ternário e Short-Circuit Evaluation](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-12-ternary-and-short-circuit-evaluation/2019-08-12-ternary-and-short-circuit-evaluation.jpg)

#### Código para fácil acesso:

```jsx
// Ternário
const Band = props => {
  const { isPlaying } = props;
  return isPlaying ? <h1>Hell YEAH!</h1> : null;
};

// Short-Circuit Evaluation
const Band = props => {
  const { isPlaying } = props;
  return isPlaying && <h1>Hell YEAH!</h1>;
};
```

Nos nossos componentes muitas pessoas preferem usar ternários e outras perferem usar o short-circuit evaluation, o resultado apresentado é o mesmo porém a forma de escrever e a clareza do código se diferem.

Além de deixar aqui a dica de que as duas formas são válidas, vou deixar também a seguinte pergunta:

Quais dos dois você prefere usar?

#javascript #nodejs #react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
