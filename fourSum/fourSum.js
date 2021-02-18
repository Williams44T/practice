var swap = (a, b, nums) => {
  var temp = nums[b];
  nums[b] = nums[a];
  nums[a] = temp;
};

var sort = (nums) => {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] >= nums[i]) { continue; }
    swap(i + 1, i, nums);

    for (var j = i - 1; j >= 0; j--) {
      if (nums[j+1] >= nums[j]) { break; }
      swap(j + 1, j, nums);
    }
  }
};

var fourSum = function(nums, target) {
  var result = [];
  var visited = new Map;
  sort(nums);

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
