class queueArray{
    constructor(){
        this.item=[];
        this.front=-1
        this.rear=-1
    }
    enqueue(data){
        this.rear++
        this.item[this.rear]=data
        this.front=0
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const data=this.item[this.front]
        this.front++
        if(this.front>this.rear){
            this.front=this.rear=-1
        }
        return data
    }
    peek(){
        return this.item[this.front]
    }
    getsize(){
        return this.item.length
    }
    isEmpty(){
        return this.front==-1
    }
    print(){
        for(let i=this.front;i<this.item.length;i++){
            console.log(this.item[i]);
        }
    }

}
const q=new queueArray()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.dequeue()
q.print()
console.log(q.peek());
console.log(q.getsize());
console.log(q.isEmpty());

