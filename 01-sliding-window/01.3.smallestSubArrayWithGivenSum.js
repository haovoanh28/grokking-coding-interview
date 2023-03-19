function smallestSubArrayWithGivenSum(target, arr = []) {
  let windowStart = 0,
    windowSum = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add up element to create the window
    windowSum += arr[windowEnd];

    // When the window is created, assume that is the smallest window
    // This while loop will shrink the window down until it less than the target
    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? -1 : minLength;
}

// 2
// Explain: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]));

// 1
// Explain: The smallest subarray with a sum greater than or equal to '7' is [8].
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 8]));

// 3
// Explain: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
console.log(smallestSubArrayWithGivenSum(8, [3, 4, 1, 1, 6]));