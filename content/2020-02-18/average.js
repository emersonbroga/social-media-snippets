const values = [12, 18, 36, 45, 68];
const sum = values.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const avg = sum / values.length;
// 35.8
