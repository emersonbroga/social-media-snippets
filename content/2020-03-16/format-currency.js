const SYMBOL_USD = 'U$';
const SYMBOL_BRL = 'R$';
const SYMBOL_EUR = '€$';

const formatCurrency = (value, currencySymbol) => {
  const parsedValue = isNaN(value) ? 0 : parseFloat(value);
  return `${currencySymbol} ${parsedValue.toFixed(2)}`;
};

formatCurrency(100, SYMBOL_BRL); // R$ 100.00
formatCurrency(200, SYMBOL_USD); // U$ 200.00
formatCurrency(300, SYMBOL_EUR); // €$ 300.00
