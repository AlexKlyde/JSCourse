/*Поиск максимального числа
Создайте функцию, которая будет возвращать максимальное по модулю число

Основные требования:
Функция должна называться getMaxAbsoluteNumber
Функция должна принимать массив чисел (могут быть дробные, отрицательные и положительные) как единственный аргумент
Функция должна вернуть максимальное по модулю число
Пример работы: [-777, 3, -1, 45, -20] => 777
    
Если передан не массив, или пустой массив, то вернуть null
*/
const numbers = [];

// Option 1

const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr)) {
      return null;
  }
  let max = -Infinity;

  arr.forEach(num => {
    if (Math.abs(num) > max) {
      max = Math.abs(num);
    }
  });

  return max;
}

// Option 2
const getMaxAbsoluteNumberV2 = arr => {
  if (!Array.isArray(arr) || arr.length === 0 ) {
      return null;
  }
  
  const absoluteValues = arr
    .map(num => Math.abs(num));

  return Math.max(...absoluteValues);
}

console.log(getMaxAbsoluteNumber(numbers));
console.log(getMaxAbsoluteNumberV2(numbers))

