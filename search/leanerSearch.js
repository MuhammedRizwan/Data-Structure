function linearvSearch(array,target){
    for(let i=0;i<=array.length;i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearvSearch([2,5,8,6,4,10],5));