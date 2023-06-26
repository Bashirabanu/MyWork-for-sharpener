
class MyStack {
    constructor(s) {
      this.maxSize =s;
      this.stackArray = new Array(s);
      this.top = -1;
    }
    
    push(j) {
      this.stackArray[++this.top] = j;
    }
    
    pop() {
      return this.stackArray[this.top--];
    }
    
    peek() {
      return this.stackArray[this.top];
    }
    
    isEmpty() {
      return this.top === -1;
    }
    
    isFull() {
      return this.top === this.maxSize -1;
    }
  }
  
  const theStack = new MyStack(10);
  theStack.push(10);
  theStack.push(20);
  theStack.push(30);
  theStack.push(40);
  theStack.push(50);
  
  while (!theStack.isEmpty()) {
    let value = theStack.pop();
    console.log(value);
    console.log(" ");
  }
  console.log("");