### Máscara para número de telefone brasileiro

![Máscara para número de telefone brasileiro](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-12/1080x1080-phone-mask.png)

#### Código para fácil acesso:

```js
const phoneMask = event => {
  const e = event || window.event;
  const code = e.keyCode;
  if (code === 8) return;

  var input = e.target;
  var value = (input && input.value) || null;
  if (!value) return;

  value = value.replace(/\D/g, "");

  const ddd = value.substring(0, 2);
  const nine = value.substring(2, 3);
  const prefix = value.substring(3, 7);
  const suffix = value.substring(7, 11);

  const parts = [];
  if (ddd) parts.push("(" + ddd + ")");
  if (nine) parts.push(" " + nine);
  if (prefix) parts.push(" " + prefix);
  if (suffix) parts.push("-" + suffix);
  e.target.value = parts.join("");
};
```

Essa função deve ser aplicada em seu input de telefone, no listener de keyUp (<input type="text" onkeyup="phoneMask(event)" />).
Com ele a cada tecla digitada, ele irá fazer as verificações e retornar ao input o numero de telefone já formatado.
Ficando no número final (12) 3 4567-8901.
Usei esse snippet recentemente em um projeto e acredito que ainda tenha espaço para melhorias.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
