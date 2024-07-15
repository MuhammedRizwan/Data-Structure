function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const RightArr = arr.slice(middle);

    const sortLeftArr = mergeSort(leftArr);
    const sortRightArr = mergeSort(RightArr);

    return merge(sortLeftArr, sortRightArr);
}
function merge(Left, Right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < Left.length && rightIndex < Right.length){
        if(Left[leftIndex]<Right[rightIndex]){
            result.push(Left[leftIndex]);
            leftIndex++;
        }else{
            result.push(Right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(Left.slice(leftIndex).concat(Right.slice(rightIndex)))
}
const arr = [8, 6, 2, 4, 5, 9]
const arr1=mergeSort(arr)
console.log(arr1);