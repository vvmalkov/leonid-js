//валюта
const currency = {
  dollar: 100,
  euro: 99,
  ruble: 50,
};
//клинируем currency
const newCurrency = { ...currency };

for (const value in newCurrency) {
  newCurrency[value] = newCurrency[value] + (newCurrency[value] / 100) * 10;
}

console.log(Object.values(currency));
console.log(newCurrency);
