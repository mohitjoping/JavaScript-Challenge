// Activity: 5 Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

let i = 1;
while (i <= 10) {
  if (i === 5) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// Task 9: Write a program to print numbers from 1 to 10, but break the loop if when the number is 7 using the break statement.

let j = 1;
while (j <= 10) {
  if (j === 7) {
    break;
  }
  console.log(j);
  j++;
}