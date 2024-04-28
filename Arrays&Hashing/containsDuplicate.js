/**
 * https://leetcode.com/problems/contains-duplicate/
 * @description Given an integer array nums,
 * return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numsMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (numsMap.has(num)) {
      return true;
    }
    numsMap.set(num, 1);
  }

  return false;
};

module.exports = {
  containsDuplicate,
};
