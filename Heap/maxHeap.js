class maxHeap{
    constructor(){
        this.heap=[]
    }
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    delete(){
        if (this.heap.length === 0) {
            return null;
        }
        const max=this.heap[0]
        this.heap[0]=this.heap.pop()
        let index=0
        while(true){
            let leftChildIndex=2*index+1
            let rightChildIndex=2*index+2
            let maxIndex =index
            if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]>this.heap[maxIndex]){
                maxIndex=leftChildIndex
            }
            if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[maxIndex]){
                maxIndex=rightChildIndex
            }
            if(maxIndex===index){
                break
            }
            [this.heap[index],this.heap[maxIndex]]=[this.heap[maxIndex],this.heap[index]]
        }
        return max
    }
    traversal(){
        for(let i in this.heap){
            console.log(this.heap[i]);
        }
        console.log(this.heap);
    }
}

const heap=new maxHeap()
heap.insert(10)
heap.insert(5)
heap.insert(20)
heap.insert(30)
heap.insert(10)
heap.traversal()
heap.delete()
heap.traversal()
console.log(heap);
