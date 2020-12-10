'use strict';
/*Методы работы с объектами
Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

Основные требования:
Функция с именем getAdults должна принимать объект вида { 'John Doe': 19, 'Tom': 17, 'Bob': 18 }, где ключ - имя человека, значение - его возраст
Функция должна вернуть массив всех людей, кто старше 18 лет включительно
Для пустого объекта ф-ция должна вернуть пустой массив
Пример работы: { 'John Doe': 19, 'Tom': 17, 'Bob': 18 } => ['John Doe', 'Bob']

const getAdults = usersObj => {
  // {'Tom': 17, 'John Doe': 19,} => [['Tom', 17], ['John Doe', 19]]
  const usersArray = Object.entries(usersObj);

  // [['Tom', 17], ['John Doe', 19]] => [['John doe', 19]]
  const filteredUsersArray = usersArray
    .filter(user => user[1] >= 18);
  
  // [['John doe', 19]] => ['john doe']
  const userNames = filteredUsersArray
    .map(user => user[0]);
  
  return userNames;
}
*/

const getAdults = usersObj => Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);