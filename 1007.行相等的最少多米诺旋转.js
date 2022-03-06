/*
 * @lc app=leetcode.cn id=1007 lang=javascript
 *
 * [1007] 行相等的最少多米诺旋转
 */

// @lc code=start
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
  const dominoCount = tops.length;
  const sameNumbers = new Set();
  sameNumbers.add(tops[0]);
  sameNumbers.add(bottoms[0]);
  for (let i = 1; i < dominoCount; i++) {
    const top = tops[i];
    const bottom = bottoms[i];
    for (const sameNumber of sameNumbers) {
      if (top !== sameNumber && bottom !== sameNumber) {
        sameNumbers.delete(sameNumber);
      }
    }
  }
  if (sameNumbers.size === 0) {
    return -1;
  }
  let minChangeCount = Number.MAX_SAFE_INTEGER;
  for (const sameNumber of sameNumbers) {
    let topChangeCount = 0;
    let bottomChangeCount = 0;
    for (let i = 0; i < dominoCount; i++) {
      const top = tops[i];
      const bottom = bottoms[i];
      if (top !== sameNumber) {
        bottomChangeCount++;
      }
      if (bottom !== sameNumber) {
        topChangeCount++;
      }
    }
    minChangeCount = Math.min(minChangeCount, Math.min(topChangeCount, bottomChangeCount));
  }
  return minChangeCount;
};
// @lc code=end
