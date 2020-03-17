### Implementação simples do Lodash Get

![Implementação simples do Lodash Get](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-17/lodash-get-01.png)

![Implementação simples do Lodash Get](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-17/lodash-get-02.png)

![Implementação simples do Lodash Get](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-17/lodash-get-03.png)

#### Código para fácil acesso:

```js
const get = (object, path, defaultValue = null) => {
  if (typeof path === 'string') path = path.split('.').filter(key => key.length);
  const result = path.reduce((dive, key) => dive && dive[key], object);
  return result || defaultValue;
};

const data = {
  user: {
    name: 'Casey Neistat',
    address: { city: 'Los Angeles' },
    socialNetworks: ['youtube', 'facebook', 'instagram'],
  },
};

get(data, 'user.address.city'); // Los Angeles
get(data, 'user.socialNetworks.1'); // facebook
get(data, 'user.address.country', 'USA'); // USA
```

Implementação simples do Lodash Get

O Lodash é uma biblioteca com várias funções úteis que facilitam sua vida no JavaScript.
Uma das funções que eu mais utilizo é o \_.get() que permite que você pegue um valor de um determinado
objeto, passando o seu caminho, e ele internamente faz a verificação se esses dados existem sem lançar erros.

Uma função muito útil, pois até entao não tinhamos o Null Coalescing Operator.

De toda forma, essa simples implementação mantem seu código limpo e evita erros desnecessários.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
