const helloween = [
  'Daniel Loble',
  'Michael Weikath',
  'Andi Deris',
  'Markus Grosspkopf',
  'Sasha Gerstner',
];
const oldMembers = ['Michael Kiske', 'Kay Hansen'];

const pumpkinsUnited = [...helloween, ...oldMembers];

console.log(pumpkinsUnited);
/*
 [
   "Daniel Loble",
   "Michael Weikath",
   "Andi Deris",
   "Markus Grosspkopf",
   "Sasha Gerstner",
   "Michael Kiske",
   "Kay Hansen"
  ]
*/

