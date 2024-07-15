function recBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (arr[middleIndex] == target) {
        return middleIndex
    }
    if (arr[middleIndex] < rightIndex) {

    }
}
console.log(recBinarySearch([1, 5, 3, 9, 7, 6, 5], 9));