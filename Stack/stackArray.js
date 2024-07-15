class Stack{
    constructor(){
        this.item=[];
    }
    push(data){
        this.item.push(data);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.item.pop();
    }
    isEmpty(){
        return this.item.length==0;
    }
    peek(){
        return this.item[this.item.length-1]
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item);
    }
}
const myStack=new Stack()
myStack.push(5)
myStack.push(6)
myStack.push(8)
myStack.push(9)
myStack.pop();
myStack.print()

console.log(myStack.peek());
console.log(myStack.size());