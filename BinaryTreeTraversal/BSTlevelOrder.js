class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BSTlevelOrder{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    levelOrder(){
        const Queue=[]
        Queue.push(this.root)
        while(Queue.length){
            let curr=Queue.shift()
            console.log(curr.value);
            if(curr.left){
                Queue.push(curr.left)
            }
            if(curr.right){
                Queue.push(curr.right)
            }
        }
    }
}
const tree = new BSTlevelOrder()
tree.insert(2)
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.insert(15)
tree.insert(9)
tree.insert(1)

tree.levelOrder()