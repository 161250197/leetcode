/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  // const numCount = nums.length;
  // let singleNum = nums[0];
  // for (let i = 1; i < numCount; i++) {
  //   const nextNum = nums[i];
  //   singleNum = singleNum ^ nextNum;
  // }
  // return singleNum;
  return nums.reduce((n1, n2) => n1 ^ n2);
};
// @lc code=end
