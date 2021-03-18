function removeElement(nums, val) {
    let j = nums.length - 1;
    for (let i = 0; i <= j; i++) {
        if (nums[i] === val) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
            i--;
        }
    }
    return ++j;
}