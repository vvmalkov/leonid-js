// const box = [];
const newBox = new Array(8);
console.log(newBox);
class People {
  // static находится только в class People
  static info = "это класс людей";
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.cash = 0;
    this.storyOperations = [];
  }

  getInfoUser() {
    return `Твое имя ${this.name}, твой возрост ${this.age}`;
  }

  writeOperations(typeOperations) {
    this.storyOperations.push({
      id: this.storyOperations.length + 1,
      typeOperations: typeOperations,
      date: new Date(),
    });
  }
  getStoryOperations() {
    this.storyOperations.forEach(({ id, typeOperations, date }) => {
      console.log(
        `Номер операции: ${id}, тип операции: ${typeOperations}, время операции ${date}.`
      );
    });
  }

  accrueСash(value) {
    this.cash += value;
    this.writeOperations("+");
  }

  spendCash(value) {
    this.cash -= value;
    this.writeOperations("-");
  }

  giveCashPeople(getCashPeople, value) {
    this.cash -= value;
    this.writeOperations("-");
    getCashPeople.cash += value;
    getCashPeople.writeOperations("+");
  }
}
const p1 = new People("Leonid", 30);
const p2 = new People("Alex", 25);
console.log(p1.getInfoUser());
console.log(p2.getInfoUser());

p1.accrueСash(5000);
p2.accrueСash(7000);
p2.spendCash(1000);

p1.getStoryOperations();
p2.getStoryOperations();

console.log(p1.cash);
console.log(p2.cash);

p1.giveCashPeople(p2, 99);

console.log(p1.cash);
console.log(p2.cash);

// console.log(p1.info);
// console.log(People.info);
// console.log(p2.info);
// p1.name = "Maks";
// console.log(p1.name);
// console.log(p2.name);
// People.info = "Новый класс людей";
// console.log(p1.info);
// console.log(p2.info);
// console.log(People.info);

// const p3 = new People("Aleks", 5);
// console.log(p3.info);
