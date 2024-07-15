function bubbleSort(arr){
    let swapped;
    for(let i=0;i<arr.length-1;i++){
        let swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped=true;
            }
        }
        if(swapped==false){
            break;
        }
    }
    return arr
}
const arr=[1,8,6,4,2,10];
const arr1=bubbleSort(arr);
console.log(arr1);