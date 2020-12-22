/* eslint-disable max-classes-per-file */
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

