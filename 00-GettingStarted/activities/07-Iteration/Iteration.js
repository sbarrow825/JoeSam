function indexOfArray(arr, index) {
    // given an array "arr" and an index "index", return the value of the array at the given index
    // HINT: this function does not need iteration
}

function sumOfArray(arr) {
    // given an array of integers, return the sum of all integers in the array. You can assume the array only contains integers and no other data types
}

function sumOfEvenNumbers(arr) {
    // given an array of integers, return the sum of all even integers in the array. Ignore odd integers. You can assume the array only contains integers and no other data types
    // HINT: Check out the remainder operator in JavaScript here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
}

function maxNumber(arr) {
    // given an array of integers, return the max integer in the array. You can assume the array only contains integers and no other data types
    // eg for the array [1, 4, 23, 5, 7, 98, 0, 9], you should return 98
}

function isSorted(arr) {
    // given an array of integers, return true if the array is sorted, false otherwise
    // a sorted array of integers is one who's elements are organized in ascending order. E.g [1,2,3,3,3,3,3,4,7,98] is sorted, while [1,2,3,4,5,1,6,7,8] is not
}

module.exports = {
    indexOfArray,
    sumOfArray,
    sumOfEvenNumbers,
    maxNumber,
    isSorted
}