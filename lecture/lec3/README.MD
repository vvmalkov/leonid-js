## 3 Урок

Созсоздание объекта через литерал const имя ={
пары ключ значения в объекте называются полями или свойствами
}

ДЗ

- Повторить чем являются ключи и значения у объекта (Какими типами данных)
- [x] Узнать все способы копирования объекта

  ### Поверхностное копирование

        + Object.assign()
        - Метод Object.assign() создает поверхностную копию объекта, копируя значения всех собственных перечисляемых свойств из одного или нескольких источников в целевой объект.

        ```js
            const obj1 = { a: 1, b: 2 };
            const obj2 = Object.assign({}, obj1);
            console.log(obj2); // { a: 1, b: 2 }
        ```

        + Spread Operator
        Оператор распространения (...) также создает поверхностную копию объекта.

        ```js
            const obj1 = { a: 1, b: 2 };
            const obj2 = { ...obj1 };
            console.log(obj2); // { a: 1, b: 2 }
        ```

  ### Глубокое копирование

  - JSON способы

    - Используйте JSON.stringify() и JSON.parse(), чтобы создать глубокую копию. Однако этот метод не подходит для объектов с функциями, undefined, символами и такими типами, как Date.

    ```js
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = JSON.parse(JSON.stringify(obj1));
    console.log(obj2); // { a: 1, b: { c: 2 } }
    ```

- [x] Разобрать как можно достать ключи у объекта

  - Object.keys()
    ```JS
        const obj = {
        name: 'Alice',
        age: 30,
        city: 'Wonderland'
        };
        const keys = Object.keys(obj);
        console.log(keys); // ['name', 'age', 'city']
    ```
  - Object.entries() Возвращает массив пар «ключ-значение».

    ```JS
      const obj = {
      name: 'Alice',
      age: 30,
      city: 'Wonderland'
      };

      const entries = Object.entries(obj);
      console.log(entries); // [['name', 'Alice'], ['age', 30], ['city', 'Wonderland']]
    ```

    - for...in цикл

      ```JS
        const obj = {
        name: 'Alice',
        age: 30,
        city: 'Wonderland'
        };
       for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
          console.log(key); // выводит каждый ключ
          }
      }
      ```

- { } внутри объекта есть валюты с курсом, увеличить курс на 10%
