//initialize fn
//takes 2 arguments: the array and the element you are looking for

const binarySearch = (numbersArray, searchElement) => {
    let currentElement;
    let currentIndex;

    //assigning index for the end of the array
    let maxIndex = numbersArray.length - 1;
    //assigning index for the beginning of the array
    let minIndex = 0;

    //this will keep looping until minIndex and maxIndex are equal
    while (minIndex <= maxIndex) {
        //rounding down the quotient of the sum of the minIndex and maxIndex
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        //assigning currentElement element by index of numbersArray
        currentElement = numbersArray[currentIndex];

        //if searchElement is less then currentElement, then run this operation
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
            //if searchElement is greater than currentElement, then run this
        } else if (currentElement > searchElement) {
            //if neigther greater than or equal, then you found your elemebt (by index)
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
};

//sample test
const result = binarySearch(
    [
        1,
        23,
        25,
        43,
        56,
        77,
        89,
        211,
        212,
        789,
        972,
        1001,
        4567,
        4599,
        83784,
        83785,
    ],
    83785
);
console.log(result);