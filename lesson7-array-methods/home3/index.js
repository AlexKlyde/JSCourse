'use strict';

/* Увеличение четных - методы массивов
Напишите функцию которая будет увеличивать четные числа массива на delta

Основные требования:
Функция должна называться increaseEvenEl(arr, delta)
Функция должна вернуть null, если в качестве аргумента передан не массив
Если аргумент - массив, то функция должна увеличивать четные числа массива на delta
Используйте метод массивов map для решения текущей задачи. Циклы for и while здесь использовать не нужно

Пример работы:
Input: increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)
Output: [22, 5, 26, 28, 11, 9, 24] */

const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) {
        return null;
    }

    const increased = arr.map(num => {
       if(num % 2 === 0) {
        return num + delta;
      }

      return num;
    });

    return increased;
}

// Example 2

const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) {
        return null;
    }

    return arr.map(num => num % 2 === 0 ? num + delta : num);
}

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
