/*
 * @lc app=leetcode.cn id=798 lang=javascript
 *
 * [798] 得分最高的最小轮调
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
  const numCount = nums.length;
  const diffs = Array(numCount).fill(0);
  for (let i = 0; i < numCount; i++) {
    const low = (i + 1) % numCount;
    const high = (i - nums[i] + numCount + 1) % numCount;
    diffs[low]++;
    diffs[high]--;
    if (low >= high) {
      diffs[0]++;
    }
  }
  let bestIndex = 0;
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < numCount; i++) {
    score += diffs[i];
    if (score > maxScore) {
      bestIndex = i;
      maxScore = score;
    }
  }
  return bestIndex;
};
// @lc code=end

