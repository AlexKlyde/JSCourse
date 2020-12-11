/*Парсинг чисел
Создайте функции, которые будут парсить числа в массиве

Основные требования:
Функция с названием getParsedIntegers должна каждый элемент массива привести к целому чилому и вернуть их в виде массива. Для парсинга должен использоваться метод Number.parseInt
Функция с названием getParsedIntegersV2 должна каждый элемент массива привести к целому чилому и вернуть их в виде массива. Для парсинга должен использоваться метод parseInt
Функция с названием getParsedFloats должна каждый элемент массива привести к дробному чилому и вернуть их в виде массива. Для парсинга должен использоваться метод Number.parseFloat
Функция с названием getParsedFloatsV2 должна каждый элемент массива привести к дробному чилому и вернуть их в виде массива. Для парсинга должен использоваться метод parseFloat
Во всех ф-циях исходный массив должен оставаться неизменным
Сравните результаты работы методов Number.parseInt vs parseInt и Number.parseFloat vs parseFloat 
*/

const arr = [10.2, "11", "12text", -12, 'de24']

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));