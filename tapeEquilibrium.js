function tapeEquilibrium(array) {
    if (array.length === 2) return 0;

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    let minimumDifference = Infinity;
    let SL = 0;
    let SR = 0;

    for (let i = 0; i < array.length - 1; i++) {
        SL += array[i];
        SR = sum - SL;

        let difference = Math.abs(SL - SR);

        if (difference < minimumDifference) {
            minimumDifference = difference;
        }
    }
    return minimumDifference;
}

console.log('tttt', tapeEquilibrium([3, 1, 2, 4, 3]));
