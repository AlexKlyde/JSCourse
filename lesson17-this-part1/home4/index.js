const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },

  setFullName(name) {
    const arr = name.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
}

user.setFullName('Jim Rohn');
console.log(user.getFullName());