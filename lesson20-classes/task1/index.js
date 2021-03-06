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



