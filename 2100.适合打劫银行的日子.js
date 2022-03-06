/*
 * @lc app=leetcode.cn id=2100 lang=javascript
 *
 * [2100] 适合打劫银行的日子
 */

// @lc code=start
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const securityCount = security.length;
  // 每天都可以
  if (time === 0) {
    return Array(securityCount).fill(0).map((_, index) => index);
  }
  // 每天都不行
  if (time * 2 + 1 > securityCount) {
    return [];
  }
  const validBeforeDates = new Set();
  let lastTime = 0;
  for (let i = lastTime + 1; i < securityCount; i++) {
    if (security[i] <= security[i - 1]) {
      if (i - lastTime >= time) {
        validBeforeDates.add(i);
      }
    } else {
      lastTime = i;
    }
  }
  lastTime = securityCount - 1;
  const result = [];
  for (let i = lastTime - 1; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      if (lastTime - i >= time && validBeforeDates.has(i)) {
        result.push(i);
      }
    } else {
      lastTime = i;
    }
  }
  return result;
};
// @lc code=end
