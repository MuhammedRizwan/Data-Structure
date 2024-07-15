class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size); 
      this.fillFactor = 0.75; 
      this.numItems = 0; 
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i); 
      }
      return hash % this.size; 
    }
  
    insert(key, value) {
      const index = this.hash(key); 
      const newNode = { key, value, next: null }; 
  
      if (!this.buckets[index]) {
        this.buckets[index] = newNode; 
      } else {
        let current = this.buckets[index];
        while (current.next) { 
          current = current.next;
        }
        current.next = newNode; 
      }
  
      this.numItems++;
    }
  
    
    get(key) {
      const index = this.hash(key); 
      if (!this.buckets[index]) { 
        return undefined;
      }
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) { 
          return current.value;
        }
        current = current.next; 
      }
      return undefined; 
    }
  
    remove(key) {
      const index = this.hash(key); 
      if (!this.buckets[index]) { 
        return undefined;
      }
      let current = this.buckets[index];
      let prev = null;
      while (current) {
        if (current.key === key) { 
          if (!prev) { 
            this.buckets[index] = current.next;
          } else {
            prev.next = current.next;
          }
          this.numItems--;
          return current.value; 
        }
        prev = current;
        current = current.next; 
      }
      return undefined; 
    }
  }
  
  const myHashTable = new HashTable(10);
  
  myHashTable.insert("apple", "red");
  myHashTable.insert("banana", "yellow");
  myHashTable.insert("grape", "purple");
  
  console.log("Value for 'apple':", myHashTable.get("apple")); 
  
  const removedValue = myHashTable.remove("banana");
  console.log("Removed value:", removedValue); 
  
  console.log("Value for 'banana':", myHashTable.get("banana")); 
  