function findWordConcatenation(str = "", words = []) {
  let result = [];
  let n = str.length;
  let m = words.length;
  let wordLength = words[0].length;
  let subStringLength = wordLength * m;
  let wordFreq = {};

  words.forEach(word => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  for (let i = 0; i <= n - subStringLength; i++) {
    let wordSeenFreq = { ...wordFreq };
    let wordUsed = 0;

    for (let j = i; j < i + subStringLength; j += wordLength) {
      let subStr = str.substring(j, j + wordLength);
      console.log("subStr ==> ", subStr);

      if (subStr in wordSeenFreq && wordSeenFreq[subStr] !== 0) {
        wordSeenFreq[subStr]--;
        wordUsed++;
      }

      if (wordUsed === m) {
        result.push(i);
      }
    }
  }

  return result;
}

console.log(findWordConcatenation("catfoxcat", ["cat", "fox"]));//[0, 3], The two substring containing both the words are "catfox" & "foxcat".
console.log(findWordConcatenation("catcatfoxfox", ["cat", "fox"]));//[3], The only substring containing both the words is "catfox".
