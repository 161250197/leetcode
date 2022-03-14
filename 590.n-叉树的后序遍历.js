/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    const { val, children } = node;
    result.unshift(val);
    for (const child of children) {
      stack.push(child);
    }
  }
  return result;
};
// @lc code=end

