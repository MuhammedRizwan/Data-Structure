function heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; 
        heapify(arr, n, smallest);
    }
}

function buildMinHeap(arr) {
    let n = arr.length;
    let startIdx = Math.floor(n / 2) - 1;

    for (let i = startIdx; i >= 0; i--) {
        heapify(arr, n, i);
    }
}


let arr = [4, 10, 3, 5, 1];
buildMinHeap(arr);
console.log("Min Heap:", arr);
