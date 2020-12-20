'use strict';
/*Работа с псевдо массивами
Опишите функцию, которая принимает числа как аргументы и возвращает сумму квадратов этих чисел

Основные требования:
Экспортируйте из файла функцию с именем sumOfSquares
sumOfSquares должна принимать как аргументы числа (любое количество)
sumOfSquares должна вернуть сумму квадратов своих аргументов
*/

// input: num
// output: num
function sumOfSquares() {
  return [].reduce.call(arguments, (acc, elem) => {
      return acc + (elem * elem);
    }, 0);
}

console.log(sumOfSquares(1, 2, 3, 4, 5));