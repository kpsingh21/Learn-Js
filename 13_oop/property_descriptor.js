// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // 3.1415...   not possible to make 5 due to below reason

// The Object.getOwnPropertyDescriptor() method returns the property descriptors of an object.
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// {
//  value :3.141
//  writable : false 
// configurable :false
// }

// const mynewobj = Object.create();      //TypeError : Object Prototype may only be an object or null 

// const mynewobj = Object.create(null); Creates an object with no prototype (__proto__ is undefined).
// No built-in methods like .toString(), .hasOwnProperty(), etc.


// const mynewobj = Object.create({});    Creates an object whose prototype is {} (an empty object).

const mynewobj = Object.create({ name: "kp" });  //mynewobj is an empty object but has a prototype { name: "kp" }.
// If you access mynewobj.name, it will inherit "kp" from its prototype.
// However, mynewobj itself does not have the name property directly.

console.log(mynewobj.name); // ✅ "kp" (inherited from prototype)
console.log(mynewobj.hasOwnProperty("name")); // ❌ false (not a direct property)
console.log(Object.getPrototypeOf(mynewobj)); // ✅ { name: "kp" }


// const mynewobject ={
//     name : "kp"
// }
console.log(mynewobj);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("chai nhi bni");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//every property have this  
// {
//  value : ""
//  writable : true
//  enumerable : true
// configurable :true
// }

// we can redefine properties of objects

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true, 
    // enumerable: false, // then the below loop is not executable means only name property will not come in loop as we are restricting only name property
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {   //otherwise it will iterate fun also
        console.log(`${key} : ${value}`);
    }
}