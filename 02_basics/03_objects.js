// singleton object
// object created by constructor is singleton in nature and it have obly one object of that type 
// syntax:   Object.create  //this syntax is basically code constructor


//define symbol
const mySym = Symbol("key1")

// object literals
const myobj ={} //syntax

const JsUser = {
    name: "Hitesh",  //basically this key will treat like  string ex: "name"
    "full name": "Hitesh Choudhary",  //this is also a kind of syntax
    [mySym]: "mykey1",   //to give any symbol as a key  [mysym] //syntax
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //Dot syntax
// console.log(JsUser["email"]) //[] syntax here string needed
// console.log(JsUser["full name"]) //if you explicity mention key in string then only there is [] syntax available
// console.log(JsUser[mySym]) //syntax to get value of key here key is symbol

//to assign new value to any key of obj
JsUser.email = "kp@chatgpt.com"

//freeze : after this you are not able to change and property of obj 
// Object.freeze(JsUser)
JsUser.email = "kp@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

//if have to refernce the same object we can use "this"
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());