/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] 骑士在棋盘上的概率
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  const nextStepMap = Array(n);
  for (let i = 0; i < n; i++) {
    nextStepMap[i] = Array(n);
    for (let j = 0; j < n; j++) {
      const nextStepArr = [];

      if (j >= 2) {
        if (i >= 1) {
          nextStepArr.push([i - 1, j - 2]);
        }
        if (i + 1 < n) {
          nextStepArr.push([i + 1, j - 2]);
        }
      }
      if (i >= 2) {
        if (j >= 1) {
          nextStepArr.push([i - 2, j - 1]);
        }
        if (j + 1 < n) {
          nextStepArr.push([i - 2, j + 1]);
        }
      }
      if (j + 2 < n) {
        if (i >= 1) {
          nextStepArr.push([i - 1, j + 2]);
        }
        if (i + 1 < n) {
          nextStepArr.push([i + 1, j + 2]);
        }
      }
      if (i + 2 < n) {
        if (j >= 1) {
          nextStepArr.push([i + 2, j - 1]);
        }
        if (j + 1 < n) {
          nextStepArr.push([i + 2, j + 1]);
        }
      }

      nextStepMap[i][j] = nextStepArr;
    }
  }

  function createCountMap() {
    const countMap = Array(n);
    for (let i = 0; i < n; i++) {
      countMap[i] = Array(n).fill(0);
    }
    return countMap;
  }

  let countMap = createCountMap();
  countMap[row][column] = 1;
  for (let step = 0; step < k; step++) {
    const newCountMap = createCountMap();
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const count = countMap[i][j];
        if (count > 0) {
          const nextSteps = nextStepMap[i][j];
          for (const [row, column] of nextSteps) {
            newCountMap[row][column] += count;
          }
        }
      }
    }
    countMap = newCountMap;
  }

  let countSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      countSum += countMap[i][j];
    }
  }

  let probability = countSum;
  for (let i = 0; i < k; i++) {
    probability /= 8;
  }
  return probability;
};
// @lc code=end

