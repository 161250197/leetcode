/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  const bitCount = bits.length;
  const lastBitIndex = bitCount - 1;
  const lastBit = bits[lastBitIndex];
  if (lastBit === 1) {
    return false;
  }
  if (bitCount === 1) {
    return true;
  }
  // 检查去掉最后一个后是否仍是合法bits
  const isValidBits = Array(bitCount + 1);
  isValidBits[lastBitIndex] = true;
  isValidBits[lastBitIndex + 1] = false;
  for (let i = lastBitIndex - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      isValidBits[i] = isValidBits[i + 1];
    } else {
      isValidBits[i] = isValidBits[i + 2];
    }
  }
  return isValidBits[0];
};
// @lc code=end
