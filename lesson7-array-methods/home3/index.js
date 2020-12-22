// example 1
/* const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) {
        return null;
    }

    const increased = arr.map(num => {
       if(num % 2 === 0) {
        return num + delta;
      }

      return num;
    });

    return increased;
} */

// Example 2
const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) {
        return null;
    }

    return arr.map(num => num % 2 === 0 ? num + delta : num);
}

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
