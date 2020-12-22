const calc = str => {
  const [a, operator, b] = str.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    
    default:
  }

  return `${str} = ${result}`;
} 

console.log(calc('12 * 3'));

