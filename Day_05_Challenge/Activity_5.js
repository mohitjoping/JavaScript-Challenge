// Activity 5: Higher Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
      func();
    }
  }
  
  function sayHello() {
    console.log("Hello!");
  }
  
  callNTimes(sayHello, 5); 
  


// Task 10: Write a higher-order function tha takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let applyFunctions = (func1, func2, value) => {
    return func2(func1(value));
}

let double = (num) => num * 2;
let square = (num) => num * num;

console.log(applyFunctions(double, square, 5)); // 100
console.log(applyFunctions(double, square, 10)); // 400
console.log(applyFunctions(double, square, 15)); // 900