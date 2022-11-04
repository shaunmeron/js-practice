// LECTURE 32 Notes: Activating Strict Mode

"use strict";
// must be very first line of code or else struct mode will NOT be activated
// 1. Strict mode forbids certain things
// 2. Strict Mode presents visible errors in the console whereas regular JS will fail in silence
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDiverLicense = true;  // intentional bug in variable name
// if (hasDriversLicense) console.log('I can drive :D');
// Strict mode logs 'not defined' error in console, without strict, no error is logged.

// const interface = 'Audio';
// const private = 9;
// 'Unexpected strict mode reserved word'

// LECTURE 33 Notes: Functions

// function logger() {
//     console.log('My name is Shaun');
// }
// logger(); // known as invoking, calling, or running the function
// logger();
// logger(); // function is called three times

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0); // calling this function will give us the return value of variable juice.
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4); // A function that isn't called will never be executed.
// console.log(appleOrangeJuice);

// LECTURE 33 Assignment: Functions

// function describeCountry(country, population, capitalCity) {
//     const countryAttribute = `${country} has ${population} people and its capital city is ${capitalCity}.`
//     return countryAttribute;
// }

// console.log(describeCountry('Portugal', 15000000, 'Lisbon'));
// console.log(describeCountry('England', 150000000, 'London'));
// console.log(describeCountry('Israel', 8000000, 'Tel Aviv'));

// LECTURE 34 Notes: Function Declarations vs. Expressions

// Function Declaration
// function calcAge1(birthYear) { //parameter = placeholder (birthYear)
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991); // argument = actual value that fills the parameter
// // Main difference is that you can call a function declaration before it is defined.

// Function Expression
// const calcAge2 = function(birthYear) { // function w/ no name is an anonymous function
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2);

// LECTURE 34 Assignment
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}
// const countryPop1 = percentageOfWorld1(100000000)
// const countryPop2 = percentageOfWorld1(50000000)
// const countryPop3 = percentageOfWorld1(250000)
// console.log(countryPop1, countryPop2, countryPop3);

// const percentageOfWorld2 = function(population) {
//     return population / 7900 * 100
// }
// const countryPop1 = percentageOfWorld2(100000000)
// const countryPop2 = percentageOfWorld2(50000000)
// const countryPop3 = percentageOfWorld2(250000)
// console.log(countryPop1, countryPop2, countryPop3);

// LECTURE 35 Notes: Arrow Functions

// const calcAge3 = (birthYear) => 2037 - birthYear; // return happens implicitly
// const age3 = calcAge3(1997); // no curly braces needed for single argument one liner code.

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const currentAge = 2037 - birthYear;
//   const retirement = 65 - currentAge;
//   // return retirement;
//   return `${firstName} will retire in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1997, `Gilbert`));
// console.log(yearsUntilRetirement(1980, `Derrick`));

// // LECTURE 35 Assignment

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(percentageOfWorld3(25));

// LECTURE 36 Notes: Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;3
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples); // calling previous function and assigning it a variable
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`; // replaced the literals from ${apples} to ${applePieces} to represent new variables which are calling previous function.
//     return juice;
//}
// console.log(fruitProcessor(2, 3));

// Lecture 36 Assignment:

// const getStringOfPopulation = (population) => {
//     if (population >= 1000000000) {
//         return population / 1000000000 + " billion";
//     }

//     if (population >= 1000000) {
//         return population / 1000000 + " million";
//     }

//     if (population >= 1000) {
//         return population / 1000 + "k";
//     }

//     return population;
// };

// const describePopulation = function (country, population) {
//     const worldPercent = percentageOfWorld1(population);

//     const description = `${country} has ${getStringOfPopulation(population)} people, which is about ${worldPercent} percent of the world`;

//     return description;
// };

// console.log(describePopulation("Germany", 233123232444));

//LECTURE 37 Notes: Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear; // parameters are local to each function; can have same or different variable names
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const currentAge = calcAge(birthYear); //calling previous function
//     const retirement = 65 - currentAge;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1; // number that shows that value returned is meaningless, ex. 9999
//     }

//     // return `${firstName} will retire in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1997, `Gilbert`));
// console.log(yearsUntilRetirement(1970, `Derrick`));

// LECTURE 39 Notes: Introduction to Arrays

// const friends = ["Michael", "Steven", "Peter"]; // known as "literal syntax"
// console.log(friends);

// // OR: alternative way to write arrays in function syntax. Less frequently used
// const friends2 = new Array(1999, 2001, 2003, 2005);
// console.log(friends2);

