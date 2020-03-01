const isValidBRZip = zip => {
  const pattern = /^[0-9]{5}-[0-9]{3}$/;
  return pattern.test(zip);
};

isValidBRZip('30160-041'); // true

isValidBRZip('asdfasdff'); // false
