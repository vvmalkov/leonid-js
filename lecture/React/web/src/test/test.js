let firstValue = "Start";
const secondValue = (newValue) => {
  firstValue = newValue;
};

const useState = (initValue) => {
  firstValue = initValue;

  return [firstValue, secondValue];
};

// console.log(useState(5));

const [x, y] = useState(6);
console.log(x);
console.log(firstValue);
y(10);
console.log(x);
console.log(firstValue);
