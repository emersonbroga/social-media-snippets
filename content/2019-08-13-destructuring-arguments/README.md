### Destructuring Arguments

![Destructuring Arguments](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-13-destructuring-arguments/2019-08-13-destructuring-arguments.jpg)

#### Código para fácil acesso:

```jsx
// sem destructuring
const App = props => {
  const band = props.band;
  return <h1>{band}</h1>;
};

// com destructuring
const App = ({ band }) => {
  return <h1>{band}</h1>;
};
```

Uma outra prática muito comum no JavaScript moderno e principalmente no React é a de usar o destructuring nos argumentos de uma função.

Você pode usar o destructuring diretamente nos argumentos da função, podendo pegar o objeto que foi passado exatamente o que você precisa dentro daquela função.

#javascript #nodejs #react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
