/*
 * @lc app=leetcode.cn id=2055 lang=javascript
 *
 * [2055] 蜡烛之间的盘子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  const CANDLE = '|';

  const sLen = s.length;
  let start = 0;

  // 找第一根蜡烛
  while (start < sLen) {
    if (s[start] === CANDLE) {
      break;
    }
    start++;
  }
  
  // 预处理计算盘子信息
  let plateCount = 0;
  const plateCountInfos = [];
  for (let i = start + 1; i < sLen; i++) {
    if (s[i] === CANDLE) {
      if (plateCount > 0) {
        const plateCountInfo = {
          start,
          end: i,
          plateCount
        };
        plateCountInfos.push(plateCountInfo);
        plateCount = 0;
      }
      start = i;
    } else {
      plateCount++;
    }
  }

  const querieResult = [];
  for (const [left, right] of queries) {
    let totalPlateCount = 0;
    for (const { start, end, plateCount } of plateCountInfos) {
      if (left <= start) {
        if (right >= end) {
          totalPlateCount += plateCount;
        }
      } else if (right <= end) {
        break;
      }
    }
    querieResult.push(totalPlateCount);
  }
  return querieResult;
};
// @lc code=end
