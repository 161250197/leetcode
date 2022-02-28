/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
 var maximumRequests = function(n, requests) {
  let max = 0;
  const memberChange = Array(n).fill(0);
  const requestCount = requests.length;

  function dfs(index, count) {
    if (index === requestCount) {
      if (memberChange.every(change => change === 0)) {
        max = Math.max(max, count);
      }
      return;
    }

    // 不选
    dfs(index + 1, count);

    // 选
    const [from, to] = requests[index];
    memberChange[from]--;
    memberChange[to]++;
    dfs(index + 1, count + 1);
    memberChange[from]++;
    memberChange[to]--;
  }

  dfs(0, 0);
  return max;
};
// @lc code=end
