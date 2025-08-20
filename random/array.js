// function reverseArray(arr) {
//     if (!arr) return;

//     return arr.reverse();
// }

// console.log('reverse', reverseArray([1, 2, 3]));

function reverseArray(arr) {
    if (!arr) return;

    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

// console.log('reverse', reverseArray([1, 2, 3]));

function reverseArrayInPlace(arr) {
    if (!arr) return;

    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

// console.log('reverse', reverseArrayInPlace([1, 2, 3]));

function maximumValueInArray(arr) {
    if (!arr) return;

    // return Math.max(...arr);

    let max = 0;

    // for (let num of arr) {
    //     if (num > max) {
    //         max = num;
    //     }
    // }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// console.log('reverse', maximumValueInArray([1, 2, 3]));

function removeDuplicates(arr) {
    if (!arr) return;

    let uniqueValues = [];

    // return [...new Set(arr)];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValues.includes(arr[i])) {
            uniqueValues.push(arr[i]);
        }
    }

    return uniqueValues;
}

// console.log('remove duplicates', removeDuplicates([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 2, 8]));

function countUniqueValues(array) {
    if (array.length === 0) return 0;

    let left = 0;

    for (let right = 1; right < array.length; right++) {
        if (array[left] !== array[right]) {
            left++;
            array[left] = array[right];
        }
    }

    left + 1;

    return array;
}

console.log(countUniqueValues([1, 2, 3, 3, 4]));
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9]));
