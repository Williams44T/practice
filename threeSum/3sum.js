let threeSum = function(nums) {
  if (nums.length < 3) { return []; }
  let result = [];
  let counts = {};
  let seen = {};

  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let one in counts) {
    counts[one]--;

    for (let two in counts) {
      if (counts[two] === 0) { continue; }
      counts[two]--;
      let three = 0 - one - two;

      if (counts[three] > 0) {
        let triple = [+one, +two, +three];
        let key = triple.sort((a, b) => a - b).join('');

        if (!seen[key]) {
          result.push(triple);
          seen[key] = true;
        }
      }

      counts[two]++;
    }
    
    counts[one]++;
  }

  return result;
};

let nums = Array(3000).fill().map(() => {
  let num = Math.floor(Math.random() * 100000);
  return Math.random() >= .5 ? num : -num;
});

// console.log(nums);

// console.log(threeSum(nums).length);
// console.log(threeSum([]));
// console.log(threeSum([0]));
