function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function (val) {
  if (val < 0) {
    return false;
  }
  this.age = val;
  if (val >= 25) {
    this.requestNewPhoto();
  }

  return val;
};

const user1 = new User('John', 17);

// console.log(user1);
console.log(user1.setAge(20));