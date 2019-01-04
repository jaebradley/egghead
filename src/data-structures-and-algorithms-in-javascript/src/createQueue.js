// Factory function
// FIFO Queue
// Basically wraps an array / takes advantage of array methods

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  }
}
