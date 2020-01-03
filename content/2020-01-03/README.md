### Estrutura de uma Promise()

![Estrutura de uma Promise()](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-01-02/1080x1080-promise-structure.png)

#### Código para fácil acesso:

```js
new Promise((resolve, reject) => {
  // qualquer função assícrona
  if (/* tudo ok */) {
    resolve();
  }else{
    reject();
  }
}).then((result)=> {
  // faça alguma coisa com o "result"
}).catch((error)=>{
  // faça alguma coisa com o "error"
});

```

Use promises para escrever um código mais limpo e acabar com o callback hell.
Os pontos base para entender as Promise são o resolve, reject, then e catch.
Após executar um código assincrono dentro de uma promise, você tem à sua disposição os metodos resolve e reject.
Usando o resolve, você finaliza a promise com sucesso, passando o resultado que irá para o then.
Usando o rejcet, você finaliza a promise com erro, passando o erro para o catch.

Espero que tenham gostado!

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
