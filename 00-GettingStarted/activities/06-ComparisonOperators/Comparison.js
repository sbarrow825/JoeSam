function lessThan(a, b) {
    return a < b
}

function greaterThan(a, b) {
    // return true if a is greater than b
}

function isEqual(a, b) {
    // return true if a is equal to b, regardless of data type
}

function isStrictEqual(a, b) {
    // return true if a is equal to b, and of the same data type
}

function returnLowerValue(a) {
    // return a if a is less than b, or b if b is less than a. If they are equal, return either
    if (num1 < num2) {
        return num1
    } else {
        return num2
    }
}

module.exports = {
    lessThan,
    greaterThan,
    isEqual,
    isStrictEqual,
    returnLowerValue
}
