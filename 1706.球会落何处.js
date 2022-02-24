/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const positions = Array(colCount).fill(0).map((_, index) => index);
  let movingCols = [...positions];
  const RIGHT = 1;
  const LEFT = -1;
  const STUCK = -1;
  for (let row = 0; row < rowCount; row++) {
    const newMovingCols = [];
    for (const col of movingCols) {
      const position = positions[col];
      const nextPosition = grid[row][position];
      if (nextPosition === RIGHT) {
        const rightPosition = position + 1;
        if (rightPosition < colCount && grid[row][rightPosition] === RIGHT) {
          positions[col] = rightPosition;
        } else {
          positions[col] = STUCK;
        }
      } else {
        const leftPosition = position - 1;
        if (leftPosition >= 0 && grid[row][leftPosition] === LEFT) {
          positions[col] = leftPosition;
        } else {
          positions[col] = STUCK;
        }
      }
      if (positions[col] !== STUCK) {
        newMovingCols.push(col);
      }
    }
    if (newMovingCols.length === 0) {
      break;
    }
    movingCols = newMovingCols;
  }
  return positions;
};
// @lc code=end
