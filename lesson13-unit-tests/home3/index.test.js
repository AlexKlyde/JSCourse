import { reverseArray, withdraw, getAdults } from "./index";

it('Should get null if not an array', () => {
  const result = reverseArray('string');

  expect(result).toEqual(null);
})

it('Should return reversed array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
})

it('Should get null if array is empty', () => {
  const result = reverseArray([]);

  expect(result).toEqual(null);
})

// task 2

it('Should return -1 if not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 200);

  expect(result).toEqual(-1);
})

it('Should return account balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000);

  expect(result).toEqual(400);
})

it('Should return "Please enter your name" if name is empty', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], '', 50);

  expect(result).toEqual('Please enter your name');
})

// task 3

it('Should return adults the age of 18 or greater' , () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).toEqual({'John Doe': 19, 'Bob': 18});
})

it('Should return an empty object' , () => {
  const result = getAdults({});

  expect(result).toEqual({});
})

it('Should return empty object if no one is over 18' , () => {
  const result = getAdults({ 'John Doe': 15, 'Tom': 17, 'Bob': 16 });

  expect(result).toEqual({});
})

