function missingPositiveNumber(array) {
    const sortedArray = array.sort((a, b) => a - b);

    if (sortedArray[0] !== 1) return 1;

    let left = 0;
    let right = left + 1;

    while (right < array.length) {
        if (array[left] === array[right] || array[right] - array[left] === 1) {
            left++;
            right++;
        } else {
            return array[right] - 1;
        }
    }
}

console.log('number', missingPositiveNumber([1, 1, 2, 3, 6, 4]));
