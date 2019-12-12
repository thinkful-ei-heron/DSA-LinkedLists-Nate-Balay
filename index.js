class _Node {
  constructor(value, next /*prev*/) {
    this.value = value;
    this.next = next;
    //this.prev = prev; //doubly linked
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    //this.tail = null; //doubly linked
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    console.log('insert first success!', item);
  }

  insertLast(item) {

    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = new _Node(item, null);
    console.log('insert last success!', item);

  }

  find(item) {
    
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {

    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Not found!', item);
      return;
    }
    prevNode.next = currNode.next;
    console.log('remove success!', item);
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found!', key);
      return;
    }

    prevNode.next = new _Node(item, currNode.value);
    console.log('insertBefore success!', prevNode.next, currNode.value);

  }


}


function main() {
  let LL = new LinkedList();
  LL.insertFirst('Apollo');
  LL.insertLast('Boomer');
  LL.insertLast('Helo');
  LL.insertLast('Husker');
  LL.insertLast('Starbuck');
  LL.insertLast('Tauhida');
  LL.remove('squirrel');
  LL.insertBefore('Balay', 'Starbuck');
}

console.log(main());

//doubly linked lists

/**
 * insert in doubly linked list
 * new node will have a next AND previous 
 * change the next of previous value and change
 * the previous of next value
 */

