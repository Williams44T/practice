/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var result = [];
  var visited = new Map;
  nums.sort();

  for (var i = 0; i < nums.length - 3; i++) {
    var a = nums[i];
    if (a > target) { break; }

    for (var j = i + 1; j < nums.length - 2; j++) {
      var b = nums[j];
      if (a + b > target) { break; }

      for (var k = j + 1; k < nums.length - 1; k++) {
        var c = nums[k];
        if (a + b + c > target) { break; }

        for (var l = k + 1; l < nums.length; l++) {
          var d = nums[l];
          if (a + b + c + d > target) { break; }

          if (a + b + c + d === target) {
            var key = '' + a + b + c + d;

            if (!visited.has(key)) {
              result.push([a, b, c, d]);
              visited.set(key);
            }
          }
        }
      }
    }
  }

  return result;
};
