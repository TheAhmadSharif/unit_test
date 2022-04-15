const sum = require('./sum');

test('Add 1 + 1 to equal to 2', () => {
	expect(1+1).toBe(2);
});
test('Add 1 + 2 to equal to 3', () => {
	expect(sum(1,2)).toBe(3);
});
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});