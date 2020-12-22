/* Получение содержимого элемента
С помощью JavaScript найдите элемент на странице и получите его содержимое

Основные требования:
HTML находится в редакторе ниже
DOM элементы на странице ищите с помощью метода document.querySelector
Напишите ф-цию getTitle, которая найдет на странице элемент с классом .title и вернет его текстовый контент с помощью textContent
Напишите ф-цию getDescription, которая найдет на странице элемент с классом .about и вернет его текстовый контент с помощью innerText
Напишите ф-цию getPlans, которая найдет на странице элемент с классом .plans и вернет его текстовый контент с помощью innerHTML
Напишите ф-цию getGoal, которая найдет на странице элемент с классом .goal и вернет его текстовый контент с помощью outerHTML
Ф-ции должны быть в файле index.js и экспортироваться из него под своими именами */

export const getTitle = () => {
  const element = document.querySelector('.title');
  return element.textContent;
};

// console.log(getTitle());

export const getDescription = () => {
  const element = document.querySelector('.about');
  return element.innerText;
};

// console.log(getDescription());

export const getPlans = () => {
  const element = document.querySelector('.plans');
  return element.innerHTML;
};

// console.log(getPlans());

export const getGoal = () => {
  const element = document.querySelector('.goal');
  return element.outerHTML;
};

// console.log(getGoal());