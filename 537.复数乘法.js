/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
  const numberRegex = /^([-+]?\d+)\+([-+]?\d+)i$/;
  const [_1, realString1, imaginaryString1] = numberRegex.exec(num1);
  const [_2, realString2, imaginaryString2] = numberRegex.exec(num2);
  const [realNumber1, realNumber2, imaginaryNumber1, imaginaryNumber2] = [realString1, realString2, imaginaryString1, imaginaryString2].map(Number);
  const realNumber = realNumber1 * realNumber2 - imaginaryNumber1 * imaginaryNumber2;
  const imaginaryNumber = realNumber1 * imaginaryNumber2 + realNumber2 * imaginaryNumber1;
  return `${realNumber}+${imaginaryNumber}i`;
};
// @lc code=end
