/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  if (n === '0') { return '1'; }
  if (n.length === 1) { return String(Number(n) - 1); }

  const nArr = n.split('').map(Number);
  /** 公用中间一位 */
  const joinOne = !!(nArr.length & 1);
  const halfIndex = Math.floor((nArr.length + 1) / 2);

  const rightHalfArr = nArr.slice(halfIndex - (joinOne ? 1 : 0));
  const rightHalf = Number(rightHalfArr.join(''));
  const leftHalfArr = nArr.slice(0, halfIndex);
  const leftHalf = Number(leftHalfArr.join(''));
  const leftHalfOppo = Number([...leftHalfArr].reverse().join(''));

  let bigger;
  let smaller;

  // #region 直接改右半边的回文数
  (function() {
    const newRightHalfArr = [...leftHalfArr].reverse();
    if (joinOne) {
      newRightHalfArr.shift();
    }
    const newPalindromic = [...leftHalfArr, ...newRightHalfArr];
  
    if (leftHalfOppo > rightHalf) {
      bigger = newPalindromic;
    } else if (leftHalfOppo < rightHalf) {
      smaller = newPalindromic;
    }
  }());
  // #endregion

  // #region 改左半边最后一位
  // #region 左半边最后一位加一
  if (bigger === undefined) {
    (function() {
      const newLeftHalf = leftHalf + 1;
      const newLeftHalfArr = String(newLeftHalf).split('').map(Number);

      let biggerJoinOne = joinOne;
      if (newLeftHalfArr.length > leftHalfArr.length) {
        // 加一导致进位
        biggerJoinOne = !joinOne; // joinOne 取反
        if (joinOne) {
          newLeftHalfArr.pop(); // 原先公用位需要移除
        }
      }

      const newRightHalfArr = [...newLeftHalfArr].reverse();
      if (biggerJoinOne) {
        newRightHalfArr.shift();
      }
      bigger = [...newLeftHalfArr, ...newRightHalfArr];
    }())
  }
  // #endregion

  // #region 左半边最后一位减一
  if (smaller === undefined) {
    (function() {
      const newLeftHalf = leftHalf - 1;
      if (newLeftHalf === 0) {
        // 特殊情况 /^1\d$/
        smaller = [9];
        return;
      }

      const newLeftHalfArr = String(newLeftHalf).split('').map(Number);
      let smallerJoinOne = joinOne;
      if (newLeftHalfArr.length < leftHalfArr.length) {
        // 减一导致减位
        smallerJoinOne = !joinOne; // joinOne 取反
        if (!joinOne) {
          newLeftHalfArr.push(9); // 原先不公用位时需要补位
        }
      }

      const newRightHalfArr = [...newLeftHalfArr].reverse();
      if (smallerJoinOne) {
        newRightHalfArr.shift();
      }
      smaller = [...newLeftHalfArr, ...newRightHalfArr];
    }())
  }
  // #endregion
  // #endregion

  /**
   * 计算差值
   * @param {number[]} big 
   * @param {number[]} small 
   * @returns {number}
   */
  function calDiff(big, small) {
    const bigLen = big.length;
    const smallLen = small.length;
    const result = [];
    let i = 0;
    while (i < smallLen) {
      result.unshift(big[bigLen - 1 - i] - small[smallLen - 1 - i]);
      i++
    }
    while (i < bigLen) {
      result.unshift(big[bigLen - 1 - i]);
      i++;
    }
    i = 0;
    while (i < bigLen) {
      const index = bigLen - 1 - i;
      if (result[index] < 0) {
        result[index] += 10;
        result[index - 1]--;
      }
      i++;
    }
    return Number(result.join(''));
  }

  const smallerDiff = calDiff(nArr, smaller);
  const biggerDiff = calDiff(bigger, nArr);

  return smallerDiff <= biggerDiff ? smaller.join('') : bigger.join('');
};
// @lc code=end
