let threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1] + nums[2];
  let closest = Math.abs(target - sum);
  let i = 0;

  while (i < nums.length - 2) {
    if (nums[i] > 0 && nums[i] > target) { return sum; }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let temp = nums[i] + nums[j];
      if (temp > 0 && temp > target) { return sum; }
      temp += nums[k];
      if (temp === target) { return temp; }

      if (Math.abs(target - temp) < closest) {
        sum = temp;
        closest = Math.abs(target - temp);
      }

      temp < target ? j++ : k--;
    }

    i++;
  }

  return sum;
};

let nums = [73, 95, 44, -27, -19, 46, -43, 26, -60, 52, -76, 52, 61, -29, -58, 4, 4, -74, -43, 47] ;
console.log(threeSumClosest(nums, -10000));

