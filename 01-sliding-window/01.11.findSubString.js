function findSubString(str = "", pattern = "") {
  let windowStart = 0;
  let patternMap = {};
  let matchedChars = 0;
  let minLength = str.length + 1;
  let substrStart = 0;

  for (let char of pattern) {
    patternMap[char] = (patternMap[char] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endChar = str[windowEnd];

    if (endChar in patternMap) {
      patternMap[endChar]--;
      if (patternMap[endChar] === 0) matchedChars++;
    }

    // Pattern is matched
    // Shrink the window
    while (matchedChars === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }

      let startChar = str[windowStart];
      if (startChar in patternMap) {
        if (patternMap[startChar] === 0) matchedChars -= 1;
        patternMap[startChar]++;
      }

      windowStart++;
    }
  }

  if (minLength > str.length) {
    return '';
  }

  return str.substring(substrStart, minLength + substrStart);
}

// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"
// console.log(findSubString("aabdec", "abc"));

// Output: "abc"
// Explanation: The smallest substring having all characters of the pattern is "abc".
console.log(findSubString("abdabca", "abc"));

// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.
// console.log(findSubString("adcad", "abc"));