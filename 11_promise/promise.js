// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we

// Basically Promise object  came in ES6 ,earlier like basic  async await or there are libraries like Q or BlueBird now it is integrated in JS
//Promises also reduce callback Hell


//way to create promises 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //ex DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // this the way to connect promise and their consumption
    }, 1000)
})


//way of consuming promises
promiseOne.then(function(){
    console.log("Promise consumed");
})


//Syntax 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


//synatx 3:with passing data
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){ //here the user is nothing but we are referring to the object that 
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //false    just for understanding purpose
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//we dont have option to store it in variable to take returns 
promiseFour
 .then((user) => {
    console.log(user);
    return user.username   // where we will get this return results? not possible - so this can be done by concept called chaining the value returning from the above .then and can be retrive in next .then 
}).then((username) => {     //so here username is refrence to the return of above .then i.e user.username
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))