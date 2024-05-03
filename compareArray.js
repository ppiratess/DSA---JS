// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([3, 2, 1, 2], [4, 4, 1, 8])); // false (must be same frequency)

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     // const doubleArr1 = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);

//         if (correctIndex === -1) {
//             return false;
//         }

//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        // console.log('val 2', val);
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}
