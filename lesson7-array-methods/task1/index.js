'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getSpecialNumbers = numbers => {
  let specialNumbers = [];

  numbers.forEach(num => {
    if (num % 3 === 0) {
      specialNumbers.push(num);
    }
  });

  return specialNumbers;
};

console.log(getSpecialNumbers(array));

// option 2

/*const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getSpecialNumbers = numbers =>
  numbers.filter(num => num % 3 === 0);

console.log(getSpecialNumbers(array));
*/