const { containsDuplicate } = require("./containsDuplicate");

describe("containsDuplicate", () => {
  [
    { case: [1, 2, 3, 1], output: true },
    { case: [1, 2, 3, 4], output: false },
    { case: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], output: true },
  ].forEach((test) => {
    it(`containsDuplicate test case: ${test.case}`, () => {
      expect(containsDuplicate(test.case)).toBe(test.output);
    });
  });
});
