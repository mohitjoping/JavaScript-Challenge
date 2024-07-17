// Activity 3: Comparision Operators
// Task 8: Write a Program to compare two numbers using > and < and log the result to the console.
let num1 = 10;
let num2 = 15;

console.log(`${num1} > ${num2}:`);
console.log(num1 > num2); // This will be false (10 is not greater than 15)

console.log(`${num1} < ${num2}:`);
console.log(num1 < num2); // This will be true (10 is less than 15)


// Task 9: Write a Program to compare two numbers using >= and <= and log the result to the console.
let num3 = 20;
let num4 = 15;

console.log(`${num3} >= ${num4}:`);
console.log(num3 >= num4); // This will be true (20 is greater than or equal to 15)

console.log(`${num3} <= ${num4}:`);
console.log(num3 <= num4); // This will be false (20 is not less than or equal to 15)


// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let num5 = 10;
let num6 = "10";

console.log("Using == (loose equality):");
console.log(num5 == num6); // This will be true

console.log("Using === (strict equality):");
console.log(num5 === num6); // This will be false
    