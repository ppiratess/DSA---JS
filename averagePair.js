// function averagePair(arr, value) {
//     let pairs = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let pair = [arr[i], arr[j]];
//             console.log('[object', pair);
//             if ((arr[i] + arr[j]) / 2 === value) {
//                 pairs.push(pair);
//             }
//         }
//     }

//     return pairs;
// }

// function averagePair(arr, value) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let avg = (arr[start] + arr[end]) / 2;

//         if (avg === value) return [arr[start], arr[end]];
//         else if (avg < value) start++;
//         else end--;
//     }

//     return true;
// }

// console.log('averagePair', averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

function averagePair(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (left < right) {
        let avg = (arr[start] + arr[end]) / 2;

        if (avg === value) return [arr[start], arr[end]];
        else if (avg < value) start++;
        else end--;
    }

    return true;
}

console.log('averagePair', averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
