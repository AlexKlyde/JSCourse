'use strict';

/* Фильтр имен
Напишите функцию которая будет находить имена в массиве строк, которые содержат входящую текст text и имеют длину больше 5

Основные требования:
Функция должна называться filterNames(arr, text). arr - массив строк, text - входящая строка
Функция должна возвращать массив элементов, которые содержат в себе строку text и имеют длину больше 5
Используйте метод массивов filter для решения текущей задачи. Циклы for и while здесь использовать не нужно

Пример работы:
Input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
Output: ['Olivya', 'Nastya'] */

const filterNames = (arr, text) => {
  return arr.filter(name => name.includes(text) && name.length > 5);
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));