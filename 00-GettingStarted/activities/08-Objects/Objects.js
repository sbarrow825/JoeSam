function colorOfCar(carObject) {
    // Given a car object structured the same as the one in the README. E.g car = {type:"Fiat", model:"500", color:"white"}. Return the color of the car

}

function twoDimArrayToObject(twoDimArr) { 
    /*
    Given an N by 2 array (meaning an array of variable length where each element in the array is an array of length 2). E.g twoDimArr = [["foo", "flarn"]]. E.g twoDimArr = [["foo", "flarn"], ["moreFoo", "moreFlarn"]]
    Return an object with keys equals to the first elements of each inner array mapping to values of the second element of each inner array

    E.g for twoDimArr = [["foo", "flarn"], ["moreFoo", "moreFlarn"]]

    return

    {
        "foo": "flarn",
        "moreFoo": "moreFlarn"
    }

    */
}

function conditionallyDeleteOrAdd(obj) {
    /* 
    Given an object, if the key "landmine" exists. Delete that key and it's corresponding value and return the modified object
    If the key "landmine" doesn't exist, add a key value pair "clear: true" and return the object

    E.g for the case
    
    obj = {
        "foo": "flarn",
        "landmine": [1,2,3,4],
        "Becky": false,
        "Dirt": "yes"
    }

    return the following

    {
        "foo": "flarn",
        "Becky": false,
        "Dirt": "yes"
    }

    E.g for the case 

    obj = {
        "foo": [1,2,3,4]
    }

    return the following
    
    obj = {
        "foo": [1,2,3,4],
        "clear": true
    }

    Note: you may want to check out the Object.keys method https://www.w3schools.com/jsref/jsref_object_keys.asp

    */
}

module.exports = {
    colorOfCar,
    twoDimArrayToObject,
    conditionallyDeleteOrAdd
}