/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  /**
   * 翻转0到k
   * @param {number} k 
   */
  function reverseK(k) {
    const subArr = arr.splice(0, k);
    arr = subArr.reverse().concat(arr);
  }
  const result = [];
  let len = arr.length;
  while (len > 1) {
    let maxIndex = 0;
    let max = arr[0];
    for (let i = 1; i < len; i++) {
      let num = arr[i];
      if (num > max) {
        max = num;
        maxIndex = i;
      }
    }
    const k = maxIndex + 1;
    if (k !== len) {
      if (k > 1) {
        result.push(k);
        reverseK(k);
      }
      result.push(len);
      reverseK(len);
    }
    len--;
  }
  return result;
};
// @lc code=end
