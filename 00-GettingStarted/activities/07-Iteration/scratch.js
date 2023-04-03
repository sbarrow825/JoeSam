numbers = [1, 2, 3, 4, 5]

TwoDArray = [[1, 2], [3, 4]]

function logIfOdd(arr) {
    // console logs all numbers in the array that are odd numbers
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 1) {
            return arr[i]
        }
    }
}

function findIndexOfNumber2(arr) {
    // returns the index of the number 2 in the array arr
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === 2) {
            return i
        }
    }
}

function logAllElementsOfTwoDArray(TwoDArray) {
    for (i = 0; i < TwoDArray.length; i +=1) {
        for (j = 0; j < TwoDArray[i].length; j +=1) {
            console.log(TwoDArray[i][j])
        }
    }
}

logAllElementsOfTwoDArray(TwoDArray)