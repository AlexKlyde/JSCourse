// algo
// 1. Create a counter variable and set it to 0
// 2.create a method that gets a number and adds that number to a counter variable;
// 3.Create a method that gets a number and decreses that number from a counter variable;
// 4.Create a method that resets a counter variable to 0;
// 5.Create a method that returns a counter variable;
// 6. Return Object with all methods.

const createCalculator = () => {
  let counter = 0;

  function add(num) {
    counter += num;
  }

  function decrease(num) {
    counter -= num;
  }

  function reset() {
    counter = 0;
  }

  function getMemo() {
    return counter;
  }

  return {
    add,
    decrease,
    reset,
    getMemo
  }
};


const counter1 = createCalculator();

counter1.add(5);
console.log(counter1.getMemo());