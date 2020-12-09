'use strict';

const arr = [1, [2, 3, 4], 5, [6]];

const flatArray = arr => {
  const flatArray = arr
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, []);
  
  return flatArray;
}

console.log(flatArray(arr));

// Option 2

const arr2 = [7, [8, 9, 10], 11, [12]];

const flatArray = arr => arr
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, []);

console.log(flatArray(arr2));

// Option 3
const arr3 = [7, [8, 9, 10], 11, [12]];

const flatArray = arr => arr.flat() /*some browsers not supported */

console.log(flatArray(arr3));