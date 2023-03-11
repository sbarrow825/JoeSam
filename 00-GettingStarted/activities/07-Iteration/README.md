# Overview
The inputs to your functions will not always be a single values of int, string, or boolean (eg `5`, `"flarn"`, `true`), oftentimes, inputs will be arrays containing multiple values.

Arrays in JavaScript are denoted with square brackets `[]`, eg `myArray = ["item1", "item2"]` would be an array containing two strings. We can access items within an array by adding square brackets `[]` after the array and including the `index` i.e number of the element we want to extract. E.g the code `e = myArray[0]` would set a variable `e` equal to the first element of the array `myArray`, in this case `e = "item"`, while `e = myArray[1]` would set `e = "item2"`

Keep in mind that **arrays in JavaScript are indexed at 0**. This means that the first element of an array corresponds to `0`, the second element to `1`, third element to `2`, etc... Here we'll learn how to iterate through arrays in order for our functions to take action on each element they contain.

# Iteration Syntax
The iteration syntax looks unintuitive at first glance, but is something you must get familiar with. The general expression is:
```
for (expression 1; expression 2; expression 3) {
    // code block to be executed
}
```

Where
* `expression 1`: is executed (one time) before the execution of the code block.
* `expression 2`: defines the condition for executing the code block.
* `expression 3`: is executed (every time) after the code block has been executed.

# Common Iteration Pattern

The most common pattern you'll see in a for loop is this:
```
for (i = 0; i < mrArray.length; i += 1) {
    // code block to be executed
}
```

The above code will loop sequentially through each element of an array. I.e the same code in `// code block to be executed` will run over and over again, once for each element in the array. Let's go over how this code works:

* `expression 1 (i = 0)`: Expression 1 runs one time before the execution of the code block. In this common case, we're setting a variable `i` equal to `0` before we run any code. The variable `i` is referred to as the index. It keeps track of which element in the array we're currently on as we loop through. Recall that **arrays in JavaScript are indexed at 0**. This means that, on our first execution of our code block, we can access the first element of our array using `myArray[i]` since `i = 0`
* `expression 3 (i += 1)`: For ease of explanation, we'll skip to expression 3. Expression 3 is executed every time after the code block has been executed. The syntax `+=` simply means `take whatever i was before, and add 1 to it`. It is analgous to the syntax `i = i + 1`. This code will effectively increment our variable `i` by 1 each time we loop through our array. The allows the expression `myArray[i]` to always correspond to the current element in our array as we loop through. On our first pass through `myArray[i]` is the first element, on second pass through `myArray[i]` is the second element, on our third pass through `myArray[i]` is the third element, etc...
* `expression 2 (i < mrArray.length)`: Expression 2 defines the condition for executing the code block. Namely, it is a conditional expression that should return a `boolean` value, either `true` or `false`. Once expression 2 returns `false`, the for loop stops running. The `.length` method is a useful, built-in array method in JavaScript which returns the length (i.e number of elements) in an array. E.g for the array `myArray = ["item1", "item2"]`, then `myArray.length` would return `2`. Recall that we increment our index `i` by 1 each time we loop through our for loop with `i += 1`, this means that eventually the condition in expression 2 (`i < myArray.length`) will return `false` as `i` grows. In this common for loop above, we conviently stop the for loop after we've operated on the last element of the array.

# The First Variable Instantiated is Often the Variable Returned

Let's hammer down our understanding of for loops with an example. Let's say I have an array `placeholderStrings = ["foo", "flarn", "placeholder"]` and I want to write a function that returns a variable that concatenates all these string elements together into a single string. Namely, I want to return `"fooflarnplaceholder"`. We can accomplish this by writing a function that uses a for loop:

```
function concatStrings(arr) {
    result = ""
    for (i = 0; i < arr.length; i += 1) {
        result += arr[i]
    }
    return result
}
```

We can now call this function with `concatStrings(placeholderStrings)` and it will return `"fooflarnplaceholder"`.

Notice a pattern here. In order to keep track of what our `result` was in this function, we first instantiated a variable `result` equal to an empty string `""`. After all of our work was done inside the for loop, we ended up returning that variable `result`. This is a common pattern you should be aware of when working with iteration, **the first variable instantiated is often the variable returned**.



# Instructions
* Open the `Iteration.js` file in VSCode
* One by one, fill in the corresponding code
* run `npm test` to test your functions