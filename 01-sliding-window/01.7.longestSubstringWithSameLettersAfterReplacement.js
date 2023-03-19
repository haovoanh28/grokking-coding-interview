function longestSubstringWithTheSameCharacterAfterReplacement(str = "", K) {
  let windowStart = 0,
    maxLength = 0,
    charFreq = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    const windowLength = windowEnd - windowStart + 1;
    charFreq[char] = (charFreq[char] || 0) + 1;

    if (windowLength - Math.max(...Object.values(charFreq)) > K) {
      charFreq[char]--;
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowLength);
  }

  return maxLength;
}

// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
console.log(longestSubstringWithTheSameCharacterAfterReplacement("aabccbb", 2));

// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
console.log(longestSubstringWithTheSameCharacterAfterReplacement("abbcb", 1));

// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
console.log(longestSubstringWithTheSameCharacterAfterReplacement("abccde", 1));