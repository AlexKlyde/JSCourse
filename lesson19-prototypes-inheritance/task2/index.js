/* Перебор собственных свойств объекта (for..in)
Напишите функцию, которая будет находить все собственные свойства объекта

Основные требования:
Функция должна экспортироваться под именем getOwnProps
Функция должна принимать объект, как единственный аргумент и вернуть массив собственных свойств объекта. Методы в результат попасть не должны */

// input
const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

const getOwnProps = obj =>
  Object.getOwnPropertyNames(obj)
    .filter(item => typeof obj[item] !== 'function');

console.log(getOwnProps(vehicle));