// Activity 4: Array Methods (intermediate )
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let doubledNumbers = numbers.map(function(number){
    return number * 2;
});
console.log(doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});
console.log(evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sum = numbers.reduce(function(accumulator, number){
    return accumulator + number;
}
);
console.log(sum);
    