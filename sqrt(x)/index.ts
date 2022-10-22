function mySqrt(x: number): number {
  if (x < 2) return x;

  let result = 0;
  for (let i = 1; i * i <= x; i++) {
    result = i;
  }

  return result;
}

// binary search solution
function mySqrtBinary(x: number): number {
  if (x < 2) return x;

  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
