const names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

const filterNames = (arr, text) =>
  arr.filter(name => name.includes(text) && name.length > 5);


console.log(filterNames(names, 'ya'));