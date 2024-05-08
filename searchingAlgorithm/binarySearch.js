// This function performs binary search on a sorted array.
// It returns the index of the element if found, otherwise -1.
// The algorithm compares the target number with the median element of the array.
// If the median element is smaller than the target, it updates the minimum index to median + 1.
// If the median element is larger than the target, it updates the maximum index to median - 1.

function binarySearch(arr, num) {
    let min = 0;
    let max = arr ? arr.length - 1 : -1;

    while (min <= max) {
        let median = Math.floor((min + max) / 2);
        let currentElement = arr[median];

        if (currentElement < num) {
            min = median + 1;
        } else if (currentElement > num) {
            max = median - 1;
        } else {
            return median;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 5], 3));
