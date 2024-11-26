// const data = [
//   { name: "Alex", age: 20, valid: true },
//   { name: "Viktor", age: 30, valid: false },
//   { name: "Anna", age: 15, valid: true },
// ];

// const info = {
//   isAdmin: false,
//   cash: 0,
// };

// const newData = data.map((el) => {
//   return { ...el, ...info };
// });

// const newData = data
//   .map((el) => ({ ...el, ...info }))
//   .filter((el) => el.valid === true);
// console.log(newData);

// const newNumbers = numbers.map((number) => number * 2); // [] // не мутирующий метод

//?results=" в https параметирзтрованый запрос

// fetch
const URL = "https://randomuser.me/api/?results=";

//инспертоляция
//Промис специальный объект JS (для ассихроный код)

//then - успешный промис
//catch - завершился с ошибкой
let getAPI = [];

function getUser(count) {
  const result = fetch(`${URL}${count}`)
    .then((data) => {
      data.json().then(({ results }) => {
        // console.log(results);
        const length = results.length;
        for (let i = 0; i < length; i++) {
          let users = {
            email: results[i].email,
            name: results[i].name.first,
            phone: results[i].phone,
          };
          getAPI.push(users);
          console.log(users);
        }

        console.log(getAPI);
        console.log(results.length);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(result);
}
getUser(5);
