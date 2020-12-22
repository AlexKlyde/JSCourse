
const numbers = [];

// Option 1

/* const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr)) {
      return null;
  }
  let max = -Infinity;

  arr.forEach(num => {
    if (Math.abs(num) > max) {
      max = Math.abs(num);
    }
  });

  return max;
} */

// Option 2
const getMaxAbsoluteNumberV2 = arr => {
  if (!Array.isArray(arr) || arr.length === 0 ) {
      return null;
  }
  
  const absoluteVal = arr
    .map(num => Math.abs(num));

  return Math.max(...absoluteVal);
}

console.log(getMaxAbsoluteNumber(numbers));
console.log(getMaxAbsoluteNumberV2(numbers))

