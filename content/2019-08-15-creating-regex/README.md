### Criando uma Expressão Regular (Regular Expression ou RegEx)

![Criando uma Expressão Regular (Regular Expression ou RegEx)](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-15-creating-regex/2019-08-15-creating-regex.jpg)

#### Código para fácil acesso:

```js
// forma literal
const urlSlug = /^[a-z0-9-]+$/;

// usando o construtor o objeto RegExp
const urlSlug = new RegExp("^[a-z0-9-]+$");
```

Para criar uma expressão regular no JavaScript, você pode criar da forma literal
colocando sua expressão entre barras e atribuindo à uma variável

```js
const urlSlug = /^[a-z0-9-]+$/;
```

Uma outra forma de criar uma regex é usando o construtor do objeto RegExp:

```js
const urlSlug = new RegExp("^[a-z0-9-]+$");
```

Perceba que ao criar a sua regex usando o construtor, você não precisa de colocar entre barras.

Uma recomendação é de se usar o construtor quando por exemplo você estiver pegando a sua regex
de uma fonte externa, como o vinda de um usuário.

Espero que tenham gostado!

=== Errata: ====

Nas redes sociais eu publiquei uma imagem com erro, corrigi a imagem aqui no github mas nas redes sociais não é possível atualizar a imagem da postagem, então segue aqui a correção.

Na imagem eu mostro:

const urlSlug = new RegExp(/^[a-z0-9-]+\$/);

enquanto na verdade deveria ser:

const urlSlug = new RegExp('^[a-z0-9-]+\$');

=== /Errata: ====

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
