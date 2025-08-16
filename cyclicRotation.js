function cyclicRotation(k, array) {
  const n = array.length;
  if (n === 0) return [];

  // Normalize k in case it's greater than array length
  //   k = k % n;

  //   console.log(" array.slice(-k)", array.slice(-k));
  //   console.log(" array.slice(0, n - k)", array.slice(0, n - k));

  //   return array.slice(-k).concat(array.slice(0, n - k));

  let finalArray = Array(array.length);

  for (let i = 0; i < n; i++) {
    finalArray[(i + k) % n] = array[i];
  }

  return finalArray;
}

console.log("ccc", cyclicRotation(3, [3, 8, 9, 7, 6]));
