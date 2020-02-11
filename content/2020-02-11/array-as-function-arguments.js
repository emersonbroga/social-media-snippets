function band(guitar, bass, drums) {
  return { guitar, bass, drums };
}

const rush = ['Lifeson', 'Lee', 'Peart'];

// antes do ES6
band.apply(rush);

// depois do ES6 com destructuring
band(...rush);
