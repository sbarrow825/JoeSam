const { multiply } = require('../Multiply');

test('Adding two numbers', async () => {
    expect(multiply(6, 7)).toStrictEqual(42)
    expect(multiply(10, 25)).toStrictEqual(250)
})