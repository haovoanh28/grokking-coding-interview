function fruitsIntoBaskets(fruits = []) {
  let windowStart = 0,
    maxLength = 0,
    fruitFreq = {};

  const K = 2;
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let fruit = fruits[windowEnd];
    fruitFreq[fruit] = (fruitFreq[fruit] || 0) + 1;

    // When the condition is met, after the process, it will return a new window
    //  => Check the maxLength with the new window
    while (Object.keys(fruitFreq).length > K) {
      let fruit2 = fruits[windowStart];
      fruitFreq[fruit2]--;

      if (fruitFreq[fruit2] === 0) {
        delete fruitFreq[fruit2];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// Output : 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']));

// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));


