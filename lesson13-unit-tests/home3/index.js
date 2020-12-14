'use strict';

const arr = [1, 2, 3, 4, 5, 6];

export const reverseArray = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return [...arr].reverse();
};

// console.log(reverseArray(arr))

export const withdraw = (clients, balances, client, amount) => {
  if (!client) {
    return 'Please enter your name';
  }
  let res = -1;

  clients.forEach((el, ind) => {
    if (el === client && balances[ind] >= amount) {
      res = balances[ind] - amount;
    }
  });

  return res;
};

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 30));

/*Фильтрация объекта
Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

Основные требования:
Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, где ключ - имя человека, значение - его возраст
Функция должна вернуть объект, который содержит только тех, кто достиг 18 лет
Для пустого объекта ф-ция должна вернуть пустой объект
Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => { 'John Doe': 19, 'Bob': 18 }
Исходный объект должен остаться неизменным
*/

export const getAdults = obj => {
  const adults = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    } 
  }

  return adults;
};

// console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));
