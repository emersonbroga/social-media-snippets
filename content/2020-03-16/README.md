### Format Currency

![Format Currency](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-03-04/1080x1080-remove.png)

#### Código para fácil acesso:

```js
const SYMBOL_USD = 'U$';
const SYMBOL_BRL = 'R$';
const SYMBOL_EUR = '€$';

const formatCurrency = (value, currencySymbol) => {
  const parsedValue = isNaN(value) ? 0 : parseFloat(value);
  return `${currencySymbol} ${parsedValue.toFixed(2)}`;
};

formatCurrency(100, SYMBOL_BRL); // R$ 100.00
formatCurrency(200, SYMBOL_USD); // U$ 200.00
formatCurrency(300, SYMBOL_EUR); // €$ 300.00
```

Format Currency

Hoje vou deixar mais um snippet simples e útil para você formatar valores de moeda (currency).
Neste método você passa o valor e o símbolo da moeda, ele se encarrega de verficar tudo e retornar a string valor prontinho.

PS: Já falei em outra oportunidade sobre como usar o toLocaleString() para formatar moedas.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
