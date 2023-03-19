function noRepeatSubstring(str = "") {
  let windowStart = 0,
    maxLength = 0,
    charIdxMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    // When we meet duplicate char, shrink the window
    if (rightChar in charIdxMap) {
      windowStart = Math.max(windowStart, charIdxMap[rightChar] + 1);
    }

    charIdxMap[rightChar] = windowEnd;

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
console.log(noRepeatSubstring("aabccbb"));

// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".
console.log(noRepeatSubstring("abbbb"));

// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".
console.log(noRepeatSubstring("abccde"));
