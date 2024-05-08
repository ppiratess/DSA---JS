// ([1,2,5,2,8,1,5],2 -> 10)
// ([1,2,5,2,8,1,5],4 -> 17)
// ([],4 -> null)

// function maxSubarraySum(arr, num) {
//     if (num > arr.length) return null;

//     if (arr.length === 0) return [];

//     if (num === Number(1)) return Math.max(...arr);

//     let max = -Infinity;

//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) return null;

    if (arr.length === 0) return [];

    if (num === Number(1)) return Math.max(...arr);

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // arr[i - num] --> subtracting the fist pointer to the num argument list
        // for eg for first loop [2,6,9] --> sum is 17
        // i.e arr[i - num] = 2

        // arr[i] --> adding the next following number to the num argument list
        // for eg for first loop [2,6,9] --> sum is 17
        // i.e arr[i] = 9

        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 9, 1, 8, 5, 6, 3], 3));

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
