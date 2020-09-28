const reverseString = (string) => {
  let reversedStr = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedStr += string[i];
  }
  return reversedStr;
};

module.exports = reverseString;
