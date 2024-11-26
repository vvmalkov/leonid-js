import { Animal } from "./Animal.js";

//extends копирует все методы у родителя (Animal)
class Cat extends Animal {
  constructor(name, description) {
    super(name, description);
  }
}

export { Cat };
