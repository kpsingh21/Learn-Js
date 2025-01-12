//based on how data is stored and retrive from memory the data types is defined
//i.e Primative and Non primative
//  Primitive are call by value means  when you copy or use that we will not get refernce of memeory we will get copy of ref 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol is used to make any thing unique mostly used in frontend frameworks
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false i.e the id are unique due to Symbol

const bigNumber = 3456543576654356754n //the n in end wil make a no bigint

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


//typeof is used to find the data type 
console.log(typeof anotherId); //symbol
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function

//doc for typeof
// https://262.ecma-international.org/5.1/#sec-11.4.3


// JavaScript is a dynamically typed programming language. This means that variables in JavaScript do not have a fixed type. The type of a variable is determined at runtime based on the value assigned to it. In contrast, statically typed languages like Java or TypeScript require variables to have a specific type declared at compile time, and this type cannot change.

