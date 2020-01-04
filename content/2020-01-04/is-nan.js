isNaN("true"); // true
isNaN("false"); // true
isNaN("XYZ"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN(() => {}); // true
isNaN(console.log); // true
isNaN(this); // true
