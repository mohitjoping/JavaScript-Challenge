// Activity 3: Switch Case
// Task 4: write a Program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// const inputDay = 7
// switch (inputDay) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day number (1-7)");
// }



// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const Score = 75;

switch (true) {
    case (Score >= 90):
        console.log("A");
        break;
    case (Score >= 80):
        console.log("B");
        break;
    case (Score >= 70):
        console.log("C");
        break;
    case (Score >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
}
