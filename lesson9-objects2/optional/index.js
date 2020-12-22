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

const getCustomersList = obj =>
  Object.entries(obj)
    .map(arr => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
// test func


console.log(getCustomersList(customers));
console.log((customers));
