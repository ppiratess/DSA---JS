function findMissingElement(array) {
    const sorterdArray = array.sort();

    for (let i = 0; i <= sorterdArray.length; i++) {
        if (i + 1 !== array[i]) {
            return i + 1;
        }
    }
}

console.log('missing element', findMissingElement([1, 3, 2, 4]));
