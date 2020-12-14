// input: arr
// output: num

// algo
// 1. itarate array
// 2. Keep only integers numbers.
// 3. convert each negetive numbers to absolute number
// 4. get minimal number and squared it

export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const cleanedArr = arr.map(el => Math.abs(parseInt(el)));
  return Math.min(...cleanedArr) * 2;
};

// console.log(getMins([-777, 3.1, -5, 6, 45, -20]));
// console.log(getMins('string'));
// console.log(getMins([]));