/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (map[needed] !== undefined) {
      return [map[needed], i];
    }
    map[nums[i]] = i;
  }
};
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

// nums = [2,7,11,15], target = 9
