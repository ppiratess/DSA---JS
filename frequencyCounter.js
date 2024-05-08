function sameFrequency(int1, int2) {
    // convert input integers to string as you cannot split numbers
    const int1ToString = int1.toString();
    const int2ToString = int2.toString();

    if (int1ToString.length === 0 || int2ToString.length === 0) return false;
    if (int1ToString.length !== int2ToString.length) return false;

    if (int1ToString.length === int2ToString.length) {
        const lookupNumber = {};

        for (let i = 0; i < int1ToString?.length; i++) {
            let number = int1ToString[i];

            if (lookupNumber[number]) {
                lookupNumber[number] += 1;
            } else {
                lookupNumber[number] = 1;
            }
        }

        for (let i = 0; i < int2ToString.length; i++) {
            let number = int2ToString[i];

            if (!lookupNumber[number]) {
                return false;
            } else {
                lookupNumber[number] -= 1;
            }
        }

        return true;
    }
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
