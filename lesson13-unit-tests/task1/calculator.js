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
  }

  return `${str} = ${result}`;
}