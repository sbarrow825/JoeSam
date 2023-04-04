# Overview

Objects are the final JavaScript data type we need to cover before getting into more advanced programming. Similar to arrays, objects are variables that can contain many values. An example object is shown below

```
car = {type:"Fiat", model:"500", color:"white"}
```

Note the difference in notation. Unlike arrays which are denoted by square brackets `[]`, objects are denoted by curly braces `{}`, and contain information organized in `key value pairs` seperated by a colon `:`.

In the above example, our car object contains three keys: `type`, `model`, and `color`, which map to the values `Fiat`, `500`, and `white` respectively.

We can access the information inside an object in two ways:

1. `objectName.keyName`. Called `dot notation`. In our above example, we can access the color of our car with the code `car.color`, which will return `white`
2. `objectName["keyName"]`. Similar to arrays, we can pull information out of our object using square brackets `[]`. However, in the case of objects, we don't pull out a specific `index` like we do with arrays, we instead supply a string that matches the name of a key in our object

E.g `car[2]` would return `undefined` since our car object has no key `2`, but `car["model"]` would successfully return `Fiat`

# Why Not Just Use Arrays?

The main benefit of working objects instead of arrays is that objects allow us to access data much more quickly when working with large data sets. They also allow data to be organized in a much more friendly, intuitive format.

## Array Inefficiency 
Let's say we were storing order data for an online store in a 2D array (meaning an array where each element in the array is also an array). The array might like something like this

```
orderHistory = [
        ["John", "Smith", "1", "e356fdbd-1071-4a12-8bc4-1f6fdc4fe4f7", "$4.99", "736 Washington St", "San Francisco", "94018"],
        ["Larry", "Thompson", "2", "8a4ff5b2-f2e0-4e87-8f51-3bbd6468946b", "$9.99", "1440 Washington St", "San Francisco", "94022"]
    ]
```

Where each order we receive, we append to the `orderHistory` another array contain the customer's `[first name, last name, customer Id, order ID, price, street address, city, zip code]`

Let's say you're now tasked at your job to implement a order history window on your website for customers to see their past orders. How would you have to implement this when all your data is stored in one big array?

You would have to iterate through the entire `orderHistory` database looking for that particular customer's customer id, and display the data corresponding to that customers orders. Something like below

```
for (i = 0; i < orderHistory.length, i += 1) {
    currentOrder = orderHistory[i]
    if (currentOrder[2] === currentCustomerID) {
        // display information on page
    }
}
```

While this would work, it's incredibly inneficient and unintuitive. First off, you would have to iterate through every single order your store has ever done each time a user wants to view their past orders. Second, for your fellow co-workers looking at this code, there's nothing descriptive about what `currentOrder[2]` is as it's simply indexing into an array. As more orders come in, more traffic comes to your store, and more customers start looking at their past orders, this will definately be unscalable.

## Object Efficiency

Now imagine your `orderHistory` data was instead structured as on object

```
orderHistory = {
    1: {
        firstName: "John",
        lastName: "Smith",
        orderId: "e356fdbd-1071-4a12-8bc4-1f6fdc4fe4f7",
        price: "$4.99",
        streetAddress: "736 Washington St",
        city: "San Francisco",
        postalCode: "94108"
    },
    2: {
        firstName: "Larry",
        lastName: "Thompson",
        orderId: "8a4ff5b2-f2e0-4e87-8f51-3bbd6468946b",
        price: "$9.99",
        streetAddress: "1440 Washington St",
        city: "San Francisco",
        postalCode: "94022"
        }
    }
```

Where the keys of our `orderHistory` object are the customer IDs of our customers.

Now, no iteration is needed in order to access the information of a known customer ID. E.g if we wanted the `price` value of our first customer's order (user with customerID = 1). We can simply use the code `orderHistory.1.price`, which will return `$4.99`

Notice that in this case, we don't have simple 1 to 1 string mapping of key values pairs like we did in our car example, but we still do have key value pairs. The value that the key of an object maps to can be anything, e.g a string, boolean, undefined, an array, or like in this example, another object. Objects can have an many layers as you like in order to better organize your data. A key to an object can map to an object, a key to that object could map to another object, etc... 

# Conventions

Typically, you will see `dot notation` being used to access information inside object. Namely `objectName.keyName`. Because of this, it is common convention to name the keys of your objects *without spaces*. E.g I could have an object

```
flarn = {"There's a space here": "that's not good"}
```

Where the code `flarn["There's a space here"]` would still reutrn the `string "that's not good"`

But the code `flarn.There's a space here` would error out.

Avoid these errors by not putting spaces in your keys.

# Adding Key Value Pairs to Objects

Similar to how we access values in an object with `objectName.keyName`, e.g `car.color` in our first example. We can add values to our objects by appending the assignment operator `=`

If we wanted to add a key `topSpeed` to our car object, we simply write

```
car.topSpeed = "20"
```

Now our `car` object would look like this

```
car = {type:"Fiat", model:"500", color:"white", topSpeed: "20"}
```

# Deleting Key Value Pairs from Objects

To delete a key value pair, simply use the word `delete`

```
delete objectName.keyName
```

E.g

```
delete car.model
```

Now our car object would look like

```
car = {type:"Fiat", color:"white"}
```

# Instructions
* Open the `Objects.js` file in VSCode
* One by one, fill in the corresponding code
* run `npm test` to test your functions