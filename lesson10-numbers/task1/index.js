/*Проверка чисел
Создайте функции, которые будут искать указанные числа в массиве

Основные требования:
Функция с названием getFiniteNumbers должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод Number.isFinite
Функция с названием getFiniteNumbersV2 должна отбросить все элементы исходного массива, которые не являются конечными числами. Для проверки должна использовать метод isFinite
Функция с названием getNaN должна вернуть все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод Number.isNaN
Функция с названием getNaNV2 должна вернуть все элементы исходного массива, которые имеют значение NaN. Для проверки должна использовать метод isNaN
Функция с названием getIntegers должна отбросить все элементы исходного массива, которые не являются целыми числами. Для проверки должна использовать метод
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.isNaN vs isNaN и Number.isFinite vs isFinite
*/
const arr = [Infinity, 23, '25', 26,];
const arr2 = [NaN, 'text', 17, Infinity]

const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr))
console.log(getNaN(arr2));
console.log(getNaNV2(arr2));
console.log(getIntegers(arr));