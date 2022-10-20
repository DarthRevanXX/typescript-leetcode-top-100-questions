function removeDuplicates(nums: number[]): number {
  let numsLength = nums.length;

  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      continue;
    } else {
      let j = i;
      while (nums[j] === nums[j + 1]) {
        j++;
      }
      if (i !== j) {
        nums.splice(i + 1, j - i);
        numsLength = numsLength - (j - i);
      }
    }
  }

  return nums.length;
}
