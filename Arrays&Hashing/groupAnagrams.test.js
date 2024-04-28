const { groupAnagrams } = require("./groupAnagrams");

describe("groupAnagrams", () => {
  [
    {
      case: ["eat", "tea", "tan", "ate", "nat", "bat"],
      output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    },
    {
      case: [""],
      output: [[""]],
    },
    {
      case: ["a"],
      output: [["a"]],
    },
  ].forEach((test) => {
    it(`groupAnagrams test case: ${test.case}`, () => {
      expect(groupAnagrams(test.case)).toEqual(test.output);
    });
  });
});
