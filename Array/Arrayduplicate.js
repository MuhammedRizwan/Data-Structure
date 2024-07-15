function ArrayDuplicate(arr) {
    arr.sort((a, b) => a - b)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            for(let j=i;j<arr.length;j++){
                arr[j]=arr[j+1]
            }
            arr.length=arr.length-1
        }
    }
}
const arr=[3,4,5,5,6,6,8,8]
ArrayDuplicate(arr)
console.log(arr);