const analyseArray = (array) => {
  const ans = {};

  ans.average = array.reduce((x, y) => x + y) / array.length;
  ans.min = Math.min(...array);
  ans.max = Math.max(...array);
  ans.length = array.length;

  return ans;
};

module.exports = analyseArray;
