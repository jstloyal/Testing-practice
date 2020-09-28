const reverseString = require('../src/reverseString');

test('reverse single word', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('reverse single letter', () => {
  expect(reverseString('a')).toMatch('a');
});

test('reverse multiple words', () => {
  expect(reverseString('welcome home')).toMatch('emoh emoclew');
});
