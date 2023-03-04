const { lessThan, greaterThan, isEqual, isStrictEqual, returnLowerValue } = require('../Comparison');

test('Testing lessThan', async () => {
    expect(lessThan(1, 2)).toStrictEqual(true)
    expect(lessThan(65, 5)).toStrictEqual(false)
    expect(lessThan(89, 89)).toStrictEqual(false)
})

test('Testing greaterThan', async () => {
    expect(greaterThan(6, 7)).toStrictEqual(false)
    expect(greaterThan(8, 6)).toStrictEqual(true)
    expect(greaterThan(89, 89)).toStrictEqual(false)
})

test('Testing isEqual', async () => {
    expect(isEqual(6, 7)).toStrictEqual(false)
    expect(isEqual(10, 10)).toStrictEqual(true)
    expect(isEqual("10", 10)).toStrictEqual(true)
})

test('Testing isStrictEqual', async () => {
    expect(isStrictEqual(6, 7)).toStrictEqual(false)
    expect(isStrictEqual(10, 10)).toStrictEqual(true)
    expect(isStrictEqual("10", 10)).toStrictEqual(false)
})

test('Testing returnLowerValue', async () => {
    expect(returnLowerValue(6, 7)).toStrictEqual(6)
    expect(returnLowerValue(5, 3)).toStrictEqual(3)
    expect(returnLowerValue(5, 5)).toStrictEqual(5)
})