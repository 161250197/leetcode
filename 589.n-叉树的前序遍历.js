/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) {
      return [];
  }
  let nodes = [root];
  let result = [];
  let len = 1;
  for (let i = 0; i < len; i++) {
      let node = nodes.shift();
      result.push(node.val);
      if (node.children && node.children.length) {
          nodes.unshift(...node.children);
          len = len + node.children.length;
      }
  }
  return result;
};
// @lc code=end

