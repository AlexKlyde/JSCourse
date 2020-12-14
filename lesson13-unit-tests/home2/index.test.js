import { calc } from "./calculator";

it('should get the addition result ', () => {
  const result = calc('2 + 4');

  expect(result).toEqual('2 + 4 = 6');
})

it('should get the subtraction result', () => {
  const result = calc('10 - 5');

  expect(result).toEqual('10 - 5 = 5');
})

it('should get the multiplication result ', () => {
  const result = calc('2 * 4');

  expect(result).toEqual('2 * 4 = 8');
})

it('should get the division result', () => {
  const result = calc('20 / 4');

  expect(result).toEqual('20 / 4 = 5');
})

it('should get null if not a string', () => {
  const result = calc(3434);

  expect(result).toEqual(null);
})