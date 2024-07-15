function selectionSortrecursive(arr, index = 0) {
    console.log(index);
    console.log(arr);
    if (index >= arr.length - 1) {
        return arr
    }
    let minIndex = index;
    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    if (minIndex !== index) {
        [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]]
    }
    return selectionSortrecursive(arr, index + 1)
}
const unsorted = [5, 6, 8, 2, 4, 3];
const sort = selectionSortrecursive(unsorted)
console.log(sort);