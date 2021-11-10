console.log("Hellow World");
let name; // default value is undefined
let name = "Suresh";
console.log(name);
let interestRate = 0.3;
interestRate = 1; //Reassigning values
console.log(interestRate);

const PI = 3.14; // Constant and can't be changed or modified.

//Primitive DataTypes or value types

let name = "Suresh"; // Setring Literal
let age= 30; // Number Literal
let isLoanApproved = true; // Boolean literal
let firstName; // default value is undefined
let firstName=undefined; // undefined
let selectedColor = null;

typeof(age) // Number
typeof(name) // String
typeof(isLoanApproved) // Boolean
typeof(firstName) // undefined is value as well as data type
typeof(selectedColor) // Object

//Reference Types(object, Array, Function
let person = {} // object leteral

let person = {
name: "Suresh",
age : 38
};

console.log(person); // Person object
// Dot Notation
console.log(person.age);
console.log(person.name);
//reassigning value
person.age = 40;

//Bracket Notation
console.log(person["age"]);

person["name"] = "Suresh Anandamurthi";

let selectedColours = ['red', 'blue']; Array literal
console.log(selectedColours);
console.log(selectedColours[0]);
selectedColours[3] = 'green';
selectedColours[4] = 124;
console.log(selectedColours.length)

function greet(){
    console.log("Hellow World");
}

greet();

function greet(name){
    console.log("Hellow " + name);
}

let name = "Suresh"
greet(name);

function square(number){
    return (number * number);
}

let res = square(2)
console.log(res);