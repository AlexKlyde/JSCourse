const array = [10.2, "11", "12text", -12, 'de24']

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

console.log(getParsedIntegers(array));
console.log(getParsedIntegersV2(array));
console.log(getParsedFloats(array));
console.log(getParsedFloatsV2(array));