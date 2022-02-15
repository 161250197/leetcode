/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowMinIndexs = Array(m).fill(0);
  const result = [];
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    let minNum = matrix[rowIndex][0];
    let minIndex = 0;
    for (let index = 1; index < n; index++) {
      const num = matrix[rowIndex][index];
      if (num < minNum) {
        minNum = num;
        minIndex = index;
      }
    }
    rowMinIndexs[rowIndex] = minIndex;
  }
  for (let colIndex = 0; colIndex < n; colIndex++) {
    let maxNum = matrix[0][colIndex];
    let maxIndex = 0;
    for (let index = 1; index < m; index++) {
      const num = matrix[index][colIndex];
      if (num > maxNum) {
        maxNum = num;
        maxIndex = index;
      }
    }
    const rowMinIndex = rowMinIndexs[maxIndex];
    if (rowMinIndex === colIndex) {
      result.push(matrix[maxIndex][colIndex]);
    }
  }
  return result;
};
// @lc code=end