// console.log(friends[0]); // Zero based indexing. [0] Pulls first element

// console.log(friends.length); // .length property gives us the amount of elements in an array. NOT zero based.

// console.log(friends[friends.length - 1]); // gives us the last element of the array because of the 1 unit discrepancy between zero based and non-zero based indexing.

// friends[2] = "Jay";
// console.log(friends); // Mutate an array element by referencing it and setting it equal to the new value.

// const firstName = "Shaun";
// const shaunDescription = [firstName, 23, "sexy", 2022 - 1999, [0, 1, 2], friends];
// // Arrays can store all types of values, including variables, expressions, numbers, strings, nested arrays, etc.
// console.log(shaunDescription);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// // console.log(calcAge(years)); // WRONG: returns NaN, cannot use arrays in operations
// const age1 = calcAge(years[0]); // takes 1990 as argument into calcAge function
// const age2 = calcAge(years[years.length - 1]);
// const age3 = calcAge(years[years.length - 2]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[years.length - 1]), calcAge(years[years.length - 2])]; // can add function calls to array because they produce values
// console.log(ages);

// // Lecture 39 Assignment
// const populations = [7900000000, 40, 80, 120];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

//LECTURE 40 Notes: Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements

// const newLength = friends.push("Jay"); // .push is a function that adds element to END of an array and returns the length of the new array
// console.log(friends);
// console.log(newLength); // logs new length

// friends.unshift("John"); // .unshift adds element to BEGINNING of an array and returns the length of the new array
// console.log(friends);

// Remove elements

// friends.pop(); // removes LAST element of an array. no need to pass argument
// const popped = friends.pop(); // returns popped element
// console.log(friends);
// console.log(popped);

// friends.shift(); // removes FIRST element of an array; also returns shifted element
// console.log(friends);

// console.log(friends.indexOf("Steven")); // returns index of array element (zero-based)

// friends.push(23);
// console.log(friends.includes("Steven")); // returns T/F if array includes element passed as argument
// console.log(friends.includes("23")); // does not do type coercion; strict equality, must be same type

// if (friends.includes("Steven")) {
//     console.log("You have a friend named Steven");
// }

// Lecture 40 Assignment:
// const neighbors = ["Egypt", "Jordan", "Lebanon", "Syria"];
// neighbors.push("Utopia");
// neighbors.pop();
// console.log(neighbors);
// if (neighbors.includes("Germany")) {
//     console.log("Probably a central European country");
// } else {
//     console.log("Probably not a central European country");
// }
// neighbors[neighbors.indexOf("Egypt")] = "Kazhakstan";
// console.log(neighbors);

// Lecture 42 Notes: Introduction to Objects

// const shaun = {
//     firstName: "Shaun",
//     lastName: "Meron",
//     age: 2037 - 1991,
//     friends: ["Michael", "Steven", "Peter"],
// }; // on the left is the "key" or "property" which we use to reference the "value" on the right
// In objects, the order of properties does not matter like they do in arrays. We should use arrays for ordered data and objects for unstructured / labeled data.

