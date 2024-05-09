// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const numsMap = new Map();
  
    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      if (numsMap.has(num)) {
        numsMap.set(num, numsMap.get(num) + 1);
        continue;
      }
      numsMap.set(num, 1);
    }
  
    const sortedArray = Array.from(numsMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map((el) => el[0]);
  
    return sortedArray.slice(0, k);
  };
  
  const topKFrequent2 = (nums, k) => {
    const numsMap = new Map();
    const arr = new Array(nums.length + 1).fill(0); // [0, 0, 0, 0, 0, 0, 0]
  
    const ans = [];
  
    nums.forEach((el) => {
      const val = numsMap.get(el) || 0;
      numsMap.set(el, val + 1);
    });
  
    for (let [key, value] of numsMap) {
      const prev = arr[value] || [];
      prev.push(key);
      arr[value] = prev;
    }
  
    //   [0, [3], [2], [1], 0, 0, 0];
  
    arr.reverse();
    for (let el of arr) {
      if (k < 1) break;
      if (el) {
        //   [0, 0, 0, [1], [2], [3], 0];
        for (let el2 of el) {
          ans.push(el2);
          k--;
        }
      }
    }
  
    return ans;
  };
  
  module.exports = {
    topKFrequent,
    topKFrequent2,
  };
  