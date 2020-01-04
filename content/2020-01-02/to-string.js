const Person = function(name) {
  this.name = name;
};

const p = new Person("Emerson");

console.log(`Hello ${p}!`); // Hello [object Object]!

Person.prototype.toString = function() {
  return `${this.name}`;
};

console.log(`Hi ${p}!`); // Hi Emerson!
