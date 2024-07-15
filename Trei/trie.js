class trieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false;
    }
}
class Trei{
    constructor(){
        this.root=new trieNode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new trieNode()
            }
            node=node.children[char]
        }
        node.isEndOfWord=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    }
    delete(word){
        this.deleteHelper(this.root,word,0)
    }
    deleteHelper(node,word,index){
        if(index==word.length){
            if(node.isEndOfWord){
                node.isEndOfWord=false
            }
            return
        }
        let char= word[index]
        if(node.children[char]){
            this.deleteHelper(node.children[char],word,index+1)
            if(Object.keys(node.children[char].children).length==0 && !node.children[char].isEndOfWord){
                delete node.children[char]
            }
        }
    }
}