const arrOfnums = [1, [2, 3, 4], 5, [6]];

/* const flatArray = arr => {
  const flatArray = arr
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, []);
  
  return flatArray;
}

console.log(flatArray(arr));  */

// Option 2 */

/* const flatArray = arr => arr
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, []);

console.log(flatArray(arr2)); */

// Option 3
const flatArray = arr => arr.flat() /*some browsers not supported */

console.log(flatArray(arrOfnums));