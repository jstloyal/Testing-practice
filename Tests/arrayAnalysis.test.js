const analyseArray = require("../src/arrayAnalysis");

test("return an object containing correct values for each proerty", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
