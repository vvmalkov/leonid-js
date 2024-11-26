// foo bar baz
// var sum = 6;
// function bar() {
//   return function foo() {
//     console.log(sum);
//     var sum = 5;
//     console.log(sum);
//     sum += 10;
//     console.log(sum);
//   };
// }

// baz();
// const result = bar();
// result();

// console.log(sum);

// import { readFile } from "fs";

// function getInputInfo() {
//   let result;
//   readFile("inpu.txt", "utf-8", (error, data) => {
//     if (error) {
//       console.log("Ошибка");
//     } else {
//       result = data;
//     }
//   });
//   return result;
// }

// const text = getInputInfo();
// console.log(text);

//!!!!!

// async function getInfo() {
//   try {
//     const response = await fetch("http://google.cdsfm"); // resolve
//     console.log(response);
//   } catch (err) {
//     //reject
//     console.log(err);
//   }
// }

// getInfo();

// function getInfo() {
//   fetch("https://google.com")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getInfo();
// const number = 12;
// const p1 = new Promise((res, rej) => {
//   if (number % 2 === 0) {
//     res("good"); // resolve
//   }
//   rej("bad"); // reject
// });

// async function fn() {
//   try {
//     const result = await p1;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fn();
// console.log("!!!!");

// import { readFile } from "fs";
// import { readFile } from "fs/promises

// const getInfo = (filePath, code) => {
//   // promisify (промисификация)
//   return new Promise((resolve, reject) => {
//     readFile(filePath, code, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getInfo("input.txt", "utf-8")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const proccessReadFile = async () => {
//   const data = await readFile("input.txt", "utf-8");
// };

// const proccessReadFile = async () => {
//   console.log("!");
//   const data = await getInfo("input.txt", "utf-8");
//   console.log(data);
// };

// proccessReadFile();

//!!!! writeFile
// import { writeFile } from "fs";

// const writeInfo = (filePath, newData, code) => {
//   return new Promise((resolve, reject) => {
//     writeFile(filePath, newData, code, (error) => {
//       if (error){
//         reject(error);
//       }
//       resolve("Файл записан");
//     });
//   });
// };

// const proccessWriteFile = async () => {
//   console.log("!");
//   const result = await writeInfo("output.txt", "!!123", "utf-8");
//   console.log(result);
// };

// proccessWriteFile();

//!!!! readDirfs
import { readdir } from "fs";

const readdirInfo = (filePath) => {
  return new Promise((resolve, reject) => {
    readdir(filePath, (err, data) => {
      if (data) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

const proccessReaddirInfo = async () => {
  console.log("!");
  const result = await readdirInfo("../lec8/");
  console.log(result);
};

proccessReaddirInfo();
