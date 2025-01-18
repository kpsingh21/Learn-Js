//in js string concatenation is done by +
const name = "kp"
const repoCount = 3
// console.log(name + repoCount + "  on github")  // kp3 on github
//the above synatx is very basic and old syntax nobody is using it 

// the newer syntax is ``
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//other way to declare string is  
// the  new keyword help us to use objects
const myName = new String('kpsingh-chouhan')
//this syntax will distribute this string in key value pair
// console.log(myName[0])//k

//Different methoods of string:

// console.log(myName.__proto__); //{}
// console.log(myName.length);//2
// console.log(myName.toUpperCase());// KP and rember it doesn't change your original string remind from the concept of  stack and heap memory from primitive data type
// console.log(myName.charAt(1))// p
// console.log(myName.indexOf('p'));//1

const newString = myName.substring(0,5)
// console.log(newString)//kpsin


const url = "https://kp.com/kp%20chouhan"
console.log(url.replace('%20','-')); //kp-chouhan

console.log(url.includes('google')); // false it checks that word is present in string or not

console.log(url.split('/'));






