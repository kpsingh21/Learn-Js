function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

// Object.defineProperty(object, property, descriptor)

// Syntax
// Object.defineProperty(object, property, descriptor)

// Parameters:
// object	Required. The object.
// property	Required. The property name.
// descriptor	Required. A descriptor of the property to be added or changed:

//descriptor:
// writable : true|false
// enumerable : true|false
// configurable : true|false
// get : function
// set : function

// Return Value: 
// Object	The passed object with the changes made.

