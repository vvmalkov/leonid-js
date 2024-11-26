class Animal {
  //Приватное (свойство) поле
  #description;

  constructor(name, description) {
    this._name = name;
    this.#description = description;
  }

  #getDescription() {
    return this.#description;
  }

  set name(newName) {
    if (!newName) {
      console.log("Нельзя вводить пустоту!!!");
    } else {
      this._name = newName;
    }
  }

  // получить приватные данные
  get description() {
    return this.#description;
  }

  // изменить приватные данные
  set description(newDescription) {
    if (!newDescription) {
      console.log("Нельзя вводить пустоту!!!");
    } else {
      this.#description = newDescription;
    }
  }

  getName() {
    console.log(
      `Это животное зовут: ${this._name}. Описание: ${this.#getDescription()}`
    );
  }
}

export { Animal };
