"use strict";

// Data needed for a later exercise
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = `20:00`, address}) {
        // console.log(`Order Recieved. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    }, // we destructure the object and use that as our parameter. We are only passing in one argument, the object, not all 4 keys. Hence the ({param}) syntax.

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`); // 105
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

// Section 106 Notes: Rest Pattern and Parameters
// 1. Destructuring

// const arr = [1, 2, ...[3, 4]]; // SPREAD because on RIGHT side of =

// const [a, b, ...rest] = [1, 2, 3, 4, 5]; // REST because on LEFT side of =
// console.log(a, b, rest); // rest takes the rest of the elements unused in destructuring

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // does NOT include any skipped elements (empty commas)
// rest pattern must always be the last elements in the array; there can only be one in any destructuring assignment
// Rest pattern can only be used in places that would otherwise be VARIABLES separated by commas

//Objects Rest
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
// With spread, we expand, with rest we compress (out of an array vs in an array)
// const x = [23, 5, 7];
// add(...x);
// In this example, we unpacked the x array, and inserted the values into the add function, which uses the rest operator to then repack the numbers into an array and take them as arguments. With this method (rather than passing an array as an argument), we can pass both single value and arrays as arguments.

restaurant.orderPizza("mushrooms", "olives", "onions");
restaurant.orderPizza("mushrooms"); // rest operator collects unused values, in this case it takes all arguments but the first (mainIngredient)

// Section 105 Notes: The Spread Operator
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const newArr = [1, 2, ...arr]; // takes all arr value sand inserts them.
// console.log(newArr);

// console.log(...newArr); // "unzips" array, strips elements from array and turns them to values.
const newMenu = [...restaurant.mainMenu, "Gnocci"]; // create a new array composed of the old menu arr + new element
console.log(newMenu);
// spread opeator is different from desctructuring in that it doesnt create variables for the elements, so we can only use it in places where we'd otherwise write values separated by commas.

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // creates a "shallow copy" of array

//Join 2 or more arrays
const concatMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(concatMenu);

//Iterables are: arrays, strings, maps, sets. NOT objects. Spread operator works on all iterables.
const str = "Shaun";
const letters = [...str, " ", "s."];
console.log(letters);
// We can only use the spread operator when building an array or when we pass values into a function.

// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant, foundedIn: 1998, founder: "Guiseppe"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); // proves we are creating a new object rather than altering the original

restaurant.orderDelivery({
    time: `22:30`,
    address: `6639 Yolanda Ave`,
    mainIndex: 2,
    starterIndex: 2,
});
// Lesson 104 Notes: Destructuring Objects

const {name, openingHours, categories} = restaurant; // creates 3 variables based on retaurant object; order does not matter
// console.log(name, openingHours, categories);
console.log(restaurant);

// changing key names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// Setting deafult values
const {menu = [], starterMenu: starters = []} = restaurant;
// we created a new key called menu and gave it a deafult value of []. We then changed the key name of starterMenu to starters and gave it a default value in case the key didn't exist.
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// Nested objects
// const {
//     fri: {open: o, close: c},
// } = openingHours;
// console.log(o, c); // used destructuring within destructuring to access a nested object value.

// Section 103 Notes: Destructuring Arrays

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
// Original array is not affected; essentially we are destructuring the array by assigning variables to the array values.

// let [main, , secondary] = restaurant.categories; // standalone comma allows us to skip array elements.
// // console.log(main, secondary);

// // switch variables
// [main, secondary] = [secondary, main];
// // console.log(main, secondary); // no need for let or const because we are only reassigning the values

// // Recieve 2 return values from a function (method)
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested
// // console.log(i, j);
// const [i, , [j, k]] = nested; //using destructuring within destructuring to remove elements from nested arrays.
// // console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // set variables equal to one to assing them a default value in case the array element in its position doesn't exist.
