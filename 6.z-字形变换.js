/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const charCount = s.length;
  if (numRows === 1 || numRows === charCount) {
    return s;
  }
  const groupSize = numRows * 2 - 2;
  const groupCount = Math.ceil(charCount / groupSize);
  const chars = s.split('');
  const result = [];
  for (let row = 0; row < numRows; row++) {
    if (row === 0 || row === numRows - 1) {
      for (let i = 0; i < groupCount; i++) {
        const index = i * groupSize + row;
        if (index < charCount) {
          result.push(chars[index]);
        }
      }
    } else {
      for (let i = 0; i < groupCount; i++) {
        const index1 = i * groupSize + row;
        const index2 = (i + 1) * groupSize - row;
        if (index1 < charCount) {
          result.push(chars[index1]);
          if (index2 < charCount) {
            result.push(chars[index2]);
          }
        }
      }
    }
  }
  return result.join('')
};
// @lc code=end
