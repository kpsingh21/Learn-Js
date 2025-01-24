//How does js execute code and who call Stack execute

//js execution context
// call stack how fun goes to memory and how it works

//browser and other js run env (node , deno) have execution different
// the value of this in browser is window while in node env it is {}

//js work on single thread

//js execution context
//1.  Global execution context -is kept in this
//2. functional execution context
//3. Eval execution context


//js execution context will work in two phases
//1. Memory creation phase
//2. Execution phase

//lets understand by example

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

//1. Global execution -> this
//2. memeory Phase :
// val1 -> undefiend
// val2 -> undefiend
// addNum -> fun defination
// result1 -> undefined
// result2 -> undefined
// Execution phase:
// val1 -> 10
// val2 -> 5
// addNUm ---- now create a new execution context  and it further create new variable env + execution thread

//how many time the fun inour code the two phases memeory phase and execution phase will occur
//Memory phase:
// val1 -> undefiend
// val2 -> undefiend
// total -> undefiend

//Execution context:
// num1 -> 10
// num2 -> 5 
// total -> 15 //the total will now return to global execution context
// now the functional execution context will delete also


//  Call Stack

//method will go inside call stack execte and then exit

//for if you called method inside method then LIFO - (last in first out) will occur
