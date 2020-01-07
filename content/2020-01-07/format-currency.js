const amount = 1234.56;

const currencyBRL = value => {
  const options = { style: "currency", currency: "BRL" };
  return value.toLocaleString("pt-BR", options);
};

const currencyUSD = value => {
  const options = { style: "currency", currency: "USD" };
  return value.toLocaleString("en-US", options);
};

currencyBRL(amount); // R$ 1.234,56
currencyUSD(amount); // $1,234.56
