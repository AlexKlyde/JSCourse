/*Калькулятор
Создайте ф-цию, которая будет принимать выражение на вход и вернет результат вычислений

Основные требования:
Функция должна называться calc
Функция должна принимать как аргумент строку в формате число, пробел, оператор, число ('1 + 2')
Должны поддерживаться операции + - * /
Функция должна вернуть ответ в формате '1 + 2 = 3', где строка '1 + 2' была передана на вход */

const calc = str => {
  const [a, operator, b] = str.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  return `${str} = ${result}`;
} 

console.log(calc('12 * 3'));

