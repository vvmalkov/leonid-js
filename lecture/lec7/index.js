// const response = {
//   results: "null123",
// };

// const data = [];
// const newData = response.results?.map((el) => el + 1);
// console.log(newData);

// const firstURL = "https://randomuser.me/api/?results=1000";
// const secondURL = "https://randomuser.me/api/?results=200";
// const thirdUrl = "https://randomuser.me/api/?results=101";

// const firstURLFetch = fetch(firstURL);
// const seconURLFetch = fetch(secondURL);
// const thirdURLFetch = fetch(thirdUrl);

// Promise.race([firstURLFetch, seconURLFetch, thirdURLFetch]).then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// const getUsers = async () => {
//   const firstResponse = await fetch(firstURL);
//   const secondResponse = await fetch(secondURL);
//   const thirdResponse = await fetch(thirdUrl);
//   const firstData = firstResponse.json();
//   const secondData = secondResponse.json();
//   const thirdData = thirdResponse.json();

//   return Promise.race([firstData, secondData, thirdData]);
// };

// const button = document.getElementById("click");
// const text = document.getElementById("text");

// button.addEventListener("click", ()=>{
//   getUsers().then((results)=>{
//     text.textContent = results.results.length;
//   });

// });

const button = document.getElementById("click");
const input = document.getElementById("input");
const text = document.getElementById("text");

async function getContent(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47689527b85e1a65eae6d1c43e5f4bc0`;
  const fetchURL = await fetch(url);
  const fetchURLJson = await fetchURL.json();
  // console.log(fetchURLJson);
  return fetchURLJson.main.temp;
}

button.addEventListener("click", () => {
  getContent(input.value).then((results) => {
    text.textContent = `Погода в ${input.value}: ${results}`;
  });
});


