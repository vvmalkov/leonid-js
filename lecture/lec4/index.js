// const data = [1, 2, 3];
// const dataArray = new Array([1, 2, 3]);

// console.log(data.length);
// console.log(data.push(10)); //мутирующий метод
// console.log(data.pop()); // удаляет последний элемент массив

// class Abs {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   myPush(number) {
//     this.arr = [...this.arr, number];
//     return this.arr.length;
//   }
// }

// const numbers = new Abs([1, 2, 3]); // экземпляр класса Abs
// console.log(numbers.myPush(5));

// console.log(numbers.arr);

// const obj1 = { name: "Alex", age: 20 };
// const obj2 = new Object({ age: 20, name: "Alex" });

// console.log(JSON.parse('{"name": "Alex"}')); ///str JSON => obj
// console.log(JSON.stringify(obj1)); // obj => str JSON
// const obj3 = JSON.parse(JSON.stringify(obj1));
// console.log(obj3 === obj1);
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// console.log(obj1, obj2);
// console.log(obj1 === obj2); //false

// const number1 = 5;
// const number2 = 5;
// console.log(`numbers: ${number1 === number2}`); // true

// const obj1 = { name: "Alex", age: 20 };
// const obj2 = new Object({ age: 20, name: "Alex" });

// ArrowCompare();
// declCompare();

// const ArrowCompare = (obj1, obj2) => true;

// function declCompare(obj1, obj2) {
//   return true;
// }

//!! Метод filter
// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.filter((number) => number > 3); // [] // не мутирующий метод
// console.log(numbers);
// console.log(newNumbers);

// const cb = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// const myFilter = (arr, cb) => {
//   const newArr = [];
//   for (const el of arr) {
//     if (cb(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// console.log(myFilter([1, 2, 3, 4, 5], cb));

//!! Метод map
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number * 2); // [] // не мутирующий метод
console.log(numbers);
console.log(newNumbers);

const cb = (number) => {
  return number * 2;
};

const myMap = (arr, cb) => {
  const newArr = [];
  for (const el of arr) {
    if (cb(el)) {
      newArr.push(el);
    }
  }
  return newArr;
};

console.log(myMap([1, 2, 3, 4, 5], cb));

//!! Метод find
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.find((number) => number === 8); // [] // не мутирующий метод
// console.log(numbers);
// console.log(newNumbers);

// const cb = (number) => {
//   if (number === 2) {
//     return true;
//   }
//   return false;
// };

// const myFind = (arr, cb) => {
//   for (const el of arr) {
//     if (cb(el)) {
//       return el;
//     }
//   }
//   return undefined;
// };

// console.log(myFind([1, 2, 3, 4, 5], cb));

//!! Метод reduce
const numbers = [10, 2, 3, 4, 5];
const newNumbers = numbers.reduce((a, b) => {
  return a / b;
}); // [] // не мутирующий метод
console.log(numbers);
console.log(newNumbers);

const cb = (previousValue, currentValue) => {
  if (currentValue) {
    return previousValue / currentValue;
  }
  return false;
};

//140 ошибка (добавить аккамулятор)
const myReduce = (arr, cb) => {
  let result = arr[0];
  let counter = 0;
  console.log(`result = ${result}`);
  for (const el of arr) {
    if (counter > 0) {
      counter++;
      result = cb(result, el);
    }
    counter++;
  }
  return result;
};

console.log(myReduce([10, 2, 3, 4, 5], cb));

// реализовать свой map, reduce, find
// some, every - повторить методы
