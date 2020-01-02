### Entendendo o .toString()

![.toString()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-02/1080x1080-to-string.png)

#### Código para fácil acesso:

```js
const Person = function(name) {
  this.name = name;
};

const p = new Person("Emerson");

console.log(`Hello ${p}!`); // Hello [object Object]!

Person.prototype.toString = function() {
  return `${this.name}`;
};

console.log(`Hi ${p}!`); // Hi Emerson!
```

O método toString é chamado automaticamente quando tentamos converter um Objeto em String, seja de forma explícita ou implícita.

Porém alguns objetos o JavaScript simplesmente não sabe o que fazer ao converter para string, então ele retorna [object Object].

Porém você pode atribuir uma função ao toString para que ela funcione como você definir.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
