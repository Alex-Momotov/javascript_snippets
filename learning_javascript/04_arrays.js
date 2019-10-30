// Arrays are objects in JavaScript. We can define a simple array as follows
let arr = [1, 2, 3, 4, 5];
let arr2 = ['red','green','blue','yellow','orange'];
console.log(arr);
console.log(arr2);
console.log(arr2[0], '\n');

// Length of arrays is dynamic. If we assign a new number to an index that does not exist, that index will be created
// and all indices in between will be initialised to 'undefined'.
let A  = [1,2];
A[10] = 3;
console.log(A);
console.log(A[5]);
console.log();

// We can create an array of undefined values as follows
let B = new Array(8);
console.log(B);

// Use .length attribute to display length of an array
console.log(B.length);

