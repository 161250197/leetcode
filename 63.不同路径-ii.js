/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const rowCount = obstacleGrid.length;
  const colCount = obstacleGrid[0]?.length;
  if (rowCount === 0 || colCount === 0 || obstacleGrid[0][0] === 1) {
    return 0;
  }
  const dp = Array(rowCount);
  for (let row = 0; row < rowCount; row++) {
    dp[row] = Array(colCount).fill(0);
  }
  dp[0][0] = 1;
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const count = dp[row][col];
      if (count !== 0) {
        const rightCol = col + 1;
        const bottomRow = row + 1;
        if (rightCol < colCount && obstacleGrid[row][rightCol] === 0) {
          dp[row][rightCol] += count;
        }
        if (bottomRow < rowCount && obstacleGrid[bottomRow][col] === 0) {
          dp[bottomRow][col] += count;
        }
      }
    }
  }
  const result = dp[rowCount - 1][colCount - 1];
  return result;
};
// @lc code=end

