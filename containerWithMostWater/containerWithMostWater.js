let maxArea = function(nums) {
  let L = 0;
  let R = nums.length - 1;
  let max = Math.min(nums[L], nums[R]) * (R - L);

  while (R - L > 1) {
    if (nums[L] <= nums[R]) {
      if (nums[L + 1] > nums[L++]) {
        max = Math.max(max, Math.min(nums[L], nums[R]) * (R - L));
      }
    } else {
      if (nums[R - 1] > nums[R--]) {
        max = Math.max(max, Math.min(nums[L], nums[R]) * (R - L));
      }
    }
  }
  
  return max;
};