// Lecture 42 + 43 + 44 Assignments:
// const myCountry = {
//     country: "Israel",
//     capital: "Tel Aviv",
//     language: "Hebrew",
//     population: 8,
//     neighbors: ["Egypt", "Jordan", "Lebanon", "Syria"],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighboring countries (${this.neighbors}), and a capital called ${this.capital}.`);
//     },
//     checkIsland: function () {
//         // this.isIsland = this.neighbors.length == 0 ? true : false;
//         this.isIsland = !this.neighbors.length;
//         return this.isIsland;
//     },
// };
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries (${myCountry.neighbors}), and a capital called ${myCountry.capital}.`);

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// Lecture 43 Notes: Dot vs Bracket Notation

// const shaun = {
//     firstName: "Shaun",
//     lastName: "Meron",
//     age: 2037 - 1991,
//     friends: ["Michael", "Steven", "Peter"],
// };
// console.log(shaun);
// console.log(shaun.lastName); // object.key
// console.log(shaun["lastName"]); // object['key']

// const nameKey = "Name";
// console.log(shaun["first" + nameKey]);
// console.log(shaun["last" + nameKey]); // possible to put expressions in brackets. In this case, it concactenates to the name of a property.

// const interestedIn = prompt("What do you want to know about shaun? Choose between firstName, lastName, age, or friends");
// console.log(interestedIn);
// console.log(shaun[interestedIn]); // must use bracket notation because we're indirectly referencing a property

// if (shaun[interestedIn]) {
//     console.log(shaun[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, or friends");
// }

// shaun.location = "USA";
// shaun["twitter"] = "@slimshauny";

// Lecture 43 Challenge
// "Doug has 3 friends, and his best friends is called Michael"

// const doug = {
//     friends: ["Michael", "Gary", "Larry", "Jeff"],
// };
// if (doug.friends.length === 3) {
//     console.log("Doug has 3 friends, and his best friend is called " + doug.friends[0]);
// } else {
//     console.log("Doug has " + doug.friends.length + " friends, and his best friend is called " + doug.friends[0]);
// }

// Lecture 44 Notes: Object Methods

// const shaun = {
//     firstName: "Shaun",
//     lastName: "Meron",
//     birthYear: 1999,
//     occupation: "student",
//     friends: ["Michael", "Steven", "Peter"],
//     hasDriversLicense: true,
// Function attached to an object is called a "method"
// calcAge: function (birthYear) {
//     return 2037 - birthYear; },

// calcAge: function () {
//     console.log(this); // this points to the shaun object
//     return 2037 - this.birthYear;
// },
// "this" keyword points to the object which is calling the method. In this case the object is "shaun."

// calcAge: function () {
//     this.age = 2022 - this.birthYear; // this.age creates a new property in the current object.
//     return this.age; //Most efficient bc we only need to calculate the age once, then we can simply retrieve the newly created property value.
// },
// Lecture 44 challenge:
//     description: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old student, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     },
// };
// console.log(shaun.calcAge());
// console.log(shaun.description());

// Lecture 46 Notes: Iteration: The For Loop

// for (let rep = 1; rep <= 10; rep++) {
//     // console.log("Lifting weights repetition 1");
//     console.log(`Lifting weights repetition ${rep}`);
// }
// First statement: initialize the counter; starting point
// must use "let" because variable will be changed by the for loop
//for loop keeps running while condition (second statement) is TRUE

// Lecture 46 Assignment:
// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// Lecture 47 Notes: Looping Arrays, Breaking, and Continuing

// const shaunArray = ["Shaun", "Meron", 2037 - 1991, "student", ["Michael", "Steven", "Peter"]];
// // because of zero based indexing, we want to stop the loop at the length of the array so that only the elements in the array get iterated.

// const typesArray = [];

// for (let i = 0; i < shaunArray.length; i++) {
//     // console.log(shaunArray[i], typeof shaunArray[i]);

//     typesArray[i] = typeof shaunArray[i];
//     // creating new array from previous array using for loop

//     typesArray.push(typeof shaunArray[i]);
//     // pushing each iteration (typeof) to the END of the array to maintain the correct order.
// }
// console.log(typesArray);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < shaunArray.length; i++) {
//     if (typeof shaunArray[i] !== "string") continue;
//     // Continue terminates current iteration after the condition is met. After all the strings were found, the loop ends and the log isn't executed.
//     console.log(shaunArray[i], typeof shaunArray[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < shaunArray.length; i++) {
//     if (typeof shaunArray[i] === "number") break;
//     // After first number is found (46) no other value is logged; it is exclusive; does not included the number.
//     console.log(shaunArray[i], typeof shaunArray[i]);
// }

// // Lecture 47 Assignment:
// const populations = [7900000000, 4000, 8000000, 1200];
// const percentages = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages.push((populations[i] / 7900000000) * 100);
//     console.log(percentages);
// }

// Lecture 48 Notes: Looping Backwards and Loops in Loops

// const shaunArray = ["Shaun", "Meron", 2037 - 1991, "student", ["Michael", "Steven", "Peter"], true];
// // 4, 3, ..., 0
// // To start at the end, we go to the length of the array and subtract one because of zero based indexing.
// for (let i = shaunArray.length - 1; i >= 0; i--) {
//     console.log(i, shaunArray[i]);
// }

// Nested loops
// create 3 sets of 5 reps
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`----STARTING EXERCISE ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: lifted weights repetition ${rep}`);
//     }
// }

//Lecture 48 Assignment

// const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//     // console.log(listOfNeighbors[0]);
//     for (let j = 0; j < listOfNeighbors[i].length; j++) {
//         console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//     }
// }

// Lecture 48 Notes: The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
// loop will run WHILE given condition is true.
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
//While loops only really need a condition; counter (let i = 1) is not necessary in some use cases.

let dice = Math.trunc(Math.random() * 6) + 1;
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
