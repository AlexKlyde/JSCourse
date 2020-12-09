'use strict';

// const user = {
//   age: 17,
// }

const addPropertyV1 = (obj, key, value) => { 
  obj[key] = value;
  return obj;
}

// console.log(addPropertyV1(user, 'name', 'Alex'));

// const user = {}

const addPropertyV2 = (obj, key, value) => {
  return Object.assign(obj, { [key]: value });
}

console.log(addPropertyV2(user, 'name', 'Alex'));
