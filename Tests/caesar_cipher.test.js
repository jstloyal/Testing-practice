const caesar = require('../src/caesar_cipher');

test('It should return a ciphered word', () => {
  expect(caesar('hello', 1)).toBe('ifmmp');
});

test('It should return a ciphered sentence', () => {
  expect(caesar('welcome home', 2)).toBe('ygneqog jqog');
});

test('It should return a ciphered sentence with capital letters', () => {
  expect(caesar('Welcome Home', 4)).toBe('Aipgsqi Lsqi');
});

test('It should wrap z to a', () => {
  expect(caesar('Azerbaijan', 5)).toBe('Fejwgfnofs');
});
