const transformToObject = arr =>
  arr.reduce((acc, el) => ({ ...acc, [el]: el}), {});

console.log(transformToObject(['a', 17.1, 'John Doe']));
