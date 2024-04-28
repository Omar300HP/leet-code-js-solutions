/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target,

return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numsMap = new Map();

  nums.forEach((num, index) => numsMap.set(num, index));

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const result = target - num;

    if (numsMap.has(result) && numsMap.get(result) !== index) {
      return [index, numsMap.get(result)];
    }
  }
};

module.exports = {
  twoSum,
};
