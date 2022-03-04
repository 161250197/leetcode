/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let result = 0;
  const numCount = nums.length;
  const mins = [];
  const maxs = [];
  for (let i = 0; i < numCount; i++) {
    const num = nums[i];
    mins[i] = num;
    maxs[i] = num;
    for (let j = i - 1; j >= 0; j--) {
      mins[j] = Math.min(mins[j], num);
      maxs[j] = Math.max(maxs[j], num);
      result += maxs[j] - mins[j];
    }
  }
  return result;
};
// @lc code=end
