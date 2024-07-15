function quickSortRevese(arr, low = 0, high = arr.length - 1) {
    if (low < high){
        const pi=partition(arr,low,high);
        quickSortRevese(arr,low,pi-1);
        quickSortRevese(arr,pi+1,high);
    }
}
function partition(arr,low,high){
    let pivot=arr[high];
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1;

}
const arr = [8, 6, 2, 4, 5, 9, 3]
quickSortRevese(arr)
console.log(arr);