'use strict';
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17
  },
};

const getCustomersList = obj => {
  return Object.values(obj)
    .map()
    .sort((a, b) => a.age - b.age);
}


console.log(getCustomersList(customers));
console.log((customers));
