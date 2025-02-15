// Every object in JavaScript has a hidden link to another object, called its prototype.
//  Function.prototype
//  Array.prototype

//map,length,slice all this are generated from prototype only

//example of prototye chaining
// arr → Array.prototype → Object.prototype → null


// Classes, `new` keyword, and `this` all originate from JavaScript's prototype system.  
// One prototype can inherit from another, allowing JavaScript to traverse multiple layers until it reaches `null`, which marks the end of the prototype chain. This concept is known as prototypal inheritance.  
// Objects in JavaScript do not have a parent prototype beyond `null`, meaning the prototype chain terminates there.  
// Arrays and strings are also objects in JavaScript, and since objects do not have a parent prototype, they ultimately lead to `null`.  


function multiplyBy5(num) {
    return num * 5;
}

  
// Can we assign properties to functions?  
multiplyBy5.power = 2; // Yes, because in JavaScript, functions are also objects.

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); //{}

// Why does typeof return "function"?
console.log(typeof(multiplyBy5)); // function

// JavaScript treats functions as first-class objects, but it also provides a distinct type identifier for them.
// In JavaScript, functions are a special type of object. They can have properties and methods just like regular objects.

console.log(Object.getPrototypeOf(multiplyBy5) === Function.prototype); // true
console.log(multiplyBy5 instanceof Object); // true


function createUser(username, score){
    this.username = username //this will set current context
    this.score = score
}

// Adding a method to the prototype
createUser.prototype.increment = function(){
    this.score++  //jisne bhi bulaya hai uske pasjaoo
}


createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

//now if we have do this how js now that which instance need to increment:

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe();  //here you will get error of "cannot read properties of undefiend"

// Key Takeaways About new
// ✅ Creates a new object and sets this inside the function to refer to that object.
// ✅ Links the prototype of the constructor to the new object.
// ✅ Prevents accidental modifications of the global object.
// ✅ Ensures correct method access, avoiding undefined errors.

//problem here is like while creating chai instance we have not give new keyword new keyword will give context.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// 🔹 A constructor function is just a regular function that initializes new objects when used with new.

// More on Prototype:

let myName = "kp"  //2
let myName2 = "kp   " //5
console.log(myName2.length) //5

//I want to achieve trim value without using trim function
// console.log(myName2.trim().length) //2
//like this
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.myfun = function(){
    console.log(`myfun is present in all objects`);
}

heroPower.myfun();

// as Array is also an object so this 'myfun' should be present in the array also.
myHeros.myfun(); // so this myfun is crated for object so available for arrays also

// but is it vice versa also true no , fun created for Array is availabel for objects or not ?
Array.prototype.myfun2 = function(){
    console.log(`myfun2 is available for Arrays`)
}
myHeros.myfun2();  //available for Arrays
// heroPower.myfun2();  // not available 