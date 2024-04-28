const { isAnagram } = require("./isAnagram");

describe("isAnagram", () => {
  [
    { case: ["anagram", "nagaram"], output: true },
    { case: ["rat", "car"], output: false },
  ].forEach((test) => {
    it(`isAnagram test case: ${test.case}`, () => {
      expect(isAnagram(...test.case)).toBe(test.output);
    });
  });
});
