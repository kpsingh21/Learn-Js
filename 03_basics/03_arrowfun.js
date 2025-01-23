//Arrow fun and this 
//this will give current context

const user = {
    username: "kp",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${username} , welcome to website without using this`); //when we have to use current context throw error - that username is not defined
        console.log(`${this.username} , welcome to website`); //when we have to use current context
        console.log("this", this); //this will return whole user obj
    }
}
// user.welcomeMessage() 
//user.username = "krishna" //here context is changed basically context is values of variable that they are holding
//user.welcomeMessage() //msg with krishna user wth new this context 
//console.log(this) // {} in node env it refer to empty obj
//but if you run this in browser console it will give you window obj

function knowaboutthis() {
    console.log(this)  //if you check this inside fun we will get more properties/method  like setinterval ,fetch
    //try this.username
    console.log("this.username", this.username)  //undefiend ? this is not present for fun
}
// knowaboutthis()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// Arrow Functions
//syntax   () => {}

const chai = () => {
    let username = "kp"
    console.log(this)//{}
    console.log(this.username); //undefined
}
// chai();



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Different type of arrow fun:
//An implicit arrow function in JavaScript is a function that returns a value without using the return keyword.
// const addTwo = (num1, num2) =>  num1 + num2

// in ( ) we dont need to use return keyword but in {} we need to use the return keyword
// const addTwo = (num1, num2) => ( num1 + num2 )


//use of () syntax
const returnObj = () => {username: "hitesh"}
// returnObj()  it return undefined

//but if add () parentheses 
const returnObj2 = () => ({username: "hitesh"})
console.log(returnObj2())  // {username: "hitesh"}