class Node{
  constructor(val){
    this.val =val;
    this.next=null;
  }
}
class SinglyLinkedList{
  constructor(){
    this.head=null;
    this.tail = null;
    this.length = 0 

  }
  push(val){
    let newNode = new Node(val)
    if (!this.head)
    {
      this.head = newNode
      this.tail = this.head
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;

    }
    this.length++
    return this
  }
  traverse(){
    let curr = this.head;
    while(curr){
      console.log(curr.val)
      curr = curr.next
    }
  }
  pop(){
    
      if(!this.head) return undefined;

      let current = this.head;
      let newtail = current;
      while(current.next){
        newtail= current
        current = current.next
      }
      this.tail = newtail
      this.tail.next = null;

      this.length--
      return current
      // console.log(this.tail)
      // console.log(this.head)
    }

  
}

list = new SinglyLinkedList()
console.log(list.push(2))
console.log(list.push(7))
console.log(list.push(4))
console.log(list.push(7))
console.log(list.push(8))
console.log(list.push(7))

console.log(list.traverse())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())

console.log(list.traverse())