function generatePalindrome(n, k) {
  const letters = [];
  for (let i = 0; i < k; i++) {
    letters.push(String.fromCharCode(97 + i));
  }

  const result = Array(n);
  let left = 0;
  let right = n - 1;
  let index = 0;

  while (left <= right) {
    const char = letters[index];
    result[left] = char;
    result[right] = char;

    left++;
    right--;
    index = (index + 1) % k;
  }

  return result.join("");
}

console.log(generatePalindrome(8, 2));
