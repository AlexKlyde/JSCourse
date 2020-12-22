/* Конструктор объектов - прототипы
Напишите конструктор, который будет создавать пользователей с определенными возможностями

Основные требования:
Конструктор должен экспортироваться под именем User
User должен принимать и сохранять name и age при создании объекта
На прототипе User должен иметь метод sayHi, который выводит в консоль текст Hi, I am John, где John - свойство name объекта
На прототипе User должен иметь метод requestNewPhoto, который выводит в консоль текст New photo request was sent for John, где John - свойство name объекта
На прототипе User должен иметь метод setAge, который установит новое значение свойству age и выведет в консоль текст New photo request was sent for John, где John - свойство name объекта, если новый возраст больше или равен 25
Метод setAge должен вернуть false и прекратить выполнение, если переданное значение меньше нуля
Метод setAge должен вернуть переданное значение, если переданное значение не меньше нуля */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return { name: '', age: null };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(val) {
    if (val < 0) {
      return false;
    }
    this.age = val;
    if (val >= 25) {
      this.requestNewPhoto();
    }
    return val;
  }
}

const user1 = new User('John', 17);

// console.log(user1);
console.log(User.createEmpty());



