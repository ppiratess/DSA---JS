function twoSum(arr, target) {
    if (arr.length === 0) return;

    if (arr.length === 1) return 1;

    let index = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                // index.push([i, j]);
                return [i, j];
            }
        }
    }

    // return index;
    return null;
}

console.log('two', twoSum([2, 3, 4, 4, 5, 6, 4, 5, 6], 11));
