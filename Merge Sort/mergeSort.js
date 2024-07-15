function mergeSort(arr) {
    if(arr.length<=1){
        return arr
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    const Left = mergeSort(leftArr);
    const Right = mergeSort(rightArr);

    return merge(Left, Right);
}
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}
const arr = [8, 6, 2, 4, 5, 9, 3]
const arr1=mergeSort(arr)
console.log(arr1);