
// LECTURE: Values and Variables
// let country = 'usa'
// const continent = "North America"
// let population = 300000000
// console.log(country)
// console.log(continent);
// console.log(population);

//  let isIsland = false; 
//  let language = 'english';

//  LECTURE: Data Types
//  console.log(typeof isIsland);
//  console.log(typeof population);
//  console.log(typeof country);
//  console.log(typeof language);

// // console.log(2**3)

// // // Lecture: Basic Operators
// population /= 2; 
// population++
//     console.log(population);
// const finlandPopulation = 6000000;
//     console.log(finlandPopulation < population);
// const averagePopulation = 33000000;
//     console.log(population < averagePopulation);
// const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
//     console.log(description);


// // Lecture: Strings and Template Literals
// //ex: template literals using backticks (``), and ${}

// const firstName = "shaun"
// const job = "dev"
// const birthYear = 1999
// const currentYear = 2022
// // concatenate strings + variables
// const shaun = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}.`;
// console.log(shaun)
// //create multi-line strings
// console.log(`string
// with multiple
// lines`)

// //LECTURE Notes: 
// // Taking Decisions: if/else statements

// const age = 15 
//     if(age >= 18) {
//     console.log(`Moshe is old enought to drive 🚙`)
//     // does not execute if false
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Moshe is too young. Wait another ${yearsLeft} years.`)
// }

// //LECTURE assignment: Taking Decisions: if/else statements

// if(population > averagePopulation) {
//     console.log(`USA's population is above average.`);
// } else {
//     console.log(`USA's population is ${averagePopulation - population} below average`);
// }

//LECTURE notes: Type Conversion and Coercion
// Type Conversion
// let year = '1991'
// console.log(Number(year)); // Number keyword convert string to integer
// console.log(Number(year) + 18) //conversion does not change the value of the variable. We must use Number keyword again to perform the operation.
// console.log(Number('Joey')) // logs Nan, or "Not a Number" / Invalid Number
// console.log(String(24)) // converts numbers to strings

// // Type Coercion: automatic type conversion

// console.log('I am ' + 23 + ' years old') // + operator triggers coercion which converts 23 to a string
// console.log('20' - '10' - 5); 
// console.log('20' * '10');
// console.log('20' / '10');
// -, *, and / operators do the opposite; they convert strings to numbers

//LECTURE assignment: Type Conversion and Coercion

/* 1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/
// console.log(5 + 6 + '4' + 9 + '3' - 4 - 2);
        // (11    + '4' + 9 + -2 )
// executes 5 + 6 + '4' = 114 + (9-4-2) = 114 + 3



// Lecture Notes: Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// falsy values will become false when converted to boolean
// truthy values: any non-zero number or any string; will be true when converted to boolean
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("shaun"));
// console.log(Boolean({}));

// const money = 0
// if(money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job"); } 
// money is converted to the boolean false because it's a falsy value in an if statement. Therefore the if statement is passed over and the else statement is executed.

//LECTURE Notes: Equality Operators 
// const age = "18"
// if(age === 18) console.log('adult (strict)');
// if (age == 18) console.log('adult (loose)');
//RULE OF THUMB: avoid loose equality operator as it can introduce buggy code. Loose equality performs type coercion. Strict equality checks for type AND value.

// if(age !== 18) console.log('Why not 23?')
//Always use strict "different" / does not equal operator

//Lecture Assignment: Equality Operators 
// const numNeighbours = 1
// if (numNeighbours === 1) { console.log('Only one border!');
// } else if (numNeighbours > 1) { console.log('More than one border'); 
// } else { console.log('No Borders') }


//LECTURE Notes: Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
//  console.log(hasDriversLicense && hasGoodVision);
//  console.log(hasDriversLicense || hasGoodVision);
//  console.log(!hasDriversLicense);
// // && operator must have all variables be true;     || or operator can only have one variable be true; Not operator (!) reverses the value (true -> false)

// const shouldDrive = hasDriversLicense && hasGoodVision; 
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasDriversLicense && !isTired) {
//     console.log(`Sarah should drive`)
// } else {
//     console.log(`someone else should drive`);
// }

//LECTURE: the Switch statement

const day = 'monday';

    switch(day) {
        case 'monday': // day === monday
            console.log(`go to work`);
            console.log(`make expresso`);
            break; // break is necessary so code stops executing after case is fulfilled
        case 'tuesday': 
        case 'wednesday': // multiple cases yield same result
        case 'thursday':
            console.log(`get fucked`);
            break;
        case 'friday':
            console.log(`good shoibi`);
            break;
        case 'saturday': 
        case 'sunday':
            console.log(`have nice weekend 👍`);
            break;
        default:
            console.log(`not a valid day`);
    }

//Lecture: Statements and Expressions

//examples of expressions: (expressions because they produce value(s))
2 + 4 
1984
true && false && !false
//examples of statements: if/else, switch, etc. (statements don't produce a value. They are 'sentences' that translate logical actions)

//Lecture: Conditional / Ternary Operator 

const age = 18;
// age >= 18 ? console.log('wine 🍷') : console.log('water 💦');
// condition ? if : else
const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);
//if/else equivalent
let drink2;
    if(age >= 18) {
        drink2 = 'wine 🍷';
    } else {
        drink2 = 'water 💦';
    } console.log(drink2); //ternary is much more efficient

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);
//We can use ternary inside template literals because it's an expression, wherass if/else is a statement. 


// END OF SECTION SECTION 2: JAVASCRIPT FUNDAMENTALS PART 1