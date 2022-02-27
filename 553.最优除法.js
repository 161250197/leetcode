/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length <= 2) {
    return nums.join('/');
  }
  const [first, ...otherNums] = nums;
  return `${first}/(${otherNums.join('/')})`;
};
// @lc code=end

