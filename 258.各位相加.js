/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  const result = num % 9;
  if (result === 0 && num !== 0) return 9;
  return result;
};
// @lc code=end
