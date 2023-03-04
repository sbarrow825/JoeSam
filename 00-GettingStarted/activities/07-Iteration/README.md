# Overview
The inputs to your functions will not always be a single value of an int, string, or boolean (eg `5`, `"flarn"`, `true`), oftentimes, inputs will be arrays which are lists of multiple values. Arrays in JavaScript are denoted with square brackets `[]`, eg `myArray = ["item1", "item2"]` would be an array containing two strings. Here we'll learn how to iterate through arrays in order for our functions to take action on each element they contain.

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
The variable `i` is referred to as the index.

# Instructions
* Open the `Comparison.js` file in VSCode
* One by one, fill in the corresponding code
* run `npm test` to test your functions