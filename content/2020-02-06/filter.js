const movies = [
  { title: "Star Wars", genre: "fiction" },
  { title: "Matrix", genre: "fiction" },
  { title: "Die Hard", genre: "action" },
];

// verifica se é ficção
const checkIsFiction = movie => movie.genre === "fiction";

// quais filmes são ficção?
const fictionMovies = movies.filter(checkIsFiction);
/*
[
  { "title": "Star Wars", "genre": "fiction" },
  { "title": "Matrix", "genre": "fiction" }
]
*/
