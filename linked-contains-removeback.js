/**
 * Singly-Linked List Node class
 */

class SLLNode {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.length = 0 
    }
  }
  
  /**
   * Singly-Linked List class
   */
  
  class SLL {
    constructor() {
      this.head = null; // the list is initially empty
    }
  
    insertAtBack(val) {
      const node = new SLLNode(val);
  
      if(!this.head) {
        this.head = node;
      } else {
        let runner = this.head;
  
        while(runner.next) {
          runner = runner.next;
        }
  
        runner.next = node;
      }
      return this;
    }
  
    /**
     * Determines whether the given value is in the list.
     * 
     * @param {any} val the value to find
     * @returns {boolean}
     */
  
    contains(val) {
      // your code here
      if (this.head === null){
        return false;
      }
      let curr = this.head;//asiigning the current to the head
      while (curr !== null){//looping the next of current is false
        if (curr.val == val ){//checking if the curr val is eqaul to the one that we pass in 
          return true;// if so return tru 
        }
        curr = curr.next;// this keeps it moving 
      }
      return false;// this returns fals if it dosnt exist
  
    }
  
    /**
     * Removes the last node and returns its value (or null if list is empty).
     * 
     * @returns {any|null}
     */
  
  
    removeBack() {
        if (this.head === null){
        return null;
      }
      let curr = this.head;//asigning the current (runner) to the head
      let prev = this.head;//create second runner to store previous
      while (curr.next !== null){///looping all the way through list 
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;//setting the link to last node to null to remove node
       return curr.val; //return the node stored in the
      
  
  
    }
  
    /**
     * BONUS: Finds and returns the maximum value (or null if list empty) recursively.
     * 
     * @param {SLLNode} node
     * @param {SLLNode} maxNode
     * @returns {any|null}
     */
    
    recursiveMax(node = this.head, maxNode = this.head) {
      // your code here
    }
  }
  
  const list = new SLL();
  
  list.insertAtBack(5);
  list.insertAtBack(7);
  list.insertAtBack(6);
  list.insertAtBack(7);
  
  
  // console.log(list.contains(7)); // should log true
  // console.log(list.contains(10)); // should log false
  
  console.log(list.removeBack()); //7
  
  list.insertAtBack(20);
  console.log(list.removeBack());//20
  
  console.log(list.removeBack());
  // should log 6
  
  // console.log(list.recursiveMax()); // should log 20