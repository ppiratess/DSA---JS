function binaryGaps(input) {
  const binary = input.toString(2);

  let maxGap = 0;
  let currentGap = 0;
  let inGap = false;

  for (let i = 0; i < binary.length; i++) {
    const digit = binary[i];

    if (digit === "1") {
      if (inGap) {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      } else {
        inGap = true;
      }
    } else if (inGap) {
      currentGap++;
    }
  }
  return maxGap;
}

console.log("bin", binaryGaps(529));
