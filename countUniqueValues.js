// ? expect the array to be sorted always

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;

//     let uniqueArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < i; j++) {
//             if (arr[i] === arr[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;

//     let uniqueCount = [];
//     let left = 0;
//     let right = 1;

//     while (right < arr.length) {
//         if (arr[left] !== arr[right]) {
//             uniqueCount.push(arr[left]);

//             left = right;
//         } else {
//             // do nothing
//         }
//         right++;
//     }

//     if (right === arr.length) {
//         if (arr[left] !== arr[right]) {
//             uniqueCount.push(arr[left]);
//         }
//     }

//     return uniqueCount;
// }

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;

//     let uniqueCount = [];
//     let left = 0;
//     let right = 1;

//     while (right < arr.length) {
//         if (arr[left] === arr[right]) {
//             right++;
//         } else {
//             uniqueCount.push(arr[left]);

//             left = right;
//             right++;
//         }
//     }

//     if (right === arr.length) {
//         if (arr[left] !== arr[right]) {
//             uniqueCount.push(arr[left]);
//         }
//     }

//     return uniqueCount;
// }

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;

//     let left = 0;
//     let right = 1;

//     while (right < arr.length) {
//         if (arr[left] !== arr[right]) {
//             // move left pointer ++
//             left++;
//             // swap the value of left pointer and right pointer ?

//             arr[left] = arr[right];

//             //move right pointer ++
//             right++;
//         } else {
//             right++;
//         }
//     }

//     const uniqueArray = arr.slice(0, left);
//     return uniqueArray;
// }

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let left = 0;

    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            // move left pointer ++
            left++;
            // swap the value of left pointer and right pointer ?

            arr[left] = arr[right];

            //move right pointer ++
        }
    }

    return left + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9]));
