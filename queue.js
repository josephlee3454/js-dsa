
class Node{
    constructor(val){
      this.val =val;
      this.next=null;
    }
  }
  class QueueLinkedList{
    constructor(){
      this.head=null;
      this.length = 0 
  
    }
  
  
    // 
    
  
    enqueue(val) {
      // your code here
      const newNode = new Node(val);
      let runner = this.head
      let count = this.length;
      if (!this.head)
      {
        this.head = newNode;
        return 1;
      } 
      else {
      while(runner.next != null){
        runner = runner.next;
        count++
      }
      runner.next = newNode;
      return this.size();
      }
    }
  
    
 
     
    dequeue() {
      // your code here
      if(!this.isEmpty()){
        let current = this.head;
        this.head = this.head.next;
        return current.val;
      }
      return "nothing here";
    }
    /**
     * @returns {boolean}
     */
  
    isEmpty() {
      // your code here
      if(this.head == null){
        return true;
      }
      return false;
    }
  
    /**
     * @returns {number}
     */
  
    size() {
      // your code here
  
      let runner = this.head;
      var counter = 0;
  
      while(runner){
        runner = runner.next;
        counter++
      }
      return counter;
      }
    }
  
  
  const queue = new QueueLinkedList();
  
  console.log(queue.enqueue(1)); // should log 1
  
  console.log(queue.enqueue(2)); // should log 2
  // 1 - 2
  
  console.log(queue.dequeue()); // should log 1
  
  
  console.log(queue.size()); // should log 1
  
  console.log(queue.isEmpty()); // should log false