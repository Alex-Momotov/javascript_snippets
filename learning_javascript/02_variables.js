// Declare a variable but do not initialise it. Printing uninitialised variable should return "undefined".
let a;
console.log(a);

// Declare and initialise a variable.
let b = 5;
console.log(b);

// Declare and initialise a constant. Declaring a constant without initialising is not allowed.
// Once created, we cannot modify a constant. Trying to assign new value to a constant will cause an error.
const c = 3;
console.log(c);

//There are five primitive data types in JavaScript
let variable1 = 'Test';         // string
let variable2 = 50;             // number
let variable3 = true;           // boolean
let variable4 = undefined;      // undefined (when variable has not been initialised)
let variable5 = null;           // null

// typeof keyword returns type of a variable
console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);


