/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const chars = s.split('');
  let left = 0;
  let right = chars.length - 1;
  /**
   * 是否是字母
   * @param {number} index 
   * @returns 
   */
  function isLetters(index) {
    const c = chars[index];
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }
  while (left < right) {
    while (left < right) {
      if (isLetters(left)) {
        break;
      }
      left++;
    }
    while (left < right) {
      if (isLetters(right)) {
        break;
      }
      right--;
    }
    const c = chars[left];
    chars[left] = chars[right];
    chars[right] = c;
    left++;
    right--;
  }
  return chars.join('');
};
// @lc code=end
