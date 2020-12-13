/*Разбить текст на строки
Напишите ф-цию, которая разделит входящую строку на строки с указанным к-вом символов и вернет их в многострочном формате

Основные требования:
Функция должна называться splitText
Функция должна принимать строку в первом аргументе и число во втором
Число во втором аргументе должно указывать, сколько символов будет в каждой подстроке
Функция должна вернуть многострочную строку (каждый новый кусочек текста выводиться в новой строке)
Каждая строка должна начинаться с большой буквы
Пример работы ф-ции: splitString('abcd efgh', 4) => 'Abcd\n efg\nH...']
Функция должна вернуть null, если в первом аргументе не строка
функция должна делить на подстроки длиной 10 символов, если не задан второй аргумент */

//put your code here
const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }      
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
    
    return strArr.join('\n');
};

console.log(splitText('sdfsfd sdfsdf sdfsdfdsf', 4));
