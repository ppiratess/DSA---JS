function oddOccurences(array) {
  const frequency = new Map();

  for (const num of array) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  console.log("[...frequency.entries()]", [...frequency.entries()]);

  return [...frequency.entries()]
    .filter(([_, count]) => count % 2 != 0)
    .map(([num, _]) => num);
}

console.log("oddddd", oddOccurences([9, 3, 9, 3, 9, 7, 9]));
