### Criando uma Expressão Regular (Regular Expression ou RegEx)


![Criando uma Expressão Regular (Regular Expression ou RegEx)](https://github.com/emersonbrogadev/social-media-snippets/blob/master/content/2019-08-15-creating-regex/2019-08-15-creating-regex.jpg)


#### Código para fácil acesso:

```jsx
// forma literal 
const urlSlug = /^[a-z0-9-]+$/;

// usando o construtor o objeto RegExp
const urlSlug = new RegExp(/^[a-z0-9-]+$/);

```

Para criar uma expressão regular no JavaScript, você pode criar da forma literal
colocando sua expressão entre barras e atribuindo à uma variável 

const urlSlug = /^[a-z0-9-]+$/;

Uma outra forma de criar uma regex é usando o construtor do objeto RegExp:

const urlSlug = new RegExp(/^[a-z0-9-]+$/);

Perceba que ao criar a sua regex usando o construtor, você não precisa de colocar entre barras.

Uma recomendação é de se usar o construtor quando por exemplo você estiver pegando a sua regex
de uma fonte externa, como o vinda de um usuário.

Espero que tenham gostado!

\#javascript \#nodejs \#react


#### Se ainda não segue, conheça as nossas Redes Sociais

[➜ Participe da nossa lista de desenvolvedores](https://emersonbroga.com/e/participe/?utm_source=github&utm_medium=social-media-snippets&utm_campaign=2019-08-14)

[➜ Aprenda ES6](https://amzn.to/2J4XnLg)

[➜ Veja as dicas no Instagram](https://www.instagram.com/emersonbrogadev/)

[➜ Assita nosso canal no YouTube](https://www.youtube.com/c/emersonbroga/)

[➜ Curta nossa página no Facebook](https://www.facebook.com/emersonbrogadev/)

[➜ Não perca as atualizações no Twitter](https://www.twitter.com/emersonbrogadev/)

[➜ Veja os repositórios no Github](https://www.github.com/emersonbrogadev/)


