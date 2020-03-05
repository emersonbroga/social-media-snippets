const size = val => {
  if (!val) return 0;
  return val.size || val.length || Object.keys(val).length;
};

size([1, 2, 3, 4, 5]); // 5
size('paçoca'); // 6
size({ bass: 'Lee', guitar: 'Lifeson', drums: 'Peart' }); // 3
