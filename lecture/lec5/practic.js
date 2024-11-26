const data = [
  { name: "Alex", age: 20 },
  { name: "Viktor", age: 30 },
  { name: "Anna", age: 15 },
];

//редис нужно использовать
// const newdata = [{ Alex: 20 }, { Viktor: 30 }, { Anna: 15 }];
let newdata = [];
let arr={}

for (let i = 0; i < 3; i++) {
  
  console.log(Object.values(data[i]));
  console.log(data[i].name);
  console.log(data[i].age);
  arr[data[i].name] = data[i].age;

  newdata.push(arr);
  // arr.data[i].name = data[i].age;
  // const reduce = ; 
}
console.log(1);
console.log(arr);
console.log(1);
console.log(newdata);
