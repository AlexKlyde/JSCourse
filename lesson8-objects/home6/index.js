function pickProps(obj, arr) {
  const keys = {};
  arr.forEach(el => { 
    keys[el] = obj[el];
  });

  return keys;
}

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));