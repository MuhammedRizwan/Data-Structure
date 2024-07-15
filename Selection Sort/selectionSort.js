function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;                                                                 
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}
const unsort=[5,8,6,4,3 ]
const sort=selectionSort(unsort);
console.log(sort);