## 4 Урок

Методы arr мутирующий не мутирующий.
мутирующий - изменяет массив сам (push добавляет, pop удаляет).
не мутирующий - создается новый массив (filter)

- map, reduse, find
- some, every

> every/some Эти методы используются для проверки массива. <br>Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr. <br>Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.

```js
var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert(arr.every(isPositive)); // false, не все положительные
alert(arr.some(isPositive)); // true, есть хоть одно положительное
```
