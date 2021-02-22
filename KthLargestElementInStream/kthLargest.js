class KthLargest {
  constructor(k, nums) {
    this.k = k - 1;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }
    
  add(val) {
    if (this.k === 0) { 
      this.nums[0] = this.nums[0] === undefined ? val : Math.max(this.nums[0], val);
      return this.nums[0];
    }
    if (val <= this.nums[this.k]) { return this.nums[this.k]; }
    if (val >= this.nums[0]) {
      this.insert(0, val);
      return this.nums[this.k];
    }

    var right = this.k;
    var left = 0;
    var mid = this.getMid(right, left);
      
    while ((right - left) > 1) {
      if (this.nums[mid] === val) {
        this.insert(mid + 1, val);
        return this.nums[this.k];
      } else if (this.nums[mid] > val) {
        left = mid;
        mid = this.getMid(right, left);
      } else {
        right = mid;
        mid = this.getMid(right, left);
      }
    }
      
    this.insert(right, val);
    return this.nums[this.k];
  }
    
  insert(idx, val) {
    this.nums.splice(idx, 0, val);
    this.nums.pop();
  }
    
  getMid(right, left) {
    return Math.floor((right - left) / 2) + left;
  }
};