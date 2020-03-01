### Objeto URL

![Objeto URL](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-29/1080x1080-url.png)

#### Código para fácil acesso:

```js
const text = 'https://emersonbroga.com/?s=javascript&action=learn';

const url = new URL(text);

console.log(url);

/*
[object URL] {
  hash: "",
  host: "emersonbroga.com",
  hostname: "emersonbroga.com",
  href: "https://emersonbroga.com/?s=javascript&action=learn",
  origin: "https://emersonbroga.com",
  password: "",
  pathname: "/",
  port: "",
  protocol: "https:",
  search: "?s=javascript&action=learn",
  searchParams: [object URLSearchParams] {
    append: function append() { [native code] },
    delete: function delete() { [native code] },
    entries: function entries() { [native code] },
    forEach: function forEach() { [native code] },
    get: function get() { [native code] },
    getAll: function getAll() { [native code] },
    has: function has() { [native code] },
    keys: function keys() { [native code] },
    set: function set() { [native code] },
    sort: function sort() { [native code] },
    toString: function toString() { [native code] },
    values: function values() { [native code] }
  },
  toJSON: function toJSON() { [native code] },
  toString: function toString() { [native code] },
  username: ""
}
*/
```

Objeto URL

Você consegue facilmente converter uma string (válida) para um objeto url, usando a instância da classe URL e com isso ter acesso a diversos métodos.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
