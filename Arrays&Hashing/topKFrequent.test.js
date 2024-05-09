const { topKFrequent, topKFrequent2 } = require("./topKFrequent");

describe("topKFrequent", () => {
  [
    { case: [[1, 1, 1, 2, 2, 3], 2], output: [1, 2] },
    { case: [[1], 1], output: [1] },
  ].forEach((test) => {
    it(`topKFrequent test case: ${test.case}`, () => {
      expect(topKFrequent(...test.case)).toEqual(test.output);
    });
  });
});

describe("topKFrequent2", () => {
  [
    { case: [[1, 1, 1, 2, 2, 3], 2], output: [1, 2] },
    { case: [[1], 1], output: [1] },
  ].forEach((test) => {
    it(`topKFrequent2 test case: ${test.case}`, () => {
      expect(topKFrequent2(...test.case)).toEqual(test.output);
    });
  });
});
