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
