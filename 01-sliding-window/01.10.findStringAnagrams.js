function findStringAnagrams(str = "", pattern = "") {
  let windowStart = 0;
  let result = [];
  let patternMap = {};
  let matchedChars = 0;

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    patternMap[char] = (patternMap[char] || 0) + 1;
  }

  console.log("DEFAULT pattern map ==> ", patternMap);

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endChar = str[windowEnd];

    if (endChar in patternMap) {
      patternMap[endChar]--;

      if (patternMap[endChar] === 0) {
        matchedChars++;
      }
    }

    if (matchedChars === Object.keys(patternMap).length) {
      result.push(windowStart);
    }

    if (windowEnd - windowStart + 1 >= pattern.length) {
      let startChar = str[windowStart];
      windowStart++;

      if (startChar in patternMap) {
        if (patternMap[startChar] === 0) {
          matchedChars--;
        }

        patternMap[startChar]++;
      }
    }
  }

  return result;
}

console.log(findStringAnagrams('ppqp', 'pq'));//[1,2], The two anagrams of the pattern in the given string are "pq" and "qp".
console.log(findStringAnagrams('abbcabc', 'abc'));//[2,3,4], The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
