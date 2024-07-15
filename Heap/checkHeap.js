class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
 function isHeap(root){
    if(root==null)return true
    if(root.left !=null && root.right !=null){
        if(root.value>=root.left.value && root.value>=root.right.value){
            return isHeap(root.left) &&isHeap(root.right)
        }else{
            return false
        }
    }else if(root.left != null){
        return root.value >= root.left.value && isHeap(root.left)
    }else{
        return true
    }
 }
 let root = new Node(1, new Node(9, new Node(7), new Node(6)), new Node(8, new Node(5), new Node(20)));
 console.log(isHeap(root));