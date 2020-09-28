const calculator = require('../src/calculator');

test('Add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Substracts the second number from the first', () => {
  expect(calculator.substract(3, 1)).toBe(2);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Divide the first number by the second number', () => {
  expect(calculator.divide(80, 2)).toBe(40);
});
