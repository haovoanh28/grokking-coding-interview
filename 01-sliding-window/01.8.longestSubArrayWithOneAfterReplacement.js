function longestSubArrayWithOneAfterReplacement(nums = [], K) {
  let windowStart = 0,
    maxLength = 0,
    max1Count = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const num = nums[windowEnd];

    if (num === 1) {
      max1Count += 1;
    }

    if ((windowEnd - windowStart + 1) - max1Count > K) {
      if (nums[windowStart] === 1) {
        max1Count -= 1;
      }

      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
console.log(longestSubArrayWithOneAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
console.log(longestSubArrayWithOneAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));

