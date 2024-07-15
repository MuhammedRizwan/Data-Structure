function arrayDeleteByPosition(arr,pos){
    for(i=pos;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr.length=arr.length-1
}
const arr=[3,4,5,6,8]
arrayDeleteByPosition(arr,3)
console.log(arr);