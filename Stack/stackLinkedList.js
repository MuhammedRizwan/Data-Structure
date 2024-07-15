class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class stackLinkedList{
    constructor(){
        this.head=null
        this.top=null
        this.size=0
    }
    push(data){
        const newNode=new Node(data)
        if(this.isEmpty()){
            this.head=newNode
            this.top=newNode
            this.size++
            return
        }
        this.top.next=newNode;
        this.top=newNode;
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        const removedNode=this.top;
        if(this.size==1){
            this.head=this.top=null;
            this.size--
            return
        }
        let prev=this.head
        while(prev.next != this.top){
            prev=prev.next
        }
        prev.next=null;
        this.top=prev
        this.size--
        return removedNode.data
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.top.data
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            return undefined
        }
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}
const stack=new stackLinkedList()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print()
console.log(stack.getSize());