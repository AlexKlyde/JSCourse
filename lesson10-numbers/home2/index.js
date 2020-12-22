// input: num, num, num
// output: arr or null

const getRandomNumbers = (len, min, max) => {
  if (Math.abs(max - min) < 1) {
    return null;
  }

  return Array(len)
    .fill()
    .map(() => min > 0 && max > 0 ?
      Math.floor(Math.random() * (max - min) + min) :
      Math.ceil(Math.random() * (max - min) + min));
};

// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22));