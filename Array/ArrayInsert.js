function insertAtPosition(arr, element, pos) {
    arr.push(null)
    for (let i = arr.length - 1; i > pos; i--) {
        arr[i] = arr[i - 1]
    }
    arr[pos]=element
}
let arr=[3,4,5,6,8]
insertAtPosition(arr,20,3)
console.log(arr);