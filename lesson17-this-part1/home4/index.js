const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },

  setFullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
}

user.setFullName('Jim Rohn');
console.log(user.getFullName());


// Option 2
const user = {
  firstName: 'John',
  lastName: 'Doe',
  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set FullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.FullName = 'Jim Rohn';
console.log(user.FullName);