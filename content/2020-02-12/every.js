const movies = [
  { title: "Star Wars", genre: "fiction" },
  { title: "Matrix", genre: "fiction" },
  { title: "The Martian", genre: "fiction" },
];

// verifica se é ficção
const checkIsFiction = movie => movie.genre === "fiction";

// verifica se é ação
const checkIsAction = movie => movie.genre === "action";

// todos os filmes são ficção?
const allFiction = movies.every(checkIsFiction); // true;

// todos os filmes são ação?
const hasAction = movies.every(checkIsAction); // false;
