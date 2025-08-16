function sumRange(num) {
    console.log({ num });
    if (num === 1) return 1;

    // 4
    // 4 + (3)
    // 4 + (3 + (2))
    // 4 + (3 + (2 + 1))

    return num + sumRange(num - 1);
}

console.log('sumRange(3)', sumRange(4));
