/*
 * @lc app=leetcode.cn id=1719 lang=javascript
 *
 * [1719] 重构一棵树的方案数
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function(pairs) {
  // 处理数据，构建数字set和映射表
  const nums = [];
  const numPairsMap = [];
  for (const [x, y] of pairs) {
    if (numPairsMap[x] === undefined) {
      nums.push(x);
      numPairsMap[x] = [y];
    } else {
      numPairsMap[x].push(y);
    }
    if (numPairsMap[y] === undefined) {
      nums.push(y);
      numPairsMap[y] = [x];
    } else {
      numPairsMap[y].push(x);
    }
  }
  const numDegreeMap = [];
  for (const num of nums) {
    numDegreeMap[num] = numPairsMap[num].length;
  }
  // 找根节点
  const rootDegree = nums.length - 1;
  let root;
  for (const num of nums) {
    if (numDegreeMap[num] === rootDegree) {
      root = num;
      break;
    }
  }
  if (root === undefined) {
    return 0;
  }
  let result = 1;
  for (const num of nums) {
    if (num === root) {
      continue;
    }
    const numPairs = numPairsMap[num];
    const numDegree = numDegreeMap[num];
    // 寻找父节点
    let parent = -1;
    let parentDegree = Number.MAX_SAFE_INTEGER;
    for (const neighbor of numPairs) {
      const neighborDegree = numDegreeMap[neighbor];
      if (neighborDegree >= numDegree && neighborDegree < parentDegree) {
        parentDegree = neighborDegree;
        parent = neighbor;
      }
    }
    // 检查父节点是否包含子节点
    const parentPairs = numPairsMap[parent];
    for (const numPair of numPairs) {
      if (numPair === parent) {
        continue;
      }
      if (!parentPairs.includes(numPair)) {
        return 0;
      }
    }
    if (parentDegree === numDegree) {
      result = 2;
    }
  }
  return result;
};
// @lc code=end
