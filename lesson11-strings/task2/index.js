/*Сортировка строк
Напишите ф-цию, которая будет сортировать список контактов в заданном направлении Основные требования:
Функция должна называться sortContacts
Функция должна принимать как первый аргумент массив контактов
Контакт - это объект вида { name: 'Tom', phoneNumber: '777-77-77' }
Второй аргумент - булевое значение направления сортировки (true - по возрастанию, false - по убыванию)
Функция должна вернуть отсортированный по имени абонента массив в нужном направлении (по убыванию или возрастанию)
По умолчанию сортировка должна происходить по возрастанию
Если передан не массив, то вернуть null
 */

const arr = [
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Alex', phoneNumber: '777-77-77' },
  { name: 'Ron', phoneNumber: '777-77-77' },
];

const sortContacts = (arr, bool = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.sort((a, b) => bool ? 
    a.name.localeCompare(b.name) :
    b.name.localeCompare(a.name));
};
console.log(sortContacts(arr, false));
