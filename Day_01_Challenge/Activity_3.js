// Activity 3: Data_Types

// TASK 4
// Create variable of different dataTypes, and log variable's type using the 'typeof' operator.

//primitive and non-primitive dataTypes
// primitive - Number, String, Boolean

// Number
console.log('check typeof for number')
const id = 1234
let weight = 32.5
console.log(typeof id);
console.log(typeof weight);

// String
console.log('check typeof for string')
const username = 'mohit'
let role = "contributor"
console.log(typeof username);
console.log(typeof role);

// Boolean

console.log('check typeof for boolean')
const userLoggedin = true
const userLoggedout = false
let isLoggedIn = true

console.log(typeof userLoggedin)
console.log(typeof userLoggedout)
console.log(typeof isLoggedIn)

// Non-Primitive - Array, Object

// Array
console.log('check typeof for Array')
let colourSet = ['red', 'green', 'blue', 'white', 'black']
console.log(colourSet)
console.log(typeof colourSet);


// Object
console.log('check typeof for Object')

let obj = {
    FullName: "Mohit Joping",
    Age: 18
}

console.log(obj)
console.log(typeof obj)