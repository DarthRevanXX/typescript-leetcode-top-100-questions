function mySqrt(x: number): number {
  if (x < 2) return x;

  let result = 0;
  for (let i = 1; i * i <= x; i++) {
    result = i;
  }

  return result;
}
