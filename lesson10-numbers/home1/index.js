/*Сумма дробных чисел
Создайте функцию, которая будет возвращать округленную сумму чисел

Основные требования:
Функция должна называться getTotalPrice
Функция должна принимать массив чисел (могут быть дробные) как единственный аргумент
Функция должна посчитать сумму чисел массива, окрунлить ее до 2-х знаков и вернуть в формате '$17.15'
Округление должно проходить в меньшую сторону (17.159 => 17.15)
 */


const arr = [12.34, 15, 23.456]

const getTotalPrice = arr => {
  const result = arr.reduce((acc, el) => (acc + el));
  return '$' + Math.floor(result * 100) / 100;
}

console.log(getTotalPrice(arr));