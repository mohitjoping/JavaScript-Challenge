// Activity 4: Nested Loops
// Task 7: Write a program to print the following pattern using nested loops:
// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
        
    }
    console.log(row);
}
