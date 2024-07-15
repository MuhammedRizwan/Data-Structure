class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.heapfyUp(this.heap.length-1)
    }
    heapfyUp(index){
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]<=this.heap[index]){
                break
            }
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
            index=parentIndex   
        }
    }
    deleteMin(){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length==1){
            return this.heap.pop()
        }
        const minValue=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapfyDown(0)
        return minValue
    }
    heapfyDown(index){
        while(true){
            let leftChildIndex=2*index+1
            let rightChildIndex=2*index+2
            let minIndex=index
            if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
                minIndex=leftChildIndex
            }
            if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
                minIndex=rightChildIndex
            }
            if(minIndex==index){
                break
            }
            [this.heap[index],this.heap[minIndex]]=[this.heap[minIndex],this.heap[index]]
            index=minIndex
        }
   
    }
    traversal(){
        let result=[]
        for(let value of this.heap){
            result.push(value)
        }
        return console.log(result);
    }
}

const heap=new minHeap()
heap.insert(10)
heap.insert(5)
heap.insert(20)
heap.insert(30)
heap.insert(10)
heap.traversal()
heap.deleteMin()
heap.traversal()
console.log(heap);