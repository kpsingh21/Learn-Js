let score = "33"

// console.log(typeof score); //string
// console.log(typeof(score));


//convert strictly to Number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number

// How it convert

// "33" => 33
// "kp" => NaN
// "33abc" => NaN  // This is also a special type in js and "33abc" can be convert to Number but it will give you NaN

//  true => 1; false => 0

// if let score = null  
// and then we convert it  let valueInNumber = Number(score) it give // 0

// if let score = undefined 
// and then we convert it  let valueInNumber = Number(score) it give you  // NaN


let isLoggedIn = 1
//convert strictly to Boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


//convert strictly to String
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + "2");  //12
// console.log("1" + 2);  //12
// console.log("1" + 2 + 2);  //122

// console.log(1 + "2");    //12
// console.log(1 + 2 + "2"); //32
//https://tc39.es/ecma262/#sec-abstract-operations

//prefer to use () parenthesis in case of doubt 
// console.log( (3 + 4) * 5 % 3);


// console.log(true); //true
// console.log(+true);  //1
// console.log(+"");  //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2


// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let x = 3;
const y = x++;
// console.log(x,y)   x=4 , y=3

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let p = 3;
const q = ++p;
// console.log(p,q)  p=4 , q=4


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion