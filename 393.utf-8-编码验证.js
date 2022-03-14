/*
 * @lc app=leetcode.cn id=393 lang=javascript
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  // [[min, max, followCodeCount], ...]
  const codeRanges = [
    [0, Number.parseInt('01111111', 2), 0],
    [Number.parseInt('11000000', 2), Number.parseInt('11011111', 2), 1],
    [Number.parseInt('11100000', 2), Number.parseInt('11101111', 2), 2],
    [Number.parseInt('11110000', 2), Number.parseInt('11110111', 2), 3],
  ];
  const codeRangeCount = codeRanges.length;

  const invalidFollowCode = (function() {
    const minCodeFollow = Number.parseInt('10000000', 2);
    const maxCodeFollow = Number.parseInt('10111111', 2);

    return function (start, followCount) {
      for (let i = 0; i < followCount; i++) {
        const followC = data[start + i];
        if (followC === undefined || followC < minCodeFollow || followC > maxCodeFollow) {
          return true;
        }
      }
      return false;
    }
  }());

  const dataCount = data.length;
  let index = 0;
  while (index < dataCount) {
    const c = data[index];
    let invalid = true;
    for (let i = 0; i < codeRangeCount; i++) {
      const [min, max, followCodeCount] = codeRanges[i];
      if (c >= min && c <= max) {
        index++;
        if (invalidFollowCode(index, followCodeCount)) {
          return false;
        }
        index += followCodeCount;
        invalid = false;
        break;
      }
    }
    if (invalid) {
      return false;
    }
  }
  return true;
};
// @lc code=end
