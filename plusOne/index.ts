function plusOne(digits: number[]): number[] {
  let count = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      count = 1;
    } else {
      digits[i] = digits[i] + 1;
      i = 0;
      count = 0;
    }
  }
  if (count === 1) {
    digits.unshift(1);
  }

  return digits;
}
