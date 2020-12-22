/* eslint-disable max-classes-per-file */
/* User repository
Создайте класс User и UserRepository - коллекцию пользователей Основные требования:
Создать класс User c полями
id - string
name - string - имя пользователя
sessionId - string
Конструктор должен принимать параметры в том порядке, как они указаны выше
Также возможность модификации полей должна быть закрыта, но возможность их считывания нет (укажите getter, но не указывайте setter)
const user = new User('1', 'Tom', 'session-id');
console.log(user.id); // '1'
console.log(user.name); // 'Tom'
console.log(user.sessionId); // 'session-id'

// но изменить эти свойства нельзя

user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // 'Tom' - но изменение проигнорировано, так как setter отсутствует

Создать класс UserRepository c полями
users - array[User] - массив объектов пользователей
Поле инициализируется в конструкторе входящим массивом. Возможность модификации поля из других классов должна быть закрыта, но возможность чтения открыта (укажите getter, но не указывайте setter). Чтобы запретить мутацию массива, используйте метод Object.freeze
Object.freeze(users) запрещает любые мутации массива users
Создать методы ниже
getUserNames() - для получения массива имен пользователей
getUserIds() - для получения массива айдишников пользователей
getUserNameById() - для получения имени пользователя, по его id
Пример работы getters / setters у классов и объектов
class Dog {
    constructor(name) {
        this._name = name;
    }
    get dogName() {
        return this._name;
    }
    set dogName(newName) {
        return this._name;
    }
}
const myDog = new Dog('Rex');
console.log(myDog.dogName); // 'Rex'
myDog.dogName = 'Buddy'; // если бы не было setter, то имя бы не поменялось
console.log(myDog.dogName); // 'Buddy'
Обратите внимание, что обращение к dogName происходит как к свойству, хоть он и метод класса */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = users;
    Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user._name);
  }

  getUserIds() {
    return this._users.map(user => user._id);
  }

  getUserNameById(id) {
    const filterd = this._users.filter(user => user.id === id)
    return filterd[0].name;
  }
}

// const user = new User('1', 'Tom', 'session-id');
// console.log(user.id); // '1'
// console.log(user.name); // 'Tom'
// console.log(user.sessionId); // 'session-id'

// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // 'Tom' - но изменение проигнорировано, так как setter отсутствует

const users = new UserRepository([
  { id: '1', name: 'Tom' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'John' },
  { id: '4', name: 'Pit' },
  { id: '5', name: 'Greg' },
]);
console.log(users);
console.log(users.getUserNameById('4'));

