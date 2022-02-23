/*
 * @lc app=leetcode.cn id=1994 lang=javascript
 *
 * [1994] 好子集的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function(nums) {
  const MOD_NUM = Math.pow(10, 9) + 7;
  const NUM_SONS_DATA = [
    undefined,
    undefined,
    { numSons: [2], nums: [2], count: 0 },
    { numSons: [3], nums: [3], count: 0 },
    undefined,
    { numSons: [5], nums: [5], count: 0 },
    { numSons: [2, 3], nums: [6], count: 0 },
    { numSons: [7], nums: [7], count: 0 },
    undefined,
    undefined,
    { numSons: [2, 5], nums: [10], count: 0 },
    { numSons: [11], nums: [11], count: 0 },
    undefined,
    { numSons: [13], nums: [13], count: 0 },
    { numSons: [2, 7], nums: [14], count: 0 },
    { numSons: [3, 5], nums: [15], count: 0 },
    undefined,
    { numSons: [17], nums: [17], count: 0 },
    undefined,
    { numSons: [19], nums: [19], count: 0 },
    undefined,
    { numSons: [3, 7], nums: [21], count: 0 },
    { numSons: [2, 11], nums: [22], count: 0 },
    { numSons: [23], nums: [23], count: 0 },
    undefined,
    undefined,
    { numSons: [2, 13], nums: [26], count: 0 },
    undefined,
    undefined,
    { numSons: [29], nums: [29], count: 0 },
    { numSons: [2, 3, 5], nums: [30], count: 0 }
  ];
  /**
   * 可以合并
   * @param {number[]} numSons1 
   * @param {number[]} numSons2 
   * @returns 
   */
  function canJoin(numSons1, numSons2) {
    if (numSons1[0] <= numSons2[0]) {
      return false;
    }
    const numSonSet = new Set();
    for (const num of numSons1) {
      numSonSet.add(num);
    }
    for (const num of numSons2) {
      if (numSonSet.has(num)) {
        return false;
      }
    }
    return true;
  }
  /**
   * 合并数组
   * @param {{ numSons: number[], nums: number[], count: number }} numSonsData1 
   * @param {{ numSons: number[], nums: number[], count: number }} numSonsData2 
   * @returns 
   */
  function join(numSonsData1, numSonsData2) {
    const numSons = [...numSonsData1.numSons, ...numSonsData2.numSons];
    const nums = [...numSonsData1.nums, ...numSonsData2.nums];
    const count = (numSonsData1.count * numSonsData2.count) % MOD_NUM;
    return { numSons, nums, count };
  }
  /**
   * 生成ID
   * @param {number[]} nums 
   * @returns 
   */
  function createId(nums) {
    return nums.sort((n1, n2) => n1 - n2).join('-');
  }
  let oneCount = 0;
  const usedMap = new Set();
  for (const num of nums) {
    if (num === 1) {
      oneCount++;
    } else {
      const numSonsData = NUM_SONS_DATA[num];
      if (numSonsData !== undefined) {
        numSonsData.count++;
        usedMap.add(createId(numSonsData.nums));
      }
    }
  }

  const singleNumSonsDataArr = NUM_SONS_DATA.filter(val => val !== undefined && val.count > 0);
  let numSonsDataArr = [...singleNumSonsDataArr];
  let result = 0;
  function addResult() {
    if (numSonsDataArr.length) {
      // TODO
      result = (
        result + numSonsDataArr
        .map(({ count }) => count)
        .reduce((n1, n2) => n1 + n2)
        ) % MOD_NUM
      ;
    }
  }
  addResult();

  while (numSonsDataArr.length) {
    const newNumSonsDataArr = [];
    for (const singleNumSonsData of singleNumSonsDataArr) {
      for (const numSonsData of numSonsDataArr) {
        if (canJoin(singleNumSonsData.numSons, numSonsData.numSons)) {
          const newNumSonsData = join(singleNumSonsData, numSonsData);
          const ID = createId(newNumSonsData.nums);
          if (!usedMap.has(ID)) {
            usedMap.add(ID);
            newNumSonsDataArr.push(newNumSonsData);
          }
        }
      }
    }
    numSonsDataArr = newNumSonsDataArr;
    addResult();
  }
  
  if (oneCount > 0) {
    for (let i = 0; i < oneCount; i++) {
      result = (result * 2) % MOD_NUM;
    }
  }

  return result;
};
// @lc code=end
