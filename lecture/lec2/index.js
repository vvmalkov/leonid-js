// const getU = require("./src/package"); //для одного import
// console.log(getU()); //для одного import

// const lib = require("./src/package");
// console.log(lib.fun2());

// const {fun1, fun2} = require("./src/package");
// console.log(fun1());
// console.log(fun2());

// const { getUser, getUserPassport } = require("./src/package.js");
// console.log(getUser());
// console.log(getUserPassport());

// console.log(require("./src/package").getUser());
const { getUser, getUserPassport } = require("./src/fileOne");
const { getUserNumber } = require("./src/fileTwo");
// const { getUser, getUserPassport } = require("./src/fileOne");
console.log(getUser());
console.log(getUserPassport());
console.log(getUserNumber());
