/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = new Map;

    nums.forEach((num) => {
      map.has(num) ? map.delete(num) : map.set(num);
    });

    return map.keys().next().value;
};