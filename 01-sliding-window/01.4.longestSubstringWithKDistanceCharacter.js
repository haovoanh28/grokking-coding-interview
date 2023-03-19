function longestSubstringWithKDistanceCharacter(string = "", K) {
  let windowStart = 0,
    maxLength = 0,
    charFreq = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    // Create a window and assume that window is the longest
    let char = string[windowEnd];
    charFreq[char] = (charFreq[char] || 0) + 1;

    while (Object.keys(charFreq).length > K) {
      let char2 = string[windowStart];
      charFreq[char2] = charFreq[char2] - 1;

      if (charFreq[char2] === 0) {
        delete charFreq[char2];
      }

      windowStart++;
    }

    // After shrink the window down => We have a new window that contain K distance characters
    //  => Compare maxLength with the length of this new window
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// 4
// Explain: The longest substring with no more than '2' distinct characters is "araa".
console.log(longestSubstringWithKDistanceCharacter("araaci", 2));

// 2
// Explain: The longest substring with no more than '1' distinct characters is "aa".
console.log(longestSubstringWithKDistanceCharacter("araaci", 1));

// 5
// Explain: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
console.log(longestSubstringWithKDistanceCharacter("cbbebi", 3));