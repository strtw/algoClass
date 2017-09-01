/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Completed Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

*** Pending Exercises

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */
function Queue(maxCapacity){
    this.storage = {};
    this.maxCapacity = maxCapacity;
}

Queue.prototype.enqueue = function(value){
    var count = 0;
    var result;
    for(let prop in this.storage){
        count++;
    }
    if(count <= this.maxCapacity){
        this.storage[count] = value;
        result = count;
    }else{
        result = "Max capacity reached, please remove item before adding" +
            " another";
    }
    return result;
};
/*=> count of queue
 add value to collection*/

 //Time complexity

Queue.prototype.dequeue = function(){
    var newest = this.storage[this.count()-1];
    delete (this.storage[this.count()-1]);
    return newest;
};
   /* => oldest element added collection
Remove item so that it is no longer in collection*/

 //Time complexity

Queue.prototype.contains = function(val){
    var result = false;
    for(let prop in this.storage){
        console.log(this.storage[prop]);
        if (this.storage[prop] === val){
           result = true;
            }
        }
        console.log(result);
        return result;
    };
 //Time complexity


Queue.prototype.peek = function(){
    var newest = this.storage[this.count()-1];
    return newest;
}
    /*=> oldest element added collection
Similiar to dequeue, but do not remove element from collection*/

Queue.prototype.count = function(){
    var count = 0;
    for(let prop in this.storage){
        count++;
    }
    return count;
}
   /* => number of elements in queue*/

    //Time complexity



/*
*** Pending Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
