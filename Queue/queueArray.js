class queue{
    constructor(){
        this.item=[]
    }
    enqueue(data){
        this.item.push(data)
    }
    dequeue(){
        return this.item.shift()
    }
    getSize(){
        return this.item.length
    }
    peek(){
        return this.item[0]
    }
    isEmpty(){
        return this.item.length==0
    }
}
 const Q=new queue()
 Q.enqueue(10)
 Q.enqueue(20)
 Q.enqueue(30)
 Q.enqueue(40)
 console.log(Q.getSize());
 console.log(Q.isEmpty());
 console.log(Q.peek());
 Q.dequeue()
 console.log(Q.peek());