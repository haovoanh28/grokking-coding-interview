function maxSumSubArray(k, arr) {
  let max = 0;
  let windowStart = 0,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      if (windowSum > max) {
        max = windowSum;
      }

      // Slide the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return max;
}

console.log(maxSumSubArray(3, [2, 1, 5, 1, 3, 2]));
console.log(maxSumSubArray(2, [2, 3, 4, 1, 5]));