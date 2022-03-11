/*
 * @lc app=leetcode.cn id=2049 lang=javascript
 *
 * [2049] 统计最高分的节点数目
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const n = parents.length;
  
  // 创建节点数据
  const nodeDatas = (function() {
    const nodeDatas = Array(n).fill(0).map(() => {
      return {
        leftIndex: undefined,
        rightIndex: undefined,
        leftNodeCount: 0,
        rightNodeCount: 0
      }
    });
    for (let i = 1; i < n; i++) {
      const parent = parents[i];
      const parentNodeData = nodeDatas[parent];
      if (parentNodeData.leftIndex === undefined) {
        parentNodeData.leftIndex = i;
      } else {
        parentNodeData.rightIndex = i;
      }
    }
    return nodeDatas;
  }());

  // 层次遍历
  const nodeLayers = (function() {
    const nodeLayers = [];
    let nodes = [0];
    while (nodes.length) {
      nodeLayers.unshift(nodes);
      const newNodes = [];
      for (const node of nodes) {
        const { leftIndex, rightIndex } = nodeDatas[node];
        if (leftIndex !== undefined) {
          newNodes.push(leftIndex);
          if (rightIndex !== undefined) {
            newNodes.push(rightIndex);
          }
        }
      }
      nodes = newNodes;
    }
    return nodeLayers;
  }());
  for (const nodes of nodeLayers) {
    for (const node of nodes) {
      const nodeData = nodeDatas[node];
      if (nodeData.leftIndex !== undefined) {
        const leftNodeData = nodeDatas[nodeData.leftIndex];
        nodeData.leftNodeCount = leftNodeData.leftNodeCount + leftNodeData.rightNodeCount + 1;

        if (nodeData.rightIndex !== undefined) {
          const rightNodeData = nodeDatas[nodeData.rightIndex];
          nodeData.rightNodeCount = rightNodeData.leftNodeCount + rightNodeData.rightNodeCount + 1;
        }
      }
    }
  }

  function calScore(node) {
    const { leftNodeCount, rightNodeCount } = nodeDatas[node];
    const restNodeCount = (n - leftNodeCount - rightNodeCount - 1) || 1;
    const score = restNodeCount * (leftNodeCount || 1) * (rightNodeCount || 1);
    return score;
  }
  let max = calScore(0);
  let maxNodeCount = 1;
  for (let node = 1; node < n; node++) {
    const score = calScore(node);
    if (score > max) {
      max = score;
      maxNodeCount = 1;
    } else if (score === max) {
      maxNodeCount++;
    }
  }

  return maxNodeCount;
};
// @lc code=end
