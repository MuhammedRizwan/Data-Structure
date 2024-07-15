class Stack{
    constructor(){
        this.item=[];
        this.top=-1;
    }
    push(data){
        this.top++;
        this.item[this.top]=data;
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        const removedData=this.item[this.top];
        this.item.length=this.item.length-1
        this.top--
        return removedData
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.item[this.top];
    }
    size(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.top+1
    }
    isEmpty(){
        return this.top==-1
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
console.log(myStack.pop());
myStack.print()
console.log(myStack.peek())
console.log(myStack.size())