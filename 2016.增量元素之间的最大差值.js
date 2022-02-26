/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let result = 0;
  let leftNum = nums[0];
  let rightNum = leftNum;
  for (const num of nums) {
    if (num > leftNum) {
      rightNum = Math.max(rightNum, num);
    } else {
      result = Math.max(result, rightNum - leftNum);
      leftNum = num;
      rightNum = num;
    }
  }
  result = Math.max(result, rightNum - leftNum);
  return result > 0 ? result : -1;
};
// @lc code=end
