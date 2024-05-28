const { productExceptSelf } = require("./productExceptSelf");

describe("productExceptSelf", () => {
  [
    { case: [1, 2, 3, 4], output: [24, 12, 8, 6] },
    { case: [-1, 1, 0, -3, 3], output: [-0, 0, 9, -0, 0] },
  ].forEach((test) => {
    it(`productExceptSelf test case: ${test.case}`, () => {
      expect(productExceptSelf(test.case)).toEqual(test.output);
    });
  });
});
