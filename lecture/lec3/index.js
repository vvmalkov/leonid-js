const { faker } = require("@faker-js/faker");

const person = {
  name: "Kirill",
  age: 21,
  email: faker.internet.email(),
  city: "Moscow",
  value: 999,
};

const infoPerson = {
  secret: "123456789",
};

// console.log(person["name"]);
// console.log(person.email);
const value = "email";
// console.log(person[value]);

// console.log("hasOwnProperty" in person);
// console.log(person.hasOwnProperty("hasOwnProperty"));
const arr = [];
// console.log("push" in arr); //глобальный поиск

// console.log(arr.hasOwnProperty("push")); //конкретный объект
// console.log(Object.getPrototypeOf(arr));
// global.secret = 1;
// console.log(global);
const merge = Object.assign(person, infoPerson);
// console.log(merge);
merge.name = "Maks";
console.log(merge.name, person.name);
const newMerge = { ...person, ...infoPerson };
// console.log(newMerge);
newMerge.name = "Vlad";
// console.log(newMerge.name);
// console.log(person.name);

const obj1 = {
  a: 5,
};

const obj2 = {
  a: 5,
};
const newObj = {
  1: 10,
};
const func = () => {
  console.log(123);
};
newObj[obj1] = 8;
console.log(newObj[obj1]);
newObj[obj2] = 12;
// console.log(newObj[obj1]);
console.log(newObj[obj1]);
console.log(newObj);
console.log(String(obj1));
console.log(String(func));
