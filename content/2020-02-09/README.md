### 3 formas de clonar objetos;

![3 formas de clonar objetos](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-09/1080x1080-clone-objects.png)

#### Código para fácil acesso:

```js
const project = {frontend: 'react', backend: 'express' };

// spread
{ ...project};

// object.assign
Object.assign({}, project);

// JSON
JSON.parse(JSON.stringify(project));
```

3 formas de clonar objetos

Hoje vou mostrar 3 formas de clonar objetos em JavaScript.
A primeira forma, usando o spread operator, é a forma mais moderna de se clonar um objeto, mas você pode fazer isso tambem, usando o Object.assign, que na verdade é uma função para atribuir novas propriedades a um objeto. E por fim você pode usar a JSON.stringify em conjunto com a JSON.parse.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://emersonbroga.com/instagram)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://emersonbroga.com/youtube)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://emersonbroga.com/facebook)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://emersonbroga.com/twitter)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://emersonbroga.com/github)
