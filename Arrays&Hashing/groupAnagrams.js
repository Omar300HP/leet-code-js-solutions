/**
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const anagramGroup = new Map();

  strs.forEach((str) => {
    const sortedStr = str.toLowerCase().split("").sort().join("");

    if (anagramGroup.has(sortedStr)) {
      anagramGroup.set(sortedStr, [...anagramGroup.get(sortedStr), str]);
      return;
    }

    anagramGroup.set(sortedStr, [str]);
  });

  const output = [];
  for (const [, value] of anagramGroup.entries()) {
    output.push(value);
  }

  return output;
};

module.exports = {
  groupAnagrams,
};
