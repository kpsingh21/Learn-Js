// Object literal : collection of properties and methods

const user = {
    username: "krisha",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username: ${username}`);  // this syntax will through error refrence error 
        console.log(`Username: ${this.username}`); // need refrence of current context so used "this"
        console.log(this);  //this will output full user object
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());


//In global context this is empty {}
// console.log(this);


//Constructor fun
// so this new keyword here is a constructor itself
// it helps to create  multiple instances from one object

// const promiseone = new Promise();
const date = new Date();


// function User(username, loginCount, isLoggedIn) {
//     // username = username;
//     this.username = username;
// }



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  // even if we not return we will get values below
}

//if without new keyword you will do it override values
// const userOne = User("krishna", 12, true);
// const userTwo =  User("ChaiAurCode", 11, false)

//console.log(userOne); // here you will see overide values from userTwo

//that why  new is important

//1. when we use new an empty object {} will create we will call that instance
//2.  constructor function is being called with new keyword
//3  it will provide all the arguments to you 

const userOne = new User("krishna", 12, true);
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);



//constructor

console.log("constructor",userOne.constructor); //[ Function: User]
console.log("instanceof",userOne instanceof User); //true

