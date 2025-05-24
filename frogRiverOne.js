function frogRiverOne(x, a) {
    const position = new Array(x).fill(0);

    let coveredPositon = 0;

    for (let i = 0; i < a.length; i++) {
        const pos = a[i];

        if (pos > x || pos < 1) continue;

        if (position[pos - 1] === 0) {
            position[pos - 1] = 1;
            coveredPositon++;

            if (coveredPositon === x) {
                return i;
            }
        }
    }
}

console.log('jump', frogRiverOne(5, [1, 1, 2, 5, 3, 4, 3]));
