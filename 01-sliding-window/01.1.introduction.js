// When you need to find or calculate something among all the contiguous subarrays (or sublists) of a given size

function findAvgOfSubArray(K, arr) {
  let result = [], windowStart = 0, windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Create a window by increase the windowEnd to K and add the value of windowEnd to windowSum
    // [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5 => First create a window of [1, 3, 2, 6, -1] => windowSum = 11
    windowSum += arr[windowEnd];

    // At the moment windowEnd reach the size K of window
    //  => Process the logic
    if (windowEnd >= K - 1) {
      result.push(windowSum / K);

      // Slide the window here
      // Remove the outgoing element
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}

function fixedWindow(arr, K) {
  let windowStart = 0,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      // Process the logic

      // Slide the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
}

// Dynamic window usually has some target
function dynamicWindow(arr, target) {
  let windowStart = 0,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    // The condition is based on the requirement
    // Use while loop instead of `if` to SHRINK the window
    while (windowSum >= target) {
      // Process the logic

      // SLIDE the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
}

console.log(findAvgOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));