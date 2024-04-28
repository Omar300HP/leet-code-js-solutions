const { twoSum } = require("./twoSum");

describe("twoSum", () => {
  [
    { case: [[2, 7, 11, 15], 9], output: [0, 1] },
    { case: [[3, 2, 4], 6], output: [1, 2] },
    { case: [[3, 3], 6], output: [0, 1] },
  ].forEach((test) => {
    it(`twoSum test case: ${test.case}`, () => {
      expect(twoSum(...test.case)).toEqual(test.output);
    });
  });
});
