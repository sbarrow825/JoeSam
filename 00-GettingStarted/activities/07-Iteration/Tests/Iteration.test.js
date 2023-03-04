const { sumOfArray } = require('../Iteration');

test('Testing sumOfArray', async () => {
    expect(sumOfArray([1, 2])).toStrictEqual(3)
    expect(sumOfArray([1, 2, 5, 3])).toStrictEqual(11)
    expect(sumOfArray([1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3, 1, 2, 5, 3])).toStrictEqual(44)
})