function addToArrayForm(num: number[], k: number): number[] {
  let i = num.length - 1;
  let carry = k;
  const result = [];

  while (i >= 0 || carry > 0) {
    if (i >= 0) {
      carry += num[i];
    }
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
    i--;
  }

  return result;
};
