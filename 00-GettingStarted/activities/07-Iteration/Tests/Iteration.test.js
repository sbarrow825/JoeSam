const { indexOfArray, sumOfArray, sumOfEvenNumbers, maxNumber, isSorted } = require('../Iteration');

test('Testing indexOfArray', async () => {
    expect(indexOfArray([1, 2], 0)).toStrictEqual(1)
    expect(indexOfArray([82, 999, 0, 0, 0, 1, 3, 5, 77, 18], 8)).toStrictEqual(77)
    expect(indexOfArray([1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3], 4)).toStrictEqual(1)
})

test('Testing sumOfArray', async () => {
    expect(sumOfArray([1, 2])).toStrictEqual(3)
    expect(sumOfArray([1, 2, 5, 3])).toStrictEqual(11)
    expect(sumOfArray([1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3])).toStrictEqual(44)
})

test('Testing sumOfEvenNumbers', async () => {
    expect(sumOfEvenNumbers([1, 2])).toStrictEqual(2)
    expect(sumOfEvenNumbers([1, 2, 5, 3, 66])).toStrictEqual(68)
    expect(sumOfEvenNumbers([87, 109, 808, 56, 87, 88])).toStrictEqual(952)
})

test('Testing maxNumber', async () => {
    expect(maxNumber([1, 2])).toStrictEqual(2)
    expect(maxNumber([1, 2, 5, 3])).toStrictEqual(5)
    expect(maxNumber([1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3])).toStrictEqual(5)
    expect(maxNumber([999, 1, 2, 4, 5, 8, 98, 99, 7, 42, 65, 23, 62, 987, 990])).toStrictEqual(999)
    expect(maxNumber([-999, -234, -198295])).toStrictEqual(-234)
})

test('Testing isSorted', async () => {
    expect(isSorted([1, 2])).toStrictEqual(true)
    expect(isSorted([1, 2, 5, 3])).toStrictEqual(false)
    expect(isSorted([1, 2, 2, 2, 2, 2, 2, 5, 6, 98, 9009])).toStrictEqual(true)
    expect(isSorted([1, 2, 2, 2, 2, 2, 2, 5, 6, 98, 9009, 9000])).toStrictEqual(false)
    expect(isSorted([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(true)
})