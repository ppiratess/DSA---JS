function permutationInArray(array) {
    if (array.length === 0) return 0;

    const sortedArray = array.sort((a, b) => a - b);

    console.log('sortedArray', sortedArray);

    for (i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== i + 1) return 0;
    }
    return 1;
}

console.log('permutation', permutationInArray([3, 1, 4, 2]));
