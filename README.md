export default function getFinalState(baseState, queue) {
const lastQueueNumber = [...queue];

// check if last index is number
const lastIndex = queue[queue.length - 1];
if (typeof lastValue === "number") {
return lastIndex;
}

// check if all queue is function:

// select last indnex of number inside queue series array.
const lastIndexForNumberInQueue = lastQueueNumber
.reverse()
.findIndex((element) => typeof element === "number");

// if lastIndexForNumberInQueue === -1 that mean we don't have any number inside queue
if (lastIndexForNumberInQueue === -1) {
let result = baseState;
console.log(lastQueueNumber);

    lastQueueNumber.forEach((increment) => {
      result = increment(result);
    });
    return result;

}
// create new array that start from the last number of queue series to the end of array.
const pureQueueArray = queue.slice(-lastIndexForNumberInQueue - 1);

let result = pureQueueArray[0];
const queueResult = pureQueueArray.forEach((element, index) => {
if (index === 0) return;
result = element(result);
});

return result;
}
