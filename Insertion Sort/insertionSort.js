function insertionSort(arr) {
    for (let i = 1; i <= arr.length-1; i++) {
        let current=arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const unsort = [5, 8, 6, 2, 1, 7]
const sort = insertionSort(unsort);
console.log(sort);


