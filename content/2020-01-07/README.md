### Formatando Moeda

![ Formatando Moeda](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-07/1080x1080-format-currency.png)

#### Código para fácil acesso:

```js
const amount = 1234.56;

const currencyBRL = value => {
  const options = { style: "currency", currency: "BRL" };
  return value.toLocaleString("pt-BR", options);
};

const currencyUSD = value => {
  const options = { style: "currency", currency: "USD" };
  return value.toLocaleString("en-US", options);
};

currencyBRL(amount); // R$ 1.234,56
currencyUSD(amount); // $1,234.56
```

O método toLocaleString() é muito util para se trabalhar com tradução/internacionalização.
Uma das formas que a gente pode usar é para formatação de valores monetários.
Nesse exemplo temos 2 helpers para formatação monetária para BRL (Real Brasileiro) e para USD (Dólar Americano).

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
