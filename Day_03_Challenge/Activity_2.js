// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.


function findLargest(a, b, c) {
    // Check if a is greater than or equal to both b and c
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      // If not a, check if b is greater than or equal to both a and c
      return b;
    } else {
      return c;
    }
  }
  
 
  
  const largestNumber = findLargest(-10, -96, -10);
  
  console.log("The largest number is:", largestNumber);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// second approach 
let a =10
let b=10
let c=10

  if (a>=b) {
    if (a>c) {
        console.log('a is the largest no.')
    } else {
        console.log('c is the largest no.')
    }
  } else {
    if (b>=c) {
        console.log('b is the largest no.');
    } else {
        console.log('c is the largest no.');
    }
  }
  