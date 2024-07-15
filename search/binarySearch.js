function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
        if (arr[middleIndex] == target) {
            return middleIndex + 1
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch([1, 5, 3, 9, 7, 6, 5], 9));