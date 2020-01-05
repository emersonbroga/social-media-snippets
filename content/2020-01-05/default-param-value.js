// OLD JS
function getGuitarist(value) {
  const currentGuitarist = value || "John Frusciante";
  return currentGuitarist;
}

// ES6
const getGuitarist = (value = "John Frusciante") => value;

getGuitarist(); // 'John Frusciante'
getGuitarist("Josh Klinghoffer"); // Josh Klinghoffer
