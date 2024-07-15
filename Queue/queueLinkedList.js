class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0
    }
    enqueue(data){
        const newNode=new Node(data)
        if(this.isEmpty()){
            this.front=newNode
            this.rear=newNode
            this.size++
            return
        }
        this.rear.next=newNode
        this.rear=newNode
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.front === this.rear) {
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
        }
        this.size--;
    }
    peek(){
        return this.front.data
    }
    getsize(){
        return this.size
    }
    isEmpty(){
        return this.size==0
    }
    print(){
        let curr=this.front
        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}
const q=new queue()
q.enqueue(100)
q.enqueue(200)
q.enqueue(300)
q.enqueue(400)
q.print()
console.log(q.isEmpty());
console.log(q.getsize());
console.log(q.peek());
q.dequeue()
q.print()