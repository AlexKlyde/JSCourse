import getMinSquaredNumber from "./getMinSquaredNumber";

it('Should return null if array is empty', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('Should return null if argument is not an array', () => {
  const result = getMinSquaredNumber('string');

  expect(result).toEqual(null);
});

it('Should return minimal squared number ', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

