/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const restaurantMap = new Map();
  const restaurantCount1 = list1.length;
  const restaurantCount2 = list2.length;
  for (let i = 0; i < restaurantCount1; i++) {
    const restaurant = list1[i];
    restaurantMap.set(restaurant, i);
  }
  let minIndexSum = restaurantCount1 + restaurantCount2;
  let restaurants = [];
  for (let i = 0; i < restaurantCount2; i++) {
    const restaurant = list2[i];
    if (restaurantMap.has(restaurant)) {
      const indexSum = i + restaurantMap.get(restaurant);
      if (indexSum < minIndexSum) {
        restaurants = [restaurant];
        minIndexSum = indexSum;
      } else if (indexSum === minIndexSum) {
        restaurants.push(restaurant);
      }
    }
  }
  return restaurants;
};
// @lc code=end

