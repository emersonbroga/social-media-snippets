const movies = [
  { title: "Star Wars", genre: "fiction" },
  { title: "Die Hard", genre: "action" },
  { title: "Matrix", genre: "fiction" },
];

// verifica se é ação
const checkIsAction = movie => movie.genre === "action";

// encontre o filme de ação
const actionMovie = movies.find(checkIsAction);

// { title: "Die Hard", genre: "action" }
