// In JavaScript, the `call` method allows you to explicitly invoke a function with a specified `this` value and individual arguments.
//call is used to hold reference

function SetUsername(username) {
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {

    // SetUsername(username); is called, but once its execution completes, its execution context is removed from the call stack, so the variable is not retained.

    SetUsername.call(this, username)

    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // { email : chai@fb.com , password: '123'} //but here we are not getting  username