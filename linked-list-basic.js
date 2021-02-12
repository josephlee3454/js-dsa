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
    if (this.head == null)
    {
      this.head = newNode
      this.tail = this.head
    }
    else
    {
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
    return curr
  }
  pop(){

                
    //()-()-()-()
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
      if (this.length === 0){
        this.head = null;
        this.tail = null;
      }

      return current
      // console.log(this.tail)
      // console.log(this.head)
    }

  shift(){
    if (!this.head) return undefined;
    let temp =  this.head;
    this.head =  this.head.next;
    this.length--
    if (this.length === 0){
        this.tail = null;
      }
    console.log("the length " + this.length)
    return temp

  }

  unshift(val){
    let newNode  = new Node(val);
    if (this.head == null){
      this.head = newNode
      this.tail = this.head
      this.length++
    } 
    else{
      newNode.next = this.head
      this.head = newNode
      this.length++

    }
    return this

  }

  getIdx(idx){
    if (idx < 0 || idx >= this.length){
      return null
    }
    let counter = 0 //start at 1 if you want actual numbers other wise if you want like array keep it this 
    let curr = this.head

      while(counter !== idx){
        curr = curr.next
        counter++
      
    }
      console.log(curr)
      return curr
  }
  
}

list = new SinglyLinkedList()
console.log(list.push(2))
console.log(list.push(7))
console.log(list.push(4))
console.log(list.push(7))
// console.log(list.push(8))
// console.log(list.push(7))
console.log(list.getIdx(3))
// console.log(list.shift())
// console.log(list.traverse())
// console.log(list.pop())
// console.log(list.pop())



// console.log(list.traverse())