// sort array

const array = [1, 7, 8, 2, 5, 6, 1, 10, 9];

const sortArray = numbers => {
  function compare(a, b) {
    if (a < b) {
      return 1;
    }
    return -1;
  }
  numbers.sort(compare);

  return numbers;
};

// Option 2
const array = [1, 7, 8, 2, 5, 6, 1, 10, 9]

const sortArray = numbers => {
  const arr = [...numbers];     /* or numbers.slice() - copy array*/
  return arr.sort((a, b) => a - b);
};

// final solution 
const array = [1, 7, 8, 2, 5, 6, 1, 10, 9]

const sortArray = numbers => 
  numbers.slice().sort((a, b) => a - b);


console.log(sortArray(array));