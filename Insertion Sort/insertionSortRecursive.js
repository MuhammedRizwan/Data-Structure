function insertionSortRecursive(arr, n) {
    if (n == 1) {
        return 
    }
    insertionSortRecursive(arr, n - 1);
    for (let i = 1; i < arr.length; i++) {
        let current = arr[n - 1];
        let j = n - 2
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}
const unsort = [5, 8, 6, 2, 1, 7]
insertionSortRecursive(unsort, unsort.length);
console.log(unsort);