/* Объект пользователя
Создайте объект пользователя

Основные требования:
Объект пользователя должен экспортироваться по умолчанию
В объекте пользователя хранятся свойства firstName и lastName
Getter fullName должен вернуть строку вида John Doe, где John - это свойство firstName, а Doe - это свойство lastName
Setter fullName должен принять значение в формате John Doe, где John - это свойство firstName, а Doe - это свойство lastName и сохранить значения в соответствующие свойства объекта
 */

const user = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
