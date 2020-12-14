'use strict';
// task 1
const arr = [1, 2, 3, 4, 5, 6];

export const reverseArray = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return [...arr].reverse();
};

// console.log(reverseArray(arr))

// task2
export const withdraw = (clients, balances, client, amount) => {
  if (!client) {
    return 'Please enter your name';
  }
  let res = -1;

  clients.forEach((el, ind) => {
    if (el === client && balances[ind] >= amount) {
      res = balances[ind] - amount;
    }
  });

  return res;
};

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 30));

// task 3
export const getAdults = obj => {
  const adults = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    } 
  }

  return adults;
};

// console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));
