import { Animal as A } from "./models/Animal.js";
import { Cat as C } from "./models/Cat.js";

const a1 = new A("Cat", "Big cat");

a1.getName();

// console.log(a1.#description);

// console.log(a1.description);

a1.description = "cat crazy";
a1.getName();

a1.name = "";
a1.getName();

const c1 = new C("Bob", "little");
c1.getName();

c1.description = "1234345";
c1.getName();
