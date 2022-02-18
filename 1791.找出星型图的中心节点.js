/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const [x1, y1] = edges[0];
  const [x2, y2] = edges[1];
  if (x1 === x2 || y1 === x2) {
    return x2;
  }
  return y2;
};
// @lc code=end

