/* 

Examples:
- bank queue
- movie ticket purchasing
- waiting for a table

*/

function QueueTwoStack() {
    this.inStack = [];
    this.outStack = [];
}

QueueTwoStack.prototype.enqueue = function(item) {
    this.inStack.push(item);
};

QueueTwoStack.prototype.dequeue = function(item) {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            var newOutStackItem = this.inStack.pop();
            this.outStack.push(newOutStackItem);
        }

        if (this.outStack.length === 0) {
            throw new Error("No item on the stacks to dequeue.");
        }
    } 
    return outStack.pop();
};