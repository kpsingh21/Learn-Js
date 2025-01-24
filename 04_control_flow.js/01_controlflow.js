//Control flow in JS

//if -  if (condition){}
const isUserLoggedIn = true
if (isUserLoggedIn) {
    // do something
}

// if (2 !== "2"){
//     console.log("2"); //2 has (here in negation strict check is not avialble)
// }

//Operator :  <, >, <=, >=, ==, !=, ===, !==

// const temperature = 81

// if ( temperature < 50){
//     console.log("temp less than 50")
// }else{
//     console.log("temp greater than 50")
// }

// const score = 200
// if (score > 100 ){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

//short hand notation  (implict scope)
const balance = 10000
// if (balance >900) console.log("balance is high")  //this is one line  exp
// if (balance >900) console.log("balance is high"), console.log(` ${balance} `); //not recommended syntax


//Nesting

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && and 
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

// || or
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}