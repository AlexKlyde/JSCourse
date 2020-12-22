const reverseString = str =>
  typeof str !== 'string' ? null :
    str.split('').reverse().join('');

console.log(reverseString('hello'));