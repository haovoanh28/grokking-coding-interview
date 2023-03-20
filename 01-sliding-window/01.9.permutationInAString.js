function findPermutation(str = "", pattern = "") {
  let patternMap = {};
  let windowStart = 0;
  let matchedChars = 0;

  for (let i = 0; i < pattern.length; i++) {
    let _s = pattern[i];
    patternMap[_s] = (pattern[_s] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];

    if (char in patternMap) {
      patternMap[char] -= 1;

      if (patternMap[char] === 0) {
        matchedChars++;
      }
    }

    if (matchedChars === Object.keys(patternMap).length) {
      return true;
    }

    // Shrink the window
    if (windowEnd - windowStart + 1 >= pattern.length) {
      let char2 = str[windowStart];

      if (char2 in patternMap) {
        if (patternMap[char2] === 0) {
          matchedChars--;
        }
        patternMap[char2]++;
      }

      windowStart++;
    }
  }

  return false;
}

console.log(findPermutation("oidabbcaf", "abc")); // true
console.log(findPermutation("oidbcaf", "abc"));//true, The string contains "bca" which is a permutation of the given pattern.
console.log(findPermutation("odicf", "dc"));//false
console.log(findPermutation("bcdxabcdy", "bcdxabcdy"));//true
console.log(findPermutation("aaacb", "abc"));//true, The string contains "acb" which is a permutation of the given pattern.
