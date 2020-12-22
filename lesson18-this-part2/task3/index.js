// input: num
// output: num
function sumOfSquares() {
  return [].reduce.call(arguments, (acc, elem) =>
    acc + (elem * elem), 0);
}

console.log(sumOfSquares(1, 2, 3, 4, 5));