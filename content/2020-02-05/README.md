### CTRL + C com JavaScript

![CTRL + C com JavaScript](https://github.com/emersonbroga/social-media-snippets/blob/master/content/2020-02-05/1080x1080-copy-to-clipboard.png)

#### Código para fácil acesso:

```html
<input type="text" id="name" />

<button id="copy">Copy</button>

<script type="text/javascript">
  const textInput = document.getElementById("name");
  const copyButton = document.getElementById("copy");

  copyButton.addEventListener("click", () => {
    textInput.select();
    document.execCommand("copy");
  });
</script>
```

CTRL + C com JavaScript

Aqui eu apresento de forma rápida como fazer um CTRL + C utilizando JavaScript.
No HTML você cria um input onde ficará o texto a ser copiado, e um botão que será o gatilho da ação de copiar. No Javascript, você usa o pega os elementos do DOM e e ao clicar você seleciona o texto do input com select e por fim executa o document.execCommand passando o valor copy.

\#javascript \#nodejs \#react

#### Se ainda não segue, conheça as nossas Redes Sociais

[![instagram.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/instagram.png?raw=true)](https://www.instagram.com/emersonbrogadev/)
[![youtube.com/c/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/youtube.png?raw=true)](https://www.youtube.com/c/emersonbroga/)
[![facebook.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/facebook.png?raw=true)](https://www.facebook.com/emersonbrogadev/)
[![twitter.com/emersonbrogadev](https://github.com/emersonbroga/social-media-snippets/blob/master/static/twitter.png?raw=true)](https://www.twitter.com/emersonbrogadev/)
[![github.com/emersonbroga](https://github.com/emersonbroga/social-media-snippets/blob/master/static/github.png?raw=true)](https://www.github.com/emersonbroga/)
