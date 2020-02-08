const movies = [
  { title: "Matrix", genre: "fiction" },
  { title: "Borat", genre: "comedy" },
  { title: "Gladiator", genre: "drama" },
];

// verifica se é comédia
const checkIsComedy = movie => movie.genre === "comedy";

// verifica se é ação
const checkIsAction = movie => movie.genre === "action";

// tem algum filme de comédia?
const hasComedy = movies.some(checkIsComedy); // true;

// tem algum filme de açao?
const hasAction = movies.some(checkIsAction); // false;
