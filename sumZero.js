// ? expect the array to be sorted always

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log('object,', arr[i]);
//             console.log('j', arr[j]);
//             if (arr[i] + arr[j] === 0) {
//                 return true;
//             }
//         }
//     }
// }

// console.log('ssss', sumZero([-3, -2, -1, 0, 1, 2, 3]));
// // console.log('ssss', sumZero([-2, 0, 1, 3]));

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else {
            if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
}

console.log('ssss', sumZero([-3, -5, -2, -1, 0, 1, 2, 3, 5]));
