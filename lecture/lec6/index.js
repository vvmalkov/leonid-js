const { readFile, appendFile } = require("fs").promises;

async function getContent(filePath, count) {
  const start = new Date();
  try {
    const URL = await readFile(filePath, "utf8");
    const resultURL = await fetch(`${URL}${count}`);

    const resultURLJson = await resultURL.json();
    const length = await resultURLJson.results.length;
    // for (let i = 0; i < length; i++) {
    //   const user = `${resultURLJson.results[i].name.first} ${resultURLJson.results[i].name.last}\n`;
    //   await appendFile("output.txt", user, "utf8");
    // }
    const dataPromises = [];
    for (let i = 0; i < length; i++) {
      const user = `${resultURLJson.results[i].name.first} ${resultURLJson.results[i].name.last}\n`;
      dataPromises.push(appendFile("output.txt", user, "utf8"));
    }
    await Promise.all(dataPromises);
    const stop = new Date();
    console.log(stop - start);
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

getContent("input.txt", 1000);
