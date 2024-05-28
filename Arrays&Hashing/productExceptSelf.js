// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]}
 * @return {number[]}
 */
const productExceptSelf = (nums = [1, 2, 3, 4]) => {
  const result = [];
  let x = 1;
  let y = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = x;
    x *= nums[i];
  }
  // [1, 1 ,2 ,6 ]
  for (let i = nums.length - 2; i >= 0; i--) {
    y *= nums[i + 1];
    result[i] *= y;
  }

  //1. i=2 y=4 result=[1,1,8,6]

  //2. i=1 y=12 result=[1,12,8,6]

  //3. i=0 y=24 result=[24,12,8,6]

  return result;
};

module.exports = { productExceptSelf };
