function bubbleASortRecursive(arr,n){
    if(n==1||n==0){
        return arr;
    }
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        }
    }
    return bubbleASortRecursive(arr,n-1);
}
const arr=[1,8,6,4,2,10];
const arr1=bubbleASortRecursive(arr,arr.length);
console.log(arr1);