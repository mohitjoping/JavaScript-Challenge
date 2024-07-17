// Activity 3: Do While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do-while loop.

let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do-while loop.

let num = -4;
let factorial = 1;
let k = 1;
do {
    factorial *= k;
    k++;
}
while (k <= num);
console.log(factorial);