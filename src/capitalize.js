const capitalize = (string) => {
  let captitalizedStr = string[0].toUpperCase();

  for (let i = 1; i < string.length; i += 1) {
    captitalizedStr += string[i].toLowerCase();
  }
  return captitalizedStr;
};

module.exports = capitalize;
