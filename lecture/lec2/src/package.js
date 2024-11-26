function getUser() {
  return "Leonid S";
}
function getUserPassport() {
  return 123456;
}

// module.exports = getUser; // когда один export
// module.exports = { fun1: getUser, fun2: getUserPassport }; // когда два или более export (старый способ)
module.exports = { getUser, getUserPassport }; //актуальный


// const x = getUser;
// console.log(x());

// function calculateValue(value) {
//   const result = 10 * value;
//   if (Number.isNaN(result)) {
//     return "Ошибка введите число";
//   }
//   return result;
// }
// console.log(calculateValue(5));
// console.log(typeof calculateValue(5));
