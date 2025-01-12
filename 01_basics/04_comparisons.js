// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// The reason is that an euality check == and Comparisons > < >= <= work diffrently
console.log(null > 0); //false
//comparisons convert null to number treating it as 0.That why
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

//strict check 
//  ==== equal checks value and DataType both

console.log("2" == 2); //true
console.log("2" === 2); //false