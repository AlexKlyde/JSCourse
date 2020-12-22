const nums = [12.34, 15, 23.456]

const getTotalPrice = arr => {
  const result = arr.reduce((acc, el) => (acc + el));
  return '$' + Math.floor(result * 100) / 100;
}

console.log(getTotalPrice(nums));