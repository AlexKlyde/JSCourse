'use strict';

/*Withdraw - методы массивов
Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1

Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. То есть у клиента по индексу 2 с массива clients, баланс счета - это значение по индексу 2 с массива balances

На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие)

Основные требования:
Функция должна называться withdraw(clients, balances, client, amount)
Функция должна снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1 (деньги в этом случае не должны быть сняты)
Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно*/

// bad
const withdraw = (clients, balances, client, amount) => {
  let res = -1;

  clients.forEach((el, ind) => {
    if (el === client && balances[ind] >= amount) {
     res = balances[ind] - amount;
    } 
  });

  return res;
}

// good
// Example2
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  return balances[index] < amount ? -1 :
    balances[index] - amount;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87));
