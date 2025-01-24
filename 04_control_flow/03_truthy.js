//truthy and falsy value: 

const userEmail = "kp@gmail.com"  //true
//const userEmail = []   //this also return true
// const userEmail = ""     //false

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} (empty fun)

console.log(false == 0) //true
console.log(false == '') //true
console.log( 0 == '') //true

//to check array length //const userEmail = []  
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//to check is object is empty :
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??)
// worked for null undefined

let val1;
// val1 = 5 ?? 10           // give 5
// val1 = null ?? 10        //give 10
// val1 = undefined ?? 15   //give 15
// val1 = null ?? 10 ?? 20  //give 10
//val1 = null ?? fun1() ?? fun2  //give first value 

//basically use for  this kind of thing 
// val1 = null ?? valuefromsomefun or somewhere 
// Nullish Coalescing Operator (??) will assign null or value 
//to handle null or undefined type of situations
console.log(val1);


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")