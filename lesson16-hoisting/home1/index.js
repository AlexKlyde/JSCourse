/* Фабрика функций
Создайте фабрику массивов ф-ций :)

Основные требования:
Файл index.js должен експортировать ф-цию под именем createArrayOfFunctions
Ф-ция createArrayOfFunctions должна принимать целое число, как единственный аргумент. Это число укажет размерность результирующего массива
Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет ф-ция, которая возвращает свой индекс в массиве
Пример работы: createArrayOfFunctions(9)[5](); // 5
Если передано не число, нужно вернуть null
Если аргумент не передан, то вернуть пустой массив*/

// const createArrayOfFunctions = num => {
//   let arr = [];

//   if (typeof num === 'undefined') {
//     return arr;
//   } else if (isNaN(num)) {
//     return null;
//   }

//   for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//       return i;
//     }
//   }

//   return arr;
// }


const createArrayOfFunctions = num => { 
  if (typeof num === 'undefined') {
    return [];
  } else if (isNaN(num)) {
    return null;
  }

  return Array(num).fill().map((el, ind) => el = () => ind)
}


console.log(createArrayOfFunctions());
