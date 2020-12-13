/*Reverse String
Напишите функцию, которая будет "переворачивать строку"

Основные требования:
Функция должна называться reverseString
Функция должна принимать как аргумент строку
Функция должна вернуть строку, где символы будут идти в обратном порядке
Функция должна вернуть null, если пердана не строка */

const reverseString = str => {
 return typeof str !== 'string' ? null :
    str.split('').reverse().join('');
}
console.log(reverseString('hello'));