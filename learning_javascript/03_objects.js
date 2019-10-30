// We can create an object using the following notation.
// This creates a person object.
let person = {
    name:'Mosh',
    age:30,
    height:1.80
};
console.log(person);
console.log(typeof person);

// We can access an attribute of an object using two different notations
console.log(person.name);
console.log(person['name'], '\n');

// We can use both notations to reassign an attribute of an object
person['name'] = 'John';
console.log(person.name);
person.name = 'Mary';
console.log(person.name, '\n');

// The advantage of using bracket notation is that we can substitute variables into brackets
let selection = 'height';
console.log(person[selection])


