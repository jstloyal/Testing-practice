const capitalize = require('../src/capitalize');

test('capitalize first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize a single letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('capitalize first letter of a sentence', () => {
  expect(capitalize('welcome home')).toBe('Welcome home');
});
