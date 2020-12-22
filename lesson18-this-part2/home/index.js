// input: func
// output: func
const saveCalls = func => {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, arguments);
  } 
  
  withMemory.calls = [];

  return withMemory;
} 

// function test(a, b) {
//     return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// testWithMemory(9, 1);


// console.log(testWithMemory.calls) // [ [4, 2], [9, 1] ]

// Поддержка функций с контекстом 

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls) // [ [] ] 

