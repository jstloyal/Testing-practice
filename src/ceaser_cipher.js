const encryptWord = (word, num) =>
  word
    .split("")
    .map((char) => {
      const regex = /^[A-Za-z]+$/;

      if (char.match(regex)) {
        return (char = char.toUpperCase()
          ? String.fromCharCode(65 + ((char.charCodeAt() - 65 + num) % 26))
          : String.fromCharCode(97 + ((char.charCodeAt() - 97 + num) % 26)));
      }
      return char;
    })
    .join("");

const caesar = (str, num) => {
  const arr = str.split(" ");
  return arr.map((word) => encryptWord(word, num)).join(" ");
};

module.exports = caesar;

console.log(caesar("ball", -2));
console.log(caesar("abb", -1));
