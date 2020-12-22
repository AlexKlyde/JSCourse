/* Поиск нескольких элементов на странице
С помощью JavaScript найдите все элементы на странице, которые удовлетворяют условие селектора

Основные требования:
HTML находится в редакторе ниже
DOM элементы на странице ищите с помощью метода document.querySelectorAll
Напишите ф-цию getItemsList, которая найдет на странице все элементы с классом .technology, выведет полученные элементы в консоль с помощью console.dir(elementsList) и вернет список из ф-ции
Напишите ф-цию getItemsArray, которая найдет на странице все элементы с классом .tool, преобразует полученный список в массив, выведет этот массив в консоль с помощью console.dir(elementsArray) и вернет массив из ф-ции. Преобразуйте полученный список (NodeList) в массив с помощь Array.from
Ф-ции должны быть в файле index.js и экспортироваться из него под своими именами */

export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

// getItemsList();

export const getItemsArray = () => {
  const elements = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elements);
  console.dir(elementsArray);
  return elementsArray;
};

// getItemsArray();