/*Основные требования:
Функция должна называться splitString
Функция должна принимать строку в первом аргументе и число во втором
Число во втором аргументе должно указывать, сколько символов будет в каждой подстроке
Функция должна вернуть массив, содержащий подстроки
Последняя подстрока должна быть дополнена точками . до нужного к-ва символов
Пример работы ф-ции: splitString('abcd efgh', 4) => ['abcd', ' efg', 'h...']
Функция должна вернуть null, если в первом аргументе не строка
функция должна делить на подстроки длиной 10 символов, если не задан второй аргумент
 */

const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  let chunks = [];

  while (str) {
    if (str.length < len) {
      chunks.push(str + ".".repeat(len - str.length));
      break;
    }

    chunks.push(str.substr(0, len));
    str = str.substr(len);
  }

  return chunks;
};

console.log(splitString('abcd efghsd', 7));
