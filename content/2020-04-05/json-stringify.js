const band = { bass: 'Lee', guitar: 'Lifeson', drums: 'Peart' };

const result = JSON.stringify(band, (key, value) => {
  if (key === 'drums') return `RIP Mr ${value}`;
  return value;
});

console.log(result);
// "{\"bass\":\"Lee\",\"guitar\":\"Lifeson\",\"drums\":\"RIP Mr Peart\"}"
