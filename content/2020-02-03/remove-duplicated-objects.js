const a = { name: "Broga" };
const b = { name: "Emerson" };
const c = { name: "Broga", language: "JavaScript" };

const objects = [a, b, a, c, c];

const unique = [...new Set(objects)];

/*
[ { name: 'Broga' },
  { name: 'Emerson' },
  { name: 'Broga', language: 'JavaScript' } ]
*/
