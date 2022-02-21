/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  const dominoCount = dominoes.length;
  let dominoArr = dominoes.split('');
  let checkIndexArr = dominoArr
    .map((domino, index) => domino === '.' ? -1 : index)
    .filter(index => index >= 0);
  while (checkIndexArr.length) {
    const newCheckIndexArr = [];
    const newDominoArr = [...dominoArr];
    for (const checkIndex of checkIndexArr) {
      const checkDomino = dominoArr[checkIndex];
      if (checkDomino === 'L') {
        const leftIndex = checkIndex - 1;
        if (leftIndex >= 0 && dominoArr[leftIndex] === '.') {
          const leftTwoIndex = leftIndex - 1;
          if (leftTwoIndex < 0 || dominoArr[leftTwoIndex] !== 'R') {
            newDominoArr[leftIndex] = 'L';
            newCheckIndexArr.push(leftIndex);
          }
        }
      } else {
        const rightIndex = checkIndex + 1;
        if (rightIndex < dominoCount && dominoArr[rightIndex] === '.') {
          const rightTwoIndex = rightIndex + 1;
          if (rightIndex >= dominoCount || dominoArr[rightTwoIndex] !== 'L') {
            newDominoArr[rightIndex] = 'R';
            newCheckIndexArr.push(rightIndex);
          }
        }
      }
    }
    checkIndexArr = newCheckIndexArr;
    dominoArr = newDominoArr;
  }
  return dominoArr.join('');
};
// @lc code=end
