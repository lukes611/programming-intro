// you can compare booleans, numbers and stings using comparison operators
// == checks if two values are equal, bug ignores type
// === checks if two values are absolutely equal (including same type)
// best practice is: always use ===

// examples
console.log("'hello' === 'hello' : ", 'hello' === 'hello'); // true, both are equal

const a = 5;
const b = 12 - 7;
console.log(a === b); // true, 5 equals 5

console.log("'201' === 201: ", '201' === 201); // false, they look the same, but one is a string, the other a number
console.log("'304' == 304: ", '304' == 304); // true, == is a more lenient comparitor, since '304' can be converted
// to a number, and the numbers are equal, returns true

// the opposite, the not-equal operator
// != is a weak not equals operator, it tries to convert one of the types
// !== is the better oporator to use, it takes type into account
console.log("5 !== 2: ", 5 !== 2); // true, 5 is not equal to true
console.log("'bye' !== 'bye': ", 'bye' !== 'bye'); // false, bye IS equal to bye
console.log("'4' !== 4: ", '4' !== 4); // true, they are not equal because they are not the same type
console.log("'4' != 4: ", '4' != 4); //false, they are equal if we ignore data type

// We previously learnt about the array function includes
// which can check if an array contains an item.
const fruit = ['banana', 'apple', 'orange'];
console.log('fruit', fruit);
console.log('has bananas: ', fruit.includes('banana')); // true
console.log('has grapes: ', fruit.includes('grapes')); // false

// but how does .includes(...) work?
// To understand how it works, we need to "think like an engineer"
// That is, break down the problem into the true steps you do in your brain.
// What do you do as a human when you check if 'apple' is in the array?
// You problable start reading each item 'banana', 'apple' 🛑 STOP! I see apple
// return true!
// on the other hand, if we were searching for 'grape', but we got to the end of the array
// we know we checked everywhere... there must be no grapes.
// Check out the implementation of includes below, named myIncludes

// 
function myIncludes(arr, itemToCheck) {
    // loop through each item
    for (const item of arr) {
        if (item === itemToCheck) { // Stop 🛑! We found this item
            return true; // note: in functions you can return at any time
        }
    }
    // well, we got to the end and we never returned true...
    // there must be no `itemToCheck`s here...
    return false;
}

// let's test
console.log('has bananas (myIncludes): ', myIncludes(fruit, 'banana')); // true
console.log('has grapes (myIncludes): ', myIncludes(fruit, 'grapes')); // false
