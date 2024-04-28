/*


https://leetcode.com/problems/valid-anagram/


Given two strings s and t, 
return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const sLettersMap = s.toLowerCase().split("").sort().join("");

  const tLettersMap = t.toLowerCase().split("").sort().join("");

  return sLettersMap === tLettersMap;
};

module.exports = {
  isAnagram,
};
