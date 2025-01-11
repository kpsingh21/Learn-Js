"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser , we have different syntax for this

// https://tc39.es/ ;  https://tc39.es/ecma262/ standard defined by ECMA Standards

// DataTypes : Primative and Non-Primative

// Primitive: String, Number, BigInt, Boolean, Symbol, Undefined, Null.
// Definition: A data type that holds a single value directly.

// Non-Primitive: Objects (Array, Function, Object).
// Definition: A data type that stores collections of values or more complex entities.
let name = "hitesh" // string => ""
let age = 18   // number => 2 to power 53
// bigint
let isLoggedIn = false // boolean => true/false
let state;
// null => standalone value
// undefined =>  variable declare but value is not asigned 
// object
// symbol => unique


console.log(typeof undefined); // undefined
console.log(typeof null); // object