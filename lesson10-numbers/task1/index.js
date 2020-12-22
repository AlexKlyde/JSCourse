const nums = [Infinity, 23, '25', 26,];
const types = [NaN, 'text', 17, Infinity]

const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

console.log(getFiniteNumbers(nums));
console.log(getFiniteNumbersV2(nums))
console.log(getNaN(types));
console.log(getNaNV2(types));
console.log(getIntegers(types));